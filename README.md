## H2 Book Reader

H2 Book 是一种类剧本式图书格式。它采用对话和场景来展现故事、描述事实，又非常接近于我们平时使用的聊天软件，所以读起来更为轻松。

[点这里感受下](http://wt.ftqq.com/read/1001)  && [使用帮助](http://wt.ftqq.com/read/002)

访问 [wt.ftqq.com](http://wt.ftqq.com) 可以在线编写 H2 Book的内容，并下载为 h2zip 格式的文件。而 H2 Book Reader（即本项目）则负责读取 h2zip 并展现。

### 使用方法

#### 创作内容

- 到 [wt.ftqq.com](http://wt.ftqq.com) 编写书籍内容。
- 点编辑器右侧的「存到电脑」获得 `*.h2zip` 文件。

#### 制作阅读器

```
git clone https://github.com/easychen/h2webreader
cd h2webreader
yarn 
```

然后将之前下载 `*.h2zip` 文件改名为 `002.h2zip` 放入 `public/books` 目录下。

```
yarn start
```

打开浏览器访问 `http://localhost:3000/002` 就可以阅读了。注意目录名称要和 `.h2zip` 文件名一致（不包括后缀）。这时候可以修改 `App.css` 来定制阅读界面的样式。

#### 发布阅读器

定制完成后，运行 

```
yarn build
```

会在根下生成一个 `build` 目录，将目录下所有内容放到一个服务器的 web 目录下就OK了。注意本项目只附带了 apache 的 rewrite 文件，其他服务器需自己添加。

Nginx 参考：

https://stackoverflow.com/questions/36304302/how-can-i-configure-react-router-to-with-nginx-cherrypy-and-my-current-reactjs-a
```
location / {
    root /var/www;
    index index.html;

    try_files $uri $uri/ /index.html;
}
```  

#### 追加图书

新写了图书，只要将 `.h2zip` 文件放到服务器 web 目录下的 `books` 之下，就可以通过 url （ http://domian/bookname ） 进行访问了。

### License

MIT 
