import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([



      S.listItem()
        .title('Page Settings')
        .child(
          S.list()
            .title('Page Settings')
            .items([

              S.listItem()
                .title('General')
                .child(
                  S.document()
                    .schemaType('generalSettings')
                    .documentId('generalSettings')
                ),
              S.listItem()
                .title('Home Page')
                .child(
                  S.document()
                    .schemaType('homePage')
                    .documentId('homePage')
                ),


              S.listItem()
                .title('Baba Page')
                .child(
                  S.document()
                    .schemaType('babaPage')
                    .documentId('babaPage')
                ),


              S.listItem()
                .title('Chi Siamo Page')
                .child(
                  S.document()
                    .schemaType('chiSiamoPage')
                    .documentId('chiSiamoPage')
                ),



              S.listItem()
                .title('Materie Prime Page')
                .child(
                  S.document()
                    .schemaType('materiePrimePage')
                    .documentId('materiePrimePage')
                ),


            ])
        ),

      S.listItem()
        .title('Products')
        .child(
          S.list()
            .title('Products')
            .items([
              ...S.documentTypeListItems().filter(listItem => listItem.getId() == 'product')
            ])
        ),

      S.listItem()
        .title('Categories')
        .child(
          S.list()
            .title('Categories')
            .items([
              ...S.documentTypeListItems().filter(listItem => listItem.getId() == 'category')
            ])
        ),


    ])