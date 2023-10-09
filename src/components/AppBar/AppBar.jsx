import Navigation from "../Navigation/Navigation";
import { FirstSpan, Header, Logo, SecondSpan } from "./AppBar.styled";

const AppBar = () => {
    return (
        <Header>
            <Logo>
                <FirstSpan>Movie</FirstSpan>
                <SecondSpan>Finder</SecondSpan>
            </Logo>
            <Navigation />
        </Header>     
    )
};

export default AppBar;