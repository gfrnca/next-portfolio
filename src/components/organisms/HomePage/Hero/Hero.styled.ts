import styled from "styled-components";

export const HeroWrapper = styled.div `
    height: 300px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    .left {
        display: flex;
        flex: 1;
        flex-direction: column;
    }
    .right {
        display: flex;
        flex: 0.3;
        flex-direction: column;
    }

    .quotes {
        color: ${props => props.theme.colors.primary}
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
        margin: 30px 0px 20px 0px;

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