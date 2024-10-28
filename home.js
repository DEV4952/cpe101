    const glitchContainer = document.querySelector('.glitch-container');

    function createGlitchSquare() {
        const square = document.createElement('div');
        square.classList.add('glitch-square');
        square.style.width = random(10, 40) + 'px';
        square.style.height = random(10, 40) + 'px';
        square.style.left = random(0, glitchContainer.clientWidth) + 'px';
        square.style.top = random(0, glitchContainer.clientHeight) + 'px';
        glitchContainer.appendChild(square);

        const opacity = Math.random() * 0.5 + 0.1;
        square.style.opacity = opacity;
        const duration = Math.random() * 1 + 0.5;
        square.style.animation = `glitch ${duration}s linear infinite`;

        setTimeout(() => {
    square.remove();
}, duration * 1000); // Remove the square after the animation duration
    }

    const interval = 10;
    setInterval(createGlitchSquare, interval);

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }