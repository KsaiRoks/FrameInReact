class Calc extends Component {
    operandCalcHandler(event) {
        const calc = new Calculator();
        const a = calc.getValue(document.getElementById('a').value);
        const b = calc.getValue(document.getElementById('b').value);
        const operand = event.target.dataset.operand;
        const result = calc[operand](a, b);
        document.getElementById('c').value = result !== null ? result.toString() : '';
    }

    operandPolyHandler() {
        const calc = new PolynomialCalculator();
        let text = document.getElementById('poly').value;
        const arr = text.split('\n');
        const a = calc.getValue(arr[0]);
        const b = calc.getValue(arr[2]);
        let operand;
        switch (arr[1]) {
            case '+': operand = 'add'; break;
            case '-': operand = 'sub'; break;
            case '*': operand = 'mult'; break;
            case 'scal': operand = 'prod'; break;
            case '^': operand = 'pow'; break;
        }
        const result = calc[operand](a, b);
        if (result) {
            text += `\n=\n${result.toString()}`;
            document.getElementById('poly').value = text;
        }
    }

    valuePolyHandler() {
        const calc = new PolynomialCalculator();
        const text = document.getElementById('poly').value;
        const a = calc.getValue(text.includes('=') ?
            text.split('=')[1] :
            text
        );
        const p = (new Calculator).getValue(document.getElementById('point').value);
        const result = a.getValue(p);
        if (result) {
            document.getElementById('point').value = result.toString();
        }
    }

    addEventListeners() {
        const buttons = document.querySelectorAll('.operand');
        buttons.forEach(button =>
            button.addEventListener(
                'click',
                (event) => this.operandCalcHandler(event)
            )
        );
        document.getElementById('polyOperand')
            .addEventListener(
                'click',
                () => this.operandPolyHandler()
            );
        document.getElementById('polyValue')
            .addEventListener(
                'click',
                () => this.valuePolyHandler()
            );
    }
}