/// <reference path="./svg.d.ts" />

export const dative = (option: GraphicOption): Element => {
  const el = nominative(option.tag ?? 'svg')

  if (option.text) {
    el.textContent = option.text
  }

  option.setup(el)

  return el
}

export const nominative = (tag: keyof SVGElementTagNameMap): SVGElement => document.createElementNS('http://www.w3.org/2000/svg', tag)
