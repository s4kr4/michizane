import MarkdownIt from 'markdown-it'

import { TranslateMode } from '.'

const md = new MarkdownIt()
const TAG_TYPE = {
  HEADING: 'HEADING',
  LIST_ITEM: 'LIST_ITEM',
}

export const translate = (input, translateMode) => {
  const tree = md.parse(input)

  switch (translateMode) {
    case TranslateMode.QIITA_TO_GITHUB:
      let output = ''
      let tagStack = []

      for (const token of tree) {
        const tagType = tagStack.pop()
        switch (token.type) {
          case 'inline':
            switch (tagType) {
              case TAG_TYPE.HEADING:
                output += `${token.content}\n\n`
                break
              case TAG_TYPE.LIST_ITEM:
                output += `${token.content}\n`
                break
              default:
                output += token.content.replace(/\n/g, '  \n')
                break
            }
            break
          case 'paragraph_close':
            output += '\n\n'
            break
          case 'fence':
            const syntax = token.info.match(/(\w+):/)
            output +=
              `${token.markup}${syntax ? syntax[1] : ''}\n` +
              token.content +
              `${token.markup}\n`
            break
          case 'heading_open':
            output += `${token.markup} `
            tagStack.push(TAG_TYPE.HEADING)
            break
          case 'list_item_open':
            output += `${token.markup} `
            tagStack.push(TAG_TYPE.LIST_ITEM)
            break
          default:
            break
        }
      }

      // Delete trailing white spaces
      output = output.replace(/(\s|\n)+$/g, '')
      return output

    default:
      return input
  }
}
