// @flow
import type { Section } from 'types'

import * as Forms from './forms'
import { SURVEY, PERSONAL_DETAILS } from 'questions/generic'

export const REPAIRS_SECTIONS: Array<Section> = [
  {
    name: 'Your details',
    forms: [PERSONAL_DETAILS, Forms.TENANCY_DETAILS],
  },
  {
    name: 'Your rental issue',
    forms: [Forms.DEFECT, Forms.HAS_QUOTE],
  },
  {
    name: 'Your landlord',
    forms: [
      Forms.LANDLORD_COMMS_CHECK,
      Forms.LANDLORD_COMMS_DETAILS,
      Forms.LANDLORD_CONTACT,
    ],
  },
  {
    name: 'Your preferences',
    forms: [Forms.PERSONAL_PREFERENCES, SURVEY],
  },
]
