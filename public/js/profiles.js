function toggleEditUsername(userId) {
    console.log(`Toggling edit mode for ${userId}`);

    // Select elements directly by ID
    const displaySpan = document.getElementById(`${userId}-display`);
    const inputField = document.getElementById(`${userId}-input`);
    const editButton = document.getElementById(`${userId}-edit-button`);
    const saveButton = document.getElementById(`${userId}-save-button`);

    // Check if the elements were found
    if (!displaySpan || !inputField || !editButton || !saveButton) {
        console.log("One or more elements were not found.");
        return;
    }

    if (displaySpan.style.display === "none") {
        // Switch to display mode
        displaySpan.style.display = "inline";
        inputField.style.display = "none";
        editButton.style.display = "inline";
        saveButton.style.display = "none";
    } else {
        // Switch to edit mode
        displaySpan.style.display = "none";
        inputField.style.display = "inline";
        editButton.style.display = "none";
        saveButton.style.display = "inline";
    }
}


function confirmUsernameEdit(form, userId) {
    const inputField = document.getElementById(`${userId}-input`);
    const newUsername = inputField.value.trim();
    if (!newUsername) {
        alert("Username cannot be empty!");
        return false;
    }
    return confirm(`Are you sure you want to change the username to "${newUsername}"?`);
}

