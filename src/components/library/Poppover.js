import React, { useState } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

const PopoverW = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div>
      <Button id="Popover1" type="button">
        {props.popoverTitle}
      </Button>
      <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
        <PopoverHeader>{props.popoverHeader}</PopoverHeader>
        <PopoverBody>{props.popoverBody}</PopoverBody>
      </Popover>
    </div>
  );
}

export default PopoverW;