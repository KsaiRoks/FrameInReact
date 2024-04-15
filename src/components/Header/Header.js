import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.setPageName = props.setPageName;
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setPageName('Essay')}>Эссе</button>
                <button onClick={() => this.setPageName('Target')}>Мишень</button>
                <button onClick={() => this.setPageName('Game')}>Игра</button>
                <button onClick={() => this.setPageName('Calc')}>Калькулятор</button>
                <button onClick={() => this.setPageName('Graph2D')}>2д графика</button>
                <button onClick={() => this.setPageName('Graph3D')}>3д графика</button>
            </div>
        )
    }
}

export default Header;