import MarkdownIt from 'markdown-it'

import { TranslateMode } from '.'

const md = new MarkdownIt()

export const translate = (input, translateMode) => {
  const tree = md.parse(input)

  switch (translateMode) {
    case TranslateMode.QIITA_TO_GITHUB:
      let output = ''
      for (const token of tree) {
        switch (token.type) {
          case 'inline':
            output += token.content.replace(/\n/g, '  \n')
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
