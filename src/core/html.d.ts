declare interface ElementOption {
  dataset?: PrimitivePayload,
  icon?: string
  id?: string
  legend?: I18nRecord | string
  setup(el: Element): void
  tag: keyof HTMLElementTagNameMap
}

declare type Mutation = (el: Element) => void

declare interface SyntaxRecord {
  dative(): Element
  setup(Mutation): Syntax
}