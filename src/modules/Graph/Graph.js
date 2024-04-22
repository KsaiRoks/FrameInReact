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

        this.canvasV = document.createElement('canvas');
        this.canvasV.width = width;
        this.canvasV.height = height
        this.contextV = this.canvasV.getContext('2d');
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
        this.contextV.fillStyle = color;
        this.contextV.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    line(x1, y1, x2, y2, color = 'purple', width = 2) {
        this.contextV.beginPath();
        this.contextV.strokeStyle = color;
        this.contextV.lineWidth = width;
        this.contextV.moveTo(this.xs(x1), this.ys(y1));
        this.contextV.lineTo(this.xs(x2), this.ys(y2));
        this.contextV.stroke();
        this.contextV.closePath();
    }

    point(x, y, color = '#f00', size = 2) {
        this.contextV.beginPath();
        this.contextV.strokeStyle = color;
        this.contextV.arc(this.xs(x), this.ys(y), size, 0, this.PI2);
        this.contextV.stroke();
        this.contextV.closePath();
    }

    polygon(points, color = '#f805') {
        this.contextV.fillStyle = color;
        this.contextV.beginPath();
        this.contextV.moveTo(this.xs(points[0].x), this.ys(points[0].y));
        for (let i = 1; i < points.length; i++) {
            this.contextV.lineTo(this.xs(points[i].x), this.ys(points[i].y));
        }
        this.contextV.lineTo(this.xs(points[0].x), this.ys(points[0].y));
        this.contextV.closePath();
        this.contextV.fill();
    }

    text(text, x, y, color = '#ff0000', font = '48px serif') {
        this.contextV.font = font;
        this.contextV.fillstyle = color;
        this.contextV.fillText(text, this.xs(x), this.ys(y));
    }

    renderFrame() {
        this.context.drawImage(this.canvasV, 0, 0);
    }
}

export default Graph;