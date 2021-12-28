import styled from "styled-components";
import {Link} from "@remix-run/react";

const StyledNav = styled.nav`
  background: gray;
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const Navigation = () => {
    return (
        <StyledNav>
            <Link to={'/'}>Home</Link>
            <Link to={'/'}>Blog</Link>
        </StyledNav>
    )
}