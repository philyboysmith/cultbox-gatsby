import config from '../../config'

export const createLocalLink = url => {
  if (`#` === url) {
    return null
  }
  return url.replace(config.wordPressUrl, ``)
}

export const stripTags = string => string.replace(/(<([^>]+)>)/gi, '')
