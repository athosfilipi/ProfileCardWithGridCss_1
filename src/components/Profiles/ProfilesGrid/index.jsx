import styled from "styled-components";

const ProfilesGrid = (props) => {    

    const GridContainer = styled.div`
        display: inline-grid;
        grid-template-columns: auto;
        padding: 10px;
        padding: 10px;
        border: 1px solid red;
        background-color: #000;

        @media (max-width: 414px) {
            grid-template-columns: repeat(1, 1fr);
        }

        @media (min-width: 600px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (min-width: 768px) {
            grid-template-columns: repeat(3, 1fr);
        }

        @media (min-width: 1024px) {
            grid-template-columns: repeat(4, 1fr);
        }

        @media (min-width: 1250px) {
            grid-template-columns: repeat(5, 1fr);
        }
        @media (min-width: 1470px) {
            grid-template-columns: repeat(6, 1fr);
        }
    `;

    return (
        <GridContainer>
            {props.children}
        </GridContainer>
    );
};

export default ProfilesGrid;