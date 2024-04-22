import Point from "../entities/Point";
import Edge from "../entities/Edge";
import Polygon from "../entities/Polygon"
import Surface from "../entities/Surface";



class Sphere extends Surface {
    constructor(
        count = 40,
        r = 10,
        color = '#ffff00',
        center = new Point(),
        x0 = 0,
        y0 = 0,
        z0 = 0,
    ) {
        super();
        const points = [];
        const edges = [];
        const polygons = [];
        const da = Math.PI * 2 / count;
        for (let phi = 0; phi < Math.PI * 2; phi += da) { //psi => 0 ... 2Pi //phi => 0 ... Pi
            for (let psi = 0; psi < 2 * Math.PI; psi += da) {
                const x = x0 + r * Math.sin(phi) * Math.cos(psi);
                const y = y0 + r * Math.sin(phi) * Math.sin(psi);
                const z = z0 + r * Math.cos(phi);
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
                ], color));
            }
        }

        return new Surface(points, edges, polygons, new Point(x0, y0, z0));
    }
}

export default Sphere;