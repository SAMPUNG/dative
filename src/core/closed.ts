import { setAttr, setData, setDataset } from '@/utils'

export class ClosedElement {
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

  constructor(tag: ClosedElementTag, attrs?: PrimitivePayload) {
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
}
