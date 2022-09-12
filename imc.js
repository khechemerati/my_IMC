const submit = document.querySelector(".submit");
const taille = document.querySelector("#taille");
const poids = document.querySelector("#poids");
const data = document.querySelector(".attente-resultat");
const resultat = document.querySelector(".resultat");
submit.addEventListener("click", () => {
  if (poids.value <= 0 || taille.value <= 0) {
    data.innerHTML = "Woops veuillez rentrer des données";
    data.classList.add("big-text");
  } else {
    let myResult = (poids.value / Math.pow(taille.value, 2)) * 10000;
    resultat.innerHTML = Math.round(myResult);
    if (myResult < 18) {
      data.innerHTML = "Maigre";
      resultat.style.color = "#6495ED";
    } else if (myResult > 18 && myResult <= 25) {
      data.innerHTML = "Corpulenc normale";

      resultat.style.color = "#006400";
    } else if (myResult > 25 && myResult <= 30) {
      data.innerHTML = "Obesité moderée";
      resultat.style.color = "#DAA520";
    } else if (myResult > 30 && myResult <= 35) {
      data.innerHTML = "Obesitée sévère";
      resultat.style.color = "#DC143C";
    } else if (myResult > 40) {
      data.innerHTML = "Obesité morbide ou massive";
      resultat.style.color = "#FF0000";
    }
  }
});
