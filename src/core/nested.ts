import {
  setAttr,
  setData,
  setDataset,
  setText,
  useIcon,
  useLegend,
} from '@/utils'

export class NestedElement {
  declare readonly el: HTMLElement

  get dataset() {
    return this.el.dataset
  }

  get id() {
    return this.el.id
  }

  get text() {
    return this.el.textContent
  }

  constructor(tag: NestedElementTag, attrs?: PrimitivePayload) {
    const code = Math.floor(Math.random() * 99999999).toString(16)

    this.el = document.createElement(tag)
    this.el.id = `${tag}-${code}`

    this.setAttrs(attrs)
  }

  after(...payload: ElementRecord[]) {
    payload.forEach((item) => {
      this.el.after(item.el)
    })
    return this
  }

  append(...payload: ElementRecord[]) {
    payload.forEach((item) => {
      this.el.append(item.el)
    })
    return this
  }

  before(...payload: ElementRecord[]) {
    payload.forEach((item) => {
      this.el.before(item.el)
    })
    return this
  }

  mount(el: Element | string) {
    const target = typeof el === 'string' ? document.querySelector(el) : el
    target?.append(this.el)
    return this
  }

  off(name: EventName, handler: EventHandler) {
    this.el.removeEventListener(name, handler)
    return this
  }

  on(name: EventName, handler: EventHandler) {
    this.el.addEventListener(name, handler)
    return this
  }

  prepend(...payload: ElementRecord[]) {
    payload.forEach((item) => {
      this.el.prepend(item.el)
    })
    return this
  }

  setAttr(key: string, value: unknown) {
    setAttr(this.el, key, value)
    return this
  }

  setAttrs(payload: PrimitivePayload = {}) {
    Object.entries(payload).forEach(([key, value]) => {
      setAttr(this.el, key, value)
    })

    return this
  }

  setData(key: string, value: unknown) {
    setData(this.el, key, value)
    return this
  }

  setDataset(payload: unknown) {
    setDataset(this.el, payload)
    return this
  }

  setText(value: unknown) {
    setText(this.el, value)
    return this
  }

  useIcon(name?: string, font: string = 'md') {
    if (name) {
      useIcon(this.el, name, font)
    }
    return this
  }

  useLegend(payload: string | I18nRecord, tag: string = 'span') {
    useLegend(this.el, payload, tag)
    return this
  }
}
