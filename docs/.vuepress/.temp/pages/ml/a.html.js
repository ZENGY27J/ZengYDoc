import comp from "D:/zengyBlog/vuepress-starter/docs/.vuepress/.temp/pages/ml/a.html.vue"
const data = JSON.parse("{\"path\":\"/ml/a.html\",\"title\":\"机器学习基础\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1720876600000,\"contributors\":[{\"name\":\"ZENGY27J\",\"email\":\"zexyzm@163.com\",\"commits\":1}]},\"filePathRelative\":\"ml/a.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
