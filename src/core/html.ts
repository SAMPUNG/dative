/// <reference path="./html.d.ts" />

export const dative = (option: ElementOption): Element => {
  const el = document.createElement(option.tag)

  el.id = option?.id ?? ''

  option.setup(el)

  return el
}

export class Syntax {
  readonly el: HTMLElement

  constructor(tag: keyof HTMLElementTagNameMap) {
    this.el = document.createElement(tag)
  }

  dative(mutation?: Mutation) {
    if (typeof mutation === 'function') {
      mutation(this.el)
    }
    return this.el
  }

  setup(mutation: Mutation) {
    mutation(this.el)
    return this
  }
}

// accusative
export const accusative = (tag: keyof HTMLElementTagNameMap): SyntaxRecord => {
  const el = document.createElement(tag)

  const syntax: SyntaxRecord = {
    dative: () => el,
    setup(callback) {
      callback(el)
      return this
    },
  }

  return syntax
}
