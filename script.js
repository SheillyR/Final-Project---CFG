let slideIndex = 0;
showSlides();

const toggleMenuClicked = () => {
  const body = document.body;
  const openIcon = document.getElementById("open-icon");
  const closeIcon = document.getElementById("close-icon");

  body.classList.toggle("open");

  if (body.classList.contains("open")) {
    openIcon.style.display = "none";
    closeIcon.style.display = "flex";
  } else {
    openIcon.style.display = "flex";
    closeIcon.style.display = "none";
  }
};

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("carousel");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
