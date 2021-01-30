const questionContainerElement = document.getElementById('question-container')


const input_important = document.createElement('INPUT');
questionContainerElement.appendChild(INPUT);




    function checkPswd() {
        var password = document.getElementById("important").value;
        document.cookie = password;
        var node = document.createElement("LI");
        new_thing = document.createTextNode(password);
        node.appendChild(new_thing);
        questionContainerElement.appendChild(node);
    }



