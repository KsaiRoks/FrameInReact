import React from 'react';
import Point from '../../modules/Math3D/entities/Point';
import Graph from '../../modules/Graph/Graph';
// import Point from '../../modules/Math3D/entities/Point';
import Math3D from '../../modules/Math3D/Math3D';
import Sphere from '../../modules/Math3D/surfaces/Sphere';

// // import Edge from '../../modules/Math3D/entities/Edge';
// // import Light from '../../modules/Math3D/entities/Light';
// // import Polygon from '../../modules/Math3D/entities/Polygon';



//     // this.interval = setInterval(() => {
//     //     this.scene.forEach(surface => surface.doAnimation(this.math3D));
//     // }, 50);


class Graph3D extends React.Component {
    constructor(props) {
        super(props);

        this.selectSurfaceRef = React.createRef();
        this.figuresParametrsRef = React.createRef();

        this.WIN = {
            LEFT: -20,
            BOTTOM: -20,
            WIDTH: 40,
            HEIGHT: 40,
            CENTER: new Point(0, 0, -30),
            CAMERA: new Point(0, 0, -50)
        }

        this.math3D = new Math3D({ WIN: this.WIN })
        this.scene = [new Sphere()];
        this.canMove = false;
        this.dx = 0;
        this.dy = 0;
    }

    componentDidMount() {
        this.graph = new Graph({
            id: 'canvas3D',
            width: 600,
            height: 600,
            WIN: this.WIN,
            callbacks: {
                wheel: this.wheel,
                mousemove: this.mousemove,
                mouseup: this.mouseup,
                mousedown: this.mousedown
            }
        });

        this.interval = setInterval(this.renderScene, 1000 / 60);
    }


render() {
    return (<>
        Graph3D

        {/* <div class='controls-container'>
                <label for="drawPoints">Нарисовать точки</label>
                <input class='customSurface' data-custom='drawPoints' type='checkbox' id='drawPoints' checked></input>

                <label for="drawEdges">Нарисовать рёбра</label>
                <input class='customSurface' data-custom='drawEdges' type='checkbox' id='drawEdges' checked></input>

                <label for="drawPolygons">Нарисовать полигоны</label>
                <input class='customSurface' data-custom='drawPolygons' type='checkbox' id='drawPolygons' checked></input>

                <select id='selectSurface'>
                    <option value="cube">Кубик</option>
                    <option value="thor">Бублик</option>
                    <option value="sphere">Шар</option>
                    <option value="ellipsoid">Эллипсоид</option>
                    <option value='cone'>Конус</option>
                    <option value="kleinBottle">Бутылка Клейна</option>
                    <option value='hyperbolicCylinder'>Гиперболический цилиндр</option>
                    <option value='parabolicCylinder'>Параболический цилиндр</option>
                    <option value='ellipticalCylinder'>Эллиптический цилиндр</option>
                    <option value='singleLineHyperboloid'>Однополосной гиперболоид</option>
                    <option value='twoLineHyperboloid'>Двуполосной гиперболоид</option>
                    <option value='ellipticalParaboloid'>Эллиптический параболоид</option>
                    <option value='hyperbolicParaboloid'> Гиперболический параболоид</option>
                </select>

                <div>
                    <label for='colorPoints'> Цвет точек</label>
                    <input type='color' id='colorPoints'></input>

                    <label for='colorEdges'> Цвет рёбер</label>
                    <input type='color' id='colorEdges'></input>

                    <label for='colorPolygons'>Цвет полигонов</label>
                    <input type='color' id='colorPolygons'></input>
                </div>

                <div>
                    <label for="pointsSizeRange">Размер точек</label>
                    <input type="range" min="1" max="15" value="1" class='customSizeRange' data-custom='sizePoints' id="pointsSizeRange"></input>
                    <input type="number" min="1" max="15" value="1" class='customSizeInput' data-custom='sizePoints' id="pointsSizeInput">px</input>
                </div>

                <div>
                    <label for='edgesSizeRange'>Размер рёбер</label>
                    <input type="range" min="1" max="10" value="1" class='customSizeRange' data-custom='sizeEdges' id="edgesSizeRange"></input>
                    <input type="number" min="1" max="10" value="1" class='customSizeInput' data-custom='sizeEdges' id="edgesSizeInput"> px</input>
                </div>

                <div>
                    <label for='powerBrightnessRange'>Яркость</label>
                    <input type="range" min="1" max="4000" value="1500" id="powerBrightnessRange"></input>
                    <input type="number" min="1" max="4000" value="1500" id="powerBrightnessInput"> лм</input>
                </div>

            </div>*/}
        <canvas id='canvas3D'></canvas>

    </>);
}
}


export default Graph3D;