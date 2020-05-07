import LoadingComponent from "./Loading/index.vue";
const loading = {
  install: function(Vue) {
    Vue.component("my-icon-loading", LoadingComponent);
  }
};
export default loading;
