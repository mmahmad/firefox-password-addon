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
        spanTag.innerHTML = "Click to toggle password visibility".italics();
        spanTag.style.fontSize = "1em";
        spanTag.style.color = "blue";
        // spanTag.style.textDecoration = "underline";
        spanTag.style.cursor = "pointer";
        spanTag.onclick = function() {
            if (document.getElementById(input_id).type === "password") {
                // convert its type to "text"
                document.getElementById(input_id).type = "text";
            } else {
                // convert its type to "password"
                document.getElementById(input_id).type = "password";
            }

        };

        spanTag.onmouseover = function() {
            spanTag.style.textDecoration = "underline";
        };
        spanTag.onmouseleave = function() {
            spanTag.style.textDecoration = "none";
        };
        inputNode.parentNode.insertBefore(spanTag, inputNode.nextSibling);
    }
}