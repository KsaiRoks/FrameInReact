class Complex {
    constructor(re = 0, im = 0) {
      this.re = re;
      this.im = im;
    }
  
    toString() {
      return this.im ? 
        `${this.re}+i*${this.im}` :
        this.re.toString();
    }
}
  