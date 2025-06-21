---
layout: home

hero:
  name: MaaFramework
  text: 基于图像识别的自动化黑盒测试框架
  tagline: 助力开发者轻松编写出更好的黑盒测试程序
  image:
    src: /maafw.png
    alt: Logo
    width: 260px
  actions:
    - theme: brand
      text: 快速开始
      link: /application/1.1-QuickStarted
    - theme: alt
      text: GitHub
      link: https://github.com/MaaXYZ/MaaFramework

features:
  - title: 简单易用
    details: 通过简单的 JSON 配置即可实现自动化流程，无需编程基础，新手也能快速上手。
    icon: 🚀
  - title: 强大识别
    details: 内置 OCR 文字识别和模板匹配，支持多种识别方式，满足各种场景需求。
    icon: 🔍
  - title: 灵活扩展
    details: 通过 Agent Server 支持自定义识别和动作模块，无缝集成您的业务逻辑。
    icon: 🔧
---

<section class="maa-content">

<h2 class="maa-title">简介</h2>

**MaaFramework** 是基于图像识别技术、运用 [MAA](https://github.com/MaaAssistantArknights/MaaAssistantArknights) 开发经验去芜存菁、完全重写的新一代自动化黑盒测试框架。

低代码的同时仍拥有高扩展性，旨在打造一款丰富、领先、且实用的开源库，助力开发者轻松编写出更好的黑盒测试程序，并推广普及。

<h2 class="maa-title">社区项目</h2>

</section>

<section class="maa-project-list">

<script setup>
import Project from "./components/Project.vue"
import projects from "./assets/data/projects.ts"
</script>

<Project v-for="project in projects" :title="project.name" :desc="project.desc" :logo="project.logo" :stack="project.stack" :link="project.link" />
</section>

<section class="maa-content">

<h2 class="maa-title">生态共建</h2>

MAA 正计划建设为一类项目，而非舟的单一软件。

若您的项目依赖于 MaaFramework ，我们欢迎您将它命名为 MaaXXX, MXA, MAX 等等。当然，这是许可而不是限制，您也可以自由选择其他与 MAA 无关的名字，完全取决于您自己的想法！

同时，我们也非常欢迎您提出 PR ，在上方的社区项目列表中添加上您的项目！

<h2 class="maa-title">声明与许可</h2>

### 开源许可

本项目采用 [`LGPL-3.0`](https://github.com/MaaXYZ/MaaFramework/blob/main/LICENSE.md) 许可证进行开源。

### 分发说明

本项目支持 GPU 加速功能，其在 Windows 平台上依赖于 Microsoft 提供的独立组件 [DirectML](https://learn.microsoft.com/en-us/windows/ai/directml/)。DirectML 并非本项目的开源部分，也不受 LGPL-3.0 的约束。为方便用户，我们随安装包附带了一个未经修改的 DirectML.dll 文件。如果您无需 GPU 加速功能，可安全删除该 DLL 文件，软件的核心功能仍可正常运行。

### 免责声明

#### 预期用途

本项目旨在为软件开发提供**自动化黑盒测试工具**，包括图像识别、界面操作模拟等合法技术场景。开发者应确保其使用方式符合所有适用法律法规及目标软件的服务条款。

#### 禁止滥用

禁止将本项目用于以下用途（包括但不限于）：

- 破坏、绕过或干扰任何软件、游戏、服务的正常功能（如反作弊机制、授权验证系统）。
- 开发或分发违反第三方服务条款的工具（如游戏外挂、作弊器、自动化脚本）。
- 任何侵犯他人合法权益或违反法律的行为（如数据窃取、网络攻击）。

#### 责任豁免

本项目按“原样”提供，作者**不承担**因以下行为导致的任何直接、间接或衍生责任：

- 使用者违反本声明或法律法规的行为。
- 第三方利用本项目开发的工具造成的损害（如账号封禁、法律纠纷）。
- 因使用本项目导致的任何技术或经济损失。

#### 用户义务

使用本项目即表示您同意：

- 自行承担所有使用风险。
- 确保您的应用场景合法，并已获得相关授权（如目标软件厂商的许可）。
- 若您的行为导致法律纠纷，您应独立承担责任并免除本项目作者的一切责任。

<h2 class="maa-title">鸣谢</h2>

### 开源库

- [opencv](https://github.com/opencv/opencv)  
  Open Source Computer Vision Library
- [fastdeploy](https://github.com/PaddlePaddle/FastDeploy)  
  ⚡️An Easy-to-use and Fast Deep Learning Model Deployment Toolkit for ☁️Cloud 📱Mobile and 📹Edge.
- [onnxruntime](https://github.com/microsoft/onnxruntime)  
  ONNX Runtime: cross-platform, high performance ML inferencing and training accelerator
- [boost](https://www.boost.org/)  
  Boost provides free peer-reviewed portable C++ source libraries.
- [libzmq](https://github.com/zeromq/libzmq)  
  ZeroMQ core engine in C++, implements ZMTP/3.1
- [cppzmq](https://github.com/zeromq/cppzmq)  
  Header-only C++ binding for libzmq
- [meojson](https://github.com/MistEO/meojson)  
  ✨ Next-gen C++ JSON/JSON5 Serialization Engine | Zero Dependency | Header-Only | Unleash JSON Potential
- [minitouch](https://github.com/DeviceFarmer/minitouch)  
  Minimal multitouch event producer for Android.
- [maatouch](https://github.com/MaaAssistantArknights/MaaTouch)  
  Android native implementation of minitouch input protocol
- [minicap](https://github.com/DeviceFarmer/minicap)  
  Stream real-time screen capture data out of Android devices.
- [zlib](https://github.com/madler/zlib)  
  A massively spiffy yet delicately unobtrusive compression library.
- [gzip-hpp](https://github.com/mapbox/gzip-hpp)  
  Gzip header-only C++ library
- ~~[protobuf](https://github.com/protocolbuffers/protobuf)~~  
  ~~Protocol Buffers - Google's data interchange format~~
- ~~[grpc](https://github.com/grpc/grpc)~~  
  ~~The C based gRPC (C++, Python, Ruby, Objective-C, PHP, C#)~~
- ~~[thrift](https://github.com/apache/thrift)~~  
  ~~Apache Thrift~~

### 开发者

感谢以下开发者对 MaaFramework 作出的贡献：

[![贡献者](https://contrib.rocks/image?repo=MaaXYZ/MaaFramework&max=1000)](https://github.com/MaaXYZ/MaaFramework/graphs/contributors)

<h2 class="maa-title">讨论</h2>

<div class="maa-center">集成/开发交流 QQ 群: 595990173</div>

<h2 class="maa-title">赞助</h2>

<!-- markdownlint-disable MD045 -->
<a href="https://afdian.com/a/misteo">
  <img width="200" class="maa-center" src="https://pic1.afdiancdn.com/static/img/welcome/button-sponsorme.png">
</a>

</section>
