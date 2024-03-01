import Card from "./Card";
import './CardCont.css';
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function CardCont({cardData}){ 

    const { title, cards } = cardData;

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 8
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3
        }
      };

    

    return(

        <div className="cardmaincont">
            <h1 id="ContH1">{title}</h1>
            <div className="CardCont">
                <Carousel  responsive={responsive}>
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        description={card.description}
                        link={card.link}
                    />
                ))}
                </Carousel>
            </div>
        </div>

    );
}
export default CardCont;