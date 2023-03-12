import { useState } from "react";
import { dataText } from "./dataText";

function AboutUs() {

  
    const [about] = useState(dataText);
    const [showText, setShowText] = useState(false);
  
    const showTextClick = (item)  => {
      item.showMore = !item.showMore
      setShowText(!showText)
    }
  
    return (
    <div>
      <div className="cont">
        <h1>О нас</h1>
      </div>
    {about.map((item => {
      const { id, description, image, showMore } = item;
      
      return(
        <div key={id}>

          <div className="cont">
            <img src={image} width="700px" alt="our team"/>
          </div>

          <div className="cont text">
            <p>{showMore ? description : description.substring(0,170) + "..."}
            <button className="buttonText" onClick={() => showTextClick(item)}>{showMore ? "Свернуть" : "Читать полностью"}</button>
            </p>
          </div>

        </div>
      )
    }))}
  
    </div>
    );
  
}

export default AboutUs;
