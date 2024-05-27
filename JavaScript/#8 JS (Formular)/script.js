const locations = [
  {
    id: 1,
    city: 'Bucharest',
    country: 'Romania',
  },
  {
    id: 2,
    city: 'Pitesti',
    country: 'Romania',
  },
  {
    id: 3,
    city: 'Cluj-Napoca',
    country: 'Romania',
  },
  {
    id: 4,
    city: 'Ploiesti',
    country: 'Romania',
  },
  {
    id: 5,
    city: 'Brasov',
    country: 'Romania',
  },
  {
    id: 6,
    city: 'Sibiu',
    country: 'Romania',
  },
  {
    id: 7,
    city: 'Craiova',
    country: 'Romania',
  },
  {
    id: 8,
    city: 'Arad',
    country: 'Romania',
  },
  {
    id: 9,
    city: 'Vaslui',
    country: 'Romania',
  },
  {
    id: 10,
    city: 'Iasi',
    country: 'Romania',
  },
];

const emailInput = document.querySelector('[name="email"]');
const outputEmail = document.querySelector('.output-card-email');

const firstNameInput = document.querySelector('[name="first-name"]');
const outputFirstName = document.querySelector('.first-name');

const lastNameInput = document.querySelector('[name="last-name"]');
const outputLastName = document.querySelector('.last-name');

const outputLocation = document.querySelector('.output-card-location');
const selectLocationInput = document.querySelector('select');
for (let i = 0; i < locations.length; i++) {
  const locationsOption = document.createElement('option');

  locationsOption.innerHTML = `
  <option value="${locations[i].id}">${locations[i].city}, ${locations[i].country}</option>
  
  `;
  selectLocationInput.appendChild(locationsOption);
}

const linkedinLinkInput = document.querySelector('[name="linkedin"]');
const outputLinkedinIcon = document.querySelector('.linkedin');

const instagramLinkInput = document.querySelector('[name="instagram"]');
const outputInstagramIcon = document.querySelector('.instagram');

const descriptionInput = document.querySelector('[name="description"]');
const outputDescription = document.querySelector('.output-card-description');

// ======== FUNCTIONS ========
const handleEmailOuput = () => {
  outputEmail.innerText = emailInput.value;
};
emailInput.addEventListener('input', handleEmailOuput);

const handleFirstNameInput = () => {
  outputFirstName.innerText = firstNameInput.value;
};
firstNameInput.addEventListener('input', handleFirstNameInput);

const handleLastNameInput = () => {
  outputLastName.innerText = lastNameInput.value;
};
lastNameInput.addEventListener('input', handleLastNameInput);

const handleLocationInput = () => {
  outputLocation.innerText = selectLocationInput.value;
};
selectLocationInput.addEventListener('input', handleLocationInput);

const handleLinkedinLinkInput = () => {
  outputLinkedinIcon.href = linkedinLinkInput.value;
};
linkedinLinkInput.addEventListener('input', handleLinkedinLinkInput);

const handleInstagramLinkInput = () => {
  outputInstagramIcon.href = instagramLinkInput.value;
};
instagramLinkInput.addEventListener('input', handleInstagramLinkInput);

const handleDescriptionInput = () => {
  outputDescription.innerText = descriptionInput.value;
};
descriptionInput.addEventListener('input', handleDescriptionInput);

// Functia asta nu e facuta de mine, am incercat sa implementez si schimbarea de poza
// numai ca nu am reusit, asa ca am cautat pe net un exemplu pentru a invata cum sa fac.

// imageInput.addEventListener('change', function () {
//   getImgData();
// });
// function getImgData() {
//   const files = imageInput.files[0];
//   if (files) {
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(files);
//     fileReader.addEventListener('load', function () {
//       outputImage.style.display = 'block';
//       outputImage.innerHTML = '<img src="' + this.result + '" />';
//     });
//   }
// }
