import { TranslateMode } from '.'

export const translate = (input, translateMode) => {
  switch (translateMode) {
    case TranslateMode.QIITA_TO_GITHUB:
      const output = input.replace('\n', '  \n')
      return output

    default:
      return input
  }
}
