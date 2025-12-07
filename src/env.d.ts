/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, unknown>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_PWA_NAME: string
  readonly VITE_PWA_THEME_COLOR: string
  readonly VITE_PWA_ICON_SRC: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
