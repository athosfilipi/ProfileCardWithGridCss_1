import styled from "styled-components";

const GridItem = styled.div`
    display: grid;
    grid-template-columns: auto;

    background-color: rgb(179, 255, 0);
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 20px;
    margin: 10px;
    font-size: 30px;
    text-align: center;

    .image {
        grid-area: avatar;
    }
    .userInfo {
        grid-area: userInfo;
    }

    @media (max-width: 414px) {
        grid-template-areas:
            "avatar userInfo"
            "avatar userInfo";
    }

    @media (min-width: 415px) {
        grid-template-areas:
            "avatar avatar"
            "userInfo userInfo";
    }
`;

const Image = styled.img`
    width: ${(props) => (props.size ? `${props.size}px` : "100px")};
    height: ${(props) => (props.size ? `${props.size}px` : "100px")};

    @media (max-width: 375px) {
        width: 100px;
        height: 100px;
        margin-right: 10px;
    }
    @media (max-width: 414px) {
        width: 100px;
        height: 100px;
        margin-right: 10px;
    }
`;

const UserInfo = (props) => {
    const StyledP = styled.p`
        color: #000;
        font-size: 12px;
        margin: 0px;
        text-align: left;
    `;

    return (
        <article>
            <StyledP>Name: {props.name}</StyledP>
            <StyledP>Age: {props.age}</StyledP>
            <StyledP>Eye color: {props.eyeColor}</StyledP>
            <StyledP>Company: {props.company}</StyledP>
            <StyledP>Email: {props.email}</StyledP>
        </article>
    );
};

const ProfileCard = (props) => (
    <>
        <GridItem>
            <Image
                className={"image"}
                size={props.imageSize}
                src={props.imageSrc}
            />
            <UserInfo
                className={"userInfo"}
                name={props.name}
                age={props.age}
                eyeColor={props.eyeColor}
                company={props.company}
                email={props.email}
            />
        </GridItem>
        <GridItem>
            <Image
                className={"image"}
                size={props.imageSize}
                src={props.imageSrc}
            />
            <UserInfo
                className={"userInfo"}
                name={props.name}
                age={props.age}
                eyeColor={props.eyeColor}
                company={props.company}
                email={props.email}
            />
        </GridItem>
        <GridItem>
            <Image
                className={"image"}
                size={props.imageSize}
                src={props.imageSrc}
            />
            <UserInfo
                className={"userInfo"}
                name={props.name}
                age={props.age}
                eyeColor={props.eyeColor}
                company={props.company}
                email={props.email}
            />
        </GridItem>
        <GridItem>
            <Image
                className={"image"}
                size={props.imageSize}
                src={props.imageSrc}
            />
            <UserInfo
                className={"userInfo"}
                name={props.name}
                age={props.age}
                eyeColor={props.eyeColor}
                company={props.company}
                email={props.email}
            />
        </GridItem>
        <GridItem>
            <Image
                className={"image"}
                size={props.imageSize}
                src={props.imageSrc}
            />
            <UserInfo
                className={"userInfo"}
                name={props.name}
                age={props.age}
                eyeColor={props.eyeColor}
                company={props.company}
                email={props.email}
            />
        </GridItem>
        <GridItem>
            <Image
                className={"image"}
                size={props.imageSize}
                src={props.imageSrc}
            />
            <UserInfo
                className={"userInfo"}
                name={props.name}
                age={props.age}
                eyeColor={props.eyeColor}
                company={props.company}
                email={props.email}
            />
        </GridItem>
        <GridItem>
            <Image
                className={"image"}
                size={props.imageSize}
                src={props.imageSrc}
            />
            <UserInfo
                className={"userInfo"}
                name={props.name}
                age={props.age}
                eyeColor={props.eyeColor}
                company={props.company}
                email={props.email}
            />
        </GridItem>
        <GridItem>
            <Image
                className={"image"}
                size={props.imageSize}
                src={props.imageSrc}
            />
            <UserInfo
                className={"userInfo"}
                name={props.name}
                age={props.age}
                eyeColor={props.eyeColor}
                company={props.company}
                email={props.email}
            />
        </GridItem>
        <GridItem>
            <Image
                className={"image"}
                size={props.imageSize}
                src={props.imageSrc}
            />
            <UserInfo
                className={"userInfo"}
                name={props.name}
                age={props.age}
                eyeColor={props.eyeColor}
                company={props.company}
                email={props.email}
            />
        </GridItem>
        <GridItem>
            <Image
                className={"image"}
                size={props.imageSize}
                src={props.imageSrc}
            />
            <UserInfo
                className={"userInfo"}
                name={props.name}
                age={props.age}
                eyeColor={props.eyeColor}
                company={props.company}
                email={props.email}
            />
        </GridItem>
        <GridItem>
            <Image
                className={"image"}
                size={props.imageSize}
                src={props.imageSrc}
            />
            <UserInfo
                className={"userInfo"}
                name={props.name}
                age={props.age}
                eyeColor={props.eyeColor}
                company={props.company}
                email={props.email}
            />
        </GridItem>
    </>
);

export default ProfileCard;
