import React from "react";
import '../App.css'

function Card({imageurl,text1,text2}) {

    return(
        <div className='card-container'>

            <div className='image-container'>
                <img src={imageurl} />
            </div>

                 <div className='card-content'>
                     <div className='card-text1'>
                     <h1>{text1}</h1>
                     </div>


                     <div className='card-text2'>
                         <h1>{text2}</h1>
                     </div>

                 </div>



        </div>
    )

}

export default Card;