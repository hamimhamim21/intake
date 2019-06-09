// @flow
import { rules } from 'utils'
import { FIELD_TYPES } from 'consts'
import { VIEWS } from 'routes'
import * as Fields from './fields'
import type { Form } from 'types'

export const DEFECT: Form = {
  name: 'DEFECT',
  prompt: "What's wrong?",
  fields: [Fields.DEFECT_TYPE, Fields.DEFECT_DESCRIPTION, Fields.DEFECT_PHOTO],
  rules: {},
}

export const HAS_QUOTE: Form = {
  name: 'HAS_QUOTE',
  prompt: 'Repair quote',
  fields: [Fields.HAS_QUOTE],
  rules: {},
}

export const QUOTE_COST: Form = {
  name: 'QUOTE_COST',
  prompt: 'Repair quote',
  when: data => data['HAS_QUOTE'] === 'yes',
  fields: [Fields.QUOTE_COST],
  rules: {},
}

export const LANDLORD_COMMS_CHECK: Form = {
  name: 'LANDLORD_COMMS_CHECK',
  prompt: 'Your communications with your landlord',
  fields: [Fields.HAS_CONTACTED_LANDLORD],
  rules: {},
  getRedirect: data =>
    data['HAS_CONTACTED_LANDLORD'] === 'no' ? 'ContactLandlordView' : null,
}

export const LANDLORD_COMMS_DETAILS: Form = {
  name: 'LANDLORD_COMMS_DETAILS',
  prompt: "Your landlord's contact details",
  fields: [
    Fields.LANDLORD_CONTACT_METHOD,
    Fields.LANDLORD_CONTACT_DATE,
    Fields.LANDLORD_CONTACT_ATTEMPTS,
    Fields.LANDLORD_CONTACT_RECORDS,
    Fields.LANDLORD_HAS_AGENT,
    Fields.LANDLORD_CONTACT_DETAILS,
  ],
  rules: {},
}

export const PERSONAL_DETAILS: Form = {
  name: 'PERSONAL_DETAILS',
  prompt: 'Your contact details',
  fields: [Fields.CLIENT_CONTACT_DETAILS],
  rules: {},
}

export const PERSONAL_PREFERENCES: Form = {
  name: 'PERSONAL_PREFERENCES',
  prompt: 'Tell us what you prefer',
  fields: [
    Fields.LETTER_PERMISSION,
    Fields.CLIENT_CONTACT_METHOD,
    Fields.CLIENT_REFERRAL,
  ],
  rules: {},
}
