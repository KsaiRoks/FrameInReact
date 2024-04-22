Surfaces.prototype.ellipsoid = ({ count = 20, rX = 20, rY = 10, rZ = 6, color = '#ffff00'}) => {
    const points = [];
    const edges = [];
    const polygons = [];
    const da = Math.PI * 2 / count;
    for (let phi = 0; phi < Math.PI * 2; phi += da) { //psi => 0 ... Pi //phi => 0 ... 2Pi
        for (let psi = 0; psi < Math.PI * 2 ; psi += da) {
            const x = rX * Math.sin(phi) * Math.cos(psi);
            const y = rY * Math.sin(phi) * Math.sin(psi);
            const z = rZ * Math.cos(phi);
            points.push(new Point(x, z, y));
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
            ], color));
        } 
    }


    return new Surface(points, edges,polygons);

}