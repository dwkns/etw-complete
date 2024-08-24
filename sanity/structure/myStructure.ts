import { BiBed , BiListUl, BiSolidCoffee} from "react-icons/bi";
import type { StructureResolver } from 'sanity/structure'

import {createClient} from '@sanity/client'



export const myStructure: StructureResolver = (S, context) => {
    // console.log(context) // returns { currentUser, dataset, projectId, schema, getClient, documentStore }

    // const ids =  client.fetch(`*[_type == 'idea']._id`)
    // const a = S.listItem()
    return S.list().title('Site Content').items([

        ...S.documentTypeListItems().filter(
            (listItem) => !['siteData', 'roomFeatures','rooms'].includes(listItem.getId()!)
          ),
        
          S.listItem()
          .title('All Rooms')
          .child(
            /* Create a list of all posts */
            S.documentList()
              .title('All rooms')
              .filter('_type == "rooms"')
          ),



        
        S.listItem().title('Rooms').icon(BiBed)
          .child(
            S.list()
               .id('roomsList')
                .items([
                    S.documentTypeListItem('rooms').title('Rooms'),
                    S.divider(), 
                    S.documentTypeListItem('roomFeatures').title('Room Features'),
                    
                ])
            )
          ,

          
           

    
          
       
          
  

        

        S.listItem()
            .id('siteData')
            .schemaType('siteData')
            .title('Site Settings')
            .child(
                S.editor()
                    .id('siteData')
                    .schemaType('siteData')
                    .documentId('siteData')
            )
    ])
}



/*  
// All documents excluding siteData

...S.documentTypeListItems().filter( 
    (item) => item.getId() !== 'siteData',
),

// Divider
S.divider(), 

// Named document
S.documentTypeListItem('siteData').title('Site settings'), 

// Children
S.documentTypeListItem('parentType').title('Parent Title').child(
    S.list()
        .title('Child Items')
        .items([
            S.documentTypeListItem('docType1').title('docType1'),
            S.documentTypeListItem('docType2').title('docType2'),
            S.documentTypeListItem('docType3').title('docType3'),
        ]),
), 

*/ 