// Get elements by ID
const toggleSkillsBtn = document.getElementById('toggle-skills-btn') as HTMLButtonElement;
const skillsSection = document.getElementById('skills-section') as HTMLElement;

// Add event listener to the button
toggleSkillsBtn.addEventListener('click', () => {
    // Toggle visibility by checking the current display value
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';
    } else {
        skillsSection.style.display = 'none';
    }
});
