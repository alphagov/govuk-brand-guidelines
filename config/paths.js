import { join, resolve } from 'node:path'

// Repository root directory
const rootPath = resolve(import.meta.dirname, '../')

/**
 * Config paths
 */
export default {
  root: rootPath,

  // Source code directory
  source: join(rootPath, 'src'),

  // Output directory
  output: join(rootPath, '_site')
}
