function filterSchedule() {
    // Get the string of the dayFilter that has been selected
    var selectedDay = document.getElementById("dayFilter").value;
    // Get all the rows from the schedule table
    var rows = document.querySelectorAll("#scheduleTable tbody tr");

    // Loop through all the rows via lambda
    rows.forEach(function (row) {
        // Get the day of the event for that row
        var day = row.getAttribute("data-day");

        // If the filtered/selected day is 'all' or is equal to the day of the event for that row
        if (selectedDay === "all" || selectedDay === day) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}
