

// myHeading.innerHTML="hello world";

var myImage = document.querySelector("img");
myImage.onclick= function () {
    var mysrc = myImage.getAttribute('src');
    if(mysrc === "images/firefox-icon.png"){
        myImage.setAttribute("src","images/1.jpg")
    }else{
        myImage.setAttribute("src","images/firefox-icon.png")
    }
};

var myHeading = document.querySelector("h1");
var mybuton = document.querySelector("button");
// function setUserName(){
//     var myName = prompt("please enter your name");
//     localStorage.setItem("name",myName);
//     myHeading.innerHTML = "you are cool，" + myName;
//     if( !localStorage.getItem("name")){
//         setUserName()
//     }else{
//         var storedName =localStorage.getItem("name");
//         myHeading.innerHTML="you are cool，" + storedName ;
//     }
// }
mybuton.onclick=function () {
    setUserName()
};
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    if(!localStorage.getItem('name')) {
        setUserName();
    } else {
        var storedName = localStorage.getItem('name');
        myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
    }
}