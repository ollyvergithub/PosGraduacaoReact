import logo from "./logo.svg";

export const MainRender = (props) => {
    return(
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>{props.mensagem}</h1>
        </header>
    )

}