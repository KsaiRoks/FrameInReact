class UI2D extends Component {
    constructor(options) {
        super(options);
        const {
            addFunction,
            delFunction,
            setColor,
            startIntegral,
            endIntegral,
            setIntegral,
            inputZeros
        } = options.callbacks;

        this.num = 0;
        this.addFunction = addFunction;
        this.delFunction = delFunction;
        this.setColor = setColor;
        this.startIntegral = startIntegral;
        this.endIntegral = endIntegral;
        this.setIntegral = setIntegral;
        this.inputZeros = inputZeros;
    }

    addEventListeners() {
        document.getElementById('addFunction')
            .addEventListener('click', this.addClickHandler.bind(this));
    }

    addClickHandler() {
        const input = document.createElement('input');
        input.setAttribute('placeholder', 'Функция №' + this.num);
        input.dataset.num = this.num;
        input.addEventListener('keyup', this.keyupHandler);

        const inputColor = document.createElement('input');
        inputColor.dataset.num = this.num;
        inputColor.setAttribute('placeholder', 'Цвет');
        inputColor.addEventListener('keyup', this.setColorHandler);

        const integralLabel = document.createElement('label');
        integralLabel.setAttribute('for', 'inputIntegral' + this.num)
        integralLabel.innerHTML = 'Отобразить интеграл';

        const zerosLabel = document.createElement('label');
        zerosLabel.setAttribute('for', 'inputZerosCheckbox' + this.num)
        zerosLabel.innerHTML = 'Отобразить нули функции';

        const inputZerosCheckbox = document.createElement('input');
        inputZerosCheckbox.setAttribute('type', 'checkbox');
        inputZerosCheckbox.setAttribute('id', 'inputZerosCheckbox' + this.num)
        inputZerosCheckbox.dataset.num = this.num;
        inputZerosCheckbox.addEventListener('change', this.inputZerosHandler);

        const startIntegralInput = document.createElement('input');
        startIntegralInput.setAttribute('placeholder', 'Начало отрезка');
        startIntegralInput.addEventListener('keyup', this.startIntegralHandler);
        startIntegralInput.dataset.num = this.num;

        const endIntegralInput = document.createElement('input');
        endIntegralInput.setAttribute('placeholder', 'Конец отрезка');
        endIntegralInput.addEventListener('keyup', this.endIntegralHandler);
        endIntegralInput.dataset.num = this.num;

        const inputIntegral = document.createElement('input');
        inputIntegral.setAttribute('type', 'checkbox');
        inputIntegral.setAttribute('id', 'inputIntegral' + this.num)
        inputIntegral.dataset.num = this.num;
        inputIntegral.addEventListener('change', this.inputIntegralHandler);

        const buttonDel = document.createElement('button');
        buttonDel.classList.add('del');
        buttonDel.innerHTML = 'Удалить';
        buttonDel.addEventListener('click', () => {
            this.delFunction(input.dataset.num - 0);
            funcInputs.removeChild(input);
            funcInputs.removeChild(inputColor);
            funcInputs.removeChild(buttonDel);
            funcInputs.removeChild(zerosLabel);
            funcInputs.removeChild(inputZerosCheckbox);
            funcInputs.removeChild(startIntegralInput);
            funcInputs.removeChild(endIntegralInput);
            funcInputs.removeChild(integralLabel);
            funcInputs.removeChild(inputIntegral);
        });

        const funcInputs = document.getElementById('funcInputs');
        funcInputs.appendChild(input);
        funcInputs.appendChild(inputColor);
        funcInputs.appendChild(buttonDel);
        funcInputs.appendChild(inputZerosCheckbox);
        funcInputs.appendChild(zerosLabel);
        funcInputs.appendChild(startIntegralInput);
        funcInputs.appendChild(endIntegralInput);
        funcInputs.appendChild(integralLabel);
        funcInputs.appendChild(inputIntegral);

        this.num++;
    }

    keyupHandler = (event) => {
        try {
            let f;
            eval(`f=function(x){return ${event.target.value};}`);
            this.addFunction(f, event.target.dataset.num - 0);
        } catch (e) {
            console.log('Ошибка ввода', e);
        }
    }

    setColorHandler = (e) => {
        this.setColor(e.target.value, e.target.dataset.num - 0);
    }

    startIntegralHandler = (e) => {
        this.startIntegral(e.target.value - 0, e.target.dataset.num - 0);
    }

    endIntegralHandler = (e) => {
        this.endIntegral(e.target.value - 0, e.target.dataset.num - 0);
    }

    inputIntegralHandler = (e) => {
        this.setIntegral(e.target.checked, e.target.dataset.num - 0);
    }

    inputZerosHandler = (e) => {
        this.inputZeros(e.target.checked, e.target.dataset.num - 0)
    }
}
