const generate = (function() {
    const drawParticles = (amount) => {
        const gutters = {
            x: window.innerWidth / (amount + 2),
            y: window.innerHeight / (amount + 2),
        }

        for(let i = 0; i < amount; i++) {
            draw.circle(i * gutters.x, i * gutters.y, { size: 20, color: 'white' });
        }
    };

    const repeatingPattern = (interval, maxParticles = 200) => {
        let particlesAmount = 1;

        const timer = setInterval(() => {
            if(particlesAmount >= maxParticles) {
                // Dit of clearInterval(timer);
                particlesAmount = 1;
            }
            
            draw.clearArea();
            drawParticles(particlesAmount);
            particlesAmount *= 2;
        }, interval);
    };

    return {
        repeatingPattern,
    }
})();