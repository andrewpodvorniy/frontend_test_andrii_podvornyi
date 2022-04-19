export default {
  name: 'trigger-enter',
  mounted: (el: HTMLElement) => {
    el.onkeydown = (event) => {
      if (event.key === 'Enter') {
        el.click();
      }
    };
  },
  unMounted: (el: HTMLElement) => {
    el.onkeydown = null;
  },
};
