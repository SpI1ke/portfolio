const app = () => ({
    // Data
    jsonData: null,

    // Functions
    fetchJsonData() {
        fetch('../../json/main.json')
            .then(response => response.json())
            .then(data => {
                this.jsonData = data.projetsList;
            })
            .catch(error => {
                console.error('Error fetching JSON:', error);
            });
    },
});

