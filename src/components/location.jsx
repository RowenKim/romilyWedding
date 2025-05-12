import React, { useEffect, useState } from "react";
import { Divider } from "antd";
import styled, { keyframes } from "styled-components";
import Flower from "../assets/flower2.png";
import { FaSubway, FaBus, FaCar } from "react-icons/fa";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
`;

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
  padding: 0 16px;
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
  animation: ${fadeIn} 0.3s ease;
  text-align: left;
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
  margin-top: 8px;
  &:hover {
    background-color: #6d4c41;
  }
`;

const ToggleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: #6d4c41;
  font-size: 0.85rem;
  cursor: pointer;
  margin-bottom: 8px;
  text-decoration: underline;
`;

const Map = styled.div`
  width: 100%;
  margin-bottom: 64px;
`;

const Location = () => {
  const [showBusInfo, setShowBusInfo] = useState(false);

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
        신도림테크노마트 8층 웨딩시티
      </Address>

      <InfoBlock>
        <SubTitle><FaSubway /> 지하철 이용 시</SubTitle>
        <Description>
          1호선 / 2호선 신도림역<br />
          ③번 출구 → 테크노마트 판매동 지하1층과 연결
        </Description>
        <LinkButton href="https://tripcheckinnow.com" target="_blank" rel="noopener noreferrer">
          자세히 보기
        </LinkButton>
      </InfoBlock>

      <InfoBlock>
        <SubTitle><FaBus /> 버스 이용 시</SubTitle>
        <ToggleWrapper>
          <ToggleButton onClick={() => setShowBusInfo(!showBusInfo)}>
            {showBusInfo ? "닫기" : "버스 노선 상세 보기"}
          </ToggleButton>
          {showBusInfo && (
            <Description>
              <strong>신도림역 (17-102) 정류장 하차</strong><br />
              지하철 3번 출구 방향<br />
              지선: 5619, 6411, 6511, 6611 / 직행: 5200 / 마을: 영등포09, 12, 13
              <br /><br />
              <strong>신도림역 (17-001) 정류장 하차</strong><br />
              지하철 1번 출구 → 지하보도 → 3번 출구 방면 이동<br />
              간선: 160, 503, 600, 660, 662<br />
              지선: 5615, 5714, 6512, 6515, 6516, 6637, 6640A, 6713<br />
              직행: 301, 320 / 일반: 10, 11-1, 11-2, 83, 88, 530 / 공항: 6018
            </Description>
          )}
          <LinkButton href="https://tripcheckinnow.com" target="_blank" rel="noopener noreferrer">
            자세히 보기
          </LinkButton>
        </ToggleWrapper>
      </InfoBlock>

      <InfoBlock>
        <SubTitle><FaCar /> 자차 이용 시</SubTitle>
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