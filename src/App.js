import './App.css';
import './styles/Page.css';

import {Home} from "./components/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Quiz} from "./components/Quiz";
import {Page} from "./components/Page";
import {QuizResults} from './components/QuizResults';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/quiz/:id" element={<Quiz/>}/>
                <Route path="/page/:id" element={<Page/>}></Route>
                <Route path="/result/:nbGoodAnswers" element={<QuizResults/>}></Route>
            </Routes>
        </BrowserRouter>
    );


}

export default App;
