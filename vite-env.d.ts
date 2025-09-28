/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL_API: string;
  readonly VITE_API_KEY: string;
  // outras variáveis...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
