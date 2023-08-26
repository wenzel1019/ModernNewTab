const searchButton = document.getElementById("search-button");
const searchQueryInput = document.getElementById("search-query");

searchButton.addEventListener("click", () => {
    const searchQuery = searchQueryInput.value.trim();
    if (searchQuery !== "") {
        // Change the URL to the search engine of your choice (e.g., Bing or Google)
        const searchURL = `https://www.bing.com/search?q=${encodeURIComponent(searchQuery)}`;
        window.open(searchURL, "_blank");
    }
});
