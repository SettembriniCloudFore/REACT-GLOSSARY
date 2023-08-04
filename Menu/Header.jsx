import React from 'react';
import Menu from './Menu';
import { useState} from 'react';
import UseContexting from '../Pages/UseContexting';
import UseReducing from '../Pages/UseReducing';
import UseEffecting from '../Pages/UseEffecting';
import UseStating from '../Pages/UseStating';
import UseRefing from '../Pages/UseRefing';
import UseMemoing from '../Pages/UseMemoing';
import logo from './logo.svg'


export const hookies = [

    {value:"useRef", href:"/useRef", icon:"repartition", path:<UseRefing />},

    {value:"useState", href:"/useState", icon:"select_window", path:<UseStating />},

    {value:"useEffect", href:"/useEffect", icon:"arrow_outward", path:<UseEffecting />},

    {value:"useReducer", href:"/useReducer", icon:"dashboard_customize", path:<UseReducing />},

    {value:"useMemo", href:"/useMemo", icon:"sd_card", path:<UseMemoing />},
    
    {value:"useContext", href:"/useContext", icon:"flight_takeoff", path:<UseContexting />},
];


const Header = () => {

    const [menuActive, setMenuActive] = useState(false);

    const [menuHover, setMenuHover] =useState(false);

    return (
      <div className="App">
        <header className='react-introduction'>
          <div className='header-top'>
                  <div className='burger-button'
                  onClick={()=> setMenuActive(!menuActive)}
                  onMouseEnter={()=>{setMenuHover(true)}}
                  onMouseLeave={()=>{setMenuHover(false)}}
                  
                  >
                   
                    {menuHover 
                    ? <div className='burger-button-container'><span class="material-symbols-outlined opener burg-open"
                    >
                    menu
                    </span><span className="material-symbols-outlined opener arrow">
                    arrow_back_ios
                    </span></div>
                    : <div className="material-symbols-outlined opener"
            
                    >
                    menu
                    </div>}
                  
                  
                  </div>
                  <div className='h1-wrap'>
                    <img src={logo} 
                    alt="logo" className='react-logo'/>
                    <h1>Project React Glossary </h1></div>
                  
                  
                  <aside className='en-ru'
                   onClick={()=>{}}
                   style={{
                     cursor:"pointer"
                   }}> EN/RU</aside>
                 
                 
          </div>
          
          <div className='main-header-container'>
            <main className='description'>
  
            </main>
            <aside>
  
            </aside>
          </div>
  
  
        </header>
      <Menu 
        active={menuActive}
        setActive={setMenuActive}
        header={"Burger Menu"}
        items={hookies} />      
      </div>

    );
   
};

export default Header;