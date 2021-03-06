// @flow
// https://github.com/storybooks/storybook/tree/master/addons/knobs
import React, { useState } from 'react'
import styled from 'styled-components'

import { storiesOf } from '@storybook/react'

import { TestBox } from './utils'
import { LoadingSpinner } from '../comps'

export const stories = storiesOf('Loading', module)

stories.add('Loading Spinner', () => <LoadingSpinner />)
