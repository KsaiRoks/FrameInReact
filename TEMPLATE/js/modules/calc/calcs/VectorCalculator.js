class VectorCalculator extends RealCalculator {
  constructor(calc = new RealCalculator) {
    super();
    this.calc = calc;
  }

  div() {
    return null;
  }
  add(a, b) {
    return new Vector(a.values.map((elem, i) =>
      this.calc.add(elem, b.values[i]))
    );
  }
  sub(a, b) {
    return new Vector(a.values.map((elem, i) => this.calc.sub(elem, b.values[i])));
  }

  mult(a, b) {
    return new Vector([
      super.sub(super.mult(a.values[1], b.values[2]), super.mult(a.values[2], b.values[1])),
      super.sub(super.mult(a.values[2], b.values[0]), super.mult(a.values[0], b.values[2])),
      super.sub(super.mult(a.values[0], b.values[1]), super.mult(a.values[1], b.values[0]))
    ]);
  }

  prod(a, p) {
    return new Vector(a.values.map(elem => super.prod(elem, p)));
  }

  pow(a, n) {
    return Math.pow(a, n);
  }

  one(length) {
    const values = [];
    for (let i = 0; i < length; i++) {
      values.push(i === 0 ?
        this.calc.one(length) :
        this.calc.zero(length)
      );
    }
    return new Vector(values);
  }

  zero(length) {
    const values = [];
    for (let i = 0; i < length; i++) {
      values.push(this.calc.zero(length));
    }
    return new Vector(values);
  }
}