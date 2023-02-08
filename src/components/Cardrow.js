import React from "react";
import Card from "./Card";
import {Container, Row, Col} from "react-bootstrap";

function Cardrow() {

    return (
        <div className='card-alignment'>

           <div> <Card
               imageurl='image1.png'
               text1='UX Designer '
               text2='Designing'
           /></div>
            <div> <Card
                imageurl='image2.jpg'
                text1='Flutter Learner'
                text2='Android'
            /></div>
            <div> <Card
                imageurl='image3.png'
                text1='React Native '
                text2='App Development'
            />
            </div>
            <div> <Card
                imageurl='image4.png'
                text1='Devops Engineer'
                text2='AWS'
            /></div>
            <div> <Card
                imageurl='image5.webp'
                text1='Java Script'
                text2='Software Development'
            /></div>














        </div>

    )

}

export default Cardrow;