import { defineField, defineType } from 'sanity'
import { BiBed } from "react-icons/bi";

export const rooms = defineType({
  name: 'rooms',
  title: 'Rooms',
  type: 'document',
  icon: BiBed,
  fields: [
    defineField({
      name: 'name',
      title: 'Room Name',
      type: 'string',
    }),   
     defineField({
      name: 'price',
      title: 'Room Price per night in £',
      type: 'number',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
    }),
    defineField({
      name: 'description',
      title: 'Room description',
      type: 'text',
    }),
    defineField(
      {
        title: 'Room Features',
        name: 'roomFeatures',
        type: 'array',
        of: [{
          type: 'reference', to: [
            { type: 'roomFeatures' }
          ]
        }]
      }),

      defineField({
        name: 'image1',
        title: 'Image 1',
        type: 'image',
      }),
      defineField({
        name: 'image2',
        title: 'image 2',
        type: 'image',
      }),
      defineField({
        name: 'image3',
        title: 'Image 3',
        type: 'image',
      }),
  ],
})


