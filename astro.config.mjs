// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Documentación de YOOX",
      social: [
        {
          icon: "external",
          label: "Aplicación",
          href: "https://www.yooxgrupofinanciero.com/",
        },
      ],
      sidebar: [
        {
          label: "Solicitudes de Credito",
          autogenerate: { directory: "solicituddecredito" },
        },
      ],
    }),
  ],
});
