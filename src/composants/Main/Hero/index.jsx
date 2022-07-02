import React from 'react';
import styled from 'styled-components';

import banckThree from '../../../assets/img/bank-tree.jpeg';

const MainContainer = styled.div`
    background-image: url(${(props) => props.url});
    background-position: 0 -50px;
    background-size: cover;
    background-repeat: no-repeat;
    height: 300px;
    position: relative;
`;

const Hero = () => {
    return (
        <MainContainer className="hero" url={banckThree}>
            <section className="hero-content">
                <h2 className="sr-only">Promoted Content</h2>
                <p className="subtitle">No fees.</p>
                <p className="subtitle">No minimum deposit.</p>
                <p className="subtitle">High interest rates.</p>
                <p className="text">
                    Open a savings account with Argent Bank today!
                </p>
            </section>
        </MainContainer>
    );
};
export default Hero;
