import React, { useEffect } from "react";
import { Divider } from "antd";
import styled from "styled-components";
import Flower from "../assets/flower2.png";

const Wrapper = styled.div`
  padding-top: 64px;
  width: 90%;
  max-width: 780px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #5d4037;
  font-weight: bold;
  margin-bottom: 0;
`;

const Image = styled.img`
  margin: 20px auto 40px;
  width: 1.75rem;
`;

const Address = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: #4e342e;
  margin-bottom: 48px;
`;

const InfoBlock = styled.div`
  margin-bottom: 48px;
`;

const SubTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  color: #6d4c41;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const Description = styled.div`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const LinkButton = styled.a`
  display: inline-block;
  background-color: #8d6e63;
  color: #fff;
  padding: 8px 22px;
  border-radius: 20px;
  text-decoration: none;
  font-size: 0.8rem;
  transition: 0.3s ease;
  box-shadow: 0 2px 6px rgba(141, 110, 99, 0.3);
  &:hover {
    background-color: #6d4c41;
  }
`;

const Map = styled.div`
  width: 100%;
  margin-bottom: 64px;
`;

const Location = () => {
  const executeScript = () => {
    const scriptTag = document.createElement("script");
    const inlineScript = document.createTextNode(`new daum.roughmap.Lander({
      "timestamp" : "1747039082081",
      "key" : "2nyqt",
      "mapWidth" : "640",
      "mapHeight" : "360"
    }).render();`);
    scriptTag.appendChild(inlineScript);
    document.body.appendChild(scriptTag);
  };

  const InstallScript = () => {
    (function () {
      let c = window.location.protocol === "https:" ? "https:" : "http:";
      let a = "16137cec";

      if (window.daum && window.daum.roughmap && window.daum.roughmap.cdn) return;

      window.daum = window.daum || {};
      window.daum.roughmap = {
        cdn: a,
        URL_KEY_DATA_LOAD_PRE: c + "//t1.daumcdn.net/roughmap/",
        url_protocal: c,
      };

      const scriptTag = document.createElement("script");
      scriptTag.src = `${c}//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/${a}/roughmapLander.js`;
      scriptTag.onload = executeScript;
      document.body.append(scriptTag);
    })();
  };

  useEffect(() => {
    InstallScript();
  }, []);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>오시는 길</Title>
      </Divider>
      <Image src={Flower} alt="Flower divider" />
      <Map id="daumRoughmapContainer1747039082081" className="root_daum_roughmap root_daum_roughmap_landing" />
      <Address>
        서울 구로구 새말로 97<br />
        신도림테크노마트 8층
      </Address>

      <InfoBlock>
        <SubTitle>🚇 대중교통 이용 시</SubTitle>
        <Description>
          1호선 / 2호선 신도림역<br />
          ③번 출구 → 테크노마트 판매동 지하1층과 연결되어 있어요.
        </Description>
        <LinkButton href="https://tripcheckinnow.com" target="_blank" rel="noopener noreferrer">
          자세히 보기
        </LinkButton>
      </InfoBlock>

      <InfoBlock>
        <SubTitle>🚗 자차 이용 시</SubTitle>
        <Description>
          테크노마트 지하주차장 (B3 ~ B7)<br />
          주차요원의 안내에 따라 이동해 주세요.
        </Description>
        <LinkButton href="https://tripcheckinnow.com" target="_blank" rel="noopener noreferrer">
          자세히 보기
        </LinkButton>
      </InfoBlock>
    </Wrapper>
  );
};

export default Location;