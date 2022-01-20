const app = new Vue({
    el: "#root",
    data: {
        database: [],
    },
    created() {
        axios.get("http://localhost:8888/php-ajax-dischi/index.php")
        .then( (response) => {
            this.database = response.data;
        });
    }
});