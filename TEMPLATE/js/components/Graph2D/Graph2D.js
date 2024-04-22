class Graph2D extends Component {
    constructor(options) {
        super(options);
        this.WIN = {
            LEFT: -10,
            BOTTOM: -10,
            WIDTH: 20,
            HEIGHT: 20,
        };
        this.canMove = false;
        this.useInterpolation = false
        this.points = [];
        this.funcs = [{
            f: (x) => x * x,
            color: '#f0f',
            width: 2,
            a: 1,
            b: 3,
        }];
        this.ZOOM_STEP = 0.2;

        new UI2D({
            id: 'ui2D',
            parent: this.id,
            template: template.ui2DTemplate,
            callbacks: {
                addFunction: (f, num) => this.addFunction(f, num),
                delFunction: (num) => this.delFunction(num),
                setColor: (color, num) => this.setColor(color, num),
                startIntegral: (a, num) => this.startIntegral(a, num),
                endIntegral: (b, num) => this.endIntegral(b, num),
                setIntegral: (integral, num) => this.setIntegral(integral, num),
                inputZeros: (zeros, num) => this.inputZeros(zeros, num)
            }
        });
        this.graph = new Graph({
            id: 'canvas',
            width: 500,
            height: 500,
            WIN: this.WIN,
            callbacks: {
                wheel: (event) => this.wheel(event),
                mousemove: (event) => this.mousemove(event),
                mousedown: (event) => this.mousedown(event),
                mouseup: () => this.mouseup(),
                mouseleave: () => this.mouseleave()
            }
        });
        this.render2D();
    }

    startIntegral(a, num) {
        this.funcs[num].a = a;
        this.render2D();
    }

    endIntegral(b, num) {
        this.funcs[num].b = b;
        this.render2D();
    }

    setIntegral(integral, num) {
        this.funcs[num].integral = integral;
        this.render2D();
    }

    setColor(color, num) {
        this.funcs[num].color = color;
        this.render2D();
    }

    inputZeros(zeros, num) {
        this.funcs[num].zeros = zeros;
        this.render2D();
    }

    addFunction(f, num) {
        if (!this.funcs[num]) {
            this.funcs[num] = {
                f,
                color: '#f23',
                width: 3,
                a: 1,
                b: 3,
            };
        } else {
            this.funcs[num].f = f;
        }
        this.render2D();
    }

    delFunction(num) {
        this.funcs.splice(num, 1); // Удаляем элемент массива по индексу
        this.render2D();
    }

    wheel(event) {
        event.preventDefault();
        const delta = (event.wheelDelta > 0) ? this.ZOOM_STEP : -this.ZOOM_STEP;
        if (this.WIN.WIDTH + delta > 0) {
            this.WIN.WIDTH += delta;
            this.WIN.HEIGHT += delta;
            this.WIN.LEFT -= delta / 2;
            this.WIN.BOTTOM -= delta / 2;
            this.render2D();
        }
    }

    mouseup() {
        this.canMove = false;
    }

    mouseleave() {
        this.canMove = false;
    }

    mousedown(event) {
        if (this.useInterpolation) {
            this.canMove = false;
            const canvasRect = this.graph.canvas.getBoundingClientRect();
            const realX = this.graph.sx(event.clientX - canvasRect.left) + this.WIN.LEFT;
            const realY = this.graph.sy(event.clientY - canvasRect.top) - this.WIN.BOTTOM;
            this.points.push({ x: realX, y: realY });
            this.render2D();
        }
        this.canMove = true;
    }


    mousemove(event) {
        if (this.canMove) {
            this.WIN.LEFT -= this.graph.sx(event.movementX);
            this.WIN.BOTTOM -= this.graph.sy(event.movementY);
            this.render2D();
        }
    }

    coordOs() {
        for (let i = 0; i < this.WIN.LEFT + this.WIN.WIDTH; i++) {
            this.graph.line(i, this.WIN.BOTTOM, i, this.WIN.BOTTOM + this.WIN.WIDTH, 'gray');
        }
        for (let i = 0; i < this.WIN.HEIGHT + this.WIN.BOTTOM; i++) {
            this.graph.line(this.WIN.LEFT, i, this.WIN.LEFT + this.WIN.WIDTH, i, 'gray');
        }
        for (let i = 0; i > this.WIN.LEFT; i--) {
            this.graph.line(i, this.WIN.BOTTOM, i, this.WIN.BOTTOM + this.WIN.HEIGHT, 'gray');
        }
        for (let i = 0; i > this.WIN.BOTTOM; i--) {
            this.graph.line(this.WIN.LEFT, i, this.WIN.LEFT + this.WIN.WIDTH, i, 'gray');
        }

        this.graph.line(this.WIN.LEFT, 0, this.WIN.LEFT + this.WIN.WIDTH, 0, 'black');
        this.graph.line(0, this.WIN.BOTTOM, 0, this.WIN.HEIGHT + this.WIN.BOTTOM, 'black');
    }
    printFunction(f, color = '#000000', width = 1) {
        const dx = this.WIN.WIDTH / 200;
        let x = this.WIN.LEFT;
        while (x <= this.WIN.WIDTH + this.WIN.LEFT) {
            this.graph.line(x, f(x), x + dx, f(x + dx), color, width);
            x += dx;
        }
    }
    printIntegral(f, a, b) {
        if (a != b) {
            const dx = (b - a) / 100;
            let x = a;
            const points = [{ x, y: 0 }];
            while (x <= b) {
                points.push({ x, y: f(x) });
                x += dx;
            }
            points.push({ x: b, y: 0 });
            this.graph.polygon(points);
        }
    }


    addEventListeners() {
        document.getElementById('setInterpolation').addEventListener('change', (event) => {
            if (event.target.checked) {
                this.useInterpolation = true;
                const div = document.getElementById('interpol');
                const buttons = ['Удалить точки', 'Удалить последнюю точку'];
                buttons.forEach((buttonText, index) => {
                    const button = document.createElement('button');
                    button.id = index === 0 ? 'delInterpol' : 'delOnePoint';
                    button.innerHTML = buttonText;
                    button.addEventListener('click', () => {
                        if (index === 0 && this.points.length > 0) {
                            this.points.length = 0;
                        } else if (index === 1 && this.points.length > 0) {
                            this.points.pop();
                        }
                        this.render2D();
                    });
                    div.appendChild(button);
                });
            } else {
                const div = document.getElementById('interpol');
                const delInterpol = document.getElementById('delInterpol');
                const delOnePoint = document.getElementById('delOnePoint');
                if (delInterpol && delOnePoint) {
                    div.removeChild(delInterpol);
                    div.removeChild(delOnePoint);
                }
            }

        });
    }
    render2D() {
        this.graph.clear();
        this.coordOs();
        this.points.forEach(point => this.graph.point(point.x, point.y, 'blue', 3));

        if (this.points.length >= 2) {
            for (let i = 1; i < this.points.length; i++) {
                const { x: x1, y: y1 } = this.points[i - 1];
                const { x: x2, y: y2 } = this.points[i];
                this.graph.line(x1, y1, x2, y2);
            }
        }

        this.funcs.forEach(func => {
            if (func) {
                if (func.integral) {
                    const { f, a, b } = func;
                    this.printIntegral(f, a, b);
                }
                const { f, color, width } = func;
                this.printFunction(f, color, width);
            }
        });
    }
}
