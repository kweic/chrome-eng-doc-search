document.getElementById('clear-search-history').addEventListener('click', () => {
    localStorage.setItem("root-doc-searches", JSON.stringify([]));
});