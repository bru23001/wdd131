
const container = document.querySelector('.container'); const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg"
    },
    {
        templeName: "San Diego California",
        location: "San Diego, California, United States",
        dedicated: "1993, April, 25",
        area: 72872,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/400x250/san-diego-temple-765109-wallpaper.jpg"
    },
    {
        templeName: "Hong Kong China",
        location: "Hong Kong, China",
        dedicated: "1996, May, 26",
        area: 20430,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hong-kong-china/400x640/hong_kong_china_temple_exterior1.jpeg"
    }
];
temples.forEach(temple => {
    const card = `
      <figure class="temple-card">
        <h3>${temple.templeName}</h3>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Size: ${temple.area} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
      </figure>
    `;
    container.innerHTML += card;
});
function createTempleCards(templeArray) {
    const container = document.querySelector('.container');
    container.innerHTML = "";

    templeArray.forEach(temple => {

        const templeCard = document.createElement('div');
        templeCard.classList.add('temple-card');

        const templeName = document.createElement('h3');
        templeName.textContent = temple.templeName;

        const templeLocation = document.createElement('p');
        templeLocation.textContent = `Location: ${temple.location}`;

        const templeDedicated = document.createElement('p');
        templeDedicated.textContent = `Dedicated: ${temple.dedicated}`;

        const templeArea = document.createElement('p');
        templeArea.textContent = `Area: ${temple.area} sq. ft.`;

        const templeImage = document.createElement('img');
        templeImage.src = temple.imageUrl;
        templeImage.alt = temple.templeName;
        templeImage.loading = 'lazy';


        templeCard.appendChild(templeName);
        templeCard.appendChild(templeLocation);
        templeCard.appendChild(templeDedicated);
        templeCard.appendChild(templeArea);
        templeCard.appendChild(templeImage);


        container.appendChild(templeCard);
    });
}

function filterOldTemples() {
    const filteredTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year < 1900;
    });
    createTempleCards(filteredTemples);
}

function filterNewTemples() {
    const filteredTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year > 2000;
    });
    createTempleCards(filteredTemples);
}

function filterLargeTemples() {
    const filteredTemples = temples.filter(temple => temple.area > 90000);
    createTempleCards(filteredTemples);
}

function filterSmallTemples() {
    const filteredTemples = temples.filter(temple => temple.area < 10000);
    createTempleCards(filteredTemples);
}

function displayAllTemples() {
    createTempleCards(temples);
}

document.querySelector('a[href="#home"]').addEventListener('click', displayAllTemples);
document.querySelector('a[href="#old"]').addEventListener('click', filterOldTemples);
document.querySelector('a[href="#new"]').addEventListener('click', filterNewTemples);
document.querySelector('a[href="#large"]').addEventListener('click', filterLargeTemples);
document.querySelector('a[href="#small"]').addEventListener('click', filterSmallTemples);

document.addEventListener('DOMContentLoaded', displayAllTemples);


// footer
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// hamburguer menu
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav"); 

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open"); 
    hamButton.textContent = navigation.classList.contains("open") ? "✖" : "≡"; 
});
