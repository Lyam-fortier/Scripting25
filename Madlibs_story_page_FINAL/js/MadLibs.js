console.log("hello Forms!");
function write() {
  console.log("Inside the function");

  let username = document.getElementById("spookyNAME").value;
  console.log(username);

  let animal = document.getElementById("spookyANIMAL").value;
  console.log(animal);

  let Activity = document.getElementById("spookyNOUN").value;
  console.log(Activity);

  let food = document.getElementById("spookyFOOD").value;
  console.log(food);

  let Forest;
  if (document.querySelector("input[name='Forest']:checked") != null) {
    Forest = document.querySelector("input[name='Forest']:checked").value;
    console.log(Forest);
  }
  let ForestMessag;
  if (Forest == "fancy") {
    ForestMessag = "a nice forest";
    document.getElementById("life").style.backgroundImage =
      "url('images/Nice.jpg')";
  } else if (Forest == "nice") {
    ForestMessag = "a creepy forest";
    document.getElementById("life").style.backgroundImage =
      "url('images/creepy_forest.jpg')";
  } else if (Forest == "dead") {
    ForestMessag = "a dead forest";
    document.getElementById("life").style.backgroundImage =
      "url('images/Dead.jpeg')";
  } else if (Forest == "Magic") {
    ForestMessag = "a magic forest";
    document.getElementById("life").style.backgroundImage =
      "url('images/Magic.webp')";
  }
  console.log(ForestMessag);

  document.getElementById("Story1").innerHTML =
    "<h3>there once lived a person named " +
    username +
    " they really enjoy " +
    animal +
    " their favorite food is " +
    food +
    " oneday when exploring " +
    ForestMessag +
    " they saw a " +
    animal +
    "who wanted to take then on a trip to a new and exciting adventure where they can do " +
    Activity +
    " forever!</h3>";

  let esername = document.getElementById("CookyNAME").value;
  console.log(esername);

  let lnimal = document.getElementById("CookyANIMAL").value;
  console.log(lnimal);

  let noun = document.getElementById("CookyNOUN").value;
  console.log(noun);

  let dood = document.getElementById("CookyFOOD").value;
  console.log(dood);

  let Fores;
  if (document.querySelector("input[name='Fores']:checked") != null) {
    Fores = document.querySelector("input[name='Fores']:checked").value;
    console.log(Fores);
  }
  let ForestMessage;

  if (Fores == "mive") {
    ForestMessage = "a nice forest";
    document.getElementById("life").style.backgroundImage =
      "url('images/Nice.jpg')";
  } else if (Fores == "grive") {
    ForestMessage = "a creepy forest";
    document.getElementById("life").style.backgroundImage =
      "url('images/creepy_forest.jpg')";
  } else if (Fores == "pive") {
    ForestMessage = "a dead forest";
    document.getElementById("life").style.backgroundImage =
      "url('images/Dead.jpeg')";
  } else if (Fores == "dive") {
    ForestMessage = "a magic forest";
    document.getElementById("life").style.backgroundImage =
      "url('images/Magic.webp')";
  }
  console.log(ForestMessage);
  document.getElementById("Story2").innerHTML =
    "<h3>there once lived a person named " +
    esername +
    " they really enjoy " +
    lnimal +
    " their favorite food is " +
    dood +
    " oneday when exploring " +
    ForestMessage +
    " they saw a " +
    lnimal +
    "who wanted to take then on a trip to a new and exciting adventure where they can do " +
    Activity +
    " forever.</h3>";
}
