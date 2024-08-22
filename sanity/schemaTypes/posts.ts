import {defineField, defineType} from 'sanity'

export const posts = defineType({
  name: 'posts',
  title: 'Posts',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})