import {ApplicationRoutes} from "./ApplicationRoutes";
import {Header} from "./components/Header";

function App() {
    return (
        <div className='container'>
            <Header/>
            <ApplicationRoutes/>
        </div>
    );
}

export default App;
