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

// Function to open a Google Form in a new tab
function openGoogleForm(url) {
    window.open(url, '_blank'); // Open the form URL in a new tab
}

// Function to show the selection view again
function showSelection() {
    // Reset selections to default
    document.getElementById('location').value = 'RAC';
    document.getElementById('day').value = 'monday';
    document.getElementById('shift').value = 'Opening';

    // Show the selection view and hide the document view
    document.getElementById('selectionView').style.display = 'block';
    document.getElementById('documentView').style.display = 'none';

    // Hide the hamburger menu items and remove blur effect
    const menu = document.getElementById('menuItems');
    menu.classList.remove('open');
    document.body.classList.remove('menu-open');
}

// Function to handle selection and load Google Docs
function loadTaskDocs() {
    const location = document.getElementById('location').value;
    const day = document.getElementById('day').value;
    const shift = document.getElementById('shift').value;

    // Map the location, day, and shift to the correct Google Docs URLs
    const taskDocs = getTaskDocsURLs(location, day, shift);

    // Clear any previous task docs before adding new ones
    document.getElementById('taskDocContainer').innerHTML = '';

    // Create collapsible sections for each of the task docs
    const docNames = ["Task Sheets", "Photo Initiative", "GF + LT"];
    taskDocs.forEach((docURL, index) => {
        const button = document.createElement('button');
        button.className = 'collapsible';
        button.innerText = docNames[index];
        button.onclick = function () {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
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

    // Add a static "Special Tasks" button
    const specialTaskButton = document.createElement('button');
    specialTaskButton.className = 'collapsible';
    specialTaskButton.innerText = 'Special Tasks';
    specialTaskButton.onclick = function () {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    };

    const specialTaskContent = document.createElement('div');
    specialTaskContent.className = 'content';
    const specialIframe = document.createElement('iframe');
    specialIframe.src = 'https://example.com/special-tasks-doc'; // Replace with your actual URL
    specialTaskContent.appendChild(specialIframe);

    document.getElementById('taskDocContainer').appendChild(specialTaskButton);
    document.getElementById('taskDocContainer').appendChild(specialTaskContent);

    // Hide the selection view and show the document view
    document.getElementById('selectionView').style.display = 'none';
    document.getElementById('documentView').style.display = 'block';
}

// Function to display the current date and day
function displayDate() {
    const dateContainer = document.getElementById('dateDisplay');

    // Get the current date
    const today = new Date();

    // Format the date: e.g., "January 23, 2025"
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);

    // Set the date in the container
    dateContainer.innerText = `Today is: ${formattedDate}`;
}

// Call the function to display the date on page load
displayDate();
