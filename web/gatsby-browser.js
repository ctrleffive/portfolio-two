/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import './src/assets/css/bootstrap.css'
import './src/assets/css/base.css'

export const onServiceWorkerUpdateReady = () => {
  window.location.reload()
}
