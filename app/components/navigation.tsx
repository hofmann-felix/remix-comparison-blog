import styled from "styled-components";
import {Link} from "@remix-run/react";
import TestImage from '../../public/images/how-to-optimize-gatsby-url-redirect.png'

const StyledNav = styled.nav`
  background: gray;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  text-align: center;
`

const SiteTitle = styled.h1`
  width: 100%;
  text-align: center;
`

export const Navigation = () => {
    return (
        <>
            <img src={TestImage}/>
            <SiteTitle>Remix Blog</SiteTitle>
            <StyledNav>
                <Link to={'/'}>Home</Link>
                <Link to={'/blog'}>Blog</Link>
                <a href='https://github.com/hofmann-felix/remix-comparison-blog' target='_blank'>GitHub</a>
                <a href='https://remix.run/' target='_blank'>remix.run</a>
            </StyledNav>
        </>
    )
}