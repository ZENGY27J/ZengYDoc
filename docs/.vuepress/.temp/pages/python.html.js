import comp from "D:/zengyBlog/vuepress-starter/docs/.vuepress/.temp/pages/python.html.vue"
const data = JSON.parse("{\"path\":\"/python.html\",\"title\":\"Python\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1720876600000,\"contributors\":[{\"name\":\"ZENGY27J\",\"email\":\"zexyzm@163.com\",\"commits\":1}]},\"filePathRelative\":\"python.md\"}")
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
