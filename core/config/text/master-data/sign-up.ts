import { config } from '../';
import { REGEX_PASSWORD } from '../../../utils/regex';

export default {
  firstStep: [
    {
      section: 'personalInformation',
      fields: [
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
          property: 'personalEmail'
        }
      ]
    },
    {
      section: 'workInformation',
      fields: [
        {
          type: 'text',
          property: 'company'
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
        }
      ]
    }
  ],
  secondStep: [
    {
      section: 'credentials',
      fields: [
        {
          type: 'text',
          property: 'username',
          isReadOnly: true
        },
        {
          type: 'password',
          property: 'password',
          pattern: (message: string) => ({
            value: REGEX_PASSWORD,
            message
          })
        },
        {
          type: 'password',
          property: 'confirmPassword',
          validation: (value: string, temporalPassword: string) =>
            value === temporalPassword ||
            config.text.resetPassword.form.passwordsDontMatch
        }
      ]
    }
  ]
};
