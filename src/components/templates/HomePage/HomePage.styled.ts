import styled from 'styled-components';

export const HomePageWrapper = styled.div `
    overflow: hidden;

    .ball {
        width: 400px;
        height: 400px;
        border-radius: 100%;
        background: rgba(103, 31, 195, 0.4);
        box-shadow: rgba(103, 31, 195, 0.4) 0px 0px 100px 10px, rgba(103, 31, 195, 0.4) 0px 30px 60px -30px;
        position: absolute;
        right: -60px;
        top: 30px;
        filter: blur(104px);
    }
`