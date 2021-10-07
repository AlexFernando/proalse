import React, { useEffect } from "react";
import { connect, styled, Global } from "frontity";
import LinkFirstButton from './LinkButtonHome';

import Image from "@frontity/components/image";
import logoSinchi from '../images/logo_sinchi.jpeg';

import mision from '../images/rice2.jpg';
import vision from '../images/vision.jpg'
import verticalImage from '../images/rice.jpg';
import bgImage from '../images/bg3.jpg';

import productOne from '../images/no_background/1_scaled.png'
import productTwo from '../images/no_background/2_scaled.png'
import productThree from '../images/no_background/3_scaled.png'


/**Import carousel product */
import CarouselProduct from './CarouselProduct';

const Home = ({state}) => {
    return(
        <>
        <BgImageSection>
        <MainSection>

                <div>
                    <h1><strong>PROALSE PERU SAC </strong></h1>
                    <ImageMainSection src={logoSinchi} />
                    <p>Procesadora de Alimentos y Servicios</p>
                    <ButtonSet>
                        <LinkFirstButton href="/products" >Nuestros Productos</LinkFirstButton>
                    </ButtonSet>
                </div>

                <CarouselProduct />

        </MainSection>
        </BgImageSection>

        <NosotrosSection>

            <HeaderContainer>
                <Title>Nosotros</Title>
                <Separator></Separator>
            </HeaderContainer>


            <NosotrosContainer>

                <CardVertical>
                    <div>
                        <h2>Política de Calidad</h2>
                        <p>
                            Nuestro principal compromiso es brindar un producto de alta calidad
                            sanitaria acorde con los requerimientos y normas nacionales e
                            internacionales de manufactura.
                        </p>

                        <p>
                            Logrando de esta manera cumplir con el
                            objetivo primordial de la empresa de garantizar la seguridad y calidad del
                            producto final.
                        </p>
                    </div>

                </CardVertical>

                <CardHorizontal>
                    <ImageCard src={mision}/>
                    
                    <div>
                        <h2>Mision</h2>
                        <p>
                            Nuestro principal compromiso es brindar un producto de alta calidad sanitaria acorde con los requerimientos y normas nacionales e 
                            internacionales de manufactura logrando de esta manera cumplir con el objetivo primordial de la empresa de garantizar la seguridad y 
                            calidad del producto final.
                        </p>
                    </div>
                </CardHorizontal> 
                <CardHorizontal>
                    <ImageCard src={vision}/>
                    
                    <div>
                        <h2>Vision</h2>
                        <p>
                            Posicionarnos como una empresa reconocida en el mercado nacional de procesamiento y envasado de alimentos tanto por la calidad presente en
                            nuestros productos como por el compromiso social de valorar nuestrosalimentos de producción local y así impulsar el emprendimiento de nuestra
                            región.
                        </p>
                    </div>
                </CardHorizontal> 
            </NosotrosContainer>
        </NosotrosSection>

        <ProductSection>
            <HeaderContainer>
                <Title>Productos</Title>
                <Separator></Separator>
            </HeaderContainer>

            <ProductContainer>
                <CardProduct>
                    <ImageProduct src={productOne}/>

                    <div>
                        <h3>Arroz Pilado Superior</h3>
                        <LinkFirstButton href="/products">Ver Más</LinkFirstButton>
                    </div>
                </CardProduct>

                <CardProduct>
                    <ImageProduct src={productTwo}/>

                    <div>
                        <h3>Arverja Seca Partida</h3>
                        <LinkFirstButton href="/products">Ver Más</LinkFirstButton>
                    </div>
                </CardProduct>

                <CardProduct>
                    <ImageProduct src={productThree}/>
                    <div>
                        <h3>Lenteja</h3>
                        <LinkFirstButton href="/products">Ver Más</LinkFirstButton>
                    </div>
                </CardProduct>
            </ProductContainer>
        </ProductSection>
        </>
    )
}

export default connect(Home);

/**Main Section */

const BgImageSection = styled.section`
    background-image: url('${bgImage}');
    background-size: cover;
    height: 700px;
    margin-top: 0rem;
    padding: 2rem;


    @media (max-width: 768px) {
        height: 100%;
    }
    
`

const MainSection = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    //margin-top: 2rem;
    padding-right: 1rem;
    padding-left: 1rem;
    text-align: center;
  

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 5rem;
        padding-right: 22rem;
        padding-left: 22rem;
        margin-top: 7rem;
        justify-items: center;
        align-items: center;
    }

    h1 {
        font-size: 2.3rem;
        margin-bottom: 2rem;
        margin-top: 2rem;
 
    }

    p {
        font-size: 1.5rem;
        font-weight: bold;
        margin: 2rem 0;
 
    }

`;

const ImageMainSection = styled(Image)`
    max-width: 40%;
    max-height: 40%;
`

const ButtonSet = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 4rem;
`


/**NOSOTROS */

const NosotrosSection = styled.div`
    padding: 5rem 0;
    background-color: #f3f3f1;
`

const NosotrosContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3,1fr);
    margin-top: 2rem;


    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-gap: 3rem;
        padding-right: 22rem;
        padding-left: 22rem;
        margin-top: 2rem;
        padding-top: 2rem;
        padding-bottom: 5rem;
        justify-items: center;
        align-items: center;
    }
  
`

const CardHorizontal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #fff;


    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }

    @media (min-width: 768px) {
        grid-column: 2/4;
        flex-direction: row;
        justify-content: space-around;
        
        :nth-of-type(2) {
            flex-direction: row-reverse;
        }
    }
   

    div {

        padding :3rem;

        h2 {
            font-size: 1.5rem;
        }

        p {
            font-size: 1.3rem;
        }
    }


`
const ImageCard = styled(Image)`
    max-width: 100%;

    @media (min-width: 768px) {
        max-height: 500px;
        max-width: 50%;
        object-fit: cover;
    }
`

const CardVertical = styled.div`

    display: flex;
    height: 100%;
    background-image: url('${verticalImage}');
    background-size: cover;

    @media (min-width: 768px) {
        grid-column: 1/2;
        grid-row: 1/3;
    }
   

    div{
        background-image: linear-gradient(to top, rgba(34,49,63, .5), rgba(34, 49, 63, .6));
        color: #fff;
        padding: 3rem;

        h2 {
            font-size: 1.5rem;
        }

        p {
            font-size: 1.3rem;
        }
    }
`

/**PRODUCTOS*/

const ProductSection = styled.div`
    h2 {
        font-size: 3rem;
        text-align: center;
    }

    padding: 2rem;

    @media (min-width: 768px) {
        padding: 5rem;
    }
`
const ProductContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 3rem;
        padding: 2rem 10rem;
    }

    justify-content: space-around;
    align-items: center;
`

export const CardProduct = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 1rem 0;
    border-radius: .8rem;
    box-shadow: 0 15px 30px 1px grey;
	background: rgba(255, 255, 255, 0.90);
	text-align: center;


    @media (min-width: 768px) {
        margin: 3rem 0;
    }

    div {
        margin-top: 0rem;
        h3 {
            font-size: 1.3rem;
            color: #344055;
            //text-align: justify;
        }
    }
`
export const ImageProduct = styled(Image)`
    object-fit: cover;
    align-self: center;
    max-height: 100%;
    max-width: 100%;


    @media (min-width: 768px) {
        max-height: 60%;
        max-width: 60%;
    }
`



/**TITLE SEPARATOR */

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        font-size: 1.5rem;
        padding: 1rem 5rem;

        @media(max-width: 768px) {
            font-size: 1.2rem;
            padding: 1rem;
        }


    }
`

export const Title = styled.h2`

    font-size: 2.2rem;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 3px;
    margin: 2rem 0 2rem 0;
    text-transform: uppercase;
 
    @media(min-width: 768px) {
        font-size: 4rem;
    }

    @media(max-width: 768px) {
        font-size: 2rem;
        text-align: center;
    }
`

export const Separator = styled.span`
    display: block;
    width: 12rem;
    height: 12px;
    margin-top: .5rem;
    margin-bottom: 1rem;
    border-radius: 20px;
    background-color: #44841a;
    align-self:center;


    @media(max-width: 768px) {
        width: 6rem;
        height: 8px;
    }
`
