// Define the URL for the JSON data
const url = 'data/members.json';

// Select the container where member cards will be displayed
const container = document.querySelector('#members');

// Function to fetch member data from the JSON file
async function getMemberData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the function to fetch and display member data
getMemberData();

// Function to display member cards
function displayMembers(members) {
    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('member-card');

        // Create and append elements for company information
        const nameElement = document.createElement('h2');
        nameElement.textContent = member.name;
        card.appendChild(nameElement);

        const addressElement = document.createElement('p');
        addressElement.textContent = `Address: ${member.address}`;
        card.appendChild(addressElement);

        const phoneElement = document.createElement('p');
        phoneElement.textContent = `Phone: ${member.phone}`;
        card.appendChild(phoneElement);

        const websiteElement = document.createElement('p');
        websiteElement.innerHTML = `Website: <a href="${member.website}" target="_blank">${member.website}</a>`;
        card.appendChild(websiteElement);

        const membershipElement = document.createElement('p');
        membershipElement.textContent = `Membership Level: ${member.membershipLevel}`;
        card.appendChild(membershipElement);

        // Append the card to the container
        container.appendChild(card);
    });
}
