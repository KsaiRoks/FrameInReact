class Vector {
    constructor(values = []) {
        this.values = [];
        values.forEach((el) => this.values.push(el));
    }

    // vector -> (1,2,3)
    toString() {
        return `(${this.values.map((el) => el.toString()).join(" ")})`;
    }
}

export default Vector;