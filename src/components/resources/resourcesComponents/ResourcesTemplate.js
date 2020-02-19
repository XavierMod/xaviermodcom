import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '../library/Card';
import { Alert } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const CardsWrapper = styled.div`
    max-width: 1200px;
    text-align: center;
    margin: auto;
`;

class ResourcesTemplate extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const cardsToRender = [];
        const getSomeCards = this.props.resources.forEach((el, ind, arr) => {
            if (el.type === this.props.route) {
                cardsToRender.push(
                <Card
                    key={el.id}
                    title={el.title}
                    text={el.text}
                    url={el.url}
                    imgUrl={el.imgUrl}/>
                ) 
            }
        });

        return (
            <div>
                <Breadcrumb style={{marginTop: '20px'}}>
                    <BreadcrumbItem><a href="/resources">All Resources</a></BreadcrumbItem>
                    <BreadcrumbItem tag="span">{this.props.route}</BreadcrumbItem>
                </Breadcrumb>

                <CardsWrapper>
                    {cardsToRender.length !== 0 ? cardsToRender : <Alert style={{marginTop: '20px'}}color="secondary">I still have nothing here, come back later please!</Alert> }
                </CardsWrapper> 
            </div>

        );
    }
};

export default ResourcesTemplate;