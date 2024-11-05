/*====================================================================================
====================================MAIN_JS===========================================
====================================================================================*/

/** 
 * This script handles various functionalities for the Your Book Club website,
 * including navigation, smooth scrolling, and dynamic content updates.
 */


document.addEventListener('DOMContentLoaded', function() {

    //=====================================NAVIGATION================================
    document.querySelector('a[href="#home"]').setAttribute('href', 'home.html');
    document.querySelector('a[href="#monthly-pick"]').setAttribute('href', "monthly-pick.html");
    document.querySelector('a[href="#our-picks"]').setAttribute('href', "must-reads.html");
    document.querySelector('a[href="#about"]').setAttribute('href', "about-us.html");
    document.querySelector('a[href="#get-involved"]').setAttribute('href', "get-involved.html");
    document.querySelector('a[href="#contact"]').setAttribute('href', "about-us.html");




    //=============================GRID_ITEM_NAVIGATION=============================
    // Add click event listeners to grid items for navigation
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(item => {
        item.addEventListener("click", function() {
            const pageUrl = this.getAttribute("data-href");
            if (pageUrl) {
                window.location.href = pageUrl;
            } else {
                console.log("No URL specified for this item.");
            }
        });
    });

    //=============================UPDATE_FOOTER====================================
    // Update footer with current year and last modified date
    document.getElementById("current-year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;

    //=============================HAMBURGER_MENU===================================
    const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav"); 

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open"); 
    hamButton.textContent = navigation.classList.contains("open") ? "✖" : "≡"; 
});

     //=============================SMOOTH_SCROLL====================================
    // Implement smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smoot"
            });
        });
    });

    // Default location
    const defaultLocation = { lat: 40.7128, lng: -74.0060 };
            
    // Create map
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: defaultLocation,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false
    });

    // Markers for book clubs
    const bookClubs = [
        {
            position: { lat: 40.7128, lng: -74.0060 },
            title: "Downtown Readers"
        },
        {
            position: { lat: 40.7158, lng: -74.0090 },
            title: "Mystery Lovers Book Club"
        }
    ];

    bookClubs.forEach(club => {
        new google.maps.Marker({
            position: club.position,
            map: map,
            title: club.title
        });
    });

     // Handle errors
     window.initMap = initMap;
     window.gm_authFailure = function() {
         document.getElementById('map').innerHTML = 
             'Error loading Google Maps. Please check your API key.';
     };

});