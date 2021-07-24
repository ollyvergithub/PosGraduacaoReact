import React, {Component} from "react";
import logo from "./logo.svg";

export class MainRenderClass extends Component {

    constructor() {
        super();
        this.state = {
            count: 0,
            mensagem: "Olá"
        }
    }

    handleResize = () => console.log("A janela foi redimensionada")

    // componentDidMount - Após o componente ser renderizado
    componentDidMount() {
        console.log("ComponentDidMount - Após o componente ser renderizado")
        window.addEventListener('resize', this.handleResize)
    }

    // componentDidUpdate - Sempre que o componente for atualizado
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate - Sempre que o componente for atualizado")
        console.log('prevProps: ', prevProps)
        console.log('prevState: ', prevState)
        console.log('snapshot: ', snapshot)
    }

    UNSAFE_componentWillMount() {
        console.log("UNSAFE_componentWillMount - invocado imediatamente ANTES do componente ser destruído.")
        window.removeEventListener('resize', this.handleResize)
    }


    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1>{this.props.mensagem}</h1>
                <button onClick={()=> this.setState({count: this.state.count + 1})}>Incrementar {this.state.count}</button>
            </header>
        )
    }
}