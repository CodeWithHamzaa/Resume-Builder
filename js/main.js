// Function to show the custom alert with different types
function showCustomAlert(message, type, duration) {
    if (type === void 0) { type = 'info'; }
    if (duration === void 0) { duration = 3000; }
    var alertElement = document.getElementById('customAlert');
    var messageElement = document.getElementById('customAlertMessage');
    if (alertElement && messageElement) {
        // Set the message and alert type
        messageElement.textContent = message;
        alertElement.className = "custom-alert ".concat(type); // Add alert type class
        alertElement.classList.remove('hidden');
        alertElement.classList.add('show');
        // Hide the alert after the specified duration
        setTimeout(function () {
            alertElement.classList.remove('show');
            alertElement.classList.add('hidden');
        }, duration);
    }
}
// Mobile Navbar Toggle Menu
function toggleMenu() {
    var dropdownMenu = document.querySelector('.dropdown-menu');
    if (dropdownMenu) {
        dropdownMenu.classList.toggle('active'); // Toggles the active class
    }
    else {
        console.error("Dropdown menu element not found.");
    }
}
document.addEventListener('DOMContentLoaded', function () {
    // Get references to necessary DOM elements
    var resumeSection = document.getElementById('resume-section');
    var profileForm = document.getElementById('profileForm');
    var profilePhotoElement = document.getElementById('profile-photo');
    var editProfileBtn = document.getElementById('editProfileBtn');
    var saveChangesBtn = document.getElementById('saveChangesBtn');
    var buildCvBtn = document.getElementById('buildBtn');
    var startCvBtn = document.getElementById('startBtn');
    var headingSection = document.getElementById('heading-sec');
    var formSection = document.getElementById('form-sec');
    var downloadBtn = document.getElementById('downloadPdfBtn');
    var profileFormSection = document.getElementById('profileSection');
    // Show Form Fields when click  "Build CV button"
    buildCvBtn.addEventListener('click', function () {
        // Show the Form Fields
        formSection.style.display = 'block';
        // Scroll to the Form Fields
        formSection.scrollIntoView();
        // Hide the Heading-Section & "Build CV" button
        buildCvBtn.style.display = 'none';
        headingSection.style.display = 'none';
    });
    // Show Form Fields when click  "Build CV button"
    startCvBtn.addEventListener('click', function () {
        // Show the Form Fields
        formSection.style.display = 'block';
        // Scroll to the Form Fields
        formSection.scrollIntoView();
        // Hide the Heading-Section & "Build CV" button
        startCvBtn.style.display = 'none';
        headingSection.style.display = 'none';
    });
    // Handle Profile Form Submission
    profileForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form reload on submit
        // Get values from the form inputs
        var profilePicInput = document.getElementById('profilePic');
        var profileText = document.getElementById('profileText').value;
        var phone = document.getElementById('inputPhone').value;
        var email = document.getElementById('inputEmail').value;
        var website = document.getElementById('inputWebsite').value;
        var home = document.getElementById('inputHome').value;
        var languages = document.getElementById('inputLanguages').value.split(',');
        var inputName = document.getElementById('inputName').value;
        var inputPosition = document.getElementById('inputPosition').value;
        // Handle profile picture upload
        var profilePicFile = profilePicInput.files ? profilePicInput.files[0] : null;
        if (profilePicFile) {
            var objectURL = URL.createObjectURL(profilePicFile);
            profilePhotoElement.src = objectURL;
        }
        // Update other profile details dynamically
        document.getElementById('profile-text').textContent = profileText;
        document.getElementById('phone-number').textContent = phone;
        document.getElementById('email').textContent = email;
        document.getElementById('website').textContent = website;
        document.getElementById('home-address').textContent = home;
        document.getElementById('name').textContent = inputName;
        document.getElementById('position').textContent = inputPosition;
        ;
        // Update the languages dynamically
        var languagesContainer = document.getElementById('languages');
        languagesContainer.innerHTML = ''; // Clear previous entries
        languages.forEach(function (language) {
            var languageDiv = document.createElement('div');
            languageDiv.className = 'language';
            languageDiv.innerHTML = "<span class=\"language-text\">".concat(language.trim(), "</span>");
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
    editProfileBtn.addEventListener('click', function () {
        // Allow user to edit fields
        document.getElementById('profile-text').setAttribute('contenteditable', 'true');
        document.getElementById('phone-number').setAttribute('contenteditable', 'true');
        document.getElementById('email').setAttribute('contenteditable', 'true');
        document.getElementById('website').setAttribute('contenteditable', 'true');
        document.getElementById('home-address').setAttribute('contenteditable', 'true');
        document.getElementById('languages').setAttribute('contenteditable', 'true');
        document.getElementById('name').setAttribute('contenteditable', 'true');
        document.getElementById('position').setAttribute('contenteditable', 'true');
        var profileTextElement = document.getElementById('profile-text');
        if (profileTextElement) {
            profileTextElement.focus(); // Focus the text field
            var range = document.createRange(); // Create a new range
            var selection = window.getSelection(); // Get the current selection
            // Place the cursor at the end of the text content
            range.selectNodeContents(profileTextElement);
            range.collapse(false); // Collapse the range to the end of the content
            selection === null || selection === void 0 ? void 0 : selection.removeAllRanges(); // Clear any existing selections
            selection === null || selection === void 0 ? void 0 : selection.addRange(range); // Add the new range
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
    saveChangesBtn.addEventListener('click', function () {
        // Disable editing after saving
        document.getElementById('profile-text').setAttribute('contenteditable', 'false');
        document.getElementById('phone-number').setAttribute('contenteditable', 'false');
        document.getElementById('email').setAttribute('contenteditable', 'false');
        document.getElementById('website').setAttribute('contenteditable', 'false');
        document.getElementById('home-address').setAttribute('contenteditable', 'false');
        document.getElementById('languages').setAttribute('contenteditable', 'false');
        document.getElementById('name').setAttribute('contenteditable', 'false');
        document.getElementById('position').setAttribute('contenteditable', 'false');
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
    var toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
    var skillsList = document.getElementById("skills-list");
    var skillsVisible = true;
    if (toggleSkillsBtn && skillsList) {
        toggleSkillsBtn.addEventListener("click", function () {
            skillsVisible = !skillsVisible;
            skillsList.style.display = skillsVisible ? "block" : "none";
            // Change the button style based on visibility
            toggleSkillsBtn.textContent = skillsVisible ? "x" : "+";
            // Change the button background color based on visibility
            toggleSkillsBtn.style.backgroundColor = skillsVisible ? "#ff7675" : "#74b9ff";
        });
    }
    ;
    // Get references to the experience form
    var experienceForm = document.getElementById('experienceForm');
    var experienceList = document.getElementById('experience-list');
    // Array to hold multiple experiences
    var experiences = [];
    // Handle Experience Form Submission
    experienceForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form reload on submit
        // Get values from the form inputs
        var companyName = document.getElementById('inputCompanyName').value;
        var jobDescription = document.getElementById('inputJobDescription').value;
        // Add new experience to the array
        experiences.push({ companyName: companyName, jobDescription: jobDescription });
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
            experiences.forEach(function (experience, index) {
                var experienceItem = document.createElement('li');
                experienceItem.className = 'list-item';
                // Add content and delete button to the list item
                experienceItem.innerHTML = "\n                    <h4 class=\"list-item__title\">".concat(experience.companyName, "</h4>\n                    <p class=\"list-item__text\">").concat(experience.jobDescription, "</p>\n                    <button class=\"delete-btn\" data-index=\"").concat(index, "\">Delete</button>\n                ");
                // Append the new experience item to the list
                experienceList.appendChild(experienceItem);
            });
        }
    }
    // Delegate event handling for dynamically added delete buttons
    experienceList.addEventListener('click', function (event) {
        var target = event.target;
        if (target && target.classList.contains('delete-btn')) {
            // Get the index of the experience to delete
            var index = parseInt(target.getAttribute('data-index') || '0', 10);
            // Remove experience from the array
            experiences.splice(index, 1);
            // Update the experience list
            updateExperienceList();
            // Show success alert (if you have an alert function)
            showCustomAlert('Experience deleted successfully!', 'error');
        }
    });
    // Get references to the education form
    var educationForm = document.getElementById('educationForm');
    var educationList = document.getElementById('education-list');
    // Array to hold multiple experiences
    var educations = [];
    // Handle Experience Form Submission
    educationForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form reload on submit
        // Get values from the form inputs
        var degreeName = document.getElementById('inputDegree').value;
        var collegeName = document.getElementById('inputCollege').value;
        // Add new experience to the array
        educations.push({ degreeName: degreeName, collegeName: collegeName });
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
            educations.forEach(function (education, index) {
                var educationItem = document.createElement('li');
                educationItem.className = 'list-item';
                // Add content and delete button to the list item
                educationItem.innerHTML = "\n                    <h4 class=\"list-item__title\">".concat(education.collegeName, "</h4>\n                    <p class=\"list-item__date\"><i style=\"text-transform: capitalize;\">From:</i> ").concat(education.degreeName, "</p>\n                    <button class=\"delete-btn\" data-index=\"").concat(index, "\">Delete</button>\n                ");
                // Append the new education item to the list
                educationList.appendChild(educationItem);
            });
        }
    }
    // Delegate event handling for dynamically added delete buttons
    educationList.addEventListener('click', function (event) {
        var target = event.target;
        if (target && target.classList.contains('delete-btn')) {
            // Get the index of the education to delete
            var index = parseInt(target.getAttribute('data-index') || '0', 10);
            // Remove education from the array
            educations.splice(index, 1);
            // Update the education list
            updateEducationList();
            // Show success alert
            showCustomAlert('Education Deleted successfully!', 'error');
        }
    });
    // Get references to necessary DOM elements
    var skillForm = document.getElementById('skillForm');
    var skillList = document.getElementById('skills-list');
    // Track whether the static entries have been removed
    var staticEntriesRemoved = false;
    // Handle Skill Form Submission
    skillForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form reload on submit
        // Get values from the form inputs
        var skillInput = document.getElementById('skillInput');
        var levelInput = document.getElementById('levelInput');
        var skillName = skillInput.value.trim();
        var skillLevel = parseInt(levelInput.value);
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
        var newSkillItem = document.createElement('li');
        newSkillItem.className = 'skills-list__item';
        // Skill name and dynamic skill level (based on input)
        newSkillItem.innerHTML = "\n            ".concat(skillName, "\n            <div class=\"level level-").concat(skillLevel, "\"></div>\n        ");
        // Append the new skill to the list
        skillList.appendChild(newSkillItem);
        // Show success alert
        showCustomAlert('Skills Added successfully!', 'success');
        // Clear the form inputs
        skillInput.value = '';
        levelInput.value = '';
    });
});
