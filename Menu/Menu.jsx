import React from 'react';
import "./menu.css"
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCustomLink } from '../Custom Hooks/CustomHooks';





const Menu = ({header, items, active, setActive}) => {
    
    const[dropdown, setDropdown] = useState(false);

    const closeMe = () =>{
        setActive(false);
        if(dropdown){
            setDropdown(!dropdown);}
        
    }

    const mainLinkProps = useCustomLink('/', closeMe)


    useEffect(()=> {
   
        function closeWithBlur(menu){

            const selectedBlur = document.querySelector('.blur');
            return selectedBlur.addEventListener('click', menu);
        };

        closeWithBlur(closeMe);

        window.addEventListener('keydown', (event)=>{
            if(event.code === 'Escape'){
                closeMe();
            }

})

    })



    return (
       
    <div className={active ? 'menu active' : 'menu closed'}>
            <div className="blur" />
            <div className="menu-content">
                <div className='menu-header line'>
                <span 
                 onClick={()=> {
                    setActive(false);
                    if(dropdown){
                        setDropdown(!dropdown);}}}>
                    &times;
                </span>
                <div className="h3-wrap">
                  <div className='heading'>{header}</div>
                </div>
               
              </div>
              
               <div className='tab-container'>
                <Link  {...mainLinkProps}

                ><h3 className='--link-module'>Main</h3>
                </Link>



               <div className='dropdown'style={{
                    marginTop:'2em'
                }}
                onClick={()=>{setDropdown(!dropdown)}}>

                    <h3>Hooks</h3>

                    
            <span id="arrow" className={dropdown ? "material-symbols-outlined one-line open" 
            : "material-symbols-outlined one-line"}>
                    expand_more
            </span>

                       
                </div>
                </div>
               
                <ul  className="hooklist" >
                    {dropdown && items.map((item,i)=>
                        <li>
                           <Link to={item.href}  className='browser-link' key={i} 
                           onClick={()=> setActive(false)} >
                            <div className='menu-iteming'>
                            <span className='item-value'>{item.value}</span><span className='dotted-content'>.</span>
                            <span className="material-symbols-outlined inner-icon">
                            {item.icon}
                            </span>
                            </div>
                            </Link> 
                        </li>

                    )}
                </ul>
            </div> 
               </div>

              

             


    );
};

export default Menu;



