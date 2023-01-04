function encrypt(){
    var textInput = document.getElementById("inputText").value.toLowerCase();

    if (textInput.length > 0) {
            //Encrypt the input text
    var textOutput= textInput.replace(/e/img, "enter");
    textOutput = textOutput.replace(/o/img, "ober");
    textOutput = textOutput.replace(/i/img, "imes");
    textOutput = textOutput.replace(/a/img, "ai");
    textOutput = textOutput.replace(/u/img, "ufat");

    //Showing the encrypted text
    document.getElementById("rightImg").style.display = "none";
    document.getElementById("text1").style.display = "none";
    document.getElementById("text2").innerHTML=textOutput;
    document.getElementById("Copy").style.display = "show";
    document.getElementById("Copy").style.display = "inherit";
}}
function decrypt(){
    var textInput = document.getElementById("inputText").value.toLowerCase();

    if (textInput.length > 0) {
    //decrypt the input text
    var textOutput= textInput.replace(/enter/img, "e");
    textOutput = textOutput.replace(/ober/img, "o");
    textOutput = textOutput.replace(/imes/img, "i");
    textOutput = textOutput.replace(/ai/img, "a");
    textOutput = textOutput.replace(/ufat/img, "u");

    //Showing the encrypted text
    document.getElementById("rightImg").style.display = "none";
    document.getElementById("text1").style.display = "none";
    document.getElementById("text2").innerHTML=textOutput;
    document.getElementById("Copy").style.display = "show";
    document.getElementById("Copy").style.display = "inherit";
    }
}

function copy(){
    var content = document.querySelector("#text2");
    content.select();
    document.execCommand("copy");
    alert("Copiado")
}

