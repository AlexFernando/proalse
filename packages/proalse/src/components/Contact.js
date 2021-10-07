import React, {useEffect} from 'react';
import {connect, styled, css} from "frontity";
import {HeaderContainer, Title, Separator} from './Home'
import Loading from './Loading';

const Contact = ({state, actions, libraries}) => {

    useEffect( () => {
        actions.source.fetch("/contact/")
    }, [])

    const Html2react = libraries.html2react.Component;

    const contentForm =  state.source.page["6"];

    return ( 

        <>
        {typeof contentForm === "undefined" ? <Loading /> 
            :

            <MarginContainer>
                <HeaderContainer>
                    <Title>Contacto</Title>
                    <Separator></Separator>
                    <p>Manténgase en contacto. En caso de tener alguna consulta, envíenos un correo electrónico utilizando el formulario a continuación.</p>
                </HeaderContainer>

                <Content>
                    <Html2react html={contentForm.content.rendered} />
                </Content>
            </MarginContainer>
        }
        </>
    );
}

export default connect(Contact)

const MarginContainer = styled.div`
    margin-top: 10rem;
`


 
const Content = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1.5rem;
    padding: 5rem;

    @media(max-width: 768px) {
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 0rem;
    }

    .wp-block-group {

        @media(max-width: 768px) {
        
                width: 100%;
                height: 100%;
            
        }
    }

    .wp-block-group__inner-container {
        border-radius: .4rem;
        box-shadow: 0 15px 30px 1px grey;
	    background: rgba(255, 255, 255, 0.90);
        padding: 3rem;
        margin: 2rem 0rem;


        @media(max-width: 768px) {
            iframe {
                width: 100%;
                height: 100%;
            }
        }

        .wpcf7 {

        }

        h3 {
            margin-bottom: 4rem;
        }
    }

    input, textarea {
        margin:1rem 1rem 1rem 1rem;
        border-radius: 5px;
        border: 2px solid #000;
        height: 30px;
        width: 30vw;
    }

    @media(max-width: 768px) {
        input, textarea {
            width: 100%;
        }
    }

    textarea {
        height: 150px;
    }

    input[type="submit"] { 
        width: 10vw;
        background-color: #f4623a;
        height: 60px;    
        padding: 1.5rem;
    
        border: 1px solid #fff;
        font-weight: bold;
        font-size: 1rem;
        text-transform: uppercase;
        color: #FFF;
        cursor: pointer;
        font-family: 'Montserrat', sans-serif;

        @media(max-width: 768px) {
            width: 100%;
            
        }
    
        &:hover {
            background-color: #ee3e0d;
            transition: all 0.4s;
        }
    }
`;