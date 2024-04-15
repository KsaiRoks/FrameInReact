import { Complex } from '../Types';
import RealCalculator from './RealCalculator';

class ComplexCalculator extends RealCalculator {
    add(a, b) {
        return new Complex(a.re + b.re, a.im + b.im);
    }

    sub(a, b) {
        return new Complex(a.re - b.re, a.im - b.im);
    }

    mult(a, b) {
        return new Complex(a.re * b.re - a.im * b.im, a.re * b.im + a.im * b.re);
    }

    prod(a, p) {
        return new Complex(a.re * p, a.im * p);
    }

    div(a, b) {
        const m = b.re ** 2 + b.im ** 2;
        return new Complex(
            (a.re * b.re + a.im * b.im) / m,
            (a.im * b.re - a.re * b.im) / m
        );
    }

    pow(a, n) {
        let S = this.one();
        for (let i = 0; i < n; i++) {
            S = this.mult(S, a);
        }
        return S;
    }

    zero() {
        return new Complex();
    }

    one() {
        return new Complex(super.one());
    }
}

export default ComplexCalculator;