import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { myStructure } from "./structure/myStructure.js"


  // // Define the actions that should be available for singleton documents
  // const singletonActions = new Set(["publish", "discardChanges", "restore"])

  // // Define the singleton document types
  // const singletonTypes = new Set(["settings"])

export default defineConfig({

  name: 'default',
  title: 'etw-complete',

  projectId: 'tfo5uqav',
  dataset: 'production',

  
  // remove the 
  document: {
    // newDocumentOptions: (prev, { currentUser, creationContext }) => {
    //   const { type, schemaType } = creationContext;
    //   // Hide the Create button at the structure level for a specific schema type
    //   if (type === 'structure' && schemaType == 'rooms') {
    //     return [];
    //   }
    //   // Remove specific document type from the global create menu
    //   if (type === 'global') {
    //     return prev.filter((template) => template.templateId !== 'rooms');
    //   }
    //   return prev;
    // },
  },




  plugins: [ 
    structureTool( {
      structure: myStructure
    }), 
  visionTool()

      
  ],

  schema: {
    types: schemaTypes,
  },
  
})
