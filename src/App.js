import './App.css';
import './styles/Page.css';

import {Home} from "./components/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Quiz} from "./components/Quiz";
import {Page} from "./components/Page";

function App() {
    const v = ``
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
