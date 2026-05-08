document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-button');
    const navbarMenu = document.getElementById('navbar-menu');
    const menuLinks = navbarMenu.querySelectorAll('a');

    toggleButton.addEventListener('click', function () {
        navbarMenu.classList.toggle('active');
    });

    // Ajouter un gestionnaire de clics à chaque lien du menu
    menuLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navbarMenu.classList.remove('active'); // Ferme le menu
        });
    });
});
