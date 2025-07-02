import { Component } from "govuk-frontend";

export class VideoPlayer extends Component {
  /** @access private */
  $video;

  /** @access private */
  $container;

  /** @access private */
  $playButton;

  constructor($video) {
    super($video);
    this.$video = $video;

    // Add video wrapper and custom controls
    this.buildHtml();

    // If the video has already loaded metadata at this point (quite possible
    // if it's a short video), jump straight into seeing  if we want to
    // autoplay it. Otherwise, wait for metadata to load.
    if (this.$video.readyState > 0) {
      this.autoPlayVideo();
    } else {
      this.$video.addEventListener("loadedmetadata", () =>
        this.autoPlayVideo.bind(this),
      );
    }

    this.$video.addEventListener("play", this.updateControlState.bind(this));
    this.$video.addEventListener("pause", this.updateControlState.bind(this));
  }

  /**
   * Create a wrapper around the <video> element and add some custom
   * playback control buttons.
   */
  buildHtml() {
    // Create video container so that we can add custom controls
    const $container = document.createElement("div");
    $container.className = "app-video-player";

    // Wrap video element in container
    this.$video.parentNode.insertBefore($container, this.$video);
    $container.appendChild(this.$video);
    this.$container = $container;

    // Create play/pause button
    const $playButton = document.createElement("button");
    $playButton.type = "button";
    $playButton.className =
      "app-video-player__button app-video-player__button--play";
    $playButton.setAttribute("aria-label", "Play");
    $playButton.setAttribute("aria-pressed", "false");
    $playButton.addEventListener("click", () => {
      // If the video was paused, play it; conversely, pause it
      if (this.$video.paused) {
        this.$video.play();

        // When clicking to play the video, move the focus to the video
        // element itself. This removes focus from the button (allowing it to
        // disappear) whilst keeping it readily accessible by keyboard.
        this.$video.setAttribute("tabindex", "-1");
        this.$video.focus();
        this.$video.removeAttribute("tabindex");
      } else {
        this.$video.pause();
      }

      // Update the button state
      this.updateControlState();
    });
    this.$playButton = $playButton;

    // Insert control button
    this.$container.insertAdjacentElement("beforeend", this.$playButton);

    // Remove default controls from video player
    this.$video.controls = false;
  }

  /**
   * Update the appearance of the pause/play button based on the current state
   */
  updateControlState() {
    if (this.$video.paused) {
      // Change button to playing state
      this.$playButton.classList.add("app-video-player__button--play");
      this.$playButton.classList.remove("app-video-player__button--pause");
      this.$playButton.setAttribute("aria-pressed", "true");
    } else {
      // Change button to paused state
      this.$playButton.classList.add("app-video-player__button--pause");
      this.$playButton.classList.remove("app-video-player__button--play");
      this.$playButton.setAttribute("aria-pressed", "false");
    }
  }

  /**
   * Make some judgement calls on how to handle the video based on metadata
   */
  autoPlayVideo() {
    // Query some user settings to inform whether we want to autoplay or not
    const prefersReducedMotion = matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const prefersLowData = matchMedia("(prefers-reduced-data: reduce)").matches;

    console.log("video", this.$video.duration);

    // If the video is <10 seconds, tell it to loop as a convenience
    if (this.$video.duration < 10) {
      this.$video.loop = true;

      // If the user is fine with motion and data use, autoplay it too
      if (!prefersReducedMotion && !prefersLowData) {
        this.$video.autoplay = true;
        this.$video.play();
      }
    }
  }

  static moduleName = "app-video-player";
}
