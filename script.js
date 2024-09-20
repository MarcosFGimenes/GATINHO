document.addEventListener('mousemove', function(event) {
    let eyes = document.querySelectorAll('.pupil');
    let mouseX = event.clientX;
    let mouseY = event.clientY;

    eyes.forEach(function(eye) {
        let eyeRect = eye.getBoundingClientRect();
        let eyeCenterX = eyeRect.left + eyeRect.width / 2;
        let eyeCenterY = eyeRect.top + eyeRect.height / 2;

        let deltaX = mouseX - eyeCenterX;
        let deltaY = mouseY - eyeCenterY;
        let angle = Math.atan2(deltaY, deltaX);

        let radius = 10;  // Limitar o movimento da pupila
        let pupilX = Math.cos(angle) * radius;
        let pupilY = Math.sin(angle) * radius;

        eye.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    });
});
