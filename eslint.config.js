import neostandard from 'neostandard'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import pluginPromise from 'eslint-plugin-promise'

export default [
  ...neostandard({
    noStyle: true
  }),
  pluginPromise.configs['flat/recommended'],
  eslintConfigPrettier
]
