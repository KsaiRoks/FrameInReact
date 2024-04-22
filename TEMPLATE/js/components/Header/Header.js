class Header extends Component{
    addEventListeners() {
        document.getElementById('show2D').addEventListener('click', () => this.callbacks.showPage('graph2D'));
        document.getElementById('show2D').addEventListener('click', () => document.body.style.backgroundColor = 'rgb(130 130 130)');
        document.getElementById('showCalculator').addEventListener('click', () => this.callbacks.showPage('calc'));
        document.getElementById('showCalculator').addEventListener('click', () => document.body.style.backgroundColor = '#f2f2f2');
        document.getElementById('show3D').addEventListener('click', () => this.callbacks.showPage('graph3D'));
        document.getElementById('show3D').addEventListener('click', () => document.body.style.backgroundColor = 'rgb(84 96 115)');
    }
}