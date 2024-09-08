document.addEventListener('DOMContentLoaded', function () {
    // Toggle the skills section visibility
    var toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
    var skillsList = document.getElementById("skills-list");
    var skillsVisible = false;
    if (toggleSkillsBtn && skillsList) {
        toggleSkillsBtn.addEventListener("click", function () {
            skillsVisible = !skillsVisible;
            skillsList.style.display = skillsVisible ? "block" : "none";
        });
    }
    ;
});
