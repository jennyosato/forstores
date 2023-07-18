import { defineField, defineType } from "sanity";

export default defineType({
 name: "review",
 title: "Review", 
 type: "document",
 fields: [
    defineField({
    name: 'user',
    type: 'string',
   }),
   defineField({
    name: 'text',
    type: 'string',
   }),
   defineField({
    name: 'rating',
    type: 'number',
   }),
   defineField({
    name: 'product',
    type: 'reference',
    to: {type: 'product' && 'deals'}
   })

]
})