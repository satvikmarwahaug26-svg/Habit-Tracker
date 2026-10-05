const habitInput = document.getElementById("habitInput");
const addButton = document.getElementById("addButton");
const habitList = document.getElementById("habitList");

addButton.addEventListener("click", function () {

    const habitText = habitInput.value;

    if (habitText === "") {
        return;
    }

    const habit = document.createElement("div");
    habit.classList.add("habit");

    const habitName = document.createElement("span");
    habitName.textContent = habitText;

    const checkpoint = document.createElement("input");
    checkpoint.type = "checkbox";

    habit.appendChild(habitName);
    habit.appendChild(checkpoint);

    habitList.appendChild(habit);

    habitInput.value = "";
});