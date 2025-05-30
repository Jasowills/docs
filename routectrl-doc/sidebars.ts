import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "doc",
      id: "Introduction", // ← refers to docs/index.mdx
      label: "Introduction",
    },
    {
      type: "category",
      label: "RouteCTRL B2B Portal",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Tutorials",
          items: [
            { type: "autogenerated", dirName: "routectrl-b2b/tutorials" },
          ],
        },
        {
          type: "category",
          label: "Feature Guides",
          link: { type: "doc", id: "routectrl-b2b/feature-guides/index" },
          items: [
            { type: "autogenerated", dirName: "routectrl-b2b/feature-guides" },
          ],
        },
        {
          type: "category",
          label: "Training Videos",
          link: { type: "doc", id: "routectrl-b2b/training-videos/index" },
          items: [
            { type: "autogenerated", dirName: "routectrl-b2b/training-videos" },
          ],
        },
        {
          type: "category",
          label: "Release Notes",
          link: {
            type: "doc",
            id: "routectrl-b2b/release-notes/RouteCTRL-for-Dynamics-365-SCM-4.5.1.2025021612",
          },
          items: [
            { type: "autogenerated", dirName: "routectrl-b2b/release-notes" },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "RouteCTRL B2C Portal",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Tutorials",
          items: [
            { type: "autogenerated", dirName: "routectrl-b2c/tutorials" },
          ],
        },
        {
          type: "category",
          label: "Feature Guides",
          link: { type: "doc", id: "routectrl-b2c/feature-guides/index" },
          items: [
            { type: "autogenerated", dirName: "routectrl-b2c/feature-guides" },
          ],
        },
        {
          type: "category",
          label: "Training Videos",
          link: { type: "doc", id: "routectrl-b2c/training-videos/index" },
          items: [
            { type: "autogenerated", dirName: "routectrl-b2c/training-videos" },
          ],
        },
        {
          type: "category",
          label: "Release Notes",
          link: { type: "doc", id: "routectrl-b2c/release-notes/index" },
          items: [
            { type: "autogenerated", dirName: "routectrl-b2c/release-notes" },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "RouteCTRL Driver App",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Tutorials",
          items: [{ type: "autogenerated", dirName: "routectrl-da/tutorials" }],
        },
        {
          type: "category",
          label: "Feature Guides",
          link: { type: "doc", id: "routectrl-da/feature-guides/index" },
          items: [
            { type: "autogenerated", dirName: "routectrl-da/feature-guides" },
          ],
        },
        {
          type: "category",
          label: "Training Videos",
          link: { type: "doc", id: "routectrl-da/training-videos/index" },
          items: [
            { type: "autogenerated", dirName: "routectrl-da/training-videos" },
          ],
        },
        {
          type: "category",
          label: "Release Notes",
          link: { type: "doc", id: "routectrl-da/release-notes/index" },
          items: [
            { type: "autogenerated", dirName: "routectrl-da/release-notes" },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "RouteCTRL Dynamics BC",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Tutorials",
          items: [
            { type: "autogenerated", dirName: "routectrl-dyn-bc/tutorials" },
          ],
        },
        {
          type: "category",
          label: "Feature Guides",
          link: { type: "doc", id: "routectrl-dyn-bc/feature-guides/index" },
          items: [
            {
              type: "autogenerated",
              dirName: "routectrl-dyn-bc/feature-guides",
            },
          ],
        },
        {
          type: "category",
          label: "Training Videos",
          link: { type: "doc", id: "routectrl-dyn-bc/training-videos/index" },
          items: [
            {
              type: "autogenerated",
              dirName: "routectrl-dyn-bc/training-videos",
            },
          ],
        },
        {
          type: "category",
          label: "Release Notes",
          link: { type: "doc", id: "routectrl-dyn-bc/release-notes/index" },
          items: [
            {
              type: "autogenerated",
              dirName: "routectrl-dyn-bc/release-notes",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "RouteCTRL Dynamics FSCM",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Tutorials",
          items: [
            { type: "autogenerated", dirName: "routectrl-dyn-fscm/tutorials" },
          ],
        },
        {
          type: "category",
          label: "Feature Guides",
          link: { type: "doc", id: "routectrl-dyn-fscm/feature-guides/index" },
          items: [
            {
              type: "autogenerated",
              dirName: "routectrl-dyn-fscm/feature-guides",
            },
          ],
        },
        {
          type: "category",
          label: "Training Videos",
          link: { type: "doc", id: "routectrl-dyn-fscm/training-videos/index" },
          items: [
            {
              type: "autogenerated",
              dirName: "routectrl-dyn-fscm/training-videos",
            },
          ],
        },
        {
          type: "category",
          label: "Release Notes",
          link: { type: "doc", id: "routectrl-dyn-fscm/release-notes/index" },
          items: [
            {
              type: "autogenerated",
              dirName: "routectrl-dyn-fscm/release-notes",
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
3