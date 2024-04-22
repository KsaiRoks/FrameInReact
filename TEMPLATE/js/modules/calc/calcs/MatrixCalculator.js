class MatrixCalculator extends RealCalculator {
    constructor(calc = new RealCalculator) {
        super();
        this.calc = calc;
    }

    div() {
        return null;
    }

    add(a, b) {
        return new Matrix(a.values.map(
            (arr, i) => arr.map(
                (elem, j) => this.calc.add(elem, b.values[i][j])
            )
        ));
    }

    sub(a, b) {
        return new Matrix(a.values.map(
            (arr, i) => arr.map(
                (elem, j) => this.calc.sub(elem, b.values[i][j])
            )
        ));
    }

    mult(a, b) {
        if (a.values[0].length !== b.values[0].length) {
            throw new Error("Неверные размерности матрицы и вектора");
        }
        const length = a.values.length;
        const result = [];
        for (let i = 0; i < length; i++) {
            let sum = this.calc.zero();
            for (let j = 0; j < length; j++) {
                sum = this.calc.add(sum, this.calc.mult(a.values[i][j], b.values[j]));
            }
            result.push(sum);
        }
        return new Vector(result);
    }

    prod(a, p) {
        return new Matrix(a.values.map(
            arr => arr.map(elem => calc.prod(elem, p))
        ));
    }

    pow(a, n) {
        return Math.pow(a, n);
    }

    zero(length) {
        const values = [];
        for (let i = 0; i < length; i++) {
            values.push(this.calc.zero());
        }
        return new Vector(values);
    }
    
    one(length) {
        const values = [];
        for (let i = 0; i < length; i++) {
            values.push([]);
            for (let j = 0; j < length; j++) {
                values[i][j] = i === j ? this.calc.one() : this.calc.zero();
            }
        }
        return new Matrix(values);
    }
}

