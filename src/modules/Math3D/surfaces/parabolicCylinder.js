Surfaces.prototype.parabolicCylinder = ({ count = 18, a = 2, b = 3, c = 5 }) => {
    const points = [];
    const edges = [];
    const polygons = []
 
    for (let i = -count / 2; i <= count / 2; i++) {
        for (let j = -count / 2; j <= count / 2; j++) {
            points.push(new Point(
                b * Math.sinh(i / Math.PI),
                a * Math.cosh(i / Math.PI),
                c * j / Math.PI
            ));
        }
    } 


    for (let i = 0; i < points.length - 1; i++) {
        if (i % (count + 1) !== count) {
            edges.push(new Edge(i, i + 1));
        }

        if (points[i + count + 1]) {
            edges.push(new Edge(i, i + count + 1));
        }
    } 

    for (let i = 0; i < points.length; i++) {
        if (points[i + 1 + count] && i % (count + 1) !== count) {
            polygons.push(new Polygon([i, i + 1, i + 2 + count, i + 1 + count], '#ffff00'));
        }
    }    
   
    return new Surface(points, edges, polygons);
}