class Polygon{
    constructor(points = [], color = '#000000') {
        this.points = points; // ссылки на номера точек поверхности 
        this.color = this.hexToRgb(color);
        this.distance = 0;
        this.lumen = 1;
        this.index = 0;
    }

    hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : {
                r: 0,
                g: 0,
                b: 0
        };
    }

    rgbToHex(r,g,b) {
        return `rgb(${r}, ${g}, ${b})`
    }
}
//будут четырехугольники
//Сложность отрисовки полигонов заключается в соблюдении правильного порядка в их рисовании, правильный порядок: сначала задние полигоны потом передние
//Проблема оптимизации, в среднем половина полигонов сцены перекрыты другими полигонами, пользователь их не видит 