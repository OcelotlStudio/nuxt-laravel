import { Options } from './options'
import { moduleKey } from './constants'

const defaults: Options = {
  root: process.cwd(),
  publicDir: 'public',
  server: true,
  swCache: false,
  dotEnvExport: false,
  envFile: '.env',
}

export const swCacheDefaults = {
  name: moduleKey,
  fileName: 'workbox.cache.js',
  endpoint: `/${moduleKey}_cache`,
}

export default defaults
