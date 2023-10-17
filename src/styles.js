import styled from "styled-components";

export const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
`;
export const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2 {
        font-weight: bold;
    }
`;
export const Image = styled.div`
    flex: 1;
    overflow: hidden;
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
        border-radius: 50%;
    }
`;

export const Hide = styled.div`
    overflow: hidden;
`;

