// (Revealing) module pattern
// Deze iife maakt een 'state' aan en is dus een closure
const draw = (function() {
    let ctx = null;

    const mathCanvasToWindows = (canvasElement) => {
        canvasElement.width = window.innerWidth;
        canvasElement.height = window.innerHeight;
    };

    const setup = (canvasElement) => {
        window.addEventListener('resize', function() {
            mathCanvasToWindows(canvasElement);
        });

        mathCanvasToWindows(canvasElement);
        ctx = canvasElement.getContext('2d');
    };

    const circle = (x, y, { size, color }) => {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
    };

    const clearArea = () => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    };

    return {
        setup,
        circle,
        clearArea,
    };
})();

draw.setup(canvasElement);