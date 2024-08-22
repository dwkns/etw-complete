import {defineField, defineType} from 'sanity'
import { BiCalendarEvent } from "react-icons/bi";
export const events = defineType({
  name: 'events',
  title: 'Events',
  type: 'document',
  icon: BiCalendarEvent,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})