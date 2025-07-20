import React from 'react'
import './Page1.css'
import { useNavigate } from 'react-router-dom'

const Page1 = () => {

    const navigate = useNavigate();
    function HandleClick(){ 
    navigate('/page2');
    }


  return (
    <div className='page1maindiv'>

        <div className='imagediv'>
            <img src="AllDice.jpg" alt="AllDice" className='allimg'/>
        </div>

        <div className='textdiv'>

            <div className='text'>

               <p>DICE GAME</p>
               <button className='playbtn' onClick={HandleClick}>
                   Play now
               </button>

            </div>

        </div>

    </div>
  )
}

export default Page1