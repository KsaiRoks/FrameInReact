Template.prototype.calcTemplate = () => `
<div id = 'calc'>
<h1>Универсальный калькулятор</h1>
<textarea id="a" placeholder="a" cols="20" rows="5"></textarea>
<textarea id="b" placeholder="b" cols="20" rows="5"></textarea>
<textarea id="c" placeholder="result" cols="20" rows="5"></textarea>
</div>
<div>
    <button class="operand" data-operand="add">+</button>
    <button class="operand" data-operand="sub">-</button>
    <button class="operand" data-operand="mult">*</button>
    <button class="operand" data-operand="div">/</button>
    <button class="operand" data-operand="prod">scal</button>
    <button class="operand" data-operand="pow">^</button>
</div>

<div>
<h1>Калькулятор полиномов</h1>
    <textarea id="poly" placeholder="poly1&#13;+&#13;poly2&#13;=&#13;result" cols="40" rows="5"></textarea>
    <textarea id="point" placeholder="Точка" cols="20" rows="5"></textarea>
        <button id="polyOperand">Посчитать</button>
        <button id="polyValue">Значение в точке</button>
</div>
`;