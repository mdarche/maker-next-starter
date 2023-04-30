import { Layout, LayoutProvider, MakerUIOptions } from 'maker-ui'
import { ColorButton } from 'maker-ui/layout'
import { primaryMenu } from './menus'
import { defaultMetadata } from './metadata'
import { Logo } from '@/components'

import '@maker-ui/forms/dist/index.css'
import '@maker-ui/notifications/dist/index.css'
import '@maker-ui/layout/dist/index.css'
import '@/styles/styles.scss'

export const metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LayoutProvider options={options}>
          <Layout options={options}>
            <Layout.Header
              logo={<Logo />}
              menu={primaryMenu}
              widgets={<ColorButton />}
              menuButton={{ defaultIcon: 'menu' }}
            />
            <Layout.MobileMenu
              closeButton={{ defaultIcon: 'close' }}
              menu={primaryMenu}
            />
            <Layout.Main>{children}</Layout.Main>
            <Layout.Footer>Footer</Layout.Footer>
          </Layout>
        </LayoutProvider>
      </body>
    </html>
  )
}

const options: MakerUIOptions = {
  colorThemes: ['light', 'dark', 'system'],
  layout: 'content',
  topbar: {
    sticky: false,
    stickyOnMobile: false,
    hideOnMobile: true,
  },
  header: {
    navType: 'basic',
    navTypeMobile: 'basic',
    sticky: true,
    stickyOnMobile: true,
  },
  mobileMenu: {
    transition: 'slide-right',
  },
}
