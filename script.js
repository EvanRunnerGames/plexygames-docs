document.querySelector('.search-bar').addEventListener('input', function() {
    // Get the search term
    let searchTerm = this.value.toLowerCase();

    // Get all the header section links
    let links = document.querySelectorAll('.header-section-link');

    // Loop through the links
    links.forEach(function(link) {
        // Get the link text and convert it to lowercase for comparison
        let linkText = link.textContent.toLowerCase();

        // Show the link if it matches the search term, otherwise hide it
        if (linkText.includes(searchTerm)) {
            link.style.display = 'block';
        } else {
            link.style.display = 'none';
        }
    });
});
