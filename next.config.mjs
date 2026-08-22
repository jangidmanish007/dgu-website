import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */

const nextConfig = {
  turbopack: {
    root: __dirname,
  },

  env: {
    VERSION: "1.0.0",
    APP_NAME: "DGU School",
    NEXT_PUBLIC_IMG_PATH: "/",
  },
};

export default nextConfig;
