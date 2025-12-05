function big() {
    alert("Hello, world!");
    document.getElementById("textBox").style.fontSize = "24px";
}
function changeStyle(){
    alert("Change style")
    if (document.getElementById("fancy").checked){
        document.getElementById("textBox").style.fontWeight = "bold";
        document.getElementById("textBox").style.color = "blue";
        document.getElementById("textBox").style.textDecoration = "underline";
    }
    else if (document.getElementById("boring").checked){
        document.getElementById("textBox").style.fontWeight = "normal";
        document.getElementById("textBox").style.color = "black";
        document.getElementById("textBox").style.textDecoration = "none";
        document.getElementById("textBox").style.textTransform = "none";
    }
}
function moo(){
    document.getElementById("textBox").style.textTransform = "uppercase";
    let text = document.getElementById("textBox").value;
    let parts = text.split(".");
    text = parts.join("-Moo");
    document.getElementById("textBox").value = text;
}
