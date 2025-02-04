// schemas/user.ts
import { Rule as RuleType } from '@sanity/types';

export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'clerkUserId',
      title: 'Clerk User ID',
      type: 'string',
      description: 'The unique identifier provided by Clerk',
      validation: (Rule: RuleType) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required().email(),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Full name of the user',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          { title: 'Admin', value: 'admin' },
          { title: 'Finance Manager', value: 'finance' },
          { title: 'Cars Manager', value: 'cars' },
          { title: 'Customer', value: 'customer' },
        ],
        layout: 'radio', // or 'dropdown'
      },
      // New users default to customer
      initialValue: 'customer',
      validation: (Rule: RuleType) => Rule.required(),
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
      },
      initialValue: () => new Date().toISOString(),
    },
    // ... other fields as needed
  ],
};
