import { defineArrayMember } from "sanity"
export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
        name: 'image',
        title: 'Image',
        type: 'image'
    },
    {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'color',
        title: 'Color',
        type: 'string',
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options:{
          source: 'name',
          maxLength: 200
        }
      },
     
  ],
}
