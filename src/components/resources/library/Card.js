import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import styled from 'styled-components';
import { largerThan, smallerThan } from '../../../helpers/mediaQueries'; 

const CardWrapper = styled.div`
    display: inline-block;
    width: 240px;
    margin: 30px;
    box-shadow: 1px 1px 30px rgba(0, 0, 0, 0.05);

    ${smallerThan.mobile`
        width: 90%;
        margin: 10px 0;

    `};
`;

const Example = (props) => {
    console.log(props);

    const ImgWrapper = styled.div`
      height: 90px;
      overflow: hidden;
      background: url(${props.imgUrl});
      background-size: cover;
    `;

  return (
    <CardWrapper>
      <Card>
        <ImgWrapper>
          {/* <CardImg top width="10%" src={props.imgUrl} alt="Card image cap" /> */}
        </ImgWrapper>
        <CardBody>
          <CardTitle><strong>{props.title}</strong></CardTitle>
          <CardText style={{fontSize: '13px'}}>{props.text}</CardText>
          <Button outline href={props.url} target="_blank">Link</Button>
        </CardBody>
      </Card>
    </CardWrapper>
  );
};

export default Example;