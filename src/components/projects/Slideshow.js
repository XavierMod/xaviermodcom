import React from 'react';
import { Slide } from 'react-slideshow-image';
import styled from 'styled-components';

import test1 from '../../assets/projectImages/test1.png';
import test2 from '../../assets/projectImages/test2.png';
import test3 from '../../assets/projectImages/test3.jpg';

import { largerThan, smallerThan } from '../../helpers/mediaQueries'; 
import { create } from 'istanbul-reports';


const SlideContainer = styled.div`
    
    h3 {
    text-align: center; 
    }

    animation: moveInLeft 1s ease-out 0.5s;
    animation-fill-mode: backwards;
`;
  
const EachSlide = styled.div`

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: cover;
        height: 100vh;


        ${smallerThan.mobile`
        height: 300px;
    `};
    }
`;
 
const properties = {
  duration: 4000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: true,
}
 
const Slideshow = (props) => {
    var imagesUrl = [];
    Object.keys(props && props.data.images).forEach(el => {
        imagesUrl.push(props.data.images[el]);
    });

    const createImages = imagesUrl.map(el => {
      return <EachSlide key={el}>
      <div style={{'backgroundImage': `url(${el})`}}>
      </div>
    </EachSlide>
  });

    return (
      <SlideContainer>
        <Slide {...properties}>
          {createImages}
        </Slide>
      </SlideContainer>
    )
}

export default Slideshow;