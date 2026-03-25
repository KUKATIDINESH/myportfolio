/// <reference types="vite/client" />

declare module '*.pdf' {
  const pdfAsset: string;
  export default pdfAsset;
}
