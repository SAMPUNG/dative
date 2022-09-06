/// <reference types="vite/client" />

declare module '*.html?raw' {
  const template: string
  export default template
}

declare module '*.css?raw' {
  const style: string
  export default style
}
