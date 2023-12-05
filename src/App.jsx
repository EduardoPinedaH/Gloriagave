import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/HomePage";
import Layout2 from "./components/Spaces";

function App() {
    return (
        <>
            <Routes>
                <Route exact path='/' Component={Layout} />
                <Route exact path='/spaces' Component={Layout2} />
            </Routes>
        </>
    );
}

export default App;
