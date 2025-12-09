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
  if (document.querySelector("input[name='Condtion']:checked") != null) {
    Forest = document.querySelector("input[name='Condtion']:checked").value;
    console.log(Forest);
  }
  let ForestMessag;
  if (Forest == "fancy") {
    ForestMessag = "It's nice";
    document.getElementById("life").style.backgroundImage =
      "url('Images/Nice.jpg')";
  } else if (Forest == "nice") {
    ForestMessag = "it's creepy";
    document.getElementById("life").style.backgroundImage =
      "url('Images/creepy_forest.jpg')";
  } else if (Forest == "dead") {
    ForestMessag = "it's dead";
    document.getElementById("life").style.backgroundImage =
      "url('Images/Dead.jpeg')";
  } else if (Forest == "magic") {
    ForestMessag = "its magic";
    document.getElementById("life").style.backgroundImage =
      "url('Images/Magic.webp')";
  }

  document.getElementById("Story1").innerHTML =
    "<h3>there once lived a person named " +
    username +
    " they really enjoy " +
    animal +
    " their favorite food is " +
    food +
    " oneday when exploring" +
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
  if (document.querySelector("input[name='Condtion']:checked") != null) {
    Fores = document.querySelector("input[name='Condtion']:checked").value;
    console.log(Fores);
  }
  let ForestMessage;
  console.log(ForestMessage);
  if (Fores == "mive") {
    ForestMessage = "It's nice";
    document.getElementById("life").style.backgroundImage =
      "url('Images/Nice.jpg')";
  } else if (Fores == "grive") {
    ForestMessage = "it's creepy";
    document.getElementById("life").style.backgroundImage =
      "url('Images/creepy_forest.jpg')";
  } else if (Fores == "pive") {
    ForestMessage = "it's dead";
    document.getElementById("life").style.backgroundImage =
      "url('Images/Dead.jpeg')";
  } else if (Fores == "grive") {
    ForestMessage = "its magic";
    document.getElementById("life").style.backgroundImage =
      "url('Images/Magic.webp')";
  }
  document.getElementById("Story2").innerHTML =
    "<h3>there once lived a person named " +
    esername +
    " they really enjoy " +
    lnimal +
    " their favorite food is " +
    dood +
    " oneday when exploring" +
    ForestMessage +
    " they saw a " +
    lnimal +
    "who wanted to take then on a trip to a new and exciting adventure where they can do " +
    Activity +
    " forever.</h3>";
}
