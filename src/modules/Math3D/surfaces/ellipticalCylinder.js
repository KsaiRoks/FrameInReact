Surfaces.prototype.ellipticalCylinder = ({ count = 20, a = 8, b = 5, height = 10 }) => {
    const points = [];
    const edges = [];
    const polygons = []
    const da = Math.PI * 4 / count;

    for (let phi = -Math.PI * 2; phi < Math.PI * 2; phi += da) {
        for (let psi = -Math.PI * 2; psi < Math.PI * 2; psi += da) {
            const x = a * Math.cos(phi);
            const y = b * Math.sin(phi);
            const z = height * Math.sin(psi);

            points.push(new Point(x, y, z));
        }
    }
    


    for (let i = 0; i < points.length; i++) {
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


    for (let i = 0; i < points.length; i++) {
        if (points[i + count + 1]) {
            polygons.push(new Polygon([
                i,
                i + 1,
                i + count + 1,
                i + count
            ], '#ffff00'));
        }
    }

    return new Surface(points, edges, polygons);
}