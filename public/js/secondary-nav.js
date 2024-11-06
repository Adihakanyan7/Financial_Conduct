document.addEventListener("DOMContentLoaded", function() {
    // Automatically show the correct dropdown on page load
    const path = window.location.pathname;
    let dropdownId = '';

    if (path === '/users/user1') {
        dropdownId = 'user1Dropdown';
    } else if (path === '/users/user2') {
        dropdownId = 'user2Dropdown';
    } else if (path === '/users/shared') {
        dropdownId = 'sharedDropdown';
    }

    if (dropdownId) {
        const dropdown = document.getElementById(dropdownId);
        dropdown.style.display = 'block'; // Show the dropdown by default based on page path
    }

    // Add toggle functionality for each user link
    document.querySelectorAll('.main-header__item > a').forEach(link => {
        link.addEventListener("click", function(event) {
            const targetPath = event.currentTarget.getAttribute("href");

            // Check if the clicked link's path matches the current page path
            if (targetPath === path) {
                event.preventDefault(); // Prevent navigation
                const dropdown = document.getElementById(dropdownId);
                dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
            }
        });
    });
});
