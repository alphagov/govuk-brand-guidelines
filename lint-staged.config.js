export default {
  '*.js': [
    'npm run lint:js:cli -- --fix',
    'npm run lint:prettier:cli -- --write'
  ],
  '*.scss': [
    'npm run lint:scss -- --fix',
    'npm run lint:prettier:cli -- --write'
  ],
  '*.md': ['npm run lint:prettier:cli -- --write'],
  '*.{yaml,yml}': ['npm run lint:prettier:cli -- --write'],
  '*.svg': ['npm run lint:svg:cli']
}
