import React from 'react';
import { Footer as StyledFooter, Container, Flex, Box, Styled } from 'theme-ui';

const Footer = () => {
  return (
    <StyledFooter>
      <Flex
        style={{
          flexDirection: 'column',
          margin: 'auto',
        }}
      >
        <Container>
          <Flex>
            <div>
              <Styled.h4>About</Styled.h4>
              <p class="text-justify">
                Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative
                to help the upcoming programmers with the code. Scanfcode
                focuses on providing the most efficient code or snippets as the
                code wants to be simple. We will help programmers build up
                concepts in different programming languages that include C, C++,
                Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and
                Algorithm.
              </p>
            </div>

            <div>
              <Styled.h4>Categories</Styled.h4>
              <ul class="footer-links">
                <li>
                  <Styled.a href="http://scanfcode.com/category/c-language/">
                    C
                  </Styled.a>
                </li>
                <li>
                  <Styled.a href="http://scanfcode.com/category/front-end-development/">
                    UI Design
                  </Styled.a>
                </li>
                <li>
                  <Styled.a href="http://scanfcode.com/category/back-end-development/">
                    PHP
                  </Styled.a>
                </li>
                <li>
                  <Styled.a href="http://scanfcode.com/category/java-programming-language/">
                    Java
                  </Styled.a>
                </li>
                <li>
                  <Styled.a href="http://scanfcode.com/category/android/">
                    Android
                  </Styled.a>
                </li>
                <li>
                  <Styled.a href="http://scanfcode.com/category/templates/">
                    Templates
                  </Styled.a>
                </li>
              </ul>
            </div>

            <div>
              <Styled.h4>Categories</Styled.h4>
              <ul class="footer-links">
                <li>
                  <Styled.a href="http://scanfcode.com/about/">
                    About Us
                  </Styled.a>
                </li>
                <li>
                  <Styled.a href="http://scanfcode.com/contact/">
                    Contact Us
                  </Styled.a>
                </li>
                <li>
                  <Styled.a href="http://scanfcode.com/contribute-at-scanfcode/">
                    Contribute
                  </Styled.a>
                </li>
                <li>
                  <Styled.a href="http://scanfcode.com/privacy-policy/">
                    Privacy Policy
                  </Styled.a>
                </li>
                <li>
                  <Styled.a href="http://scanfcode.com/sitemap/">
                    Sitemap
                  </Styled.a>
                </li>
              </ul>
            </div>
          </Flex>
          <hr />
        </Container>
        <Container>
          <Flex>
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">
                Copyright &copy; 2017 All Rights Reserved by
                <Styled.a href="#">Scanfcode</Styled.a>.
              </p>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li>
                  <Styled.a class="facebook" href="#">
                    <i class="fa fa-facebook" />
                  </Styled.a>
                </li>
                <li>
                  <Styled.a class="twitter" href="#">
                    <i class="fa fa-twitter" />
                  </Styled.a>
                </li>
                <li>
                  <Styled.a class="dribbble" href="#">
                    <i class="fa fa-dribbble" />
                  </Styled.a>
                </li>
                <li>
                  <Styled.a class="linkedin" href="#">
                    <i class="fa fa-linkedin" />
                  </Styled.a>
                </li>
              </ul>
            </div>
          </Flex>
        </Container>
      </Flex>
    </StyledFooter>
  );
};

export default Footer;
