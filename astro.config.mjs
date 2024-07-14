import { defineConfig } from "astro/config"
import NetlifyCMS from "astro-netlify-cms"

// https://astro.build/config
export default defineConfig({
  integrations: [
    NetlifyCMS({
      config: {
        backend: {
          name: "git-gateway",
          branch: "master",
        },
        logo_url: "https://www.osmangund.tech/logo.svg",
        media_folder: "public/assets/images/blog",
        public_folder: "/assets/images/blog",
        collections: [
          {
            name: "blog",
            label: "Blog",
            folder: "src/content/blog",
            create: true,
            slug: "{{slug}}",
            fields: [
              {
                label: "Etiket",
                name: "slug",
                widget: "string",
                hint: "URL oluştururken kullanılacak. Örneğin: site.com/blog/yazi-etiketi",
              },
              { label: "Başlık", name: "title", widget: "string" },
              { label: "Açıklama", name: "description", widget: "string" },
              { label: "Yazar", name: "author", widget: "string" },
              { label: "Tarih", name: "date", widget: "datetime" },
              {
                label: "Etiketler",
                name: "tags",
                widget: "list",
                default: ["post"],
              },
              { label: "Ana Görsel", name: "image", widget: "image" },
              {
                label: "Görsel Açıklaması",
                name: "imageAlt",
                widget: "string",
              },
              { label: "Gönderi", name: "body", widget: "markdown" },
            ],
          },
        ],
      },
    }),
  ],
})
