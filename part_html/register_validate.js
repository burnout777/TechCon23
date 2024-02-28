function validateForm() {
    // Get username, surname, partyno. and email from the form
    var forename = document.getElementById('forename').value;
    var surname = document.getElementById('surname').value;
    var email = document.getElementById('email').value;

// checks if the forename includes spaces, and that it contains no special spaces
    if (forename.includes(' ') || !/^[a-zA-Z0-9]+$/.test(forename)) {
        // return false if it does not meet the requirements
        alert('Invalid forename. Please ensure it has no spaces, and contains no special symbols.');
        return false;
    }
// checks to see if the forename includes spaces
    if (surname.includes(' ') || !/^[a-zA-Z0-9]+$/.test(surname)) {
        // return false if it does not meet the requirements
        alert('Your surname must include no spaces and no special characters');
        return false;
    }

// ensures email contains an @ symbol
    if (!email.includes('@')) {
        // return false if it does not meet the requirements
        alert('Invalid email. Please ensure it contains the "@" symbol.');
        return false;
    }
// alerts the user that they are registered
    alert('You are registered as: ' + forename);
    return true;

}
