// @flow
import React from 'react'

import { Header, Page, Layout, Message, Letter } from 'features/generic'

export const ContactLandlordView = () => (
  <Layout vertical>
    <Header />
    <Layout>
      <Page>
        <Message>
          <h1>Contact your landlord</h1>
          <p>
            The very first step you should take to get the problem fixed is to
            ask your landlord (or your landlord’s agent) to fix the problem.
          </p>
          <p>
            You can do this by copying the message below into an email or text
            message, completing the details in the square brackets and then
            sending the email or text message to your landlord (or your
            landlord's agent) today.
          </p>
          <Letter>
            <p>
              Dear{' '}
              <strong>
                [the name of your landlord or your landlord's agent]
              </strong>
              ,
            </p>
            <p>
              I am currently renting the property at{' '}
              <strong>[insert your rental address]</strong>. I wish to inform
              you that{' '}
              <strong>[describe the problem in the rental property]</strong>.
              This problem is affecting my ability to use the property and is
              causing me inconvenience. I would appreciate it if you could
              please fix the problem as soon as possible.
            </p>
            <p>
              Regards,
              <br />
              <strong>[insert your name]</strong>
            </p>
          </Letter>
        </Message>
      </Page>
    </Layout>
  </Layout>
)
