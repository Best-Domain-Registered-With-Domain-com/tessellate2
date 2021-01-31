const qc1 = document.getElementById("question-container1");
const button1 = document.getElementById("first-button");
const entry1 = document.getElementById("important1");

const qc2 = document.getElementById("question-container2");
const button2 = document.getElementById("second-button");
const entry2 = document.getElementById("important2");

const qc3 = document.getElementById("question-container3");
const button3 = document.getElementById("third-button");
const entry3 = document.getElementById("important3");

function checkPswd(order) {
  const remembranceOrder = order;
  if (remembranceOrder === 1) {
    const password = document.getElementById("important1").value;
    setCookie("username1", password, 2030);
    let node = document.createElement("LI");
    new_thing = document.createTextNode(password);
    node.appendChild(new_thing);
    qc1.appendChild(node);
    button1.classList.add("hide");
    entry1.classList.add("hide");
  } else if (remembranceOrder === 2) {
    const password = document.getElementById("important2").value;
    setCookie("username2", password, 2030);
    let node = document.createElement("LI");
    new_thing = document.createTextNode(password);
    node.appendChild(new_thing);
    qc2.appendChild(node);
    button2.classList.add("hide");
    entry2.classList.add("hide");
  } else if (remembranceOrder === 3) {
    const password = document.getElementById("important3").value;
    setCookie("username3", password, 2030);
    let node = document.createElement("LI");
    new_thing = document.createTextNode(password);
    node.appendChild(new_thing);
    qc3.appendChild(node);
    button3.classList.add("hide");
    entry3.classList.add("hide");
  }
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      // moves across each ;-separated element of ca array if it's just a space
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      // if we reach the index of the cookie name, we return it
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"; // use | as divider
}

function checkAllCookies() {
  for (let i = 1; i <= 3; i++) {
    checkCookie(i);
  }
}

function checkCookie(order) {
  const remembranceOrder = order;
  let user;
  if (remembranceOrder === 1) {
    user = getCookie("username1");
    if (user !== "") {
      cookie_creation = document.createTextNode(user);
      var node = document.createElement("LI");
      node.appendChild(cookie_creation);
      qc1.appendChild(node);
      button1.classList.add("hide");
      entry1.classList.add("hide");
    }
  } else if (remembranceOrder === 2) {
    user = getCookie("username2");
    if (user !== "") {
      cookie_creation = document.createTextNode(user);
      var node = document.createElement("LI");
      node.appendChild(cookie_creation);
      qc2.appendChild(node);
      button2.classList.add("hide");
      entry2.classList.add("hide");
    }
  } else if (remembranceOrder === 3) {
    user = getCookie("username3");
    if (user !== "") {
      cookie_creation = document.createTextNode(user);
      var node = document.createElement("LI");
      node.appendChild(cookie_creation);
      qc3.appendChild(node);
      button3.classList.add("hide");
      entry3.classList.add("hide");
    }
  }

  // if (!user) {
  //   cookie_creation = document.createTextNode(user);
  //   var node = document.createElement("LI");
  //   node.appendChild(cookie_creation);
  //   questionContainerElement.appendChild(node);
  //   firstButtonElement.classList.add("hide");
  //   firstEntry.classList.add("hide");
  // }
}
