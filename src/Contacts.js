import { useState } from "react";
import { dataTwo } from "./dataTwo";


function Contacts() {
    const [gift, setGift] = useState(0);
    const [giftPrev, setGiftPrev] = useState(dataTwo.length-1);
    const [giftNext, setGiftNext] = useState(1);
  
    const {name, adress, about, image} = dataTwo[gift];
    const {imageOne} = dataTwo[giftPrev];
    const {imageTwo} = dataTwo[giftNext];
  
    const previosGift = () => {
      setGift((gift =>{
        gift --;
        if (gift < 0) {
          return dataTwo.length-1;
        }
        return gift;
      }))
      setGiftPrev((giftPrev =>{
        giftPrev --;
        if (giftPrev < 0) {
          return dataTwo.length-1;
        }
        return giftPrev;
      }))
      setGiftNext((giftNext =>{
        giftNext --;
        if (giftNext < 0) {
          return dataTwo.length-1;
        }
        return giftNext;
      }))
    }
  
    const nextGift = () => {
      setGift((gift =>{
      gift ++;
        if (gift > dataTwo.length - 1) {
          gift = 0;
        }
        return gift;
      }))
      setGiftPrev((giftPrev =>{
      giftPrev ++;
        if (giftPrev > dataTwo.length - 1) {
          giftPrev = 0;
        }
        return giftPrev;
        }))
      setGiftNext((giftNext =>{
      giftNext ++;
        if (giftNext > dataTwo.length - 1) {
          giftNext = 0;
        }
        return giftNext;
        }))
    }
  
      return (<div>
  
    <div>
      <h1>Наши магазины</h1>
    </div>
  
        <div className="containerImage">
      
          <div className="near">
            <img className="imageNear" src={imageOne} width="400px" height="270px" alt="gift"/>
            <div className='btn'>
              <button className='btnI' onClick={previosGift}>&larr;</button>
            </div>
          </div>
        
          <div>
            <div className="container main">
              <img src={image} width="500px" height="330px" alt="gift"/>
              <h1>{name}</h1>
              <h2>{about}</h2>
              <h2>{adress}</h2>
            </div>
          </div>
    
        <div className="near">
        <img className="imageNear" src={imageTwo} width="400px" alt="gift"/>
        <div className='btn'>
            <button className='btnI' onClick={nextGift}>&rarr;</button>
        </div>
        </div>
        </div>

        </div>
      );
    }


export default Contacts;
