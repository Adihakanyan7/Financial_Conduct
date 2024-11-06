document.addEventListener("DOMContentLoaded", function() {
    // Automatically show the correct dropdown on page load
    const path = window.location.pathname;
    console.log(path);
    let dropdownId = '';
    const mainHeader = document.getElementById("main-header");

    if (path === '/users/user1') {
        dropdownId = 'user1Dropdown';
    } else if (path === '/users/user2') {
        dropdownId = 'user2Dropdown';
    } else if (path === '/users/shared') {
        dropdownId = 'sharedDropdown';
    }

    if (dropdownId) {
        const dropdown = document.getElementById(dropdownId);
        dropdown.classList.add("visible"); 
        mainHeader.style.paddingBottom = '30px';
    }

    // Add toggle functionality for each user link
    document.querySelectorAll('.main-header__item > a').forEach(link => {
        link.addEventListener("click", function(event) {
            const targetPath = event.currentTarget.getAttribute("href");

            // Check if the clicked link's path matches the current page path
            if (targetPath === path) {
                event.preventDefault(); // Prevent navigation
                const dropdown = document.getElementById(dropdownId);
                mainHeader.style.paddingBottom = (dropdown.classList.contains("visible")) ? '0px' : '30px';
                dropdown.classList.toggle("visible"); // Toggle visibility with class
                /*
                mainHeader.style.paddingBottom = (dropdown.style.display === 'flex') ? '0px' : '30px';
                dropdown.style.opacity = (dropdown.style.display === 'flex') ? '0' : '1';
                dropdown.style.display = (dropdown.style.display === 'flex') ? 'none' : 'flex';
                */
            }
        });
    });
});


