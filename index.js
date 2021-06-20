// Array of words
var welcome = {
  english: "Welcome",
  czech: "Vitejte",
  danish: "Velkomst",
  dutch: "Welkom",
  estonian: "Tere tulemast",
  finnish: "Tervetuloa",
  flemish: "Welgekomen",
  french: "Bienvenue",
  german: "Willkommen",
  irish: "Failte",
  italian: "Benvenuto",
  latvian: "Gaidits",
  lithuanian: "Laukiamas",
  polish: "Witamy",
  spanish: "Bienvenido",
  swedish: "Valkommen",
  welsh: "Croeso",
};
var languages = [
  "english",
  "czech",
  "danish",
  "dutch",
  "estonian",
  "finnish",
  "flemish",
  "french",
  "german",
  "irish",
  "italian",
  "latvian",
  "lithuanian",
  "polish",
  "spanish",
  "swedish",
  "welsh",
];
var t = setInterval(function () {
  var randomNumber = Math.round(Math.random() * (languages.length - 1));
  $("#changing").html(welcome[languages[randomNumber]]);
}, 2000);
