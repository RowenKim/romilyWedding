import React, { useEffect } from "react";
import { Layout } from "antd";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";
import "antd/dist/antd.css";
import Gallery from "../components/gallery";
import Greeting from "../components/greeting";
import Title from "../components/title";
import "../styles/index.css";

import GroovePaper from "../assets/GroovePaper.png";
import Location from "../components/location";
import CongratulatoryMoney from "../components/congratulatoryMoney";
import Share from "../components/share";
import Quote from "../components/quote";
import Song from "../assets/song.mp3";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

// markup
const { Footer } = Layout;

const Wrapper = styled.div`
  background: #efebe9;
  background-image: url(${GroovePaper});
  width: 100%;
`;

const IndexPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
    document.body.appendChild(script);

    return () => {
      document.body.romoveChile(script);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });
  return (
    <Wrapper>
      <Helmet>
        <title>Romily 의 흥나는 잔치</title>
        <meta property="og:title" content="Romily 의 결혼식 초대" />
        <meta property="og:url" content="https://astonishing-dodol-3ee41b.netlify.app" />
        <meta property="og:description" content="Romily 의 흥나는 잔치" />
        <meta property="og:image" content="https://astonishing-dodol-3ee41b.netlify.app/static/romily_demo2-996fae2c75b3a6e7cacb300d896afa0c.webp" />
      </Helmet>
      <audio autoPlay loop>
        <source src={Song} />
      </audio>
      <Title />
      <Greeting />
      <Gallery />
      <Location />
      <Quote />
      <CongratulatoryMoney />
      <Share />
      <Footer
        style={{
          background: "#D7CCC8",
          backgroundImage: `url(${GroovePaper})`,
          opacity: 0.6,
          textAlign: "center",
        }}
      >
        Copyright © 2025 Romily Forever!
      </Footer>
    </Wrapper>
  );
};

export default IndexPage;
