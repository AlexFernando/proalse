import React, { Component, useEffect } from "react";
import { connect, styled, css, Global } from "frontity";
import CarouselAllStyles from "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "@frontity/components/image";

import productOne from '../images/no_background/6_scaled.png'
import productTwo from '../images/no_background/1_scaled.png'
import productThree from '../images/no_background/7_scaled.png'
import productFour from '../images/no_background/2_scaled.png'
import productFive from '../images/no_background/3_scaled.png'
import productSix from '../images/no_background/4.1_scaled.png'
import productSeven from '../images/no_background/5_scaled.png'
import productEight from '../images/no_background/8_scaled.png'
import productNine from '../images/no_background/9_scaled.png'

const CarouselProduct = ({state, actions}) => {



    return (
    
    <>
    <ContainerTestimonials>
    <Global styles={CarouselAllStyles} />

    <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={2500}
    >
    


        <div>
            <div className="myCarousel">

                <ImageStyled src={productOne} /> 
            </div>
        </div>

        <div>
            <div className="myCarousel">

                <ImageStyled src={productTwo} /> 
            </div>
        </div>

        <div>
            <div className="myCarousel">

                <ImageStyled src={productThree} /> 
            </div>
        </div>

        <div>
            <div className="myCarousel">

                <ImageStyled src={productFour} /> 
            </div>
        </div>

        <div>
            <div className="myCarousel">

                <ImageStyled src={productFive} /> 
            </div>
        </div>
        <div>
            <div className="myCarousel">

                <ImageStyled src={productSix} /> 
            </div>
        </div>
        <div>
            <div className="myCarousel">

                <ImageStyled src={productSeven} /> 
            </div>
        </div>
        <div>
            <div className="myCarousel">

                <ImageStyled src={productEight} /> 
            </div>
        </div>
        <div>
            <div className="myCarousel">

                <ImageStyled src={productNine}s /> 
            </div>
        </div>
    </Carousel>
    </ContainerTestimonials>
    </>
    
    );
}

export default connect(CarouselProduct);

const ContainerTestimonials = styled.div`
    height: 560px;
    width: 320px;


    @media (max-width: 768px) {
        max-height: 460px;
        max-width: 280px;
    }
`
const ImageStyled = styled(Image)`
    max-width: 100%;
    max-height: 100%;
`