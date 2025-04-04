
    // Recherche
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('input', function(event) {
        const query = event.target.value.toLowerCase();
        console.log(Recherche en cours : ${query});
        //  la logique de recherche
    });

   