import React, { useState, useRef, useEffect } from 'react'
import App from '../App'
import classes from '../components/Card.module.css'
import RandomColor from './Colors'


export default function Card( {color, isLock, obj, index, newState} ) {
    

    const [lock, setLock] = useState("fa fa-unlock")
    const textRef = useRef(null)
    
    useEffect(() => {
     if (textRef.current) {
     textRef.current.textContent = color
     }
    }, [color])

    function colorTone(col) {
    //функция, с помощью встроенного метода luminance, библиотеки chroma, определяет тон цвета (темный или светлый)
     return chroma(col).luminance() > 0.5 ? 'black' : 'white'
    }

    function lockColor() {        
        console.log(color);
        
        newState(obj.map((item) => {
            if (item.isLock === 'unLock' && item.color === color) {
              return {
                ...item,
                isLock: 'lock',
              };

              
            } else if (item.isLock === 'lock' && item.color === color) {
              return {
                color: item.color, 
                isLock: 'unLock',
              };
            
            
            }
            // Если ни одно условие не сработает, можно вернуть исходный элемент
            return item;


          }));

        console.log(obj);


        if (lock == "fa fa-unlock") {
            return   ( 
                setLock("fa fa-lock")
            )
        }
        if (lock == "fa fa-lock") {
            return    setLock("fa fa-unlock")
        }

        
        
    }

  
    function colorTone(col) {
    //функция, с помощью встроенного метода luminance, библиотеки chroma, определяет тон цвета (темный или светлый)
     return chroma(col).luminance() > 0.5 ? 'black' : 'white'
    }
// скопировать в буфер обмена цвет из <p>
    function clickToCopy(e) {

        navigator.clipboard.writeText(e.textContent)
        .then(() => {
            let copyFn = () => {
                textRef.current.textContent = "copied"

            }
            copyFn()
            setTimeout(() => {
                textRef.current.textContent = color
            }, 1000);
            
        })
        .catch(error => {
            console.error(`Текст не скопирован ${error}`)
        })

    }
// скопировать в буфер обмена цвет из <p>
    function clickToIconCopy(e) {

        navigator.clipboard.writeText(e)
        .then(() => {
            let copyFn = () => {
                textRef.current.textContent = "copied"
            }
            copyFn()
            setTimeout(() => {
                textRef.current.textContent = color

            }, 1000);
            
        })
        .catch(error => {
            console.error(`Текст не скопирован ${error}`)
        })

    }

    function handleKeyPress() {
        if (event.key === ' ') {
            console.log('Пробел нажат');
            newState(obj.map((item) => ({ 
                ...item,
                color: item.isLock == 'lock' ? item.color : RandomColor(),
            })))
          }
            
          console.log(obj);

     };

    return (

        

    <div  className={classes.card} style={{backgroundColor: `${color}`}} tabIndex="0" onKeyPress={handleKeyPress }>

          <p className={classes.colorsN} onClick={(e) => clickToCopy(e.target)}  style={{color: `${colorTone(color)}`}}  ref={textRef}>   </p>

          <div className={classes.df}>
              <div className={classes.colorsN} onClick={() => lockColor(color)} style={{color: `${colorTone(color)}`}}><i class={lock}></i></div>
              <div className={classes.colorsN} onClick={() => clickToIconCopy(color)}><i className={classes.colorsN} class="fa-solid fa-copy" style={{color: `${colorTone(color)}`}}></i></div> 
          </div>
          
    </div>            


    )
}


