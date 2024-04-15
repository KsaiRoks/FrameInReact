import { Complex, Vector, Matrix, Member, Polynomial } from './Types';
import { RealCalculator, ComplexCalculator, VectorCalculator, MatrixCalculator } from './Calculators';
import PolynomialCalculator from './PolynomialCalculator';

class Calculator {
    getComplex(str) {
        if (typeof str === "number") return new Complex(str);
        if (str && typeof str === "string") {
            const arrStr = str.split("i*");
            if (arrStr.length === 2) {
                // 2+i*5
                if (arrStr[0].includes("+")) {
                    arrStr[0] = arrStr[0].replace("+", "");
                    return new Complex(arrStr[0] - 0, arrStr[1] - 0);
                }
                // 2-i*5
                if (arrStr[0].includes("-")) {
                    arrStr[0] = arrStr[0].replace("-", "");
                    return new Complex(arrStr[0] - 0, -arrStr[1] - 0);
                }
            }
            if (str.includes("i")) {
                return this.getComplex(str.replace("i", "i*1"));
            }
            if (arrStr.length === 1) {
                if (isNaN(arrStr[0] - 0)) return null;
                return new Complex(arrStr[0] - 0);
            }
        }
        return null;
    }

    getVector(str) {
        if (str instanceof Array) return new Vector(str);
        if (str && typeof str === "string") {
            const arr = str
                .replace("(", "")
                .replace(")", "")
                .split(" ")
                .map((el) => this.getValue(el));
            return new Vector(arr);
        }
        return null;
    }

    getMatrix(str) {
        if (str instanceof Array) return new Matrix(str);
        if (str && typeof str === "string") {
            const arr = str.replace(' ', '').split('\n');
            const values = [];
            for (let i = 0; i < arr.length; i++) {
                values.push(arr[i].split(",").map((el) => this.getValue(el)));
            }
            if (values[0] instanceof Array) {
                return new Matrix(values);
            }
        }
        return null;
    }

    getPolynomial(str) {
        if (str instanceof Array) return new Polynomial(str);
        if (str && typeof str === "string") {
            const arrStr = str
                .replaceAll("-", "+-")
                .split("+")
                .map((el) => {
                    const arr = el.split("*x^");
                    return new Member(arr[0] - 0, arr[1] - 0);
                });
            return new Polynomial(arrStr);
        }
        return null;
    }

    Complex(re, im) {
        return new Complex(re, im);
    }

    Vector(values) {
        return new Vector(values);
    }

    Matrix(values) {
        return new Matrix(values);
    }

    get(elem) {
        if (elem instanceof Matrix) {
            return new MatrixCalculator(this.get(elem.values[0][0]));
        }
        if (elem instanceof Vector) {
            return new VectorCalculator(this.get(elem.values[0]));
        }
        if (elem instanceof Complex) {
            return new ComplexCalculator();
        }
        if (elem instanceof Polynomial) {
            return new PolynomialCalculator();
        }
        return new RealCalculator();
    }

    add(a, b) {
        return this.get(a).add(a, b);
    }
    sub(a, b) {
        return this.get(a).sub(a, b);
    }
    mult(a, b) {
        return this.get(a).mult(a, b);
    }
    div(a, b) {
        return this.get(a).div(a, b);
    }
    pow(a, n) {
        return this.get(a).pow(a, n);
    }
    prod(a, p) {
        return this.get(a).prod(a, p);
    }
    polynom(a, n) {
        return this.get(a).polynom(a, n);
    }

    zero(type, elem) {
        type = type ? type : elem ? elem.constructor.name : null;
        switch (type) {
            case "Complex":
                return this.get(this.Complex()).zero();
            case "Vector":
                return this.get(elem || this.Vector()).zero(elem.values.length);
            case "Matrix":
                return this.get(elem || this.Matrix()).zero(elem.values.length);
            default:
                return this.get().zero();
        }
    }

    one(type, elem) {
        type = type ? type : elem ? elem.constructor.name : null;
        switch (type) {
            case "Complex":
                return this.get(this.Complex()).one();
            case "Vector":
                return this.get(elem || this.Vector()).one(elem.values.length);
            case "Matrix":
                return this.get(elem || this.Matrix()).one(elem.values.length);
            default:
                return this.get().one();
        }
    }

    getValue(str) {
        if (str.includes("\n")) return this.getMatrix(str);
        if (str.includes("(")) return this.getVector(str);
        if (str.includes("i")) return this.getComplex(str);
        if (str.includes("*x^")) return this.getPolynomial(str);
        return str - 0;
    }
}

export default Calculator;