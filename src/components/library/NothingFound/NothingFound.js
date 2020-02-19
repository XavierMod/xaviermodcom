import React, { Component } from 'react';
import styled from 'styled-components';
import $ from 'jquery';

const NothingFoundW = styled.div`

    height: 100vh;
    background-color: #000000;
    background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

    text-align: center;

`;

const Message = styled.div`

    color: white;
    margin-top: 30px;

    h1 {
        margin-bottom: 20px;
    }

    p {

    }

`;

const NothingFound = ( props ) =>  {   

    var pageX = $(document).width();
    var pageY = $(document).height();
    var mouseY=0;
    var mouseX=0;

    $(document).mousemove(function( event ) {
    //verticalAxis
    mouseY = event.pageY;
    var yAxis = (pageY/2-mouseY)/pageY*300; 
    //horizontalAxis
    mouseX = event.pageX / -pageX;
    var xAxis = -mouseX * 100 - 100;

    $('.box__ghost-eyes').css({ 'transform': 'translate('+ xAxis +'%,-'+ yAxis +'%)' }); 

    //console.log('X: ' + xAxis);

    });

    return (
        <NothingFoundW>
            <div class="box">
                <div class="box__ghost">
                    <div class="symbol"></div>
                    <div class="symbol"></div>
                    <div class="symbol"></div>
                    <div class="symbol"></div>
                    <div class="symbol"></div>
                    <div class="symbol"></div>
                    
                    <div class="box__ghost-container">
                    <div class="box__ghost-eyes">
                        <div class="box__eye-left"></div>
                        <div class="box__eye-right"></div>
                    </div>
                    <div class="box__ghost-bottom">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    </div>
                    <div class="box__ghost-shadow"></div>

                    <Message>
                    <h1>Whoops!</h1>
                    <p>It seems there's only a ghost here! The page you were trying to look for doesn't exist!</p>
                </Message>
                </div>
                </div>
        </NothingFoundW>
    );
}

export default NothingFound;