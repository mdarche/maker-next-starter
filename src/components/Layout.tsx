import {
  Layout as MakerLayout,
  Header,
  Navbar,
  MobileMenu,
  Content,
  Main,
} from 'maker-ui'

import { Logo } from './Logo'
import { options } from '../config/options'
import { primaryMenu } from '../config/menus'
import { styles } from '../styles/global'

interface LayoutProps {
  children: React.ReactNode
}

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
