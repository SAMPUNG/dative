export const setAttr = (el: Element, key: string, value: unknown) => {
  switch (typeof value) {
    case 'boolean': {
      el.toggleAttribute(key, value)
      break
    }
    case 'number': {
      el.setAttribute(key, value.toString())
      break
    }
    case 'string': {
      el.setAttribute(key, value)
      break
    }
    default: {
      el.toggleAttribute(key)
      console.warn(
        new Error(`[DATIVE] Invalid value for [${key}] as attribute`)
      )
    }
  }
}

export const setData = (el: HTMLElement, key: string, value: unknown) => {
  switch (typeof value) {
    case 'boolean': {
      el.toggleAttribute(`data-${key}`, value)
      break
    }
    case 'number': {
      el.setAttribute(`data-${key}`, value.toString())
      break
    }
    case 'string': {
      if (key === 'role') {
        el.toggleAttribute(`data-${value}`, true)
      } else {
        el.setAttribute(`data-${key}`, value)
      }
      break
    }
    default: {
      el.toggleAttribute(`data-${key}`)
      console.warn(new Error(`[DATIVE] Invalid value for [${key}] as dataset`))
    }
  }
}

export const setDataset = (el: HTMLElement, payload: unknown) => {
  switch (typeof payload) {
    case 'object': {
      if (payload === null) {
        break
      }
      Object.entries(payload).forEach(([key, value]) => {
        setData(el, key, value)
      })
      break
    }
    case 'string': {
      setData(el, payload, true)
      break
    }
    default: {
      console.warn(new Error(`[DATIVE] Invalid value as dataset`))
    }
  }
}

export const setText = (el: HTMLElement, value: unknown) => {
  switch (typeof value) {
    case 'boolean': {
      el.textContent = value ? 'TRUE' : 'FALSE'
      break
    }
    case 'number': {
      el.textContent = value.toString()
      break
    }
    case 'string': {
      el.textContent = value
      break
    }
    default: {
      console.warn(new Error(`[DATIVE] Invalid value as text`))
    }
  }
}
