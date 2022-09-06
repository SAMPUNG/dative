import { NestedElement } from './nested'

export class Alink extends NestedElement {
  declare readonly el: HTMLAnchorElement
  constructor(option?: PrimitivePayload) {
    super('a', option)
  }
}

export class Button extends NestedElement {
  declare readonly el: HTMLButtonElement
  constructor(option?: PrimitivePayload) {
    super('button', option)
  }
}

export class Division extends NestedElement {
  declare readonly el: HTMLDivElement
  constructor(option?: PrimitivePayload) {
    super('div', option)
  }
}

export class List extends NestedElement {
  declare readonly el: HTMLUListElement

  constructor(option?: PrimitivePayload, source?: ElementSource[]) {
    const children: NestedElement[] = []

    source?.forEach((record) => {
      const item = new ListItem()
        .setDataset({ 'list-item': record.name })
        .useIcon(record?.icon)
        .useLegend(record?.i18n ?? record?.legend ?? record.name)
      children.push(item)
    })

    super('ul', option)
    this.append(...children)
  }
}

export class ListItem extends NestedElement {
  declare readonly el: HTMLLIElement
  constructor(option?: PrimitivePayload) {
    super('li', option)
  }
}

export class Para extends NestedElement {
  declare readonly el: HTMLParagraphElement
  constructor(option?: PrimitivePayload) {
    super('p', option)
  }
}

export class Span extends NestedElement {
  declare readonly el: HTMLSpanElement
  constructor(option?: PrimitivePayload) {
    super('span', option)
  }
}
