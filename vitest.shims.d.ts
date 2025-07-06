/// <reference types="@vitest/browser/providers/playwright" />

declare module '*.png' {
  const value: string
  export default value
}
