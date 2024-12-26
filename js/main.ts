// Function to show the custom alert with different types
function showCustomAlert(message: string, type: string = 'info', duration: number = 3000): void {
    const alertElement = document.getElementById('customAlert');
    const messageElement = document.getElementById('customAlertMessage');

    if (alertElement && messageElement) {
        // Set the message and alert type
        messageElement.textContent = message;
        alertElement.className = `custom-alert ${type}`; // Add alert type class

        alertElement.classList.remove('hidden');
        alertElement.classList.add('show');

        // Hide the alert after the specified duration
        setTimeout(() => {
            alertElement.classList.remove('show');
            alertElement.classList.add('hidden');
        }, duration);
    }
}

// Mobile Navbar Toggle Menu
function toggleMenu(): void {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    if (dropdownMenu) {
        dropdownMenu.classList.toggle('active'); // Toggles the active class
    } else {
        console.error("Dropdown menu element not found.");
    }
}


document.addEventListener('DOMContentLoaded', () => {

    // Get references to necessary DOM elements
    const resumeSection = document.getElementById('resume-section') as HTMLElement;
    const profileForm = document.getElementById('profileForm') as HTMLFormElement;
    const profilePhotoElement = document.getElementById('profile-photo') as HTMLImageElement;
    const editProfileBtn = document.getElementById('editProfileBtn') as HTMLButtonElement;
    const saveChangesBtn = document.getElementById('saveChangesBtn') as HTMLButtonElement;
    const buildCvBtn = document.getElementById('buildBtn') as HTMLButtonElement;
    const startCvBtn = document.getElementById('startBtn') as HTMLButtonElement;
    const headingSection = document.getElementById('heading-sec') as HTMLElement;
    const formSection = document.getElementById('form-sec') as HTMLElement;
    const downloadBtn = document.getElementById('downloadPdfBtn') as HTMLButtonElement;
    const profileFormSection = document.getElementById('profileSection') as HTMLElement;
    
    // Show Form Fields when click  "Build CV button"
    buildCvBtn.addEventListener('click', () => {
        // Show the Form Fields
        formSection.style.display = 'block';

        // Scroll to the Form Fields
        formSection.scrollIntoView();

        // Hide the Heading-Section & "Build CV" button
        buildCvBtn.style.display = 'none';
        headingSection.style.display = 'none';
    });

    // Show Form Fields when click  "Build CV button"
    startCvBtn.addEventListener('click', () => {
        // Show the Form Fields
        formSection.style.display = 'block';

        // Scroll to the Form Fields
        formSection.scrollIntoView();

        // Hide the Heading-Section & "Build CV" button
        startCvBtn.style.display = 'none';
        headingSection.style.display = 'none';
    });

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

        // Show the "Download Resume" button
        downloadBtn.style.display = 'inline-block';

        // Show a success message
        showCustomAlert('Profile updated successfully!', 'success');

        // Hide the "Save Changes" button
        saveChangesBtn.style.display = 'none';

        // Hide the Heading-Section & "Build CV" button
        buildCvBtn.style.display = 'none';
        headingSection.style.display = 'none';

        // Hide the Profile Form Section
        profileFormSection.style.display = 'none';

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
        
        const profileTextElement = document.getElementById('profile-text');
        if (profileTextElement) {
            profileTextElement.focus(); // Focus the text field
            const range = document.createRange(); // Create a new range
            const selection = window.getSelection(); // Get the current selection
            
            // Place the cursor at the end of the text content
            range.selectNodeContents(profileTextElement);
            range.collapse(false); // Collapse the range to the end of the content
            selection?.removeAllRanges(); // Clear any existing selections
            selection?.addRange(range); // Add the new range
        }


        // Show a popup message
        showCustomAlert('Now you can edit Profile!', 'info');

        // Remove "Edit Profile" button once clicked
        editProfileBtn.style.display = 'none';

        // Show the "Save Changes" button
        saveChangesBtn.style.display = 'block';
        saveChangesBtn.textContent = 'Save Changes';
        saveChangesBtn.style.backgroundColor = '#5CB85C';
        saveChangesBtn.style.color = '#fff';
        saveChangesBtn.style.cursor = 'pointer';
        saveChangesBtn.style.pointerEvents = 'auto';
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
        showCustomAlert('Profile changes saved!', 'success');

        // Show the "Edit Profile" button after form submission
        editProfileBtn.style.display = 'inline-block';

        // Hide the "Save Changes" button
        // saveChangesBtn.style.display = 'none';
        saveChangesBtn.textContent = 'Changes Saved';
        saveChangesBtn.style.backgroundColor = '#F1F5F4';
        saveChangesBtn.style.color = 'black';
        saveChangesBtn.style.pointerEvents = 'none';
    });

    // Toggle the skills section visibility
    const toggleSkillsBtn = document.getElementById("toggleSkillsBtn") as HTMLButtonElement;
    const skillsList = document.getElementById("skills-list") as HTMLElement;
    let skillsVisible = true;

    if (toggleSkillsBtn && skillsList) {
        toggleSkillsBtn.addEventListener("click", () => {
            skillsVisible = !skillsVisible;
            skillsList.style.display = skillsVisible ? "block" : "none";

            // Change the button style based on visibility
            toggleSkillsBtn.textContent = skillsVisible ? "x" : "+";

            // Change the button background color based on visibility
            toggleSkillsBtn.style.backgroundColor = skillsVisible ? "#ff7675" : "#74b9ff";
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
        showCustomAlert('Experience added successfully!', 'success');
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
            showCustomAlert('Experience deleted successfully!', 'error');
        }
    });


    // Get references to the education form
    const educationForm = document.getElementById('educationForm') as HTMLFormElement;
    const educationList = document.getElementById('education-list') as HTMLUListElement;

    // Array to hold multiple experiences
    const educations: Array<{ degreeName: string, collegeName: string }> = [];

    // Handle Experience Form Submission
    educationForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form reload on submit

        // Get values from the form inputs
        const degreeName = (document.getElementById('inputDegree') as HTMLInputElement).value;
        const collegeName = (document.getElementById('inputCollege') as HTMLTextAreaElement).value;

        // Add new experience to the array
        educations.push({ degreeName, collegeName });

        // Update the experience list in the DOM
        updateEducationList();

        // Clear form fields after submission
        educationForm.reset();

        // Show success alert
        showCustomAlert('Education added successfully!', 'success');
    });

    // Function to update the education list in the DOM
    function updateEducationList() {
        if (educationList) {
            // Clear previous entries
            educationList.innerHTML = '';

            // Generate list item for each experience
            educations.forEach((education, index) => {
                const educationItem = document.createElement('li');
                educationItem.className = 'list-item';

                 // Add content and delete button to the list item
                educationItem.innerHTML = `
                    <h4 class="list-item__title">${education.collegeName}</h4>
                    <p class="list-item__date"><i style="text-transform: capitalize;">From:</i> ${education.degreeName}</p>
                    <button class="delete-btn" data-index="${index}">Delete</button>
                `;
                // Append the new education item to the list
                educationList.appendChild(educationItem);
            });
        }
    }

    // Delegate event handling for dynamically added delete buttons
    educationList.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;

        if (target && target.classList.contains('delete-btn')) {
            // Get the index of the education to delete
            const index = parseInt(target.getAttribute('data-index') || '0', 10);

            // Remove education from the array
            educations.splice(index, 1);

            // Update the education list
            updateEducationList();

            // Show success alert
            showCustomAlert('Education Deleted successfully!', 'error');
        }
    });


    // Get references to necessary DOM elements
    const skillForm = document.getElementById('skillForm') as HTMLFormElement;
    const skillList = document.getElementById('skills-list') as HTMLUListElement;

    // Track whether the static entries have been removed
    let staticEntriesRemoved = false;

    // Handle Skill Form Submission
    skillForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form reload on submit

        // Get values from the form inputs
        const skillInput = document.getElementById('skillInput') as HTMLInputElement;
        const levelInput = document.getElementById('levelInput') as HTMLInputElement;

        const skillName = skillInput.value.trim();
        const skillLevel = parseInt(levelInput.value);

        // Validate inputs
        if (skillName === '' || isNaN(skillLevel) || skillLevel < 10 || skillLevel > 100 || skillLevel % 10 !== 0) {
            alert('Please enter a valid skill name and level (in increments of 10 from 10 to 100).');
            return;
        }

        // Remove static entries on the first submission only
        if (!staticEntriesRemoved) {
            skillList.innerHTML = ''; // Clear the static entries
            staticEntriesRemoved = true; // Mark static entries as removed
        }

        // Create a new list item for the skill
        const newSkillItem = document.createElement('li');
        newSkillItem.className = 'skills-list__item';

        // Skill name and dynamic skill level (based on input)
        newSkillItem.innerHTML = `
            ${skillName}
            <div class="level level-${skillLevel}"></div>
        `;

        // Append the new skill to the list
        skillList.appendChild(newSkillItem);

        // Show success alert
        showCustomAlert('Skills Added successfully!', 'success');

        // Clear the form inputs
        skillInput.value = '';
        levelInput.value = '';
    });

});
