import {defineField, defineType} from 'sanity'
import { BiBed , BiListUl, BiSolidCoffee} from "react-icons/bi";

export const roomFeatures = defineType({
  name: 'roomFeatures',
  title: 'Room Features',
  type: 'document',
  icon: BiSolidCoffee,
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