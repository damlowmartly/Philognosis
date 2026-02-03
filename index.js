// Robot eye tracking
document.addEventListener("mousemove", function (e) {
  const pupils = document.querySelectorAll(".pupil");
  pupils.forEach((pupil) => {
    const eye = pupil.parentElement;
    const eyeRect = eye.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    const deltaX = e.clientX - eyeCenterX;
    const deltaY = e.clientY - eyeCenterY;
    const angle = Math.atan2(deltaY, deltaX);

    const maxDistance = 8;
    const distance = Math.min(
      maxDistance,
      Math.sqrt(deltaX * deltaX + deltaY * deltaY) / 20,
    );

    const pupilX = Math.cos(angle) * distance;
    const pupilY = Math.sin(angle) * distance;

    pupil.style.transform = `translate(calc(-50% + ${pupilX}px), calc(-50% + ${pupilY}px))`;
  });
});

// Search functionality
const searchBar = document.getElementById("searchBar"); 

searchBar.addEventListener("input", function (e) {
  const searchTerm = e.target.value.toLowerCase();

  if (searchTerm.length > 0) {
    // Simple search - can be expanded later
    if (searchTerm.includes("algebra")) {
      console.log("Searching for Algebra topics...");
    }
  }
});
