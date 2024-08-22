import {defineField, defineType} from 'sanity'
import { BiCog } from "react-icons/bi";

export const siteData = defineType({
  name: 'siteData',
  title: 'Site Data',
  type: 'document',
  icon: BiCog,
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
    }),
    defineField({
      name: 'productionURL',
      title: 'Production URL',
      type: 'string',
    }),
    defineField({
      name: 'stagingURL',
      title: 'Staging URL',
      type: 'string',
    }),
  ],
})