class UI {
    constructor({ addFunction, delFunction, setColor, startIntegral, endIntegral, setIntegral, setTangent, inputZeros }) {
        this.addFunction = addFunction;
        this.delFunction = delFunction;
        this.setColor = setColor;
        this.startIntegral = startIntegral;
        this.endIntegral = endIntegral;
        this.setIntegral = setIntegral;
        this.setTangent = setTangent;
        this.inputZeros = inputZeros;
    }

    //document.getElementById('addFunction').addEventListener('click', addClickHandler);

    addClickHandler() {
        let num = 0;
        // const pointInput = document.createElement('input');
        // pointInput.setAttribute('type', 'checkbox');

        const input = document.createElement('input');
        input.setAttribute('placeholder', 'функция №' + num);
        input.dataset.num = num;
        input.addEventListener('keyup', keyupHandler);

        const inputColor = document.createElement('input');
        inputColor.dataset.num = num;
        inputColor.setAttribute('placeholder', 'цвет');
        inputColor.addEventListener('keyup', setColorHandler);

        const inputTangent = document.createElement('input');
        inputTangent.setAttribute('type', 'checkbox');
        inputTangent.dataset.num = num;
        inputTangent.addEventListener('change', inputTangentHangler);

        const tangentLable = document.createElement('label');
        tangentLable.innerHTML = 'Провести касательную';

        const integralLable = document.createElement('label');
        integralLable.innerHTML = 'Отобразить интеграл';

        const zerosLable = document.createElement('label');
        zerosLable.innerHTML = 'Отобразить нули функции';

        const inputZeros = document.createElement('input');
        inputZeros.setAttribute('type', 'checkbox');
        inputZeros.dataset.num = num;
        inputZeros.addEventListener('change', inputZerosHandler)

        const startIntegral = document.createElement('input');
        startIntegral.setAttribute('placeholder', 'начало отрезка');
        startIntegral.addEventListener('keyup', startIntegralHandler);
        startIntegral.dataset.num = num;

        const endIntegral = document.createElement('input');
        endIntegral.setAttribute('placeholder', 'конец отрезка');
        endIntegral.addEventListener('keyup', endIntegralHandler);
        endIntegral.dataset.num = num;

        const inputIntegral = document.createElement('input');
        inputIntegral.setAttribute('type', 'checkbox');
        inputIntegral.dataset.num = num;
        inputIntegral.addEventListener('change', inputIntegralHandler);

        const buttonDel = document.createElement('button');
        buttonDel.classList.add('del');
        buttonDel.innerHTML = 'Удалить';
        buttonDel.addEventListener('click', () => {
            delFunction(input.dataset.num - 0);
            funcInputs.removeChild(input);
            funcInputs.removeChild(inputColor);
            funcInputs.removeChild(buttonDel);
            // funcInputs.removeChild(pointInput);
            funcInputs.removeChild(zerosLable);
            funcInputs.removeChild(inputZeros);
            funcInputs.removeChild(startIntegral);
            funcInputs.removeChild(endIntegral);
            funcInputs.removeChild(integralLable);
            funcInputs.removeChild(inputIntegral);
            funcInputs.removeChild(tangentLable);
            funcInputs.removeChild(inputTangent);
        });

        const funcInputs = document.getElementById('funcInputs');
        funcInputs.appendChild(input);
        funcInputs.appendChild(inputColor);
        funcInputs.appendChild(buttonDel);
        // funcInputs.appendChild(pointInput);
        funcInputs.appendChild(inputZeros);
        funcInputs.appendChild(zerosLable);
        funcInputs.appendChild(startIntegral);
        funcInputs.appendChild(endIntegral);
        funcInputs.appendChild(integralLable);
        funcInputs.appendChild(inputIntegral);
        funcInputs.appendChild(tangentLable);
        funcInputs.appendChild(inputTangent);

        num++;
    }

    keyupHandler() {
        try {
            let f;
            eval(`f=function(x){return ${this.value};}`);
            addFunction(f, this.dataset.num - 0);
        } catch (e) {
            console.log('ошибка ввода', e);
        }
    }

    setColorHandler() {
        setColor(this.value, this.dataset.num - 0);
    }

    inputTangentHangler() {
        setTangent(this.checked, this.dataset.num - 0);
    }

    startIntegralHandler() {
        startIntegral(this.value - 0, this.dataset.num - 0);
    }

    endIntegralHandler() {
        endIntegral(this.value - 0, this.dataset.num - 0);
    }

    inputIntegralHandler() {
        setIntegral(this.checked, this.dataset.num - 0);
    }

    inputZerosHandler() {
        inputZeros(this.checked, this.dataset.num - 0)
    }
}

export default UI;