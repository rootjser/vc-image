# 用法

vue2 全局图片缓存组件，一次加载图片，全局缓存

安装

```
npm i @jser6/vc-image
```

注册

```
import Vue from 'vue'
import vcImage from '@jser6/vc-image'
Vue.use(vcImage)
```

使用

```
<vc-image src="https://www.baidu.com/img/flexible/logo/pc/result.png"/>
```

# 说明

1、主要是 oss 有时间戳，使用后就不用多次去请求图片

2、图片会缓存，第一次用网络图片，后面加载都是用本地 blob 缓存

# 笔记

发布 npm publish --access public
