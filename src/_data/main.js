import {createClient} from '@sanity/client'

const projectId = 'tfo5uqav'
const dataset = 'production'
const apiToken = 'skdmjFRESCvQNdci4foq0Jzgy7QeE085npQJE7nXhlTZcw116jI73zgmbtMaZfG3NgRuUFkEiPSsGlQB4ooedHutvItKEgTPw7l04pgh1Fby6tYqfBIbSLq0KROQe5YrNeHZUytQPK8L0ahhC5gx8kGlH1GBWgxlp6Scr1HceTC3B2Htttwl'
const apiVersion ='2024-08-01'

// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

const client = createClient({
  projectId:projectId,
  dataset: dataset,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: apiVersion, // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})


export default await client.fetch(`*[_type == "event"]{ name }`)  