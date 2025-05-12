import React from "react";
import styled from "styled-components";
import QuotePaper from "../assets/Quote.png";
import Flower from "../assets/flower1.png";

const Wrapper = styled.div`
  padding-top: 42px;
  padding-left: 42px;
  padding-right: 42px;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
`;

const Content = styled.span`
  display: block;
  margin: 0 auto;
  font-size: 1.3rem;
  font-family: "mom_to_daughter";
  text-align: center;
  color: var(--title-color);
  line-height: 2.25rem;
  opacity: 0.75;
  background-image: url(${QuotePaper});
  background-repeat: no-repeat;
  background-position: center;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Quote = () => {
  return (
    <Wrapper>
      <Image src={Flower} data-aos="fade-up" />
      {/* <Content data-aos="fade-up">
        장담하건대. 세상이 다 겨울이어도
        <br />
        우리 사랑은 늘봄처럼 따뜻하고
        <br />
        간혹, 여름처럼 뜨거울 겁니다
        <br />
        <br />
        - 이수동, (사랑가) -
        <br />
        <br />
      </Content> */}
      <Content data-aos="fade-up">
        사랑은 숨 쉴 때마다 
        <br/>
        그 사람이 생각나는 것, 
        <br/>
        결혼은 코 고는 소리도 
        <br/>
        사랑하게 되는 것...ㅎㅎ..
        <br />
        — 멋쟁이 익명의 작가 -
      </Content>
    </Wrapper>
  );
};

export default Quote;
