import React from 'react'
import { VscBook } from 'react-icons/vsc';
import flagArg from '../img/flagArg.png'
import flagRus from '../img/flagRus.png'

const Navigate = () => {
  return (
    <nav className='additionalFunctions'>

        <img src={flagArg} alt="Argentinian flag" height={32} width={32} style={{margin: '.5rem 0'}} />

        <div className='item'>
            <a href="https://translate.yandex.com/?lang=en-ru"><VscBook size={32} /></a>
            <small>YT en-ru</small>
        </div>

        <img src={flagRus} alt="Russian flag" height={32} width={32} style={{margin: '.5rem 0'}}/>    

        <div className='item'>
            <a href="https://translate.yandex.com/?lang=ru-en"><VscBook size={32} /></a>
            <small>YT ru-en</small>
        </div>

    </nav>
  )
}

export default Navigate