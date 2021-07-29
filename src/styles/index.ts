/**
 * Import and combine all custom styles
 */

import { layout_styles } from './_layout'
import { global_styles } from './_global'

export const styles = {
  ...global_styles,
  ...layout_styles,
}
