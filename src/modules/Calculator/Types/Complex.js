class Complex {
    constructor(re = 0, im = 0) {
        this.re = re;
        this.im = im;
    }

    // complex -> 2+i*3
    toString() {
        return this.im
            ? this.im > 0
                ? `${this.re}+i*${this.im}`
                : `${this.re}-i*${-this.im}`
            : this.re.toString();
    }
}

export default Complex;