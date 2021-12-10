import { readFileSync } from 'fs'
import { join } from 'path'
import { isDev, rootDir } from './env'

/**
 * @see https://webpack.js.org/configuration/dev-server/
 */
export const devServerConfig = {
  http2: true,
  https: {
    key: isDev && readFileSync(join(rootDir, 'certificate', 'key.pem')),
    cert: isDev && readFileSync(join(rootDir, 'certificate', 'cert.pem'))
  },
  port: 3000,
  host: 'local-mod.psychoschool.ru',
  historyApiFallback: true
}
