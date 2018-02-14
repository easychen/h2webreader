## H2 Book Reader  URL直读版

> 此版本支持在 URL 中直接传递 h2zip 文件地址，进行实时阅读。存放 h2zip 的服务器需要支持跨域引用。不会搭建服务器的同学可以使用 ipfs 图床（后有说明）。

H2 Book 是一种类剧本式图书格式。它采用对话和场景来展现故事、描述事实，又非常接近于我们平时使用的聊天软件，所以读起来更为轻松。

[点这里感受下](http://wt.ftqq.com/read/1001)  && [使用帮助](http://wt.ftqq.com/read/002)

访问 [wt.ftqq.com](http://wt.ftqq.com) 可以在线编写 H2 Book的内容，并下载为 h2zip 格式的文件。而 H2 Book Reader（即本项目）则负责读取 h2zip 并展现。

### 使用方法

#### 创作内容

- 到 [wt.ftqq.com](http://wt.ftqq.com) 编写书籍内容。
- 点编辑器右侧的「存到电脑」获得 `*.h2zip` 文件。

#### 上传 h2zip 文件

访问 IPFS 的图床网站，比如这个 https://img9.top/ ，将 h2zip 上传，会得到一个地址，比如：`http://p4.cdn.img9.top/ipfs/QmPhoDcyvuMNXPhwSG5w8awTiKSp9f3rKbXi9sGamSCejz?4.h2zip`


将该地址填入首页底部的 输入框，点跳转即可进行阅读。

#### 文章列表

修改 books/index.json 可以改变首页显示的文章列表。


