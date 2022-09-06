export const getContainer = (selector?: string | Element): Element => {
  let result = null

  if (selector !== undefined) {
    if (typeof selector === 'string') {
      result = document.querySelector(selector)
    } else {
      result = selector
    }
  }

  return result ?? document.body
}

export const useIcon = (el: HTMLElement, name: string, font: string = 'md') => {
  let target = el.querySelector(`[data-icon]`)

  if (target) {
    for (let i = target.attributes.length - 1; i > -1; i--) {
      const name = target.attributes[i].name
      if (/data-icon-.*/.test(name)) {
        target.toggleAttribute(name, false)
      }
    }
  } else {
    target = document.createElement('span')
    target.toggleAttribute('data-icon', true)
    el.prepend(target)
  }

  if (typeof name === 'string') {
    target.setAttribute(`data-icon-${font}`, name)
  }
}

export const useLegend = (
  el: HTMLElement,
  payload: string | I18nRecord,
  tag: string = 'span'
) => {
  el.querySelector(`[data-legend]`)?.remove()

  const target = document.createElement(tag)
  target.setAttribute('data-legend', '')
  el.append(target)

  switch (typeof payload) {
    case 'object': {
      Object.entries(payload).forEach(([key, value]) => {
        if (typeof value === 'string') {
          target.setAttribute(`data-i18n-${key}`, value)
        } else {
          console.warn(new Error(`[DATIVE] Invalid value of [${key}] as i18n`))
        }
      })
      break
    }
    case 'string': {
      target.textContent = payload
      break
    }
    default: {
      console.warn(new Error(`[DATIVE] Invalid value as legend`))
    }
  }
}
