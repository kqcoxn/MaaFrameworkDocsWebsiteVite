// import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import { locales } from "./locales";

const ghPagesRouteBase = "MaaFrameworkDocsWebsiteVite";

export default withMermaid({
  title: "MaaFramework",
  description: "基于图像识别的自动化黑盒测试框架",
  lang: "zh-cn",
  head: [["link", { rel: "icon", href: `/${ghPagesRouteBase}/maafw.png` }]],
  base: `/${ghPagesRouteBase}/`,
  locales,
  themeConfig: {
    logo: "/maafw.png",
    socialLinks: [
      { icon: "github", link: "https://github.com/MaaXYZ/MaaFramework" },
    ],
  },
  mermaid: {},
});
