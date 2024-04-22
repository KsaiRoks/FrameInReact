Surfaces.prototype.kleinBottle = ({ count = 20 }) => {
    const points = [];
    const edges = [];
    const polygons = [];
    const da = Math.PI * 2  / count;
    for (let phi = 0; phi < Math.PI * 2 ; phi += da) {
        for (let psi = 0; psi < Math.PI * 2; psi += da) {
            const c = 4 - 2 * Math.cos(phi);
            const x = (6*Math.cos(phi)*(1+Math.sin(phi))) + c*Math.cos(phi+psi)
            const y = 16 * Math.sin(phi);
            const z = c * Math.sin(psi);
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
        } else {
            edges.push(new Edge(i, i % count));
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
        } else if (points[i + 1]) {
            polygons.push(new Polygon([
                i,
                i + 1,
                (i + 1) % count,
                i % count
            ], '#ffff00'));
        }
    }
    
    return new Surface(points,edges, polygons)
}