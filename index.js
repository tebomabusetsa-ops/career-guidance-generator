let form = document.querySelector("#career-form");
let input = document.querySelector("#career-input");
form.addEventListener("submit", function(event) {
    event.preventDefault();

    let userGoal = input.value;

    console.log(userGoal);
});