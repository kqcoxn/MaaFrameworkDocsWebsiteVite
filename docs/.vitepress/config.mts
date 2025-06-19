import { defineConfig } from "vitepress";
import { locales } from "./locales";

export default defineConfig({
  title: "MaaFramework",
  description: "基于图像识别的自动化黑盒测试框架",
  lang: "zh-cn",
  head: [["link", { rel: "icon", href: "/maafw.png" }]],
  locales,
  themeConfig: {
    logo: "/maafw.png",
    socialLinks: [
      { icon: "github", link: "https://github.com/MaaXYZ/MaaFramework" },
    ],
  },
});
