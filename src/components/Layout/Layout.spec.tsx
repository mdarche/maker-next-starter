import * as React from 'react'
import { mount } from '@cypress/react'
import { Layout } from './Layout'

it('Renders page component', () => {
  mount(<Layout>test</Layout>)
  cy.contains('Welcome to Next.js')
})
