import './App.css';
import {Home} from "./components/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Quiz} from "./components/Quiz";
import {Page} from "./components/Page";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/quiz/:id" element={<Quiz/>}/>
                <Route path="/page/:id" element={<Page/>}></Route>
            </Routes>
        </BrowserRouter>
    );


}

export default App;
