fetch("https://trainingprogram942022.herokuapp.com/")
  .then((response) => response.json())
  .then((json) => {
    var students = document.getElementById("students");
    json.Sheet1.forEach((element) => {
      var option = document.createElement("option");
      option.innerHTML = element.A;
      students.appendChild(option);
    });
  });