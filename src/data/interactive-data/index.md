---
order: 4
title: Interactive data
landing: false
lead: Dashboards can help show several different views of data together.
---

## Dashboards

A dashboard is a visual tool that shows different views of data to provide an overview of a specific topic. A dashboard is usually a combination of several charts and important values. A dashboard usually updates automatically on a regular basis, so a user can monitor it over time.

### When to use a dashboard

Use a dashboard when:

- communicating high-level indicators, not detailed insights
- the topic is high priority with users likely to have prior knowledge
- the data updates frequently and users revisit often
- data can be updated automatically with minimal maintenance

Ensure you have clear justification based on your users’ needs.

### Disadvantages of dashboards

Dashboards have drawbacks and are best used for high-level data. They often:

- do not highlight key findings, leaving interpretation to users
- struggle with data needing extensive explanation
- can quickly become outdated as user needs change
- require frequent maintenance for updates
- are challenging to make accessible on different devices

For complex insights, use multiple charts in a single publication or try [scrollytelling](https://digitalblog.ons.gov.uk/2021/06/02/how-we-build-scrollytelling-articles/) to change focus as users scroll.

### Accessibility

It is important to make your dashboard as accessible as possible for your users. If content is not available in an accessible form (such as through a screen reader) many users will not get the information they need from your service.

[The Department for Education](https://accessibility.education.gov.uk/app/how-many-people/1000000) has a useful tool to help you find out how many of people might have a disability or impairment who could use your service.In the UK, all content on public sector external websites and intranets must legally meet the level A and AA success criteria in the [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/). All dashboards must meet these criteria.

Dashboards must be [perceivable, operable, understandable, and robust](https://www.w3.org/WAI/WCAG22/Understanding/intro#understanding-the-four-principles-of-accessibility), with all users being able to:

- change colours, contrast levels and fonts using browser or device settings
- zoom in up to 400% without the text spilling off the screen
- navigate most of the website using a keyboard or speech recognition software
- listen to most of the website using a screen reader (including the most recent versions of JAWS, NVDA and VoiceOver)

### Design

If your dashboard is on a GOV.UK domain, you must use:

- the GOV.UK Brand data guidance for all charts and tables
- the GOV.UK Design System for all other components and patterns

If your dashboard is not on a GOV.UK domain, you must use the [data visualisation guidance](https://analysisfunction.civilservice.gov.uk/policy-store/?keyword&area=data-visualisation&doctype&submit=Go) published by The Analysis Function Central Team.

## Creating interactive visualisations

An interactive visualisation allows the user to change what the chart shows.

### When to use interactive visualisations

Only consider using an interactive visualisation where the most important information for the user cannot be clearly shown through a non-interactive chart.

Use interactive visualisations when:

- users are likely to be most interested in personalising their data such as seeing data about their local authority
- there is not a clear way of displaying data without interactivity
- there are several interests or narratives across different locations or categories

### Disadvantages of interactive visualisations

Interactive visualisation need the user to make a selection to see information. This may:

- make it more difficult for users to get messages
- hide the main messages from users

Interactive visualisations are also more complex and time consuming to produce. There may not always be enough resource to create an interactive chart.

If an interactive visual is not suitable, use [charts](/data/charts-overview/) that highlight the main points of interest or findings without needing user input. Consider using several small charts, known as small multiples, to avoid using too many categories in a single visualisation.

### Tips

1. A careful hierarchy and structure can help avoid overwhelming users with information.

2. Support both learning and exploration with guidance and concise explanations.

3. Avoid using third-party packages for more control over the user experience (including accessibility and responsive design).

## Useful and related links

Resources from Analysis Function:

- [Data visualisation: dashboard software](https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-dashboard-software/)
- [Data visualisation: building and managing dashboards](https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-building-and-managing-dashboards/)
- [Data visualisation: testing dashboards for design and accessibility](https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-testing-dashboards-for-design-and-accessibility/)

For more information on dashboard design, read:

- [10 rules for better dashboard design](https://uxplanet.org/10-rules-for-better-dashboard-design-ef68189d734c)
