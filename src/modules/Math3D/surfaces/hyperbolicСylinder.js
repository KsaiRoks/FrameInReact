Surfaces.prototype.hyperbolicCylinder = ({ count = 20, a = 5, b = 3, width = 3 }) => {
    const points = [];
    const edges = [];
    const polygons = []
 
    
    const dt = 2 * Math.PI / count;
    for (let i = -Math.PI; i <= Math.PI; i += dt) {
        for (let j = -Math.PI; j < Math.PI; j += dt) {
            points.push(new Point(
                b * Math.sinh(i) / 5,
                j * width / 5,
                a * Math.cosh(i) / 5,
            ));
        }
    }
    for (let i = -Math.PI; i <= Math.PI; i += dt) {
        for (let j = -Math.PI; j < Math.PI; j += dt) {
            points.push(new Point(
                -b * Math.sinh(i) / 5,
                j * width / 5,
                -a * Math.cosh(i) / 5,
            ));
        }
    }
    
    for (let i = 0; i < points.length / 2 - count; i++) {
        //вдоль
        if (i + 1 < points.length && (i + 1) % count !== 0) {
            edges.push(new Edge(
                i,
                i + 1
            ));
        } else if ((i + 1) % count === 0) {
            edges.push(new Edge(
                i,
                i + 1 - count
            ));
        }
        //поперек
        if (i < points.length - count) {
            edges.push(new Edge(
                i,
                i + count
            ));
        }
    }

    for (let i = points.length / 2; i < points.length; i++) {
        if (points[i + 1]) {
            if ((i + 1) % count === 0) {
                edges.push(new Edge(i, i + 1 - count));
            } else {
                edges.push(new Edge(i, i + 1));
            }
        }
        if (points[i + count]) {
            edges.push(new Edge(i, i + count));
        }
    }


    for (let i = 0; i < points.length / 2 - count; i++) {
        if (i + 1 + count < points.length && (i + 1) % count !== 0) {
            polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count]));
        } else if (i + count < points.length && (i + 1) % count === 0) {
            polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count]))
        }
    }
    for (let i = points.length / 2 + count / 2; i < points.length; i++) {
        if (i + 1 + count < points.length && (i + 1) % count !== 0) {
            polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count]));
        } else if (i + count < points.length && (i + 1) % count === 0) {
            polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count]))
        }
    }

    return new Surface(points, edges, polygons);
}