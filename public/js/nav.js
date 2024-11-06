document.addEventListener("DOMContentLoaded", function() {
    const path = window.location.pathname;
    let userButtonId = '';
    if (path === '/users/user1') {
        userButtonId = 'user1Button';
    } else if (path === '/users/user2') {
        userButtonId = 'user2Button';
    } else if (path === '/users/shared') {
        userButtonId = 'sharedButton';
    }

    if (userButtonId){
        const userButton = document.getElementById(userButtonId);
        userButton.classList.add("highlighted"); 
        userButton.classList.add("active");
    }

    document.querySelectorAll('.main-header__item > a').forEach(item =>{
        item.addEventListener('click', function(event) {
            const targetPath = event.currentTarget.getAttribute('herf');
            if (targetPath !== path) {
                userButton.classList.remove('highlighted');
                userButton.classList.remove('active');
            }
        })
    })
})