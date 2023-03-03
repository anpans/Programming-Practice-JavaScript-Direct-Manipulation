const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imageFilenames = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", 
    "images/pic4.jpg", "images/pic5.jpg"];

/* Declaring the alternative text for each image file */

const altTexts = ["Closeup of a human eye", "Picture of a rock formation", "Flowers in a field",
    "Ancient Egyptian art", "A butterfly on a leaf"];

/* Looping through images */

for (var i = 0; i < 5; i++) {
    const newImage = document.createElement('img');
    const fileName = imageFilenames[i];
    const altText = altTexts[i];
    newImage.setAttribute('src', fileName);
    newImage.setAttribute('alt', altText);
    
    newImage.addEventListener('click', function() {
        displayedImage.setAttribute('src', fileName);
        displayedImage.setAttribute('alt', altText);
    });
    thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', function() {
    if (btn.getAttribute("class") === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0.0)";
    }
    
});
