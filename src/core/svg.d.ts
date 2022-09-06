declare interface GraphicOption {
  setup(el: Element): void
  tag?: keyof SVGElementTagNameMap
  text?: string
}