import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.setPageName = props.setPageName;
    }

    render() {
        return (
            <div className='header'>
                <button className='headerButton' onClick={() => this.setPageName('Essay')}>Эссе</button>
                <button className='headerButton' onClick={() => this.setPageName('Target')}>Мишень</button>
                <button className='headerButton' onClick={() => this.setPageName('Game')}>Игра</button>
                <button className='headerButton' onClick={() => this.setPageName('Calc')}>Калькулятор</button>
                <button className='headerButton' onClick={() => this.setPageName('Graph2D')}>2д графика</button>
                <button className='headerButton' onClick={() => this.setPageName('Graph3D')}>3д графика</button>
            </div>
        )
    }
}

export default Header;