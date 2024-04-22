class Graph {
    constructor({ id, width = 300, height = 300, WIN, callbacks = {} }) {
        let canvas;
        this.WIN = WIN;
        if (id) {
            canvas = document.getElementById(id);
        } else {
            canvas = document.createElement('canvas');
            document.querySelector('body').appendChild(canvas);
        }
        canvas.width = width;
        canvas.height = height;
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        const { wheel, mousemove, mouseleave, mouseup, mousedown } = callbacks;
        canvas.addEventListener('wheel', wheel);
        canvas.addEventListener('mousemove', mousemove);
        canvas.addEventListener('mouseleave', mouseleave);
        canvas.addEventListener('mouseup', mouseup);
        canvas.addEventListener('mousedown', mousedown);
        this.PI2 = 2 * Math.PI;
    }

    xs(x) {
        return (x - this.WIN.LEFT) / this.WIN.WIDTH * this.canvas.width;
    }

    ys(y) {
        return (this.WIN.HEIGHT - (y - this.WIN.BOTTOM)) / this.WIN.HEIGHT * this.canvas.height;
    }

    sx(x) {
        return x * this.WIN.WIDTH / this.canvas.width;
    }

    sy(y) {
        return -y * this.WIN.HEIGHT / this.canvas.height;
    }

    clear(color = 'white') {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    line(x1, y1, x2, y2, color = 'purple', width = 2) {
        this.context.beginPath();
        this.context.strokeStyle = color;
        this.context.lineWidth = width;
        this.context.moveTo(this.xs(x1), this.ys(y1));
        this.context.lineTo(this.xs(x2), this.ys(y2));
        this.context.stroke();
        this.context.closePath();
    }

    point(x, y, color = '#f00', size = 2) {
        this.context.beginPath();
        this.context.strokeStyle = color;
        this.context.arc(this.xs(x), this.ys(y), size, 0, this.PI2);
        this.context.stroke();
        this.context.closePath();
    }

    polygon(points, color = '#f805') {
        this.context.fillStyle = color;
        this.context.beginPath();
        this.context.moveTo(this.xs(points[0].x), this.ys(points[0].y));
        for (let i = 1; i < points.length; i++) {
            this.context.lineTo(this.xs(points[i].x), this.ys(points[i].y));
        }
        this.context.lineTo(this.xs(points[0].x), this.ys(points[0].y));
        this.context.closePath();
        this.context.fill();
    }

    text() {
        
    }
}
