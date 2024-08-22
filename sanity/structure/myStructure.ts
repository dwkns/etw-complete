
import type { StructureResolver } from 'sanity/structure'

export const myStructure: StructureResolver = (S, context) => {
    console.log(context) // returns { currentUser, dataset, projectId, schema, getClient, documentStore }
    return S.list().title('Site Content').items([

        ...S.documentTypeListItems().filter( 
            (item) => item.getId() !== 'siteData',
        ),

        S.divider(), 

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