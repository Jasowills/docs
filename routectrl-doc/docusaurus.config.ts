import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const logoPath = "/img/logo.svg";
const darkLogoPath = "/img/Frame.svg";

const config: Config = {
  title: "RouteCTRL Docs",
  tagline:
    "RouteCTRL is an advanced yet easy-to-use transportation management platform embedded within Microsoft Dynamics 365 ERP",
  favicon: "img/favicon.ico",
  url: "https://your-docusaurus-site.example.com",
  baseUrl: "/",
  trailingSlash: true,
  organizationName: "facebook",
  projectName: "docusaurus",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
         
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "",
      logo: {
        alt: "My Site Logo",
        src: logoPath,
        srcDark: darkLogoPath,
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        {
          href: "https://marklite.com/",
          label: "Marklite",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/Introduction/",
            },
          ],
        },
        {
          title: "Socials",
          items: [
            {
              label: "LinkedIn",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "YouTube",
              href: "https://www.youtube.com/@marklite-australia",
            },
            {
              label: "X",
              href: "https://x.com/MarkliteHQ",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "https://marklite.com/resources/",
            },
            {
              label: "Website",
              href: "https://marklite.com/",
     
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} RouteCTRL, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
