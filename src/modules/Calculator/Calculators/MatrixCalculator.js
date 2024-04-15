import { Matrix } from '../Types';
import RealCalculator from './RealCalculator';


class MatrixCalculator {
    constructor(calc = new RealCalculator()) {
        this.calc = calc;
    }

    div() {
        return null;
    }

    add(a, b) {
        return new Matrix(
            a.values.map((arr, i) =>
                arr.map((elem, j) => this.calc.add(elem, b.values[i][j]))
            )
        );
    }

    sub(a, b) {
        return new Matrix(
            a.values.map((arr, i) =>
                arr.map((elem, j) => this.calc.sub(elem, b.values[i][j]))
            )
        );
    }

    mult(a, b) {
        const length = a.values.length;
        const c = this.zero(length);
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {
                let S = this.calc.zero(length);
                for (let k = 0; k < length; k++) {
                    S = this.calc.add(S, this.calc.mult(a.values[i][k], b.values[k][j]));
                }
                c.values[i][j] = S;
            }
        }
        return c;
    }

    pow(a, n) {
        if (n === 0) {
            return this.one(a.values.length);
        } else if (n === 1) {
            return this.mult(a, this.one(a.values.length));
        } else {
            let result = a;
            for (let i = 1; i < n; i++) {
                result = this.mult(result, a);
            }
            return result;
        }
    }

    prod(a, p) {
        return new Matrix(
            a.values.map((arr) => arr.map((elem) => this.calc.prod(elem, p)))
        );
    }

    zero(length) {
        const values = [];
        for (let i = 0; i < length; i++) {
            values.push([]);
            for (let j = 0; j < length; j++) {
                values[i][j] = this.calc.zero(length);
            }
        }
        return new Matrix(values);
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

export default MatrixCalculator;