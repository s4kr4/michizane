import MarkdownIt from 'markdown-it'

import { TranslateMode } from '.'

const md = new MarkdownIt()

export const translate = (input, translateMode) => {
  const tree = md.parse(input)

  switch (translateMode) {
    case TranslateMode.QIITA_TO_GITHUB:
      for (const token of tree) {
        switch (token.type) {
          case 'inline':
            token.content = token.content.replace(/\n/g, '  \n')
            break
          case 'paragraph_close':
            token.content = '\n\n'
            break
          case 'fence':
            const syntax = token.info.match(/(\w+):/)
            token.content =
              `${token.markup}${syntax ? syntax[1] : ''}\n` +
              token.content +
              `${token.markup}\n`
            break
          default:
            break
        }
      }

      let output = ''
      for (const token of tree) {
        output += token.content
      }

      // Delete trailing white spaces
      output = output.replace(/(\s|\n)+$/g, '')
      return output

    default:
      return input
  }
}
