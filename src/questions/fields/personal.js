// @flow
import { FIELD_TYPES } from 'consts'
import { rules } from 'utils'
import type { Field, Form } from 'types'

export const LETTER_PERMISSION: Field = {
  rules: [rules.isTruthy],
  name: 'LETTER_PERMISSION',
  prompt:
    'If a letter needs to be sent to your landlord, would you prefer Anika to sign and send that letter to you landlord or would you prefer Anika to prepare the letter for you to personally sign and send to landlord?',
  help:
    'Letters sent from Anika will place more pressure on the landlord because they will notify the landlord that you have engaged legal advisors to act for you. Letters that are sent personally by you to the landlord will be more "gentle" because legal advisors are not involved.',
  type: FIELD_TYPES.RADIO,
  options: [
    {
      label:
        'I would prefer Anika to sign and send any letters to my landlord.',
      value: 'anika',
    },
    {
      label:
        'I would prefer Anika to prepare the letters, but I wanto to personally sign and send them to my landlord',
      value: 'personal',
    },
  ],
}

export const CLIENT_NAME: Field = {
  rules: [rules.isTruthy],
  name: 'CLIENT_NAME',
  label: 'Full name',
  type: FIELD_TYPES.TEXT,
  placeholder: 'Full name',
}

export const CLIENT_ADDRESS: Field = {
  rules: [rules.isTruthy],
  name: 'CLIENT_RENTAL_ADDRESS',
  label: 'Address',
  type: FIELD_TYPES.TEXT,
  placeholder: 'Your rental address',
}

export const CLIENT_EMAIL: Field = {
  rules: [rules.isTruthy],
  name: 'CLIENT_EMAIL',
  label: 'Email',
  type: FIELD_TYPES.TEXT,
  placeholder: 'Email address',
}

export const CLIENT_BUSINESS_PHONE: Field = {
  rules: [rules.isTruthy],
  name: 'CLIENT_BUSINESS_PHONE',
  label: 'Phone (Day)',
  type: FIELD_TYPES.TEXT,
  placeholder: 'Phone number (business hours)',
}

export const CLIENT_EVENING_PHONE: Field = {
  rules: [rules.isTruthy],
  name: 'CLIENT_EVENING_PHONE',
  type: FIELD_TYPES.TEXT,
  label: 'Phone (Evening)',
  placeholder: 'Phone number (outside business hours)',
}

export const CLIENT_CONTACT_DETAILS: Field = {
  rules: [rules.isTruthy],
  name: 'CLIENT_CONTACT_DETAILS',
  prompt: 'Please provide your contact details.',
  type: FIELD_TYPES.FIELD_GROUP,
  fields: [
    CLIENT_NAME,
    CLIENT_ADDRESS,
    CLIENT_EMAIL,
    CLIENT_BUSINESS_PHONE,
    CLIENT_EVENING_PHONE,
  ],
}

export const CLIENT_CONTACT_METHOD: Field = {
  rules: [rules.isTruthy],
  name: 'CLIENT_CONTACT_METHOD',
  prompt: 'How would you like to be contacted?',
  type: FIELD_TYPES.RADIO,
  options: [
    { label: 'Phone', value: 'phone' },
    { label: 'Email', value: 'email' },
  ],
}

export const CLIENT_REFERRAL: Field = {
  rules: [],
  name: 'CLIENT_REFERRAL',
  type: FIELD_TYPES.TEXTAREA,
  prompt: 'How did you hear about Anika?',
}
