export default {
  data() {
    return {
      api: null,
      loading: true,
    };
  },
  methods: {
    fetchData(url) {
      this.api = null;
      this.loading = true;
      fetch(`http://localhost:3000${url}`)
        .then((r) => r.json())
        .then((r) => {
          setTimeout(
            () => {
              this.api = r;
              this.loading = false;
            } //1000
          );
        });
    },
  },
};
