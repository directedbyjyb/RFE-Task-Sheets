// Function to toggle the hamburger menu visibility
function toggleMenu() {
    const menu = document.getElementById('menuItems');
    const body = document.body;

    menu.classList.toggle('open'); // Toggle the "open" class to show/hide the menu

    if (menu.classList.contains('open')) {
        body.classList.add('menu-open'); // Add the blur effect
    } else {
        body.classList.remove('menu-open'); // Remove the blur effect
    }
}

// Hide the hamburger menu on page load
window.onload = function () {
    document.getElementById('hamburgerMenu').style.display = 'none';
};

// Function to open a Google Form in a new tab
function openGoogleForm(url) {
    window.open(url, '_blank'); // Open the form URL in a new tab
}

// Function to show the selection view again and hide the menu
function showSelection() {
    // Reset selections to default
    document.getElementById('location').value = 'RAC';
    document.getElementById('day').value = 'monday';
    document.getElementById('shift').value = 'Opening';

    // Show the selection view and hide the document view
    document.getElementById('selectionView').style.display = 'block';
    document.getElementById('documentView').style.display = 'none';

    // Hide the hamburger menu when returning to selection
    document.getElementById('hamburgerMenu').style.display = 'none';

    // Hide menu items and remove blur effect if open
    const menu = document.getElementById('menuItems');
    menu.classList.remove('open');
    document.body.classList.remove('menu-open');
}

// Function to handle selection and load Google Docs
// Show hamburger menu after task selection
function loadTaskDocs() {
    const location = document.getElementById('location').value;
    const day = document.getElementById('day').value;
    const shift = document.getElementById('shift').value;

    const taskDocs = getTaskDocsURLs(location, day, shift);
    document.getElementById('taskDocContainer').innerHTML = '';

    taskDocs.forEach((docURL, index) => {
        const button = document.createElement('button');
        button.className = 'collapsible';
        button.innerHTML = `${["Task Sheets", "Photo Initiative", "GF + LT"][index]} <span class="indicator">▼</span>`;
        button.onclick = function () {
            this.classList.toggle('active');
            const indicator = this.querySelector('.indicator');
            const content = this.nextElementSibling;
            if (content.classList.contains('expanded')) {
                content.style.maxHeight = null;
                content.classList.remove('expanded');
                indicator.style.transform = 'rotate(0deg)';
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                content.classList.add('expanded');
                indicator.style.transform = 'rotate(180deg)';
            }
        };

        const content = document.createElement('div');
        content.className = 'content';
        const iframe = document.createElement('iframe');
        iframe.src = docURL;
        content.appendChild(iframe);

        document.getElementById('taskDocContainer').appendChild(button);
        document.getElementById('taskDocContainer').appendChild(content);
    });

    // Show task view, hide selection view
    document.getElementById('selectionView').style.display = 'none';
    document.getElementById('documentView').style.display = 'block';

    // Show the hamburger menu after task selection
    document.getElementById('hamburgerMenu').style.display = 'block';
}

// Function to display date and shift
function displayDateAndShift() {
    const dateContainer = document.getElementById('dateDisplay');
    const shiftContainer = document.getElementById('shiftDisplay');

    // Get the current date and time
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // Format the date: e.g., "January 23, 2025"
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);

    // Determine the ongoing shift
    let ongoingShift = "No Shift"; // Default if time doesn't match any shift
    if (hours >= 6 && (hours < 10 || (hours === 10 && minutes <= 45))) {
        ongoingShift = "Opening";
    } else if (
        (hours === 11 || hours < 15) ||
        (hours === 10 && minutes > 45)
    ) {
        ongoingShift = "Mid-Morning";
    } else if (
        (hours === 15 || hours < 19) ||
        (hours === 14 && minutes > 45)
    ) {
        ongoingShift = "Afternoon";
    } else if (hours >= 19 && hours <= 23) {
        ongoingShift = "Closing";
    }

    // Update the date and shift displays
    dateContainer.innerText = `Date: ${formattedDate}`;
    shiftContainer.innerText = `Ongoing Shift: ${ongoingShift}`;
  setInterval(displayDateAndShift, 60000); // Refresh every 60 seconds

}

// Call the function to display the date and shift on page load
displayDateAndShift();

// Function to toggle the Help Modal
function toggleHelp() {
    const modal = document.getElementById('helpModal');
    const isVisible = modal.style.display === 'flex';
    modal.style.display = isVisible ? 'none' : 'flex';

    // Start changing emojis when the modal is opened
    if (!isVisible) startEmojiChange();
}

// Function to change emojis in the modal
function startEmojiChange() {
    const emojiContainer = document.getElementById('emojiContainer');
    const emojis = ['😎', '😊', '🤓', '🙌', '🎉', '👍', '💡', '✨']; // List of fun emojis
    let index = 0;

    // Clear any existing interval to avoid duplication
    if (window.emojiInterval) clearInterval(window.emojiInterval);

    // Start an interval to cycle through emojis
    window.emojiInterval = setInterval(() => {
        emojiContainer.innerText = emojis[index];
        index = (index + 1) % emojis.length; // Loop back to the start
    }, 1000); // Change every 1 second
}

// Stop changing emojis when the modal is closed
function stopEmojiChange() {
    if (window.emojiInterval) clearInterval(window.emojiInterval);
}
