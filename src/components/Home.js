import {useEffect, useState} from "react";
import axios from 'axios';
import {NavLink} from 'react-router-dom';

export const Home = () => {
    const [dataPages, setDataPages] = useState();

    useEffect(() => {
        axios.get('http://g4.esiee-it.o3creative.fr/wp-json/wp/v2/pages/11?acf_format=standard').then((response) => {
            setDataPages(response.data);
        })
    }, [])

    if (!dataPages) return null;

    return (
        <div className="App">
            <header className="">
                <img className="logoaccueil" src="https://images.ctfassets.net/gi6fitfj7iu4/5pPJ6ZLR5irhfpobU6DQlW/689df14ded419613f908e21c700d5878/LOGO_BEAN.png?q=80&w=800"></img>
                
                <ul>
                    <li><h1><NavLink to="/quiz/14">Quizz </NavLink></h1></li>
                    <li><h1><NavLink to="page/51">Articles </NavLink></h1></li>
                </ul>
            </header>
            <div>
            <p className="desc"><h2>{dataPages.acf.description}</h2></p>
                <p className="corps">{dataPages.acf.corps}</p>
                <br></br>
              <div>
              
                {dataPages.acf.image.map((item, index) => (
              <img className={`img_${index}`} key={index} src={item} alt="img" height="350vh" width="80%"></img>))}
              </div>
            </div>

        

           

        </div>
    )
}
