
import DefaultTheme from "vitepress/theme";
// import MyLayout from "./MyLayout.vue";
import List from "./List.vue"
import OpenSource from "./OpenSource.vue"
import 'uno.css'
// import "virtual:uno.css";

export default {
  ...DefaultTheme,
  // Layout: MyLayout,
  enhanceApp({ app }) {
    app.component("List", List);
    app.component("OpenSource", OpenSource);
  },
};
