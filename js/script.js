document.getElementById("logo").addEventListener("mouseover", function () {
    let logo_icon = document.getElementById('logo-image');
    logo_icon.style.transform = "scale(1.125)";
});

document.getElementById("logo").addEventListener("mouseout", function () {
    let logo_icon = document.getElementById('logo-image');
    logo_icon.style.transform = "scale(1)";
});