export const zhNav = [
  { text: "主页", link: "/" },
  {
    text: "文档",
    items: [
      {
        text: "应用开发",
        link: "/application/1.1-QuickStarted",
        activeMatch: "/application/",
      },
      { text: "Binding 接口", link: "/binding", activeMatch: "/binding/" },
      {
        text: "框架开发",
        link: "/framework/4.1-BuildGuide",
        activeMatch: "/framework/",
      },
    ],
  },
  {
    text: "社区",
    activeMatch: "/community/",
    items: [
      { text: "社区项目", link: "/community/projects" },
      {
        text: "友情链接",
        items: [{ text: "MaaAssistantArknights", link: "https://maa.plus" }],
      },
    ],
  },
];

export const enNav = [
  { text: "Home", link: "/en" },
  {
    text: "Docs",
    items: [
      {
        text: "Application Dev",
        link: "/en/application/1.1-QuickStarted",
        activeMatch: "/en/application/",
      },
      { text: "Binding", link: "/en/binding", activeMatch: "/en/binding/" },
      {
        text: "Framework Dev",
        link: "/en/framework/4.1-BuildGuide",
        activeMatch: "/en/framework/",
      },
    ],
  },
  {
    text: "Community",
    activeMatch: "/en/community/",
    items: [
      {
        text: "Projects",
        link: "/en/community/projects",
      },
      {
        text: "Links",
        items: [{ text: "MaaAssistantArknights", link: "https://maa.plus" }],
      },
    ],
  },
];
