function toggleEditMode(button) {
    const row = button.closest("tr");
    row.querySelectorAll(".display-only").forEach(el => el.style.display = "none");
    row.querySelectorAll(".edit-only").forEach(el => el.style.display = "inline");
}

function confirmEdit(form) {
    return confirm("Are you sure you want to save these changes?");
}
