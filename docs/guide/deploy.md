---
title: 部署相关
order: 5
---

# 部署

如果你只是简单的部署，你只需要将整个 dist 文件夹复制到你的 CDN 或静态服务器。index.html 应该是你的服务器入口。

# 前端路由与服务端的结合

> 如果你遇到 https://cdn.com/users/123 刷新后 404 的问题，你需要按照这个章节进行处理。

可以在 config/config.ts 中进行配置选择用哪个方式：

```ts
export default {
  history: { type: 'hash' }, // 默认是 browser
};
```

hashHistory 使用如 https://cdn.com/#/users/123 这样的 URL，取井号后面的字符作为路径。browserHistory 则直接使用 https://cdn.com/users/123 这样的 URL。使用 hashHistory 时浏览器访问到的始终都是根目录下 index.html。使用 browserHistory 则需要服务器做好处理 URL 的准备，处理应用启动最初的 / 这样的请求应该没问题，但当用户来回跳转并在 /users/123 刷新时，服务器就会收到来自 /users/123 的请求，这时你需要配置服务器能处理这个 URL 返回正确的 index.html，否则就会出现 404 找不到该页面的情况。如果没有对服务器端的控制权限，建议在配置中开启 exportStatic，这样编译后的 dist 目录会对每一个路由都生成一个 index.html，从而每个路由都能支持 deeplink 直接访问。强烈推荐使用默认的 browserHistory。

## Nginx

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## 原生 Node.js

```js
const http = require('http');
const fs = require('fs');
const httpPort = 80;

http
  .createServer((req, res) => {
    fs.readFile('index.html', 'utf-8', (err, content) => {
      if (err) {
        console.log('We cannot open "index.html" file.');
      }
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
      });
      res.end(content);
    });
  })
  .listen(httpPort, () => {
    console.log('Server listening on: http://localhost:%s', httpPort);
  });
```

## Express + Node.js

对于 Node.js/Express，可以考虑使用 [connect-history-api-fallback](https://github.com/bripkens/connect-history-api-fallback) 中间件。

## Spring boot

创建一个 controller ，并添加如下代码：

```java
@RequestMapping("/api/**")
public ApiResult api(HttpServletRequest request, HttpServletResponse response){
    return apiProxy.proxy(request, response);
}

@RequestMapping(value="/**", method=HTTPMethod.GET)
public String index(){
    return "index"
}

```

## Apache

```
<IfModule mod_negotiation.c>
  Options -MultiViews
</IfModule>

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```
