import { Rule as RuleType } from '@sanity/types';

export default {
    name: 'car',
    title: "Cars",
    type: "document",
    fields: [
        {name: "name",type: "string",title: "Name", validation: (Rule: RuleType) => Rule.required()},//
        {name: 'slug',title: 'Product Slug',type: 'slug',options: {source: 'name',}},
        {name: 'carType',title: 'Car Type',type: 'string'},
        {name: 'brand',title: 'Brand',type: 'string'},
        {name: 'description',title: 'Description of a Car',type: 'text'},
        {name: 'images',title: 'Car Images',type: 'array',of: [{type: 'image'}]},
        {name: 'rent',title: 'Rent of Car',type: 'number'},
        {name: 'previousRent',title: 'Previous Rent of Car',type: 'number'},
        {name: 'gasoline',title: 'Gasoline',type: 'string'},
        {name: 'steering',title: 'Steering',type: 'string'},
        {name: 'personCapacity',title: 'Person Capacity',type: 'string'},
        {name: 'tags',title: 'Tags',type: 'string', description: 'Select or create tags for this product.',},
        {name:'rating',type:'number',title:'Rating',description: 'The average rating for the product (out of 5).',validation: (Rule:RuleType) => Rule.min(0).max(5),},
        {name: 'ratingCount',type: 'number',title: 'Rating Count',description: 'The total number of ratings received.',validation: (Rule:RuleType) => Rule.min(0),},
         // New field to determine if the car is available for rent:
        { name: 'isAvailable', title: 'Available for Rent', type: 'boolean', initialValue: true, description: 'Automatically updated based on rental order status.' },
    ]
}

