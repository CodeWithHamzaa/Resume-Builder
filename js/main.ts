// Function to show the custom alert
function showCustomAlert(message: string, duration: number = 3000): void {
    const alertElement = document.getElementById('customAlert');
    const messageElement = document.getElementById('customAlertMessage');

    if (alertElement && messageElement) {
        messageElement.textContent = message;
        alertElement.classList.remove('hidden');
        alertElement.classList.add('show');

        // Hide the alert after the specified duration
        setTimeout(() => {
            alertElement.classList.remove('show');
            alertElement.classList.add('hidden');
        }, duration);
    }
}


document.addEventListener('DOMContentLoaded', () => {

    // Get references to necessary DOM elements
    const profileForm = document.getElementById('profileForm') as HTMLFormElement;
    const profilePhotoElement = document.getElementById('profile-photo') as HTMLImageElement;
    const editProfileBtn = document.getElementById('editProfileBtn') as HTMLButtonElement;
    const saveChangesBtn = document.getElementById('saveChangesBtn') as HTMLButtonElement;
    
    

    // Handle Profile Form Submission
    profileForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form reload on submit

        // Get values from the form inputs
        const profilePicInput = document.getElementById('profilePic') as HTMLInputElement;
        const profileText = (document.getElementById('profileText') as HTMLTextAreaElement).value;
        const phone = (document.getElementById('inputPhone') as HTMLInputElement).value;
        const email = (document.getElementById('inputEmail') as HTMLInputElement).value;
        const website = (document.getElementById('inputWebsite') as HTMLInputElement).value;
        const home = (document.getElementById('inputHome') as HTMLInputElement).value;
        const languages = (document.getElementById('inputLanguages') as HTMLInputElement).value.split(',');
        const inputName = (document.getElementById('inputName') as HTMLInputElement).value;
        const inputPosition = (document.getElementById('inputPosition') as HTMLInputElement).value

        // Handle profile picture upload
        const profilePicFile = profilePicInput.files ? profilePicInput.files[0] : null;
        if (profilePicFile) {
            const objectURL = URL.createObjectURL(profilePicFile);
            profilePhotoElement.src = objectURL;
        }

        // Update other profile details dynamically
        document.getElementById('profile-text')!.textContent = profileText;
        document.getElementById('phone-number')!.textContent = phone;
        document.getElementById('email')!.textContent = email;
        document.getElementById('website')!.textContent = website;
        document.getElementById('home-address')!.textContent = home;
        document.getElementById('name')!.textContent = inputName;
        document.getElementById('position')!.textContent = inputPosition;;

        // Update the languages dynamically
        const languagesContainer = document.getElementById('languages') as HTMLElement;
        languagesContainer.innerHTML = ''; // Clear previous entries
        languages.forEach(language => {
            const languageDiv = document.createElement('div');
            languageDiv.className = 'language';
            languageDiv.innerHTML = `<span class="language-text">${language.trim()}</span>`;
            languagesContainer.appendChild(languageDiv);
        });

        // Show the "Edit Profile" button after form submission
        editProfileBtn.style.display = 'inline-block';

        // Show a success message
        showCustomAlert('Profile updated successfully!');

        // Hide the "Save Changes" button
        saveChangesBtn.style.display = 'none';
    });

    // Handle the "Edit Profile" button click
    editProfileBtn.addEventListener('click', () => {
        // Allow user to edit fields
        document.getElementById('profile-text')!.setAttribute('contenteditable', 'true');
        document.getElementById('phone-number')!.setAttribute('contenteditable', 'true');
        document.getElementById('email')!.setAttribute('contenteditable', 'true');
        document.getElementById('website')!.setAttribute('contenteditable', 'true');
        document.getElementById('home-address')!.setAttribute('contenteditable', 'true');
        document.getElementById('languages')!.setAttribute('contenteditable', 'true');
        document.getElementById('name')!.setAttribute('contenteditable', 'true');
        document.getElementById('position')!.setAttribute('contenteditable', 'true');

        // Show a popup message
        showCustomAlert('You can now edit your profile!');

        // Show the "Save Changes" button
        saveChangesBtn.style.display = 'inline-block';
    });

    // Handle "Save Changes" button click
    saveChangesBtn.addEventListener('click', () => {
        // Disable editing after saving
        document.getElementById('profile-text')!.setAttribute('contenteditable', 'false');
        document.getElementById('phone-number')!.setAttribute('contenteditable', 'false');
        document.getElementById('email')!.setAttribute('contenteditable', 'false');
        document.getElementById('website')!.setAttribute('contenteditable', 'false');
        document.getElementById('home-address')!.setAttribute('contenteditable', 'false');
        document.getElementById('languages')!.setAttribute('contenteditable', 'false');
        document.getElementById('name')!.setAttribute('contenteditable', 'false');
        document.getElementById('position')!.setAttribute('contenteditable', 'false');

        // Show a success message
        showCustomAlert('Profile changes saved successfully!');

        // Hide the "Save Changes" button
        saveChangesBtn.style.display = 'none';
    });

    // Toggle the skills section visibility
    const toggleSkillsBtn = document.getElementById("toggleSkillsBtn") as HTMLButtonElement;
    const skillsList = document.getElementById("skills-list") as HTMLElement;
    let skillsVisible = false;

    if (toggleSkillsBtn && skillsList) {
        toggleSkillsBtn.addEventListener("click", () => {
            skillsVisible = !skillsVisible;
            skillsList.style.display = skillsVisible ? "block" : "none";
        });
    };

    // Get references to the experience form
    const experienceForm = document.getElementById('experienceForm') as HTMLFormElement;
    const experienceList = document.getElementById('experience-list') as HTMLUListElement;

    // Array to hold multiple experiences
    const experiences: Array<{ companyName: string, jobDescription: string }> = [];

    // Handle Experience Form Submission
    experienceForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form reload on submit

        // Get values from the form inputs
        const companyName = (document.getElementById('inputCompanyName') as HTMLInputElement).value;
        const jobDescription = (document.getElementById('inputJobDescription') as HTMLTextAreaElement).value;

        // Add new experience to the array
        experiences.push({ companyName, jobDescription });

        // Update the experience list in the DOM
        updateExperienceList();

        // Clear form fields after submission
        experienceForm.reset();

        // Show success alert (if you have an alert function)
        showCustomAlert('Experience added successfully!');
    });

    // Function to update the experience list in the DOM
    function updateExperienceList() {
        if (experienceList) {
            // Clear previous entries
            experienceList.innerHTML = '';

            // Generate list item for each experience
            experiences.forEach((experience, index) => {
                const experienceItem = document.createElement('li');
                experienceItem.className = 'list-item';

                 // Add content and delete button to the list item
                experienceItem.innerHTML = `
                    <h4 class="list-item__title">${experience.companyName}</h4>
                    <p class="list-item__text">${experience.jobDescription}</p>
                    <button class="delete-btn" data-index="${index}">Delete</button>
                `;
                // Append the new experience item to the list
                experienceList.appendChild(experienceItem);
            });
        }
    }
        

    // Delegate event handling for dynamically added delete buttons
    experienceList.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;

        if (target && target.classList.contains('delete-btn')) {
            // Get the index of the experience to delete
            const index = parseInt(target.getAttribute('data-index') || '0', 10);

            // Remove experience from the array
            experiences.splice(index, 1);

            // Update the experience list
            updateExperienceList();

            // Show success alert (if you have an alert function)
            showCustomAlert('Experience deleted successfully!');
        }
    });
});
