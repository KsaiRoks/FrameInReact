class Member {
    constructor(value = 0, power = 0) {
        this.value = value;
        this.power = power;
    }

    // member -> 2*x^3
    toString() {
        return `${this.value}*x^${this.power}`;
    }
}

export default Member;