# Binding 接口一览

> [!NOTE]
> 社区开发者们为 MaaFramework 贡献了多种语言的接口，你可以使用自己熟悉的语言与 MaaFramework 进行集成。

## 支持语言

::: details C++

- 接口情况：
  - [x] 全功能可用
  - [x] 提供 sample
  - [ ] CI 单元测试
  - [ ] 标准化接口
  - [ ] 协议解析封装
- [接口源码](https://github.com/MaaXYZ/MaaFramework/tree/main/include) | [下载地址](https://github.com/MaaXYZ/MaaFramework/releases) | [集成示例](https://github.com/MaaXYZ/MaaFramework/blob/main/sample/cpp) | [单元测试](https://github.com/MaaXYZ/MaaFramework/tree/main/test)

:::

::: details Python

- 接口情况：
  - [x] 全功能可用
  - [x] 提供 sample
  - [x] CI 单元测试
  - [x] 标准化接口
  - [x] 协议解析封装
- [接口源码](https://github.com/MaaXYZ/MaaFramework/tree/main/source/binding/Python) | [下载地址](https://pypi.org/project/MaaFw/) | [集成示例](https://github.com/MaaXYZ/MaaFramework/tree/main/sample/python) | [单元测试](https://github.com/MaaXYZ/MaaFramework/tree/main/test/python)

:::

::: details Golang

- 接口情况：
  - [x] 全功能可用
  - [x] 提供 sample
  - [x] CI 单元测试
  - [x] 标准化接口
  - [ ] 协议解析封装
- [仓库地址](https://github.com/MaaXYZ/maa-framework-go) | [集成示例](https://github.com/MaaXYZ/maa-framework-go/tree/main/examples) | [单元测试](https://github.com/MaaXYZ/maa-framework-go/tree/main/test)

:::

::: details NodeJS

- 接口情况：
  - [x] 全功能可用
  - [x] 提供 sample
  - [x] CI 单元测试
  - [x] 标准化接口
  - [x] 协议解析封装
- [接口源码](./NodeJS/J1.1-快速开始.md) | [文档](./NodeJS/J1.1-快速开始.md) | [下载地址](https://npmjs.com/@maaxyz/maa-node) | [集成示例](https://github.com/MaaXYZ/MaaFramework/tree/main/sample/nodejs) | [单元测试](https://github.com/MaaXYZ/MaaFramework/tree/main/test/nodejs)

:::

::: details Java

- 接口情况：
  - [x] 全功能可用
  - [x] 提供 sample
  - [x] CI 单元测试
  - [x] 标准化接口
  - [ ] 协议解析封装
- [仓库地址](https://github.com/hanhuoer/maa-framework-java) | [下载地址](https://central.sonatype.com/namespace/io.github.hanhuoer) | [集成示例](https://github.com/hanhuoer/maa-framework-java/blob/main/maa-sample/README.md) | [单元测试](https://github.com/hanhuoer/maa-framework-java/blob/main/maa-core/src/test)

:::

::: details CSharp

- 接口情况：
  - [x] 全功能可用
  - [x] 提供 sample
  - [x] CI 单元测试
  - [x] 标准化接口
    - 回调封装：NotificationCallback 包装为 Callback 事件，其他包装为接口
  - [x] 协议解析封装
    - 通过 Binding.Extensions 库部分支持
- [仓库地址](https://github.com/MaaXYZ/MaaFramework.Binding.CSharp) | [下载地址](https://www.nuget.org/packages/Maa.Framework) | [集成示例](https://github.com/MaaXYZ/MaaFramework.Binding.CSharp/tree/main/sample) | [单元测试](https://github.com/MaaXYZ/MaaFramework.Binding.CSharp/tree/main/src/MaaFramework.Binding.UnitTests)

:::

## 还有更多

各语言支持离不开协作者的贡献！若您也想为 MaaFramework 新增某一门语言的接口，请参考 [标准化接口设计](../framework/4.2-StandardizedInterfaceDesign.md)，并向我们提出 PR！
