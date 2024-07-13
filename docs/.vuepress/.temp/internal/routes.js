export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"D:/zengyBlog/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/java.html", { loader: () => import(/* webpackChunkName: "java.html" */"D:/zengyBlog/vuepress-starter/docs/.vuepress/.temp/pages/java.html.js"), meta: {"title":"JAVA"} }],
  ["/python.html", { loader: () => import(/* webpackChunkName: "python.html" */"D:/zengyBlog/vuepress-starter/docs/.vuepress/.temp/pages/python.html.js"), meta: {"title":"Python"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/zengyBlog/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/ml/a.html", { loader: () => import(/* webpackChunkName: "ml_a.html" */"D:/zengyBlog/vuepress-starter/docs/.vuepress/.temp/pages/ml/a.html.js"), meta: {"title":"机器学习基础"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/zengyBlog/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
