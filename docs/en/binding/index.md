# Bindings

> [!NOTE]
> 社区开发者们为 MaaFramework 贡献了多种语言的接口，你可以使用自己熟悉的语言与 MaaFramework 进行集成。

## Support Languages

::: details C++

- Interface Status:
  - [x] Full functionality available
  - [x] Sample provided
  - [x] Unit Testing via CI
  - [ ] Standardized interface
  - [ ] Protocol parsing encapsulation
- [Source](https://github.com/MaaXYZ/MaaFramework/tree/main/include) | [Download](https://github.com/MaaXYZ/MaaFramework/releases) | [Sample](https://github.com/MaaXYZ/MaaFramework/blob/main/sample/cpp) | [Unit Testing](https://github.com/MaaXYZ/MaaFramework/tree/main/test)

:::

::: details Python

- Interface Status:
  - [x] Full functionality available
  - [x] Sample provided
  - [x] Unit Testing via CI
  - [x] Standardized interface
  - [x] Protocol parsing encapsulation
- [Source](https://github.com/MaaXYZ/MaaFramework/tree/main/source/binding/Python) | [Download](https://pypi.org/project/MaaFw/) | [Sample](https://github.com/MaaXYZ/MaaFramework/tree/main/sample/python) | [Unit Testing](https://github.com/MaaXYZ/MaaFramework/tree/main/test/python)

:::

::: details Golang

- Interface Status:
  - [x] Full functionality available
  - [x] Sample provided
  - [x] Unit Testing via CI
  - [x] Standardized interface
  - [ ] Protocol parsing encapsulation
- [Repository](https://github.com/MaaXYZ/maa-framework-go) | [Sample](https://github.com/MaaXYZ/maa-framework-go/tree/main/examples) | [Unit Testing](https://github.com/MaaXYZ/maa-framework-go/tree/main/test)

:::

::: details NodeJS

- Interface Status:
  - [x] Full functionality available
  - [x] Sample provided
  - [x] Unit Testing via CI
  - [x] Standardized interface
  - [x] Protocol parsing encapsulation
- [Source](../binding/NodeJS/J1.1-快速开始.md) | [Document](../binding/NodeJS/J1.1-快速开始.md) | [Download](https://npmjs.com/@maaxyz/maa-node) | [Sample](https://github.com/MaaXYZ/MaaFramework/tree/main/sample/nodejs) | [Unit Testing](https://github.com/MaaXYZ/MaaFramework/tree/main/test/nodejs)

:::

::: details Java

- Interface Status:
  - [x] Full functionality available
  - [x] Sample provided
  - [x] Unit Testing via CI
  - [x] Standardized interface
  - [ ] Protocol parsing encapsulation
- [Repository](https://github.com/hanhuoer/maa-framework-java) | [Download](https://central.sonatype.com/namespace/io.github.hanhuoer) | [Sample](https://github.com/hanhuoer/maa-framework-java/blob/main/maa-sample/README.md) | [Unit Testing](https://github.com/hanhuoer/maa-framework-java/blob/main/maa-core/src/test)

:::

::: details CSharp

- Interface Status：
  - [x] Full functionality available
  - [x] Sample provided
  - [x] Unit Testing via CI
  - [x] Standardized interface
    - Callback Packaging: NotificationCallback is wrapped as a event named Callback, others are wrapped as interfaces.
  - [ ] Protocol parsing encapsulation
    - Partially supported via the Binding.Extensions library
- [Repository](https://github.com/MaaXYZ/MaaFramework.Binding.CSharp) | [Download](https://www.nuget.org/packages/Maa.Framework) | [Sample](https://github.com/MaaXYZ/MaaFramework.Binding.CSharp/tree/main/sample) | [Unit Testing](https://github.com/MaaXYZ/MaaFramework.Binding.CSharp/tree/main/src/MaaFramework.Binding.UnitTests)

:::

## And More

Language support is inseparable from the contributions of collaborators! If you also want to add an interface of a certain language to MaaFramework, please refer to [Standardized Interface Design](../framework/4.2-StandardizedInterfaceDesign.md) and submit a PR to us!
