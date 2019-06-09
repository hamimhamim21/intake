// @flow
import React from 'react'
import { Button } from 'antd'

import { Header, Page, Layout, Message } from 'components'
import { NamedLink, VIEWS } from 'routes'

export const HomeView = () => (
  <Layout vertical>
    <Header />
    <Layout>
      <Page>
        <Message>
          <h1>Welcome to Anika</h1>
          <p>
            Anika is a registered charity that provides legal advice to members
            of the public. Our legal advice helpful for two key reasons:
          </p>
          <ul>
            <li>
              It's all online, so you don’t need to leave the comfort of your
              home.
            </li>
            <li>It's 100% free: you don’t need to pay us anything.</li>
          </ul>
          <h2>Here's how it works</h2>
          <p>
            So you need something in your rental property to be fixed? In order
            for us to help you get it fixed, we need you to first complete our
            questionnaire.
          </p>
          <NamedLink to={VIEWS.FormView} params={{ formId: '0' }}>
            <Button type="primary">Get started</Button>
          </NamedLink>
        </Message>
      </Page>
    </Layout>
  </Layout>
)
