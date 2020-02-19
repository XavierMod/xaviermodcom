import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '../library/Card';
import { Badge, Button } from 'reactstrap';


const CardsWrapper = styled.div`
    max-width: 1200px;
    text-align: center;
    margin: auto;
`;

class MainResources extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        totalResources: 0
    }

    render() {

        const resources = this.props && this.props.resources;
        console.log(this.props);

        const cards = resources.map((el, ind, arr) => {
            this.state.totalResources++;
            return <Card
                key={el.id}
                title={el.title}
                text={el.text}
                url={el.url}
                imgUrl={el.imgUrl}/>
        });

        return (
            <React.Fragment>
                <h2 style={{textAlign: 'center', margin: '20px auto'}}>Xavier Mod's resources <Badge color="secondary">New</Badge><Button style={{marginLeft: '10px'}}color="primary" outline>
        Total <Badge color="secondary">{this.state.totalResources}</Badge></Button></h2>
                <h6 style={{textAlign: 'center', margin: '20px auto', fontSize: '15px'}}>My full list of UI Design / Front End Development resources</h6>

                <CardsWrapper>
                    {cards}
                </CardsWrapper>
            </React.Fragment>
        );
    }
};

export default MainResources;