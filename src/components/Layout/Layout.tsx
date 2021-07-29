import {
  Layout as MakerLayout,
  Header,
  Navbar,
  MobileMenu,
  Content,
  Main,
} from 'maker-ui'

import { Logo } from '../Logo'
import { options } from './options'
import { primaryMenu } from './menus'
import { styles } from '../../styles'

interface LayoutProps {
  children: React.ReactNode
}

/**
 * The `Layout` component wraps your application in a responsive, customizable
 * layout system. You can configure this in `./options`
 * @param children
 */

export const Layout = ({ children }: LayoutProps) => {
  return (
    <MakerLayout options={options} styles={styles}>
      <Header>
        <Navbar logo={<Logo />} menu={primaryMenu} />
        <MobileMenu menu={primaryMenu} />
      </Header>
      <Content>
        <Main>{children}</Main>
      </Content>
    </MakerLayout>
  )
}
