// @scripts
import { REGEX_EMAIL } from '../../../utils/regex';

export default [
  {
    type: 'text',
    property: 'firstName'
  },
  {
    type: 'text',
    property: 'lastName'
  },
  {
    type: 'text',
    property: 'personalEmail',
    pattern: (message: string) => ({
      value: REGEX_EMAIL,
      message
    })
  },
  {
    type: 'text',
    property: 'company'
  },
  {
    type: 'text',
    property: 'workEmail',
    pattern: (message: string) => ({
      value: REGEX_EMAIL,
      message
    })
  },
  {
    type: 'text',
    property: 'team'
  },
  {
    type: 'text',
    property: 'role'
  },
  {
    type: 'date',
    property: 'createdAt'
  },
  {
    type: 'text',
    property: 'username'
  }
];
