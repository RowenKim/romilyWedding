import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  WEDDING_DATE,
  WEDDING_LOCATION,
  GROOM_NAME,
  BRIDE_NAME,
} from "../../config.js";
import romily_demo_video from "../assets/romily_demo_video.mp4";
import GroovePaper from "../assets/GroovePaper.png";

const Layout = styled.div`
  width: 70%;
  overflow: hidden;
  margin: 0 auto;
`;

const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 42px;
  font-weight: 500 !important;
  color: var(--title-color);
  animation: fadein 3s;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */
`;

const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const WeddingInvitation = styled.p`
  font-size: 1.125rem;
  opacity: 0.45;
  margin-bottom: 16px;
`;

const GroomBride = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  opacity: 0.9;
  margin-bottom: 16px;
`;

const Schedule = styled.p`
  font-size: 0.85em;
  opacity: 0.65;
  margin-bottom: 24px;
`;

const CountdownWrapper = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 24px;
  color: var(--title-color);
  opacity: 0.8;
`;

const CountdownItem = styled.span`
  margin: 0 8px;
  display: inline-block;
`;

const Title = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2026-05-30T14:30:00');
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      <TitleWrapper>
        <CountdownWrapper>
          <CountdownItem>{timeLeft.days}일</CountdownItem>
          <CountdownItem>{timeLeft.hours}시간</CountdownItem>
          <CountdownItem>{timeLeft.minutes}분</CountdownItem>
          <CountdownItem>{timeLeft.seconds}초</CountdownItem>
        </CountdownWrapper>
        <WeddingInvitation>ROMILY의 시크릿 초대장</WeddingInvitation>
        <GroomBride>
          {GROOM_NAME} &#38; {BRIDE_NAME}
        </GroomBride>
        <Schedule>
          {WEDDING_DATE}
          <br />
          {WEDDING_LOCATION}
        </Schedule>
      </TitleWrapper>
      <VideoBackground autoPlay loop muted playsInline={true}>
        <source src={romily_demo_video} type="video/mp4" style={{width: "75%", height: "auto"}} />
      </VideoBackground>
    </Layout>
  );
};

export default Title;
