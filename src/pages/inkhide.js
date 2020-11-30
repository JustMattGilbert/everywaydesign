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
        <Section className="pt-4 pb-0">
          <Container>
            <Title variant="secSm" className="mb-5 pb-lg-4">
              Key Findings
            </Title>
            <Row>
              <Col lg="6" className="mb-5 pr-lg-5">
                <Title variant="cardBig" className="mb-4">
                  01. Technology
                </Title>
                <Text variant="p">
                  The website was developed on Wordpress using Woocommerce and elementor. The site is hosted on the Kinsta managed wordpress platform. 
                  All analytics are integrated into Segment and we developed a robust analytic suite using hotjar, google analytics, and facebook events that flow into automated funnels built inside of Klaviyo.
                </Text>
              </Col>
              <Col lg="6" className="mb-5 pl-lg-5">
                <Title variant="cardBig" className="mb-4">
                  02. Goals
                </Title>
                <Text variant="p">
                  Our goal is to build the website within 30 days, conduct a beta test and receive user feedback over the course of 60 days before doing a fullscale launch in January 2021. Our goal is acheive $256,000 in gross revenue per year by the end of 2022.
                </Text>
              </Col>
              <Col lg="6" className="mb-5 pr-lg-5">
                <Title variant="cardBig" className="mb-4">
                  03. Process
                </Title>
                <Text variant="p">
                  After concluding the beta test and user feedback phase, we will grow traffic organically through heavy content marketing that will feed into search engine optimization, social media marketing, and community management. This organic growth will be supplemented through paid ad campaigns via pinterst, facebook, and instagram that direct customers into our automated sales funnels.
                </Text>
              </Col>
              <Col lg="6" className="mb-5 pl-lg-5">
                <Title variant="cardBig" className="mb-4">
                  04. Results
                </Title>
                <Text variant="p">
                  inkhide.com sold out of all on hand inventory within 48 hours of the website launch and initial social media campaign. Beta testing and customer feedback is currently underway.
                </Text>
              </Col>
            </Row>
          </Container>
        </Section>
     
        <Box py={4}>
          <Contact />
        </Box>
      </PageWrapper>
    </>
  );
};
export default WorkSingle;
