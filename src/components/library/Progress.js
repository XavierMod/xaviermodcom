import React from 'react';
import { Progress } from 'reactstrap';
import styled from 'styled-components';

const Margin = styled.div`
    margin-top: 20px;
`;

const ProgressW = (props) => {
  return (
    <div>
      {/* <Progress value={75}>You're almost there!</Progress> */}
      <Margin />
      <Progress multi>
        <Progress animated bar value={props.value}>{props.content}</Progress>
        <Progress bar color={props.color2} value={props.value2}>{props.content2}</Progress>
      </Progress>
    </div>
  );
};

export default ProgressW;