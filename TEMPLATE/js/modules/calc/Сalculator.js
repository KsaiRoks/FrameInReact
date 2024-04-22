class Calculator {
    complex(re, im) {
        return new Complex(re, im);
    }

    vector(values) {
        return new Vector(values);
    }

    matrix(values) {
        return new Matrix(values);
    }

    getMatrix(str) {
        if (str instanceof Array) return new Matrix(str);
        if (str && typeof str === 'string') {
            const arr = str.split('\n');
            const values = [];
            for (let i = 0; i < arr.length; i++) {
                values.push(
                    arr[i].replaceAll('[', '')
                        .replaceAll(']', '')
                        .split(',').map(el => this.getValue(el))
                );
            }
            if (values[0] instanceof Array) {
                return new Matrix(values);
            }
        }
        return null;
    }

    getVector(str) {
        if (str instanceof Array) return new Vector(str);
        if (str && typeof str === 'string') {
            const arr = str.replaceAll('(', '')
                .replaceAll(')', '')
                .split(' ')
                .map(el => this.getValue(el));
                return new Vector(arr);
            }
            return null;
        }
        


    getComplex(str) {
        if (typeof str === 'number') return new Complex(str);
        if (str && typeof str === 'string') {
            const arrStr = str.split('i*');
            if (arrStr.length === 2) {
                if (arrStr[0].includes('+')) {
                    arrStr[0] = arrStr[0].replace('+', '');
                    return new Complex(arrStr[0] - 0, arrStr[1] - 0);
                }
                if (arrStr[0].includes('-')) {
                    arrStr[0] = arrStr[0].replace('-', '');
                    return new Complex(arrStr[0] - 0, -arrStr[1] - 0);
                }
            }
            if (arrStr.length === 1) {
                if (isNaN(arrStr[0] - 0)) return null;
                return new Complex(arrStr[0] - 0);
            }
        }
        return null;
    }

    getValue(str) {
        if (str.includes('\n')) return this.getMatrix(str);
        if (str.includes('(')) return this.getVector(str);
        if (str.includes('i')) return this.getComplex(str);
        return str - 0;
    }

    get(elem) {
        if (elem instanceof Matrix) return new MatrixCalculator(this.get(elem.values[0][0]));
        if (elem instanceof Vector) return new VectorCalculator(this.get(elem.values[0]));
        if (elem instanceof Complex) return new ComplexCalculator;
        return new RealCalculator;
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
    prod(a, p) {
        return this.get(a).prod(a, p);
    }
    pow(a, p) {
        return this.get(a).pow(a, p);
    }

    zero(type, elem) {
        type = type ? type : elem ? elem.constructor.name : null;
        switch (type) {
            case 'Complex': return this.get(this.complex()).zero();
            case 'Vector': return this.get(elem).zero(elem.values.length);
            case 'Matrix': return this.get(elem).zero(elem.values.length);
            default: return this.get().zero();
        }
    }

    one(type, elem) {
        type = type ? type : elem ? elem.constructor.name : null;
        switch (type) {
            case 'Complex': return this.get(this.complex()).one();
            case 'Vector': return this.get(elem).one(elem.values.length);
            case 'Matrix': return this.get(elem).one(elem.values.length);
            default: return this.get().one();
        }
    }
}