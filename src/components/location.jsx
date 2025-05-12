import React, { useEffect } from "react";
import { Divider } from "antd";
import styled from "styled-components";
import Flower from "../assets/flower2.png";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled.span`
  font-size: 1.4rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Content = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.75;
  width: 100%;
  text-align: center;
  padding-top: 42px;
  padding-bottom: 42px;
  margin: 0;
`;

const Map = styled.div`
  width: 100%;
  padding: 0;
`;

const Location = () => {
  // 카카오 맵 불러오기

  // <!-- 3. 실행 스크립트 -->
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

  // <!-- 2. 설치 스크립트 * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다. -->
  // document.write 문제가 발생해서 해당 파일을 직접 가져온다음 수정했음
  const InstallScript = () => {
    (function () {
      let c = window.location.protocol === "https:" ? "https:" : "http:";
      let a = "16137cec";

      if (window.daum && window.daum.roughmap && window.daum.roughmap.cdn) {
        return;
      }
      window.daum = window.daum || {};
      window.daum.roughmap = {
        cdn: a,
        URL_KEY_DATA_LOAD_PRE: c + "//t1.daumcdn.net/roughmap/",
        url_protocal: c,
      };
      let b =
        c +
        "//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/" +
        a +
        "/roughmapLander.js";

      // document.write -> doumnet.body.append로 수정
      const scriptTag = document.createElement("script");
      scriptTag.src = b;
      document.body.append(scriptTag);
      scriptTag.onload = () => {
        executeScript();
      };
    })();
  };

  useEffect(() => {
    InstallScript();
  }, [InstallScript]);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>오시는 길</Title>
      </Divider>
      <Image src={Flower} />
      <Map
        id="daumRoughmapContainer1747039082081"
        className="root_daum_roughmap root_daum_roughmap_landing"
      ></Map>
      <Content>
        서울 구로구 새말로 97
        <br />
        신도림테크노마트 8층
        <br />
        <br />
        <div style={{
          width: "100%",
          padding: "25px",
          border: "2px solid #d7ccc8",
          borderRadius: "15px",
          backgroundColor: "#fff",
          margin: "15px 0",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}>
          <Title>대중교통 이용시</Title>
          <br />
          <br />
          <div style={{
            fontSize: "0.85rem",
            lineHeight: "1.8",
            color: "#666",
            marginBottom: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "8px"
          }}>
            <div>신도림역 하차 후 3번 출구 방향 {'>'}</div>
            <div>지하로 연결 된 테크노마트 {'>'}</div>
            <div>우측 결혼식장 전용 엘리베이터 이용</div>
          </div>
          
          <a 
            href="https://tripcheckinnow.com" 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "10px 24px",
              backgroundColor: "#8d6e63",
              color: "#fff",
              borderRadius: "25px", 
              textDecoration: "none",
              fontSize: "0.8rem",
              transition: "all 0.3s ease",
              boxShadow: "0 2px 6px rgba(141,110,99,0.3)"
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#6d4c41"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#8d6e63"}
          >
            자세히 보기
          </a>
        </div>
        <br />
        <br />
        <div style={{
          width: "100%",
          padding: "25px",
          border: "2px solid #d7ccc8",
          borderRadius: "15px",
          backgroundColor: "#fff",
          margin: "15px 0",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}>
          <Title>자차 이용시</Title>
          <br />
          <br />
          <div style={{
            fontSize: "0.85rem",
            lineHeight: "1.8",
            color: "#666",
            marginBottom: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "8px"
          }}>
            <div>주차장에서 TEST 구역 {'>'}</div>
            <div>결혼식장 전용 엘리베이터 {'>'}</div>
            <div>아모르홀 지나쳐서 스타티스 홀로!</div>
          </div>
          
          <a 
            href="https://tripcheckinnow.com" 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "10px 24px",
              backgroundColor: "#8d6e63",
              color: "#fff",
              borderRadius: "25px", 
              textDecoration: "none",
              fontSize: "0.8rem",
              transition: "all 0.3s ease",
              boxShadow: "0 2px 6px rgba(141,110,99,0.3)"
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#6d4c41"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#8d6e63"}
          >
            자세히 보기
          </a>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Location;
