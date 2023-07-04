import { Container } from '../Container/Container';

import {
  Logo,
  FooterWrap,
  FooterNav,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  FooterSocial,
  Wrapper,
  Copyright,
  CommercialWrap,
  IconWrap,
  Icon,
  Title,
  Text,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterWrap id="footer">
      <Container>
        <Wrapper>
          <div>
            <FooterNav>
              <Logo href="/">Pixelstock</Logo>
              <FooterSocial>
                <p>Follow us:</p>
                <ul>
                  <li>
                    <a href="https://www.instagram.com/">
                      <Instagram />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/">
                      <Twitter />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/">
                      <Facebook />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/">
                      <Youtube />
                    </a>
                  </li>
                </ul>
              </FooterSocial>
            </FooterNav>
          </div>
          <CommercialWrap>
            <IconWrap>
              <Icon />
            </IconWrap>
            <div>
              <Title>Free media you can use anywhere</Title>
              <Text>
                Pixelstock is a vibrant community of creatives, sharing
                royalty-free images. All content is released by Pixelstock under
                the Content License, which makes it safe to use without asking
                for permission or giving credit to the artist - even for certain
                commercial purposes.
              </Text>
            </div>
          </CommercialWrap>
        </Wrapper>
      </Container>
      <Copyright>
        © 2022-{new Date().getFullYear()} <strong>Pixelstock</strong>. All
        rigths reserved
      </Copyright>
    </FooterWrap>
  );
};

export default Footer;
