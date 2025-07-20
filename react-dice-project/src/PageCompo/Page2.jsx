import React, { useState } from 'react'
import './Page2.css'
import { useNavigate } from 'react-router-dom'


const Page2 = () => {

  function getRandom(min, max){
    return Math.floor (Math.random() * (max - min + 1)) + min;
  }

  const arr = [1,2,3,4,5,6]

  const navigate = useNavigate();
  const[random, setrandom] = useState(getRandom(1,6));
  const[inputnum, setinputnum] = useState(null);
  const[totalamount, settotalamount] = useState(100);
  const[BetAmount, SetBetAmount] = useState(null);
  const[image, setimage] = useState("dice1.jpg");
  const[msg, setmsg] = useState("");
  const[msgcolor, setmsgcolor] = useState();


  function handleClickColor(num) {
    setinputnum(num);
    console.log(num);
  }
  
  function GenerateRandom() {
    const RandomNum = getRandom(1, 6);
    setrandom(RandomNum);
    // setimage(`dice${random}.jpg`)
    setimage("dice" +random + ".jpg");
    // console.log("random num is :",random,RandomNum);
    // console.log("your num is :",inputnum);
    // console.log("bet amount num is :",BetAmount);
    // console.log("total peseeee",totalamount);


    if (totalamount < 1) {
      alert("Soory...\nYou Have No Money")
    }
    else if(BetAmount == null || BetAmount < 1){
      alert("Select a Valid Amount")
    }
    else if(inputnum === null){
      alert("Select Any Number")
    }
    else{
      if(totalamount < BetAmount){
        alert("Soory...\nInsufficient Balances")
      }
      else{
        if(random === inputnum){
          settotalamount(parseFloat((totalamount + ((BetAmount*90)/100))))
          setmsg("You Won")
          setmsgcolor(1)
          setTimeout(() => {
            setmsg("");
            setmsgcolor();
          }, 1000);
        }
        else{
          settotalamount(totalamount - BetAmount)
          setmsg("You Loss")
          setmsgcolor(2)
          setTimeout(() => {
            setmsg("");
            setmsgcolor();
          }, 1000);
        }
      }
    }
    
    
  }
  
  function HandleShow () {
    navigate('/page3');
  }


  return (
    <div className='page2maindiv'>

      <div className='amountdiv'>
        {parseFloat((totalamount).toFixed(2))}
      </div>

      <div className={`statusdiv ${msgcolor === 1 ? 'green' : msgcolor === 2 ? 'red' : ''}`}>
        {msg}
      </div>

        <div className='numbtndiv'>

          {
            arr.map((number,index) => (

              <button 
              className={`numbtn ${inputnum === number ? 'selected' : ''}`}  
              onClick={() => {  handleClickColor(number)}}>
                {number}
              </button>
            ))
          }
          
        </div>

        <div className='selectnumdiv'>
          <p>Total Amount</p>
          <p>Select Number</p>
        </div>

        <div className='middlediv'>
          
          <img src= {image} alt="one" className='diceimg'/>
          

          <input 
          type="number" 
          placeholder='Enter Amount'
          value={BetAmount}
          onChange={(e) => SetBetAmount(e.target.value)}
          />

          <button className='rollbtn' onClick={GenerateRandom}>
            Click to Roll
          </button>

          <button className='showbtn' onClick={HandleShow}>
            Show Rules
          </button>

        </div>
    </div>
  )
}

export default Page2