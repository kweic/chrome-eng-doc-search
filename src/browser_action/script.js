document.getElementById('pr-team-selection').addEventListener('change', (e) => {
    if(e.target.value) {
        window.open(`https://github.com/pulls?utf8=%E2%9C%93&q=is%3Aopen+is%3Apr+label%3A${e.target.value}+archived%3Afalse+`);
    }
});
document.getElementById('root-logo').addEventListener('click', () => {
    window.open('https://github.com/Root-App/root-engineering-docs');
});
document.getElementById('root-search-input').addEventListener('keyup', (e) => {
    if(e.which == 13) {
        rootSearch();
    }
}, rootSearch);

document.getElementById('recent-search-select').addEventListener('change', (e) => {
    if(e.target.value) {
        searchByQuery(e.target.value);
    }
});

showRecentIfExisting();

const PREVIOUS_SEARCH_MAX_SIZE = 10;

function rootSearch() {
    let query = document.getElementById("root-search-input").value.trim()
    if (!query) return;

    saveSearch(query);
    showRecentIfExisting();
    searchByQuery(query);
}

function searchByQuery(query) {
    var formattedQuery = query.split(/[\s,]+/).join('+');
    window.open(`https://github.com/Root-App/root-engineering-docs/search?q=${formattedQuery}&unscoped_q=${formattedQuery}`);
}

function recentSearches() {
    var recentSearches = localStorage.getItem("root-doc-searches");
    if(!recentSearches) return [];
    return JSON.parse(recentSearches);
}

function saveSearch(query) {
    var storedSearches = recentSearches();
    storedSearches.push(query);
    while(storedSearches.length > PREVIOUS_SEARCH_MAX_SIZE) {
        storedSearches.shift();
    }
    localStorage.setItem("root-doc-searches", JSON.stringify(storedSearches));
}

function showRecentIfExisting() {
    var select = document.getElementById('recent-search-select');

    if (recentSearches().length > 0) {
        select.style.display = "block";
        
        var el = document.createElement('option');
        el.textContent = "Recent Searches";
        select.appendChild(el);
        
        recentSearches().forEach((e) => {
            var el = document.createElement('option');
            el.textContent = e;
            el.value = e;
            select.appendChild(el);
        })
    }
}
