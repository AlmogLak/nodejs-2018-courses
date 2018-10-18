// Saves options to chrome.storage.sync.
function save_options() {
    const webSocket = document.getElementById('webSocket').checked;
    const url = document.getElementById('baseUrl').value;
    const items = document.getElementById('items').value;
    chrome.storage.sync.set({
        webSocket, url, items
    }, function () {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value webSocket = false.
    chrome.storage.sync.get({
        webSocket: false,
        url: 'http://localhost:3000',
        items: '/api/items'
    }, function (items) {
        document.getElementById('webSocket').checked = items.webSocket;
        document.getElementById('baseUrl').value = items.url;
        document.getElementById('items').value = items.items;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);