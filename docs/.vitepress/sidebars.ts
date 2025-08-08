import { generateSidebar } from "vitepress-sidebar";
import { VitePressSidebarOptions } from "vitepress-sidebar/types";

export function genSidebar(args: VitePressSidebarOptions = {}) {
  return generateSidebar({
    documentRootPath: "/docs",
    ...args,
  });
}

function processRewritesRecursion(routes, originLang: string, targetLang = "") {
  const rewrites = {};
  routes.forEach((route) => {
    let link = route.link;

    if (!route.link) {
      const recursionRewrites = processRewritesRecursion(
        route.items,
        originLang,
        targetLang
      );
      Object.assign(rewrites, recursionRewrites);
      return;
    }

    if (link.startsWith(`${originLang}/maafw/`)) {
      link = link.substring(originLang.length + 1);
    }

    rewrites[`${targetLang}${targetLang == "" ? "" : "/"}${link}`] =
      "/" + targetLang;
  });
  return rewrites;
}

function processRoutes(routes) {
  routes.forEach((route) => {
    if (route["items"]) {
      processRoutes(route["items"]);
    }
    let texts = route["text"].split("-");
    if (texts.length > 1) {
      route["text"] = texts[1].trim();
    }
  });
}

function getLocaleSidebars() {
  // 生成侧边栏
  let zn_routes = genSidebar({ scanStartPath: "/maafw" });
  let en_routes = genSidebar({ scanStartPath: "/en/maafw" });
  const routesList = [
    [zn_routes, ""],
    [en_routes, "en"],
  ];

  // 生成国际化跳转路径
  const rewrites = {};
  const langs = ["", "en"];
  routesList.forEach((routes) => {
    const [routeData, lang] = routes;
    langs.forEach((sourceLang) => {
      langs.forEach((targetLang) => {
        if (lang == targetLang || sourceLang == targetLang) return;
        const rw = processRewritesRecursion(routeData, sourceLang, targetLang);
        Object.assign(rewrites, rw);
      });
    });
  });
  processRoutes(zn_routes);
  processRoutes(en_routes);
  return {
    zh: zn_routes,
    en: en_routes,
    rewrites,
  };
}

export const sidebars = getLocaleSidebars();

export const zhSidebar = [
  {
    text: "应用开发",
    items: [
      { text: "快速开始", link: "/application/1.1-QuickStarted" },
      { text: "术语", link: "/application/1.2-ExplanationOfTerms" },
      { text: "回调协议", link: "/application/2.1-CallbackProtocol" },
      {
        text: "任务流水线（Pipeline）协议",
        link: "/application/3.1-PipelineProtocol",
      },
      {
        text: "Project Interface 协议",
        link: "/application/3.2-ProjectInterface",
      },
    ],
  },
  {
    text: "Binding接口",
    link: "/binding",
    items: [
      {
        text: "NodeJS",
        link: "/binding/NodeJS/J1.1-快速开始",
      },
    ],
  },
  {
    text: "框架开发",
    items: [
      { text: "构建指南", link: "/framework/4.1-BuildGuide" },
      {
        text: "标准化高级语言面向对象接口设计指南",
        link: "/framework/4.2-StandardizedInterfaceDesign",
      },
    ],
  },
];

export const enSidebar = [
  {
    text: "Application Dev",
    items: [
      { text: "Quick Start", link: "/en/application/1.1-QuickStarted" },
      { text: "Terms", link: "/en/application/1.2-ExplanationOfTerms" },
      {
        text: "Callback Protocol",
        link: "/en/application/2.1-CallbackProtocol",
      },
      {
        text: "Pipeline Protocol",
        link: "/en/application/3.1-PipelineProtocol",
      },
      {
        text: "Project Interface",
        link: "/en/application/3.2-ProjectInterface",
      },
    ],
  },
  {
    text: "Binding Interface",
    link: "/en/binding",
    items: [
      {
        text: "NodeJS",
        items: [
          { text: "Getting Started", link: "/en/binding/NodeJS/J1.1-快速开始" },
          {
            text: "Custom Recognition and Action",
            link: "/en/binding/NodeJS/J1.2-自定义识别_操作",
          },
          { text: "Packaging", link: "/en/binding/NodeJS/J1.3-打包" },
        ],
      },
    ],
  },
  {
    text: "Framework Dev",
    items: [
      { text: "How to Build", link: "/en/framework/4.1-BuildGuide" },
      {
        text: "Standardized High-Level Language Object-Oriented Interface Design",
        link: "/en/framework/4.2-StandardizedInterfaceDesign",
      },
    ],
  },
];
