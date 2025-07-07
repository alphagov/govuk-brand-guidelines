import { join, resolve } from 'node:path'

/**
 * Repository's root directory
 */
export const root = resolve(import.meta.dirname, '../')

/**
 * Source code directory
 */
export const source = join(root, 'src')

/**
 * Output directory
 */
export const output = join(root, '_site')

/**
 * Directory within the output where the assets are written
 */
export const assetsDirectory = 'assets'

/**
 * Assets output directory
 */
export const outputAssets = join(output, assetsDirectory)
