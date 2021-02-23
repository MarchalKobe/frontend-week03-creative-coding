(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const canvasElement = document.querySelector('.js-canvas');

        if(!canvasElement) throw new Error('The canvas could not be loaded.');

        draw.setup(canvasElement);

        // const p1 = new Particle(48, 'brown');
        // const p2 = new Particle(48, 'brown');
        // const p3 = new Particle(78, 'brown');
        
        // draw.circle(130, 150, p1);
        // draw.circle(230, 150, p2);
        // draw.circle(330, 150, p3);
        generate.repeatingPattern(1000);
    });
})();