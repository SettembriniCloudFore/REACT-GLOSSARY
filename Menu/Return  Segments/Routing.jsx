import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { hookies } from '../Header';
import Main from '../../Pages/MainPage/Main';


const Routing = () => {

    return (
        <Routes>
            <Route path='/' element={<Main/>} />
            {hookies.map((item,i)=>{
                 return <Route path={item.href}  element={item.path} key={i} />
            })}
        </Routes>
    );
};

export default Routing;