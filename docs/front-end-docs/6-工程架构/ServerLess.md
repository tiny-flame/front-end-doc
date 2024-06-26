## Serverless

### 什么是Serverless

要说Serverless是什么，直译过来就是无服务器。Serverless 是指构建和运行**不需要管理服务器**的应用程序的概念。

CloudFlare对其定义：

无服务器计算是一种**按需提供后端服务**的方法。无服务器提供程序允许用户编写和部署代码，而不必担心底层基础结构。尽管称为无服务器，但仍使用物理服务器，但开发人员无需了解它们。从无服务器供应商处获得后端服务的公司将根据其计算费用，而不必保留和支付固定数量的带宽或服务器数量，因为该服务是**自动扩展**的。

### 为什么需要 ServerLess

微信小程序出现后，开发者在小程序开发完后，只要去开发者平台点下上传就完成了前端部署，要做的只是部署后端服务。

后端服务运维是一件很麻烦的事情，我们能不能懒一点，把这个后端服务也部署到别人那里，当然有，那就是阿里云，腾讯云。我们要做的只是把我们本地调试好的后台服务部署上去。

但是我们能不能更懒一点，就别去部署了，直接就在别人那里开发前端和后端的应用，我们要做的就是按照别人定的规则来开发前后端应用就好，开发完后直接把两个都上传上去就行了。基于这种想法云开发serverless云端一体化就应运而生了。

其实这种想法大大的降低了前端开发人员进入后端开发的门槛，和前端开发人员中所谓的全栈工程师不谋而合

### ServerLess 的组成

Serverless = Faas (Function as a service) + Baas (Backend as a service)

<!-- ![img](/Users/bytedance/Documents/self/front-end-docs/img/1729cf3b0a40a037.png) -->

###  云函数（Faas）

FaaS（Function-as-a-Service）是服务商提供一个平台、提供给用户开发、运行管理这些函数的功能，而无需搭建和维护基础框架，是一种事件驱动由消息触发的函数服务

<!-- ![img](/Users/bytedance/Documents/self/front-end-docs/img/1-20210413133231936) -->

