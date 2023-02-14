import styled from "styled-components";

export const HeroWrapper = styled.div `
    // Animations
    @keyframes wave-animation {
        0% { transform: rotate( 0.0deg) }
        10% { transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
        20% { transform: rotate(-8.0deg) }
        30% { transform: rotate(14.0deg) }
        40% { transform: rotate(-4.0deg) }
        50% { transform: rotate(10.0deg) }
        60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
        100% { transform: rotate( 0.0deg) }
    }   


    height: 300px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    .left {
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    .left .title {
        display: flex;
        align-items: center;
        flex-direction: row;
    }

    .title img {
        margin-bottom: 13px;
        margin-right: 15px;
        animation-name: wave-animation; 
        animation-duration: 2.5s;      
        animation-iteration-count: infinite;  
        transform-origin: 70% 70%;       
    }

    .right {
        display: flex;
        flex: 0.3;
        flex-direction: column;
    }

    .quotes {
        color: ${props => props.theme.colors.primary};
        font-size: 200px;
        position: absolute;
        margin-top: 60px;
        margin-left: -30px;
        opacity: 0.5;
        z-index: -1;
    }

    p {
        font-size: 20px;
        line-height: 1.5;
        color: #c2c2c2;
        width: 800px;

        span {
            font-size: 24px;
            font-weight: 800;
            color: ${props => props.theme.colors.primary}
        }
    }
    

    .Typewriter {
        margin: 30px 0px 40px 0px;

        span {
            font-size: 40px;
            font-weight: 600;

            strong {
                padding: 0px 10px;
                border-radius: 10px;
                background: ${props => props.theme.colors.primary};
                color: ${props => props.theme.colors.text};
            }
        }
    }
`