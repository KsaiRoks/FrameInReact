Surfaces.prototype.cone = ({ count = 20, h = 15, color = '#ffff00'}) => {
    const points = [];
    const edges = [];
    const polygons = []
    const da = Math.PI * 2 / count;

    for (let phi = 0; phi < h; phi += da) {
        for (let psi = 0; psi < Math.PI * 2; psi += da) {
            const x = phi * Math.cos(psi);
            const y = phi * Math.sin(psi)
            const z = h - phi

            points.push(new Point(x, y, -z));
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
    }
   


    for (let i = 0; i < points.length; i++) {
        if (points[i + count + 1]) {
            polygons.push(new Polygon([
                i,
                i + 1,
                i + count + 1,
                i + count
            ], color));
        } 
    }

    return new Surface(points, edges, polygons);
}