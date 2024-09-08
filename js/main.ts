
document.addEventListener('DOMContentLoaded', () => {

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
});
