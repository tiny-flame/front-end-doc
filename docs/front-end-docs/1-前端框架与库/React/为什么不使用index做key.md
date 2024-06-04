## key可以重复嘛？为什么不使用index做key

`为什么react需要fiber&时间分片而vue没有？听听尤大怎么说`  
`多图讲解vue3快速diff算法`  
`多图讲解Vue3的diff算法最长递增子序列实现原理`  
`key可以重复嘛？为什么不使用index做key`  
`详解vue nextTick原理`

# 先有问题再有答案

1. `diff算法中key有什么用`
2. `react或者vue中 key可以重复嘛 重复了会怎样？ 为什么?`
3. `为什么不建议使用index作为key?`

# key有什么用

diff算法中key用于标识当前元素, 目的是`实现节点复用`, 所以key应该是稳定的、唯一的。

需要注意 `节点复用和组件更新`的关系

key是节点复用的前提，相同不一定复用，还有层级和类型的限制。不同一定不复用。

组件依赖项(props|state)发生变化 dom就会被更新。

# 为什么不建议使用index作为key

`无论是react还是vue 当index作为key时 不能有效的实现节点复用 导致性能问题。`

!`截屏2024-03-08 下午7.41.04.png` 如图：

我们的期望是实现n1,n2,n3,n4的dom复用 删除n5并新增n6。然而因为使用index作为key所以会复用所有的dom 但是每个组件的内容实际都是不一致的，所以全部dom都需要做更新处理。因此会有性能问题。

# key重复会有什么问题

### react 示例

```javascript
import React, { useState } from "react";

export default function MyApp() {
  const `textList, changeTextStr] = useState(`1, 2, 3, 4, 4]);

  return (
    <div>
      {textList.map((t) => (
        <div key={t}>{t}</div>
      ))}
      <button
        onClick={() => {
          changeTextStr(`5, 6, 7]);
        }}
      >
        change
      </button>
    </div>
  );
}
```

!`截屏2024-03-08 下午8.19.18.png`

点击change后

!`截屏2024-03-08 下午8.20.35.png`

`为什么会多一个4？`

### 分析

实际上这是因为react的diff算法导致的。

简单介绍下就是 react在做diff时 需要经过以下步骤

1. 遍历新旧两个节点相等时 同时下移指针 当遇到两个节点不一致时跳出循环。
2. 将剩余旧节点的key和对应的节点对象 存储在map中 因为map的key需要唯一 所以相同的key后面的会覆盖前面的 这就导致 实际节点内容为\`1,2,3,4,4. 但是map中存储的只有\`1,2,3,4. 这个4是第二个4.
3. 然后遍历剩余新节点 如果在map中找到 则节点复用 并标记。
4. 如果没有找到说明这个节点需要新增
5. 在遍历map 得到对应的节点 并删除多余的节点 因为map中保留的是key:4 并且是N5节点 所以删除的也是对应的N5节点。

!`截屏2024-03-08 下午8.30.34.png` 所以最后会导致N4节点被留在了dom树中。

需要注意的以上只是diff算法的简单描述 本文不是讲解diff算法 而是在解决key重复引起的问题。

### vue中key重复也会有这个问题嘛？

```xml
xml<script setup>
import { ref } from 'vue'

const list = ref(`1,2,3,4,4])
const btn = () => {
  list.value = `5,6,7]
}

</script>

<template>
  <div v-for="item in list">{{ item }}</div>
  <div @click="btn">点击</div>
</template>

```

!`截屏2024-03-08 下午8.57.09.png`

点击按钮后： !`截屏2024-03-08 下午8.57.25.png` 看起来是可以正常显示的 这又是为什么？

### 分析

与react一样 vue最终的目标也是要做dom复用。所以也需要一个map来标识是否可以复用。只是vue是以新的列表为基础创建一个key&位置的映射表。 !`截屏2024-03-08 下午9.12.57.png` key 5 位于新列表第一项 所以是{5:0} 建立完map后 vue会遍历旧节点数组 如果在map中没找到改节点 说明需要删除。 因此vue可以正确的删除所有节点。