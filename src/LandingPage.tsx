import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";

const GP_URL =
  "https://play.google.com/store/apps/details?id=com.chalkstudios.j42";
const IOS_URL = "https://apps.apple.com/sg/app/journey-42/id6755078097";

const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #6DA5F4;
    --blue-dark: #1257B8;
    --blue-deep: #093066;
    --blue-pale: #eef5ff;
    --yellow: #FFDA10;
    --yellow-pale: #FFF6C5;
    --ink: #10223c;
    --muted: #60708a;
    --white: #ffffff;
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    color: var(--ink);
    background: #fff;
    font-family: "Raleway", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  button, a { font: inherit; }
  a { color: inherit; }
  ::selection { background: var(--yellow); color: var(--blue-deep); }
`;

const Page = styled.div`
  overflow: hidden;
`;

const Shell = styled.div`
  width: min(1160px, calc(100% - 40px));
  margin: 0 auto;

  @media (max-width: 600px) {
    width: min(100% - 28px, 1160px);
  }
`;

const Nav = styled.nav`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  height: 90px;
`;

const NavInner = styled(Shell)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-size: 21px;
  font-weight: 900;
  letter-spacing: -0.5px;
  color: white;
`;

const LogoMark = styled.span`
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(2px 3px 0 rgba(9, 48, 102, 0.75));
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 34px;

  a {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
  }

  @media (max-width: 740px) {
    a:not(:last-child) {
      display: none;
    }
  }
`;

const NavCta = styled.a`
  && {
    padding: 11px 18px;
    color: var(--blue-deep);
    background: var(--yellow);
    border: 2px solid var(--blue-deep);
    border-radius: 999px;
    box-shadow: 3px 3px 0 var(--blue-deep);
  }
`;

const Hero = styled.header`
  position: relative;
  min-height: 790px;
  padding: 152px 0 94px;
  background:
    radial-gradient(
      circle at 16% 18%,
      rgba(255, 255, 255, 0.15) 0 3px,
      transparent 4px
    ),
    radial-gradient(
      circle at 88% 28%,
      rgba(255, 218, 16, 0.35) 0 5px,
      transparent 6px
    ),
    var(--blue);
  color: white;

  &::after {
    content: "";
    position: absolute;
    left: -5%;
    right: -5%;
    bottom: -2px;
    height: 76px;
    background: white;
    clip-path: polygon(
      0 78%,
      14% 39%,
      31% 70%,
      47% 26%,
      64% 60%,
      83% 22%,
      100% 66%,
      100% 100%,
      0 100%
    );
  }

  @media (max-width: 850px) {
    padding-top: 126px;
    min-height: auto;
  }
`;

const HeroGrid = styled(Shell)`
  display: grid;
  grid-template-columns: 1.02fr 0.98fr;
  align-items: center;
  gap: 72px;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    gap: 58px;
    text-align: center;
  }
`;

const Eyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  padding: 8px 13px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 999px;
  background: rgba(9, 48, 102, 0.2);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.8px;
  text-transform: uppercase;

  @media (max-width: 850px) {
    margin: 0 auto;
  }
`;

const HeroTitle = styled.h1`
  max-width: 650px;
  margin: 22px 0 20px;
  font-size: clamp(48px, 6.2vw, 82px);
  line-height: 0.98;
  letter-spacing: -4px;
  font-weight: 900;

  span {
    display: inline-block;
    position: relative;
    color: var(--yellow);
    text-shadow: 3px 3px 0 var(--blue-deep);
  }

  @media (max-width: 600px) {
    font-size: 48px;
    letter-spacing: -2.6px;
  }
`;

const HeroCopy = styled.p`
  max-width: 570px;
  margin: 0 0 28px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 18px;
  line-height: 1.7;
  font-weight: 600;

  @media (max-width: 850px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const StoreRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 850px) {
    justify-content: center;
  }
`;

const StoreBadge = styled.a`
  height: 52px;
  display: inline-flex;
  transition:
    transform 0.2s ease,
    filter 0.2s ease;

  img {
    height: 100%;
    width: auto;
    display: block;
  }
  &:hover {
    transform: translateY(-3px);
    filter: drop-shadow(0 7px 8px rgba(9, 48, 102, 0.18));
  }
`;

const TextButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  min-height: 52px;
  padding: 0 8px;
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-weight: 800;

  span {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    padding-left: 2px;
    border: 2px solid white;
    border-radius: 50%;
  }
`;

const HeroNote = styled.p`
  margin: 17px 0 0;
  color: rgba(255, 255, 255, 0.67);
  font-size: 12px;
  font-weight: 600;
`;

const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(1.5deg); }
  50% { transform: translateY(-10px) rotate(.2deg); }
`;

const PhoneStage = styled.div`
  position: relative;
  min-height: 535px;
  display: grid;
  place-items: center;

  @media (max-width: 850px) {
    min-height: 505px;
  }

  &::before {
    content: "";
    position: absolute;
    width: 430px;
    height: 430px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
`;

const Phone = styled.div`
  position: relative;
  z-index: 2;
  width: 272px;
  height: 548px;
  padding: 10px;
  border: 3px solid var(--blue-deep);
  border-radius: 43px;
  background: #071b38;
  box-shadow:
    18px 25px 0 rgba(9, 48, 102, 0.35),
    0 28px 50px rgba(9, 48, 102, 0.26);
  animation: ${float} 5s ease-in-out infinite;

  @media (max-width: 600px) {
    width: 246px;
    height: 496px;
  }
`;

const PhoneScreen = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  border-radius: 32px;
  background: #fefefe;
`;

const Notch = styled.div`
  position: absolute;
  z-index: 4;
  top: 7px;
  left: 50%;
  width: 78px;
  height: 19px;
  transform: translateX(-50%);
  border-radius: 12px;
  background: #071b38;
`;

const StatusBar = styled.div`
  height: 35px;
  padding: 8px 17px 0;
  display: flex;
  justify-content: space-between;
  color: #071b38;
  font-size: 9px;
  font-weight: 800;
`;

const GameTop = styled.div`
  padding: 9px 14px 22px;
  text-align: center;
  color: #071b38;
  background: var(--blue);
`;

const GameHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  font-weight: 800;
`;

const Avatars = styled.div`
  display: flex;
  justify-content: center;
  margin: 13px 0 8px;

  span {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    margin-left: -7px;
    border-radius: 50%;
    border: 3px solid white;
    background: var(--yellow-pale);
    color: var(--blue-deep);
    font-size: 12px;
    font-weight: 900;
  }
  span:first-child {
    margin-left: 0;
    background: #d8efff;
  }
`;

const Level = styled.div`
  font-size: 11px;
  font-weight: 700;

  strong {
    display: block;
    margin-top: -3px;
    font-size: 45px;
    line-height: 1;
  }
`;

const GamePanel = styled.div`
  position: relative;
  z-index: 2;
  margin: -1px 10px 0;
  padding: 18px 12px;
  border-radius: 21px;
  background: white;
  box-shadow: 0 4px 14px rgba(9, 48, 102, 0.12);
  text-align: left;
`;

const GamePanelTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 900;
`;

const GameCard = styled.div`
  margin-top: 13px;
  overflow: hidden;
  border: 1.5px solid #17263a;
  border-radius: 8px;
  box-shadow: 0 3px 0 rgba(9, 48, 102, 0.16);

  small {
    display: block;
    padding: 6px 9px;
    color: white;
    background: #2f3640;
    font-size: 7px;
    font-weight: 800;
    text-align: right;
  }

  div {
    padding: 13px 11px 11px;
  }
  b {
    display: block;
    margin: 6px 0 3px;
    font-size: 11px;
  }
  p {
    margin: 0;
    font-size: 10px;
    line-height: 1.35;
  }
  footer {
    padding: 5px;
    background: var(--yellow);
    font-size: 8px;
    font-weight: 800;
    text-align: center;
  }
`;

const Tag = styled.span<{ $yellow?: boolean }>`
  display: inline-block;
  margin-right: 3px;
  padding: 3px 6px;
  border-radius: 999px;
  background: ${(props) => (props.$yellow ? "var(--yellow-pale)" : "#cfe3ff")};
  color: ${(props) => (props.$yellow ? "#9a7900" : "var(--blue-dark)")};
  font-size: 6px;
  font-weight: 900;
`;

const PlayButton = styled.div`
  margin: 62px 10px 0;
  padding: 11px;
  border: 2px solid #d1ae00;
  border-radius: 11px;
  background: var(--yellow);
  color: #16233a;
  box-shadow: 0 3px 0 #c7a300;
  font-size: 17px;
  font-weight: 900;
  text-align: center;
`;

const FloatCard = styled.div<{ $side?: "left" | "right" }>`
  position: absolute;
  z-index: 3;
  ${(props) =>
    props.$side === "left"
      ? "left: -4px; top: 88px;"
      : "right: -2px; bottom: 70px;"}
  min-width: 142px;
  padding: 13px 15px;
  border: 2px solid var(--blue-deep);
  border-radius: 14px;
  background: white;
  color: var(--blue-deep);
  box-shadow: 5px 6px 0 var(--blue-deep);
  font-size: 11px;
  font-weight: 800;

  strong {
    color: #ef4c54;
    font-size: 18px;
    margin-right: 4px;
  }

  @media (max-width: 500px) {
    ${(props) => (props.$side === "left" ? "left: -8px;" : "right: -8px;")}
    min-width: 118px;
    padding: 10px 11px;
    font-size: 9px;
  }
`;

const Section = styled.section`
  padding: 105px 0;

  @media (max-width: 700px) {
    padding: 78px 0;
  }
`;

const CenterIntro = styled.div`
  max-width: 690px;
  margin: 0 auto 56px;
  text-align: center;
`;

const SectionKicker = styled.div`
  margin-bottom: 13px;
  color: var(--blue-dark);
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`;

const SectionTitle = styled.h2`
  margin: 0;
  color: var(--blue-deep);
  font-size: clamp(36px, 5vw, 56px);
  line-height: 1.06;
  letter-spacing: -2.6px;
  font-weight: 900;
`;

const SectionCopy = styled.p`
  margin: 18px auto 0;
  color: var(--muted);
  font-size: 17px;
  line-height: 1.7;
`;

const Steps = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Step = styled.article<{ $accent: string }>`
  position: relative;
  min-height: 255px;
  padding: 25px;
  border: 2px solid var(--blue-deep);
  border-radius: 24px;
  background: ${(props) => props.$accent};
  box-shadow: 6px 7px 0 var(--blue-deep);

  &::after {
    content: attr(data-step);
    position: absolute;
    top: 20px;
    right: 22px;
    color: rgba(9, 48, 102, 0.26);
    font-size: 13px;
    font-weight: 900;
  }

  h3 {
    margin: 22px 0 9px;
    color: var(--blue-deep);
    font-size: 21px;
  }
  p {
    margin: 0;
    color: #395374;
    font-size: 14px;
    line-height: 1.55;
    font-weight: 600;
  }
`;

const StepIcon = styled.div`
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  border: 2px solid var(--blue-deep);
  border-radius: 17px;
  background: white;
  box-shadow: 3px 3px 0 var(--blue-deep);
  font-size: 25px;
`;

const DemoSection = styled(Section)`
  position: relative;
  background: var(--blue-pale);
`;

const DemoGrid = styled(Shell)`
  display: grid;
  grid-template-columns: 0.78fr 1.22fr;
  align-items: center;
  gap: 75px;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    gap: 42px;
  }
`;

const DemoCopy = styled.div`
  ${SectionCopy} {
    margin-left: 0;
  }

  @media (max-width: 850px) {
    text-align: center;
  }
`;

const Bullets = styled.div`
  display: grid;
  gap: 15px;
  margin-top: 30px;
`;

const Bullet = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--blue-deep);
  font-size: 14px;
  font-weight: 800;

  span {
    width: 28px;
    height: 28px;
    display: grid;
    place-items: center;
    flex: 0 0 auto;
    border-radius: 50%;
    background: var(--yellow);
    border: 1.5px solid var(--blue-deep);
  }

  @media (max-width: 850px) {
    justify-content: center;
  }
`;

const DemoFrame = styled.button`
  position: relative;
  min-height: 425px;
  padding: 0;
  overflow: hidden;
  border: 3px solid var(--blue-deep);
  border-radius: 27px;
  background: var(--blue);
  box-shadow: 10px 12px 0 var(--blue-deep);
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.11);
  }
  &::before {
    width: 300px;
    height: 300px;
    top: -110px;
    right: -60px;
  }
  &::after {
    width: 210px;
    height: 210px;
    bottom: -100px;
    left: -50px;
  }

  &:hover div {
    transform: scale(1.08);
  }

  @media (max-width: 600px) {
    min-height: 310px;
  }
`;

const DemoQuestion = styled.div`
  position: relative;
  z-index: 1;
  max-width: 440px;
  margin: 0 auto;
  padding: 35px;
  border: 2px solid var(--blue-deep);
  border-radius: 24px;
  background: white;
  color: var(--blue-deep);
  box-shadow: 7px 8px 0 rgba(9, 48, 102, 0.85);
  transition: transform 0.2s ease;

  small {
    color: var(--blue-dark);
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 1px;
  }
  p {
    margin: 14px 0 22px;
    font-size: clamp(21px, 3vw, 31px);
    line-height: 1.15;
    font-weight: 900;
  }
`;

const PlayCircle = styled.span`
  width: 61px;
  height: 61px;
  display: grid;
  place-items: center;
  margin: 0 auto;
  padding-left: 4px;
  border: 2px solid var(--blue-deep);
  border-radius: 50%;
  background: var(--yellow);
  box-shadow: 3px 4px 0 var(--blue-deep);
  font-size: 23px;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const Feature = styled.article`
  padding: 30px;
  border-radius: 23px;
  background: #f8fbff;
  border: 1.5px solid #d8e8ff;

  span {
    font-size: 29px;
  }
  h3 {
    margin: 19px 0 9px;
    color: var(--blue-deep);
    font-size: 19px;
  }
  p {
    margin: 0;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.6;
  }
`;

const TestimonialSection = styled(Section)`
  background: var(--yellow-pale);
`;

const Quotes = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const Quote = styled.blockquote`
  margin: 0;
  padding: 29px;
  border: 2px solid var(--blue-deep);
  border-radius: 22px;
  background: white;
  box-shadow: 6px 7px 0 var(--blue-deep);

  &::before {
    content: "“";
    color: var(--blue);
    font-size: 55px;
    font-weight: 900;
    line-height: 0.7;
  }
  p {
    min-height: 98px;
    margin: 14px 0 25px;
    color: #324a68;
    font-size: 15px;
    line-height: 1.6;
    font-weight: 600;
  }
`;

const Person = styled.footer`
  display: flex;
  align-items: center;
  gap: 11px;

  span {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: var(--blue-pale);
    color: var(--blue-dark);
    font-size: 11px;
    font-weight: 900;
  }
  strong {
    display: block;
    color: var(--blue-deep);
    font-size: 13px;
  }
  small {
    color: var(--muted);
    font-size: 11px;
  }
`;

const FinalCta = styled(Section)`
  padding-bottom: 0;
`;

const CtaBox = styled(Shell)`
  position: relative;
  padding: 70px 45px;
  overflow: hidden;
  border: 3px solid var(--blue-deep);
  border-radius: 34px;
  background: var(--blue);
  box-shadow: 10px 11px 0 var(--blue-deep);
  color: white;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    top: -38px;
    left: 6%;
    width: 165px;
    height: 165px;
    background: url("/app_icon_white.png") center / contain no-repeat;
    opacity: 0.2;
    transform: rotate(-12deg);
  }
  &::after {
    content: "42";
    position: absolute;
    right: 4%;
    bottom: -34px;
    color: rgba(255, 255, 255, 0.12);
    font-size: 150px;
    font-weight: 900;
  }

  h2 {
    position: relative;
    z-index: 1;
    margin: 0 auto 16px;
    max-width: 700px;
    color: white;
    font-size: clamp(36px, 5vw, 57px);
    line-height: 1.05;
    letter-spacing: -2.5px;
  }
  p {
    position: relative;
    z-index: 1;
    margin: 0 auto 28px;
    max-width: 570px;
    color: rgba(255, 255, 255, 0.86);
    line-height: 1.6;
  }
  ${StoreRow} {
    position: relative;
    z-index: 1;
    justify-content: center;
  }

  @media (max-width: 600px) {
    padding: 55px 22px;
  }
`;

const Footer = styled.footer`
  padding: 70px 0 34px;
`;

const FooterInner = styled(Shell)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  color: var(--muted);
  font-size: 12px;

  ${Logo} {
    color: var(--blue-deep);
  }

  @media (max-width: 620px) {
    flex-direction: column;
    text-align: center;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 20px;
  a {
    text-decoration: none;
    font-weight: 700;
  }
`;

const Modal = styled.div`
  position: fixed;
  z-index: 50;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 20px;
  background: rgba(5, 27, 58, 0.78);
  backdrop-filter: blur(8px);
`;

const ModalCard = styled.div`
  position: relative;
  width: min(700px, 100%);
  padding: 60px 35px;
  border: 3px solid var(--blue-deep);
  border-radius: 28px;
  background: var(--blue);
  box-shadow: 10px 11px 0 var(--yellow);
  color: white;
  text-align: center;

  h3 {
    margin: 0 0 12px;
    font-size: clamp(29px, 5vw, 42px);
  }
  p {
    max-width: 480px;
    margin: 0 auto 25px;
    color: rgba(255, 255, 255, 0.83);
    line-height: 1.6;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 38px;
  height: 38px;
  border: 2px solid var(--blue-deep);
  border-radius: 50%;
  background: white;
  color: var(--blue-deep);
  cursor: pointer;
  font-size: 18px;
  font-weight: 900;
`;

const features = [
  [
    "💬",
    "Prompts with personality",
    "Go beyond small talk with playful questions that make opening up feel natural.",
  ],
  [
    "🎨",
    "More ways to play",
    "Answer, choose, draw, guess and react—so connecting never feels like homework.",
  ],
  [
    "🔓",
    "Depth that grows with you",
    "Unlock more meaningful conversations as your shared Bond level rises.",
  ],
  [
    "⏰",
    "Made for real schedules",
    "Take your turn whenever you can, then come back together for the reveal.",
  ],
  [
    "❤️",
    "Keep the good stuff",
    "Save your favourite answers and moments in a shared memory collection.",
  ],
  [
    "🏆",
    "Tiny wins, together",
    "Daily missions, streaks and rewards give you both a reason to keep showing up.",
  ],
];

const testimonials = [
  [
    "We used to default to ‘how was your day?’ Journey 42 gives us something new to laugh about—and sometimes a surprisingly deep chat.",
    "M & J",
    "Together 2 years",
  ],
  [
    "It feels like a game first. The conversations happen naturally, which makes it much easier for both of us to open up.",
    "A & K",
    "Long-distance couple",
  ],
  [
    "Our favourite part is guessing each other’s answers. Getting it wrong is usually even more fun than getting it right.",
    "S & R",
    "Newly together",
  ],
];

function StoreButtons({ showDemo = false }: { showDemo?: boolean }) {
  return (
    <StoreRow>
      <StoreBadge
        href={GP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Get Journey 42 on Google Play"
      >
        <img src="/playstore-badge.svg" alt="Get it on Google Play" />
      </StoreBadge>
      <StoreBadge
        href={IOS_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Download Journey 42 on the App Store"
      >
        <img src="/appstore-badge.svg" alt="Download on the App Store" />
      </StoreBadge>
      {showDemo && (
        <TextButton href="#demo">
          <span>▶</span> Watch demo
        </TextButton>
      )}
    </StoreRow>
  );
}

function AppPreview() {
  return (
    <PhoneStage aria-label="Journey 42 app preview">
      <FloatCard $side="left">
        <strong>+1</strong> shared memory
      </FloatCard>
      <Phone>
        <PhoneScreen>
          <Notch />
          <StatusBar>
            <span>9:42</span>
            <span>● ◒ ▰</span>
          </StatusBar>
          <GameTop>
            <GameHeader>
              <span>⬡ 3 🔥 Full</span>
              <span>🪙 15</span>
            </GameHeader>
            <Avatars>
              <span>YOU</span>
              <span>THEM</span>
            </Avatars>
            <Level>
              Bond level<strong>2</strong>
            </Level>
          </GameTop>
          <GamePanel>
            <GamePanelTitle>
              <span>Your Move!</span>
              <span>💛</span>
            </GamePanelTitle>
            <GameCard>
              <small>⌛ EXPIRES IN 23:52:20</small>
              <div>
                <Tag $yellow>ICEBREAKER</Tag>
                <Tag>CONNECTION</Tag>
                <b>WHO'S MORE LIKELY?</b>
                <p>Who’s more likely to be the better cuddler?</p>
              </div>
              <footer>Your partner left a comment!</footer>
            </GameCard>
          </GamePanel>
          <PlayButton>PLAY</PlayButton>
        </PhoneScreen>
      </Phone>
      <FloatCard $side="right">
        🔥 Bond streak <strong>3</strong>
      </FloatCard>
    </PhoneStage>
  );
}

export default function LandingPage() {
  const [showDemo, setShowDemo] = useState(false);

  useEffect(() => {
    if (!showDemo) return;
    const onKeyDown = (event: KeyboardEvent) =>
      event.key === "Escape" && setShowDemo(false);
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [showDemo]);

  return (
    <Page>
      <GlobalStyle />
      <Nav>
        <NavInner>
          <Logo href="#top">
            <LogoMark>
              <img src="/j42-website-icon-192.png" alt="" />
            </LogoMark>
            Journey 42
          </Logo>
          <NavLinks>
            <a href="#how-it-works">How it works</a>
            <a href="#features">Features</a>
            <a href="#stories">Stories</a>
            <NavCta href="#download">Get the app</NavCta>
          </NavLinks>
        </NavInner>
      </Nav>

      <Hero id="top">
        <HeroGrid>
          <div>
            <Eyebrow>♥ A daily couples game</Eyebrow>
            <HeroTitle>
              Play Together.
              <br />
              <span>Grow Together.</span>
            </HeroTitle>
            <HeroCopy>
              Answer, reveal, laugh and level up together. Journey 42 turns a
              few minutes a day into conversations you’ll actually remember.
            </HeroCopy>
            <StoreButtons showDemo />
            <HeroNote>
              Free to start · Play together on iOS and Android
            </HeroNote>
          </div>
          <AppPreview />
        </HeroGrid>
      </Hero>

      <Section id="how-it-works">
        <Shell>
          <CenterIntro>
            <SectionKicker>Your daily connection ritual</SectionKicker>
            <SectionTitle>
              A little game. A lot more to talk about.
            </SectionTitle>
            <SectionCopy>
              No awkward conversation starters. Just one playful shared
              experience that fits into the day you already have.
            </SectionCopy>
          </CenterIntro>
          <Steps>
            <Step $accent="#eef5ff" data-step="01">
              <StepIcon>🎲</StepIcon>
              <h3>Get your move</h3>
              <p>
                A fresh question, challenge or mini-game arrives for both of
                you.
              </p>
            </Step>
            <Step $accent="#fffbe8" data-step="02">
              <StepIcon>✍️</StepIcon>
              <h3>Answer your way</h3>
              <p>
                Pick, type or draw—take your turn when the moment feels right.
              </p>
            </Step>
            <Step $accent="#e5f7ee" data-step="03">
              <StepIcon>👀</StepIcon>
              <h3>Reveal together</h3>
              <p>See what your partner chose and let the reactions begin.</p>
            </Step>
            <Step $accent="#f3ecff" data-step="04">
              <StepIcon>🚀</StepIcon>
              <h3>Grow your Bond</h3>
              <p>
                Build your streak, save memories and unlock deeper levels
                together.
              </p>
            </Step>
          </Steps>
        </Shell>
      </Section>

      <DemoSection id="demo">
        <DemoGrid>
          <DemoCopy>
            <SectionKicker>See it in action</SectionKicker>
            <SectionTitle>Connection without the cringe.</SectionTitle>
            <SectionCopy>
              Journey 42 creates the nudge, the surprise and the reveal. You
              bring the two of you.
            </SectionCopy>
            <Bullets>
              <Bullet>
                <span>✓</span> Takes just a few minutes a day
              </Bullet>
              <Bullet>
                <span>✓</span> Play together, even when you’re apart
              </Bullet>
              <Bullet>
                <span>✓</span> Gets more meaningful as you progress
              </Bullet>
            </Bullets>
          </DemoCopy>
          <DemoFrame
            onClick={() => setShowDemo(true)}
            aria-label="Play Journey 42 demo video"
          >
            <DemoQuestion>
              <small>TODAY’S QUESTION</small>
              <p>
                What tiny thing does your partner do that always makes you
                smile?
              </p>
              <PlayCircle>▶</PlayCircle>
            </DemoQuestion>
          </DemoFrame>
        </DemoGrid>
      </DemoSection>

      <Section id="features">
        <Shell>
          <CenterIntro>
            <SectionKicker>Built for two</SectionKicker>
            <SectionTitle>Keep discovering each other.</SectionTitle>
            <SectionCopy>
              Playful enough for date night. Flexible enough for every day.
              Meaningful enough to bring you closer.
            </SectionCopy>
          </CenterIntro>
          <FeatureGrid>
            {features.map(([icon, title, copy]) => (
              <Feature key={title}>
                <span>{icon}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </Feature>
            ))}
          </FeatureGrid>
        </Shell>
      </Section>

      <TestimonialSection id="stories">
        <Shell>
          <CenterIntro>
            <SectionKicker>Better together</SectionKicker>
            <SectionTitle>The good kind of screen time.</SectionTitle>
          </CenterIntro>
          <Quotes>
            {testimonials.map(([quote, name, detail]) => (
              <Quote key={name}>
                <p>{quote}</p>
                <Person>
                  <span>{name}</span>
                  <div>
                    <strong>{name}</strong>
                    <small>{detail}</small>
                  </div>
                </Person>
              </Quote>
            ))}
          </Quotes>
        </Shell>
      </TestimonialSection>

      <FinalCta id="download">
        <CtaBox>
          <h2>Your next favourite conversation is waiting.</h2>
          <p>
            Download Journey 42, invite your partner and make a little more room
            for each other—one move at a time.
          </p>
          <StoreButtons />
        </CtaBox>
      </FinalCta>

      <Footer>
        <FooterInner>
          <Logo href="#top">
            <LogoMark>
              <img src="/j42-website-icon-192.png" alt="" />
            </LogoMark>{" "}
            Journey 42
          </Logo>
          <span>
            © {new Date().getFullYear()} Journey 42. Play together. Grow
            together.
          </span>
          <FooterLinks>
            <a href="mailto:chalkboystudios@gmail.com?subject=I%20have%20some%20feedback!">
              Contact
            </a>
            <a href="#top">Back to top ↑</a>
          </FooterLinks>
        </FooterInner>
      </Footer>

      {showDemo && (
        <Modal
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-title"
          onClick={() => setShowDemo(false)}
        >
          <ModalCard onClick={(event) => event.stopPropagation()}>
            <CloseButton
              onClick={() => setShowDemo(false)}
              aria-label="Close demo"
            >
              ×
            </CloseButton>
            <h3 id="demo-title">Demo coming soon 💛</h3>
            <p>
              The product tour is being prepared. In the meantime, download
              Journey 42 and take your first move together.
            </p>
            <StoreButtons />
          </ModalCard>
        </Modal>
      )}
    </Page>
  );
}
