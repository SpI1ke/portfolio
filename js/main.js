const app = () => ({
    // Data
    jsonData: null,

    // Functions
    fetchJsonData() {
        fetch('./json/main.json')
            .then(response => response.json())
            .then(data => {
                this.jsonData = data.projetsList;
            })
            .catch(error => {
                console.error('Error fetching JSON:', error);
            });
    },

    openNewPage(projet) {
        window.location.href = projet.newPage;
    },
});

// Initialize the app
const myApp = app();

// Call the fetchJsonData function to fetch JSON data
myApp.fetchJsonData();