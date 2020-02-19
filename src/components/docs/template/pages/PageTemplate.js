import React from 'react';
import styled from 'styled-components';

import TitleProject from '../../modules/TitleProject';
import Paragraph from '../../modules/Paragraph';
import Image from '../../modules/Image';
import Gallery from '../../modules/Gallery';

const PageTemplate = ( props ) => {
    return (
        <div>
             <TitleProject title={props.title} />
            <Paragraph p="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi mollitia consectetur iste expedita pariatur eius facere enim temporibus a quae! Nostrum ratione optio maiores vel eligendi asperiores eveniet sequi. Temporibus!" />
            <Image source={"https://picsum.photos/1920/1080"} />
            <Gallery 
                src1="https://picsum.photos/1920/1080" 
                src2="https://picsum.photos/1920/1080" 
                src3="https://picsum.photos/1920/1080" 
                src4="https://picsum.photos/1920/1080" />
        </div>
    );
}

export default PageTemplate;
