import S from '@sanity/desk-tool/structure-builder'
import {MdApps, MdBookmark, MdBrush, MdList, MdSettings} from 'react-icons/md'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .icon(MdSettings)
        .title('Settings')
        .child(
          S.document()
            .schemaType('settings')
            .documentId('settings')
        ),
      S.listItem()
        .icon(MdBookmark)
        .title('Résumé')
        .child(
          S.document()
            .schemaType('resume')
            .documentId('resume')
        ),
      S.listItem()
        .icon(MdBrush)
        .title('Work')
        .child(
          S.list()
            .title('Work')
            .items([
              S.listItem()
                .icon(MdBrush)
                .title('All Work')
                .schemaType('work')
                .child(S.documentTypeList('work').title('All Work')),
              S.listItem()
                .icon(MdList)
                .title('Categories')
                .schemaType('workCategory')
                .child(S.documentTypeList('workCategory').title('Work Category'))
            ])
        ),
      S.listItem()
        .icon(MdApps)
        .title('Uses')
        .child(
          S.list()
            .title('Uses')
            .items([
              S.listItem()
                .icon(MdApps)
                .title('All Uses')
                .schemaType('uses')
                .child(S.documentTypeList('uses').title('All Uses')),
              S.listItem()
                .icon(MdList)
                .title('Categories')
                .schemaType('usesCategory')
                .child(S.documentTypeList('usesCategory').title('Uses Category'))
            ])
        )
    ])
