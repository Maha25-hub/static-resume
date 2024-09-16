// Get elements by ID
var toggleSkillsBtn = document.getElementById('toggle-skills-btn');
var skillsSection = document.getElementById('skills-section');
// Add event listener to the button
toggleSkillsBtn.addEventListener('click', function () {
    // Toggle visibility by checking the current display value
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
});
