import { join } from 'node:path'
import neostandard from 'neostandard'
import { includeIgnoreFile } from '@eslint/compat'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import pluginPromise from 'eslint-plugin-promise'

const gitignorePath = join(import.meta.dirname, '.gitignore')

export default [
  includeIgnoreFile(gitignorePath, 'Imported .gitignore patterns'),
  ...neostandard({
    noStyle: true
  }),
  pluginPromise.configs['flat/recommended'],
  eslintConfigPrettier
]
