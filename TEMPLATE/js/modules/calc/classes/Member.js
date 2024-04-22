class Member {
    constructor(value = 0, power = 0) {
        this.value = value;
        this.power = power;
    }

    toString() {
        if (this.value === 0) {
            return '';
        }
        if (this.power === 0) {
            return this.value.toString();
        }
        if (this.power === 1) {
            return `${this.value}*x`;
        }
        return `${this.value}*x^${this.power}`;
    }
}