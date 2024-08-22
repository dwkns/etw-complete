import {defineField, defineType} from 'sanity'

export const roomFeatures = defineType({
  name: 'roomFeatures',
  title: 'Room Features',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      description:"some description",
      type: 'string',
    }),
    defineField({
        name: 'description',
        type: 'string',
      }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description'
    }
  }
})