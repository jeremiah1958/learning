const eventsList = document.getElementById('events-list');

// Function to add an event
function addEvent() {
    const eventDate = document.getElementById('event-date').value;
    const eventName = document.getElementById('event-name').value;

    if (!eventDate || !eventName) {
        alert('Please enter both date and event name.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = `${eventDate}: ${eventName}`;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.onclick = function() {
        eventsList.removeChild(listItem);
    };

    listItem.appendChild(deleteButton);
    eventsList.appendChild(listItem);

    // Clear input fields
    document.getElementById('event-date').value = '';
    document.getElementById('event-name').value = '';
}
