import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Image from "@frontity/components/image";

import {HeaderContainer, Title, Separator} from './Home';

import productOne from '../images/no_background/6_scaled.png'
import productTwo from '../images/no_background/1_scaled.png'
import productThree from '../images/no_background/7_scaled.png'
import productFour from '../images/no_background/2_scaled.png'

const Product = ({state}) => {
    return(
        <ProductPageContainer>
            
            <HeaderContainer>
                <Title>Nuestros Productos</Title>
                <Separator></Separator>
            </HeaderContainer>

            <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque ullamcorper viverra. Curabitur et ligula vitae arcu pharetra congue. Sed bibendum efficitur tellus, eu maximus lectus porttitor sit amet. Nulla ornare eleifend nibh ut imperdiet. In hac habitasse platea dictumst. Nam sagittis pharetra elementum. Nunc nec mauris eget massa elementum tincidunt in ac quam. Sed ultricies enim et sem ornare semper.

                Nunc vehicula vulputate felis sed sollicitudin. 

            </h3>

            
                <CardProductContainer>
         
                    
                        <CardProduct>
                            <ProductDetails>
                                <h1>Arroz Fortificado Grado Superior</h1>
                                <p>" Arroz de variedad superior, fortificado al 2% con vitaminas A, B1, B3, B6, B9, B12, D, E y
                                    Minerales como Hierro y Zinc, que fortalecen el sistema inmune para defender a nuestro
                                    organismo de diversas enfermedades, y contribuye a prevenir y superar la anemia. 
                                "</p>
                            </ProductDetails>
        
                            <ProductImage>
                
                                <ImageProductCard src={productOne} alt="rice" />
        
                                <Info>                   
                                    <p>En términos de apariencia, sabor y cocción, el arroz fortificado es el mismo que el arroz regular,
                                        con la gran diferencia de presentar más vitaminas y minerales, asegurando su exquisitez en
                                        nuestros almuerzos.
                                    </p>
                                </Info>
                            </ProductImage>
                        </CardProduct>

                        <CardProduct>
                            <ProductDetails>
                                <h1>Arroz Pilado Superior</h1>
                                <p>" El arroz es un cereal y un alimento indispensable para una dieta sana y equilibrada.  Producido por más de 2 600 familias dedicadas al cultivo de arroz en Lambayeque. "</p>
                            </ProductDetails>
        
                            <ProductImage>
                
                                <ImageProductCard src={productTwo} alt="rice" />
        
                                <Info>                   
                                    <p>Por la variedad de arroz y su minucioso proceso de selección, aporta calidad y sabor a la infinidad de platos y postres en la gastronomía peruana. </p>
                                </Info>
                            </ProductImage>
                        </CardProduct>

                        <CardProduct>
                            <ProductDetails>
                                <h1>Azúcar Rubia</h1>
                                <p>" El azúcar Rubia es la misma sacarosa (glucosa + fructosa) obtenida de la caña de azúcar, que se caracteriza por conservar la melaza, es decir el jugo de la caña, que es la que le entrega ese característico color dorado y un dulzor con suave sensación a caramelo. "</p>
                            </ProductDetails>
        
                            <ProductImage>
                
                                <ImageProductCard src={productThree} alt="rice" />
        
                                <Info>                   
                                    <p>Principalmente producidos en las regiones de Lambayeque y La Libertad. </p>
                                </Info>
                            </ProductImage>
                        </CardProduct>

                        <CardProduct>
                            <ProductDetails>
                                <h1>Arverja Seca Partida</h1>
                                <p>" La arveja seca partida, “arvejita” o comúnmente llamada “menestra verde” es un alimento muy nutritivo y energético, contiene fibra, que ayuda a mejorar el tránsito intestinal y regular los niveles de glucosa en la sangre, como así también de sustancias lipídicas. "</p>
                            </ProductDetails>
        
                            <ProductImage>
                
                                <ImageProductCard src={productFour} alt="rice" />
        
                                <Info>                   
                                    <p>Aportan hierro, fósforo, potasio y baja cantidad de sodio, por lo que ayudan a controlar la tensión arterial; además de ser uno de los acompañamientos más frecuentes en nuestros deliciosos almuerzos. </p>
                                </Info>
                            </ProductImage>
                        </CardProduct>
               
       
                </CardProductContainer>
            

        </ProductPageContainer>
    )
}

const ProductPageContainer = styled.div`
    margin-top: 5rem;
    padding: 5rem;

    @media (max-width: 768px) {
        margin-top: 2rem;
        padding: 2rem 0;
    }


    h3 {

        text-align: justify;
        font-size: 1rem;
        font-weight: 400;
        padding: 2rem;

        @media (min-width: 768px) {
            padding: 1rem 20rem;
            font-size: 1.3rem;
        }
    }
`

const CardProductContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr); 

        @media (max-width: 768px) {
            grid-gap: 3rem;
        } 

        @media (min-width: 768px) {
            grid-template-columns: repeat(2, 1fr); 
            
        } 
`

const CardProduct = styled.div`
    display: flex;
    box-shadow: 0 15px 30px 1px rgba(128, 128, 128, 0.31);
	background: rgba(255, 255, 255, 0.90);
	text-align: center;
	border-radius: 5px;
	overflow: hidden;
	margin: 5em auto;
	height: 520px;
	width: 750px;

    @media (max-width: 768px) {
        flex-direction: column;
        height: 100%;
	    width: 100%;
    } 
`
const ProductDetails = styled.div`
	
    display: flex;
    flex-shrink: 2;
    background: #0c884a;
    flex-direction: column;
    justify-content: center;
    padding-left: 2rem;
    padding-right: 2rem;
	height: 100%;
	float: left;
	width: 40%;

    @media (max-width: 768px) {
	    width: 100%;
        float: none;
        padding-left: 0rem;
        padding-right: 0rem;
    } 

    h1 {
        font-family: 'Old Standard TT', serif;
        display: inline-block;
        position: relative;
        font-size: 34px;
        color: #FFF;
        margin: 0;

        @media (max-width: 768px) {
            font-size: 1.3rem;
        } 
    }

    p {
        font-family: 'Farsan', cursive;
	    text-align: center;
	    font-size: 20px;
	    color: #fff;

        @media (max-width: 768px) {
            font-size: 1rem;
            padding-left: 1rem;
            padding-right: 1rem;
        } 
	
    }
`

/* product image  */

const Info = styled.div`
    background: rgba(27, 26, 26, 0.9);
    font-family: 'Farsan', cursive;
    transition: all 0.3s ease-out;
    transform: translateX(-100%);
    position: absolute;
    line-height: 1.9;
    text-align: left;
    font-size: 120%;
    cursor: no-drop;
    color: #FFF;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;

    p {
        text-align: center;
        color: #FFF;
        padding: 2rem;
        font-size: 1.3rem;

        @media (max-width: 768px) {
            font-size: 1.1rem;
        } 
    }
`
const ImageProductCard = styled(Image)`
    width: 100%;height: 100%;
`

const ProductImage = styled.div`
    transition: all 0.3s ease-out;
	display: flex;
	position: relative;
	overflow: hidden;
	height: 100%;
	//float: right;
	width: 50%;

    @media (max-width: 768px) {
	    width: 100%;
    } 


    &:hover ${ImageProductCard} {
        transition: all 0.3s ease-out;
        transform: scale(1.2, 1.2);
    }

    &:hover ${Info} {
        transform: translateX(0);
    } 
`






export default connect(Product);