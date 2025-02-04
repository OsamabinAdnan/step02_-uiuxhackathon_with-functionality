// schemas/comment.ts
import { Rule as RuleType } from '@sanity/types';

export default {
  name: 'comments',
  title: 'Comments',
  type: 'document',
  fields: [
    {
      name: 'car',
      title: 'Car',
      type: 'reference',
      to: [{ type: 'car' }], // Assuming you have a "car" schema
      validation: (Rule: RuleType) => Rule.required(),
    },
    {
      name: 'name',
      title: 'Name of Person',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required().min(3).max(50),
    },
    {
      name: 'designation',
      title: 'Designation',
      type: 'string',
      validation: (Rule: RuleType) => Rule.optional().max(100),
    },
    {
      name: 'comment',
      title: 'Comment',
      type: 'text',
      validation: (Rule: RuleType) => Rule.required().min(10).max(500),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: (Rule: RuleType) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule: RuleType) => Rule.required().min(1).max(5),
      description: 'Rating between 1 and 5 stars',
    },
    {
      name: 'image', // New field for the image
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Allows the user to crop the image
      },
      validation: (Rule: RuleType) => Rule.optional(), // Image is optional
    },
  ],
};
