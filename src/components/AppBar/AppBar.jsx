import { NavLink } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { FirstSpan, Header, Logo, SecondSpan } from "./AppBar.styled";

const AppBar = () => {
    return (
        <Header>
            <NavLink to="/">
                <Logo>
                    <FirstSpan>Movie</FirstSpan>
                    <SecondSpan>Finder</SecondSpan>
                </Logo>
            </NavLink>
            <Navigation />
        </Header>     
    )
};

export default AppBar;