if (isMobile) { // isMobile comes from redirect.js

    window.onload = function() {

        // Mobile Firefox sometimes doesn't start at the top of the page
        if (navigator.userAgent.indexOf("Firefox") != -1 || navigator.userAgent.indexOf("FxiOS") != -1) {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
    };

    /* Mobile dropdown menu logic for toggling open/close */
    
    // Wait for elements to be found
    document.addEventListener('DOMContentLoaded', function() {

        // Remove default CSS for dropdown
        document.querySelector('.dropdown .dropdown-content').style.display = '';
        document.querySelector('.dropdown .dropbtn').style.backgroundColor = '';

        // Onclick
        document.addEventListener('click', function(event) {
            var dropdown = document.getElementsByClassName('dropdown')[0];
            var dropbtn = document.getElementsByClassName('dropbtn')[0];
            var dropdownContent = document.getElementsByClassName('dropdown-content')[0];

            var isClicked = dropbtn.contains(event.target) || dropdown.contains(event.target);

            // If menu button is clicked, open or close depending on what it currently is at
            if (isClicked) {
                if (window.getComputedStyle(dropdownContent).display === "none" || window.getComputedStyle(dropdownContent).display === "") {
                    dropdownContent.style.display = "block";
                    dropbtn.style.backgroundColor = "#f1f1f1";
                } else if (window.getComputedStyle(dropdownContent).display === "block") {
                    dropdownContent.style.display = "none";
                    dropbtn.style.backgroundColor = "white";
                }
            } else { // If menu button not clicked, close
                dropdownContent.style.display = "none";
                dropbtn.style.backgroundColor = "white";
            }
        });
    });
}
