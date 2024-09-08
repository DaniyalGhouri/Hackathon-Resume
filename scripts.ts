document.addEventListener('DOMContentLoaded', () => {
    // Get the button and skills list elements
    const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
    const skillsList = document.getElementById('skills-list') as HTMLUListElement;

    // Function to toggle the visibility of the skills list
    const toggleSkills = () => {
        if (skillsList.classList.contains('hidden')) {
            skillsList.classList.remove('hidden');
            toggleButton.textContent = 'Hide Skills';
        } else {
            skillsList.classList.add('hidden');
            toggleButton.textContent = 'Show Skills';
        }
    };

    // Attach event listener to the button
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleSkills);
    }
});
