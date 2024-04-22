class ComplexCalculator extends RealCalculator {
    add(a, b) {
        return new Complex(a.re + b.re, a.im + b.im);
    }

    sub(a, b) {
        return new Complex(a.re - b.re, a.im - b.im);
    }

    mult(a, b) {
        return new Complex(
            a.re * b.re - a.im * b.im, 
            a.re * b.im + a.im * b.re
        );
    }

    div(a, b) {
        const denominator = b.re * b.re + b.im * b.im;
        return new Complex(
            (a.re * b.re + a.im * b.im) / denominator,
            (a.im * b.re - a.re * b.im) / denominator
        );
    }

    prod(a, p) {
        return new Complex(a.re * p, a.im * p);
    }

    pow(a, n) {
        let S = this.one();
        for (let i = 0; i < n; i++) {
            S = this.mult(S, a);
        }
        return S;
    }

    one() {
        return new Complex(1);
    }

    zero() {
        return new Complex();
    }
}