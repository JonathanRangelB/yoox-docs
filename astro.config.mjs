// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Documentación de YOOX",
      locales: {
        root: {
          label: "Español",
          lang: "es-MX",
        },
      },
      social: [
        {
          icon: "external",
          label: "Aplicación",
          href: "https://www.yooxgrupofinanciero.com/",
        },
      ],
      sidebar: [
        {
          label: "Acciones generales",
          autogenerate: { directory: "acciones-generales" },
          badge: "Web",
        },
        {
          label: "Solicitudes de Credito",
          autogenerate: { directory: "solicituddecredito" },
          badge: "Web",
        },
      ],
    }),
  ],
});
