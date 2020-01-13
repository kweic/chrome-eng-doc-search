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

function rootSearch() {
    let query = document.getElementById("root-search-input").value.trim()
    if (!query) return;

    query = query.split(/[\s,]+/).join('+');
    window.open(`https://github.com/Root-App/root-engineering-docs/search?q=${query}&unscoped_q=${query}`);
}