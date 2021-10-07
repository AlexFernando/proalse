import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import {HeaderContainer, Title, Separator} from './Home';

import Image from "@frontity/components/image";
import certification from '../images/haccp.png';


const Certificaciones = ({state}) => {
    return(
        
        <CertificationSection>
            <HeaderContainer>
            <p>Contamos con certificaciones de calidad</p>
            </HeaderContainer>

            <CertificationsContainer>
                <ImageCertification src={certification}/>
            </CertificationsContainer>

        </CertificationSection>
    )
}

export default connect(Certificaciones);

/**CERTIFICACIONES */
const CertificationSection = styled.div`

    h2 {
        font-size: 2rem;
        text-align: center;

        @media (min-width: 768px) {
            font-size: 3rem;
        }
    }
    padding: 5rem;
`
const CertificationsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media (min-width: 768px) {
        flex-direction: row;
        padding: 2rem 6rem;
    }
`

const ImageCertification = styled(Image)`
    object-fit: cover;
    max-height: 100%;
    max-width: 100%;


    @media (min-width: 768px) {
        max-height: 300px;
        max-width: 300px;
    }
`