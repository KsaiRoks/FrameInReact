Surfaces.prototype.singleLineHyperboloid = ({ count = 20, a = 2, b = 2, c = 2}) => {
    const points = [];
    const edges = [];
    const polygons = []
    const du = Math.PI / count;
    const dv = 2 * Math.PI / count;

    // Верхняя полоса гиперболоида
    for (let u = -Math.PI / 2; u <= Math.PI / 2; u += du) {
        for (let v = -Math.PI; v <= Math.PI; v += dv) {
            const x = a * Math.cosh(u) * Math.cos(v);
            const y = b * Math.cosh(u) * Math.sin(v);
            const z = c * Math.sinh(u);

            points.push(new Point(x, y, z));
        }
    }

    // Нижняя полоса гиперболоида
    for (let u = -Math.PI / 2; u <= Math.PI / 2; u += du) {
        for (let v = -Math.PI; v <= Math.PI; v += dv) {
            const x = a * Math.cosh(u) * Math.cos(v);
            const y = b * Math.cosh(u) * Math.sin(v);
            const z = -c * Math.sinh(u);

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