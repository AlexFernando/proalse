import React from 'react';
import {styled, connect } from "frontity";
import {faMapMarkedAlt, faStreetView, faMailBulk} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faYoutube, faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import Certificaciones from './Certificaciones';

const CertificacionSocialMedia = () => {

    return ( 
        <ContactContainer>
            <ContactElement>
                <h2>Procesadora de Alimentos y Servicios <br></br>Manténte conectado. <br></br> Visítanos en nuestras redes sociales. </h2>
            
                <ul>
                        <li><a href="#" alt="Share on Twitter" aria-label="Link to Facebook" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookSquare}/></a></li>
                        <li><a href="#" alt="Share on Twitter" aria-label="Link to Instagram" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram}/></a></li>
                        <li><a href="#" alt="Share on Twitter" aria-label="Link to Youtube" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube}/></a></li>
                </ul>

                <ul>
                    <li><FontAwesomeIconStyled icon={faMapMarkedAlt}/>PROALSE PERÚ SAC</li>
                   
                    <li><FontAwesomeIconStyled icon={faStreetView}/>Calle Las Magnolias Nº315, Urb. Miraflores, Lambayeque, Peru.</li>
                
                    <li> <FontAwesomeIconStyled icon={faMailBulk}/>Postal Code 0400, Lambayeque - Peru </li>
                </ul>
            </ContactElement>

            <Certificaciones />

        </ContactContainer>

    );
}

const ContactContainer = styled.div`
    display: flex;
    background-color: #333333;
    color: #fff;
    justify-content: space-around;
    align-content: center;

    @media(max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    }
`;

const ContactElement = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 1rem;

    @media(max-width: 768px) {
        padding: 1rem;
        h2 {
            font-size: 1rem;
        }
    }

    ul {
        margin: 0;
        padding: 0;

        &:first-of-type {
            display: flex;
            justify-content: center;
            align-content: center;

            li {
                margin: 0 1.5rem 2rem 1.5rem;

                a {
                    color : #fff;
                    font-size: 2rem;
                }
            }
        }
    }

    h2 {
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    h3 {
        margin-top: 0;
        font-size: 2rem;
        font-weight: 300;
        text-align: center;
    }

    li {
        list-style: none;
        font-weight: 200;
        margin-bottom: 1rem;
        letter-spacing: 1px;

        @media(max-width: 768px) {
            font-size: 1.2rem;
        }

    }
`;


const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
    margin-right: 1rem;
`;

 
export default connect(CertificacionSocialMedia);