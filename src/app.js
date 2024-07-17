/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["El perro", "Mi abuela", "El cartero", "Mi pajaro", "Mi gato"];
  let action = ["se comio", "orinó", "ralló", "rompio", "enterró"];
  let what = [
    "los deberes",
    "el telefono",
    "el coche",
    "las gafas",
    "la alfombra"
  ];
  let when = [
    "antes de clase",
    "cuando estaba durmiendo",
    "mientras hacia mi ejercicio",
    "durante el almuerzo",
    "mientras estaba rezando"
  ];

  function generateExcuse() {
    let randomWho = Math.floor(Math.random() * who.length);
    let randomAction = Math.floor(Math.random() * action.length);
    let randomWhat = Math.floor(Math.random() * what.length);
    let randomWhen = Math.floor(Math.random() * when.length);
    let excuse =
      who[randomWho] +
      " " +
      action[randomAction] +
      " " +
      what[randomWhat] +
      " " +
      when[randomWhen];
    return excuse;
  }

  generateExcuse();
  document.getElementById("excuse").innerHTML = generateExcuse();
};
