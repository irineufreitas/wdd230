const baseURL = "https://irineufreitas.github.io/wdd230/";
const linksURL = "https://irineufreitas.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

getLinks();

function displayLinks(weeks) {
    const linksContainer = document.querySelector('#links-container');

    // Loop through each week
    weeks.forEach(week => {
        const weekHeader = document.createElement('h2');
        weekHeader.textContent = week.week;
        linksContainer.appendChild(weekHeader);

        // Loop through each link in the week
        week.links.forEach(link => {
            const linkElement = document.createElement('a');
            linkElement.href = baseURL + link.url;
            linkElement.textContent = link.title;
            const listItem = document.createElement('li');
            listItem.appendChild(linkElement);
            linksContainer.appendChild(listItem);
        });
    });
}
