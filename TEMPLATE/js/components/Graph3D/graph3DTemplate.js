Template.prototype.graph3DTemplate = () => `
<div class='controls-container'>
    <label for="drawPoints">Нарисовать точки</label>
    <input class = 'customSurface' data-custom = 'drawPoints' type='checkbox' id='drawPoints' checked>
   
    <label for="drawEdges">Нарисовать ребра</label>
    <input class = 'customSurface' data-custom = 'drawEdges' type='checkbox' id='drawEdges' checked>
    
    <label for="drawPolygons">Нарисовать полигоны</label>
    <input class = 'customSurface' data-custom = 'drawPolygons' type='checkbox' id='drawPolygons' checked>

    <select id = 'selectSurface'>
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
      <label for = 'colorPoints'> Цвет точек</label>
      <input type='color' id = 'colorPoints'>
      
      <label for = 'colorEdges'> Цвет ребер</label>
      <input type='color' id = 'colorEdges'>

      <label for = 'colorPolygons'>Цвет полигонов</label>
      <input type = 'color' id = 'colorPolygons'>
    </div>

    <div>
     <label for="pointsSizeRange">Размер точек</label>
     <input type="range" min="1" max="15" value="1"  class = 'customSizeRange' data-custom = 'sizePoints' id="pointsSizeRange">
     <input type="number" min="1" max="15" value="1" class = 'customSizeInput' data-custom = 'sizePoints' id="pointsSizeInput"> px
    </div>

    <div>
     <label for='edgesSizeRange'>Размер ребер</label>
     <input type="range" min="1" max="10" value="1" class = 'customSizeRange' data-custom = 'sizeEdges' id="edgesSizeRange">
     <input type="number" min="1" max="10" value="1"  class = 'customSizeInput' data-custom = 'sizeEdges' id="edgesSizeInput"> px
    </div>

     <div>
     <label for = 'powerBrightnessRange'>Яркость</label>
     <input type="range" min="1" max="4000" value="1500" id="powerBrightnessRange">
     <input type="number" min="1" max="4000" value="1500" id="powerBrightnessInput"> лм
    </div>
    
</div>
    <canvas id='canvas3D'></canvas>
`;