import './App.css';
import {Home} from "./components/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Quiz} from "./components/Quiz";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="quiz/:number" element={<Quiz/>}/>
            </Routes>
        </BrowserRouter>
    );


}

export default App;
