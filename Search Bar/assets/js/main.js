/* SEARCH BAR */
const toggleSearch = (search, button) =>{
    const searchBar = document.getElementById(search),
            searchButton = document.getElementById(button)

    searchButton.addEventListener('click', () =>{
        // We add show-search class, so that the search bar expands
        searchBar.classList.toggle('show-search')
    })
}

toggleSearch('search-bar', 'search-button')