import React from 'react';
import './useEffecting.css'
import { useState, useEffect } from 'react';



const UseEffecting = () => {



  
  const [width, setWidth] = useState({
    widthPx:'',
    widthEm:''
  })

  useEffect(()=>{
   
   const updateWidth = () =>{

    const headerTop = document.querySelector('.header-top');
    const width = headerTop.offsetWidth;
    const emValue =width/16;

    setWidth(()=>({
      ...width,
      widthPx:width,
      widthEm:emValue
    }))

   }

   updateWidth();
   
   window.addEventListener('resize', updateWidth);

  },
  [])





















  
  // Кастомный хук для управления счетчиком и его автоматического обновления
  const useCounter = (initialValue, delay, amount, isRunning) => {
    const [count, setCount] = useState(initialValue);
  
    useEffect(() => {
      let timer;
  
      if (isRunning) {
        timer = setInterval(() => {
          setCount((prevCount) => prevCount + amount);
        }, delay);
      }
  
      // Очистка таймера при размонтировании компонента или когда isRunning становится false
      return () => clearInterval(timer);
  
    }, [delay, isRunning, amount]);
  
    // Возвращаем состояние и функцию для установки нового значения счетчика
    return [count];
  };
  
  // Пример использования кастомного хука
  const CounterComponent = () => {

      const [isRunning, setIsRunning] = useState(false);
      const [isRunningTwo, setIsRunningTwo] = useState(false)
      const [count] = useCounter(0, 1000, 1, isRunning);
      const [countTwo] = useCounter(0,1000, 2, isRunningTwo)
  
    return (
      <div>
        <div className='counterOne'>
        <h1>Counter One:{count}</h1>
         <button onClick={() => setIsRunning((isRunning)=>isRunning =true)}>Start</button> 
         <button onClick={() => setIsRunning((isRunning)=> isRunning = false)}>Stop</button>
        </div>
        <div className='counterTwo'>
        <h1>Counter One:{countTwo}</h1>
         <button onClick={() => setIsRunningTwo((isRunningTwo)=>isRunningTwo =true)}>Start</button> 
         <button onClick={() => setIsRunningTwo((isRunningTwo)=> isRunningTwo = false)}>Stop</button>
        </div>
        
      </div>
    );
  };

  return (<div style={{
    width:'1080px',
    margin:'0px auto auto',
    display:'flex',
    justifyContent:'center'
  }}>
  <CounterComponent />
  <div className='render-here'>
          <div className='show-the-size'>

            <p className='box-size'style={{marginTop:'20vmin',
                                           marginLeft:'20vmax'}}> 
                                           
            Width of the box in px: {width.widthPx}px; 
            Width of the box in em: {width.widthEm};
            </p>

          </div>
  </div>
  </div>)
  }
export default UseEffecting;