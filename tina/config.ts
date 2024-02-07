import { defineConfig } from "tinacms";

const branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "media",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "navigation",
        label: "Navigace",
        format: "json",
        path: "data",
        ui: {
          allowedActions: { delete: false, create: false },
        },
        fields: [
          {
            type: "object",
            name: "items",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item.title }),
            },
            fields: [
              {
                name: "title",
                label: "Název",
                type: "string",
                required: true,
              },
              {
                name: "link",
                label: "Odkaz",
                type: "reference",
                collections: ["pages"],
                required: true,
              },
            ],
          },
        ],
      },
      {
        name: "pages",
        label: "Stránky",
        path: "content/pages",
        templates: [
          {
            name: "page",
            label: "Textová stránka",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Název",
                isTitle: true,
                required: true,
              },
              {
                type: "rich-text",
                name: "text",
                label: "Text",
              },
            ],
          },
          {
            name: "team",
            label: "Tým",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Název",
                isTitle: true,
                required: true,
              },
              {
                type: "object",
                name: "teams",
                label: "Týmy",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item.name }),
                },
                fields: [
                  {
                    type: "string",
                    name: "name",
                    label: "Název",
                  },
                  {
                    type: "object",
                    name: "members",
                    label: "Členové",
                    list: true,
                    ui: {
                      itemProps: (item) => ({ label: item.name }),
                    },
                    fields: [
                      {
                        type: "string",
                        name: "name",
                        label: "Jméno",
                        required: true,
                      },
                      {
                        type: "rich-text",
                        name: "text",
                        label: "Popis",
                      },
                      {
                        type: "image",
                        name: "image",
                        label: "Fotka",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
