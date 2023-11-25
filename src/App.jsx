import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/HomePage";
import Layout2 from "./components/Spaces";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />} />
                <Route path='/spaces' element={<Layout2 />} />
            </Routes>
        </>
    );
}

export default App;
