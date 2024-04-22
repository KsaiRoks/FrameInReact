class MathTarget {
    
    shoot(x, y) {
        if (!isNaN(x) && !isNaN(y)) {
            return this.checkCenter(x, y) || this.checkStar(x, y) || this.checkBetweenCircleAndSquare(x, y) || this.checkBetweenRhombAndCircle(x, y) || this.checkBetweenStarAndRhomb(x, y);
        }
        return 0;
    }
    
    checkOutTarget(x, y) {
        return ((Math.abs(x) >= 1) && (Math.abs(y) >= 1)) ? 0 : 0;
    }

    checkBetweenCircleAndSquare(x, y) {
        return (((x ** 2 + y ** 2) >= 1) && (((x <= 1 && x >= -1) && (y <= 1 && y >= -1)))) ? 1 : 0;
    }

    checkBetweenRhombAndCircle(x, y) {
        return (((x ** 2 + y ** 2) <= 1) && ((Math.abs(x) + Math.abs(y)) >= 1)) ? 2 : 0;
    }

    checkBetweenStarAndRhomb(x, y) {
        return (((Math.sqrt(1 - (Math.sqrt(1 - (Math.abs(x))) ** 4))) + Math.abs(y) >= 1) && ((Math.abs(x) + Math.abs(y)) <= 1)) ? 3 : 0;
    }

    checkStar(x, y) {
        return (((Math.sqrt(1 - (Math.sqrt(1 - (Math.abs(x))) ** 4))) + Math.abs(y) < 1) && (Number(x) !== 0 && Number(y) !== 0)) ? 4 : 0; 
    }

    checkCenter(x, y) {
        return (Number(x) === 0 && Number(y) === 0) ? 10 : 0;
    }

}

export default MathTarget;