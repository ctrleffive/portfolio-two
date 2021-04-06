import S from '@sanity/desk-tool/structure-builder'
import {MdBookmark, MdSettings} from 'react-icons/md'

const hiddenDocTypes = listItem =>
  !['blog', 'settings', 'resume'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.document()
            .schemaType('settings')
            .documentId('settings')
        )
        .icon(MdSettings),
      S.listItem()
        .title('Résumé')
        .child(
          S.document()
            .schemaType('resume')
            .documentId('resume')
        )
        .icon(MdBookmark),
      S.listItem()
        .title('Blog')
        .schemaType('blog')
        .child(S.documentTypeList('blog').title('Blog')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
