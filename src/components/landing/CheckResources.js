import React, { Component } from 'react';
import styled from 'styled-components';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const Wrapper = styled.div`
    width: 100%;
    text-align: left;
    margin: 30px auto;
`;

const LimitToast = styled.div`
    display: inline-block;
    margin: 10px;
`;

const P = styled.p`
    padding-left: 30px;
`;

const CheckResources = () =>  {   
    return (
        <Wrapper>
            <P>Quick Updates:</P>

        <div className="p-3  my-2 rounded">
            <LimitToast>
                <Toast style={{display: 'inline-block'}}>
                <ToastHeader>
                    I'm available! - 19 Jan 2020
                </ToastHeader>
                <ToastBody>
                Currently looking for side projects and part-time oportunities!🤩
                </ToastBody>
                </Toast>
            </LimitToast>

            <LimitToast>
                <Toast style={{display: 'inline-block'}}>
                <ToastHeader>
                    My Resources page! - 17 Oct 19
                </ToastHeader>
                <ToastBody>
                🤩 I have finished my own resources page — <a href="/resources" target="_blank">check it out!</a>
                </ToastBody>
                </Toast>
            </LimitToast>
        </div>

        
    </Wrapper>
    );
}

export default CheckResources;