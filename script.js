const questionContainerElement = document.getElementById('question-container')



    function checkPswd() {
        var password = document.getElementById("important").value;
        setCookie("username", password, 30);
        var node = document.createElement("LI");
        new_thing = document.createTextNode(password);
        node.appendChild(new_thing);
        questionContainerElement.appendChild(node);
    }

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
        cookie_creation = document.createTextNode(user);
        node.appendChild(cookie_creation);
        questionContainerElement.appendChild(node);
  }
}