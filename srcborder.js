var inputs, index;

inputs = document.getElementsByTagName('input');
for (index = 0; index < inputs.length; ++index) {
    // get the "type" of the input
    var input_type = inputs[index].type;
    if (input_type == "password") {
        console.log("password input found!");
        
        var input_id = inputs[index].id;

        // show a small warning below the field
        inputNode = document.getElementById(input_id)
        var spanTag = document.createElement("span");
        spanTag.innerHTML = "Warning: your password is visible!".italics();
        spanTag.style.fontSize = "1em";
        spanTag.style.color = "red";
        inputNode.parentNode.insertBefore(spanTag, inputNode.nextSibling);
        
        // convert its type to "text"
        document.getElementById(input_id).type = "text";
    }
}