let form = document.querySelector("#career-form");
let input = document.querySelector("#career-input");

form.addEventListener("submit", function(event) {
    event.preventDefault();
  let button = document.querySelector('input[type="submit"]');
button.value = "💡 Generating Advice...";
button.style.backgroundColor = "brown";

  let userGoal = input.value;
 let careerResults = document.querySelector("#career-results");
careerResults.innerHTML = "Generating advice💡...";
  let apiKey = "4a80febobcebc8bf8513ctfac0a134d1"

 let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${userGoal}&context=Give concise career guidance. Use a title, a short introduction, and exactly 3 numbered sections with short points. Focus only on the most important advice. Avoid long explanations. Format using HTML headings, paragraphs, and lists. Do not use Markdown.&key=${apiKey}`;

  axios.get(apiUrl)
    .then(function(response) {
      let careerResults = document.querySelector("#career-results");

      careerResults.innerHTML = response.data.answer;
    })
    .catch(function(error) {
      console.log(error);
    });
});