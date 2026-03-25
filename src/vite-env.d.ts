/// <reference types="vite/client" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare module '*.module.css' {
  const content: { [key: string]: string }
  export default content
}
