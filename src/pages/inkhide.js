import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Button, Title, Text, Box } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import Contact from "../sections/common/Contact";
import imgWorkCover from "../assets/image/jpg/details/details-1.jpg";
import imgS1 from "../assets/image/jpg/details/details-6.jpg";
import imgS2 from "../assets/image/jpg/details/details-5.jpg";
import imgS3 from "../assets/image/jpg/details/details-4.jpg";
import imgS4 from "../assets/image/jpg/details/details-3.jpg";
import imgS5 from "../assets/image/jpg/details/details-8.jpg";
import imgS6 from "../assets/image/jpg/details/details-7.jpg";
import { device } from "../utils";

const WorkSingle = () => {
  return (
    <>
      <PageWrapper>
        <Container
          fluid
          className="px-sm-5"
          css={`
            margin-top: 92px;
          `}
        >
          <img src={imgWorkCover} alt="" className="img-fluid w-100" />
        </Container>
        <Section className="mt-lg-5">
          <Container>
            <Row>
              <Col lg="8">
                <Text variant="tag">Product Management, Website Development, Ui Design, Marketing</Text>
                <Title variant="secSm" className="my-4">
                  inkhide.com<br />eCommerce{" "}
                </Title>
                <Text
                  variant="p"
                  css={`
                    max-width: 750px;
                  `}
                >
                  Our goal with inkhide.com is to create an engaging and high quality eCommerce brand that focuses on selling journals, notebooks and writing materials while donating to a worthy charitable cause. To that end we decided to partner with One Tree Planted and plant a tree with every sale. 
                </Text>
              </Col>
            </Row>
          </Container>
        </Section>
        <div className="mt-lg-3">
          <Container>
            <Row>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Client</Text>
                <Title variant="cardBig" className="mt-3">
                  MDG Growth | inkhide
                </Title>
              </Col>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Start</Text>
                <Title variant="cardBig" className="mt-3">
                 October 2020
                </Title>
              </Col>
              <Col lg="4">
              <Link
                    to="https://inkhide.com/"
                    target="_blank"
                  ><Button arrowRight>Visit Site</Button>
                  </Link>
              </Col>
            </Row>
          </Container>
        </div>
        <Section className="mt-lg-5">
                  </Section>
       
     
        <Box py={4}>
          <Contact />
        </Box>
      </PageWrapper>
    </>
  );
};
export default WorkSingle;
