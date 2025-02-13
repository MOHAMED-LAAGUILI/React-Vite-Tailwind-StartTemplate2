import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: "autoUpdate",
    manifest: {
      name: "Archivom",
      short_name: "PWA",
      description: "Disposant d’une équipe doté d’une expérience de plus de 30 ans, Archivom est une société d’ingénierie et de services de « Gestion de Contenu d’Entreprise » ou en anglais « Entreprise Content Management », qui opère dans la gestion du patrimoine informationnel des entreprises.",
      theme_color: "#ffffff",
      background_color: "#ffffff",
      display: "standalone",
      icons: [
        {
          src: "/src/assets/images/logo.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/src/assets/images/logo.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      globPatterns: ["**/*.{js,css,html,png,svg}"],
    },
  }),
],
});