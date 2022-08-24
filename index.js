const cacheBlobMap = new Map();

const vueCacheImage = {
  props: {
    src: {
      type: String,
    },
  },
  computed: {
    realSrc() {
      return cacheBlobMap.get(this.src) || this.src;
    },
    attrs() {
      const attrs = this.$attrs;
      delete attrs.src;
      return attrs;
    },
  },
  watch: {
    src: {
      handler(s) {
        if (cacheBlobMap.get(s)) return;
        if (/^(http|https|\/\/):/i.test(s)) {
          const xhr = new XMLHttpRequest();
          xhr.open("GET", s, true);
          xhr.responseType = "blob";
          xhr.onload = function () {
            const file = new Blob([xhr.response]);
            const blob = window.URL.createObjectURL(file);
            cacheBlobMap.set(s, blob);
          };
          xhr.send();
        }
      },
      immediate: true,
    },
  },
  render() {
    return <img src={this.realSrc} {...this.attrs} />;
  },
};

vueCacheImage.install = function (Vue) {
  Vue.component("vc-image", vueCacheImage);
};

vueCacheImage.cacheBlobMap = cacheBlobMap;

export default vueCacheImage;
