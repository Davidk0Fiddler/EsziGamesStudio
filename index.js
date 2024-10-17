document.getElementById("rolunk").addEventListener("click", function() {
    const target = document.getElementById("section2");
    target.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("blog").addEventListener("click", function() {
    const target = document.getElementById("section3");
    target.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("kapcsolat").addEventListener("click", function() {
    const target = document.getElementById("section4");
    target.scrollIntoView({ behavior: 'smooth' });
});

let banner = document.getElementById("banner");

let banner_title1 = document.getElementById("banner-title1");
let banner_title2 = document.getElementById("banner-title2");

banner_title1.addEventListener("mouseover", function(){
    console.log("a");
    banner.style.backgroundImage = "url(start.jpg)";
});

banner_title2.addEventListener("mouseover", function(){
    console.log("b");
    banner.style.backgroundImage = "url(nyiltnap.png)";
});