import React, { Component } from 'react';
import styled from 'styled-components';

import { rhythm } from '../utils/typography';
import github from '../images/github.svg';
import media from '../css/media';

const Wrapper = styled.div`
  display: flex;
  height: 129px;
  justify-content: center;
  background: #101010;
`;

const Container = styled.div`
  display: flex;
  width: calc(1024px + ${rhythm(0.5)});
  height: 100%;
  margin: 0 ${rhythm(0.5)};
  justify-content: space-between;
  align-items: center;

  @media (${media.tablet}) {
    justify-content: center;
  }
`;

const Copyright = styled.div`
  display: flex;
  color: #fff;
  font-family: Karla;
  font-size: 16px;
  letter-spacing: 1.6px;

  @media (${media.tablet}) {
    display: none;
  }
`;

const MobileCopyright = styled.div`
  display: none;

  @media (${media.tablet}) {
    display: flex;
    color: #fff;
    font-family: Karla;
    font-size: 16px;
    text-align: center;
    letter-spacing: 1.6px;
  }
`;

const Link = styled.a`
  display: flex;
`;

const GitHubLogo = styled.img`
  display: block;
  margin: 0;

  @media (${media.tablet}) {
    display: none;
  }
`;

class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Copyright>
            © 2017 - PRESENT YOCTOL INFO INC. ALL RIGHTS RESERVED
          </Copyright>
          <MobileCopyright>
            © 2017 - PRESENT YOCTOL INFO INC. <br />ALL RIGHTS RESERVED
          </MobileCopyright>
          <Link href="https://github.com/Yoctol/bottender-docs" target="_blank">
            <GitHubLogo src={github} alt="Bottender github link" />
          </Link>
        </Container>
      </Wrapper>
    );
  }
}

export default Footer;