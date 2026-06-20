import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";

// ─── Store URLs ─────────────────────────────────────────────────────────────────
const GP_URL  = "https://play.google.com/store/apps/details?id=com.chalkstudios.j42";
const IOS_URL = "https://apps.apple.com/sg/app/journey-42/id6755078097";

// ─── Brand Colors ─────────────────────────────────────────────────────────────
const C = {
  blue: {
    light3: "#eef5ff",
    light2: "#DDEBFF",
    light1: "#88B9FF",
    regular: "#6DA5F4",
    dark0: "#5592e6",
    dark1: "#1257B8",
    dark2: "#0c4088",
    dark3: "#093066",
    dark4: "#051b3a",
  },
  yellow: {
    light3: "#FFFBE8",
    light2: "#FFF6C5",
    light1: "#FFE769",
    regular: "#FFDA10",
    dark0: "#f0cc00",
    dark1: "#DFBC06",
    dark2: "#bb9c01",
  },
  purple: {
    light5: "#fdf1ff",
    light4: "#fbdfff",
    light3: "#f7c1ff",
    light2: "#F29FFF",
    light1: "#D55FE7",
    regular: "#CC21C6",
    dark1: "#a31a9f",
    dark2: "#831580",
  },
};

// ─── Keyframe Animations ──────────────────────────────────────────────────────
const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33%       { transform: translateY(-16px) rotate(-4deg); }
  66%       { transform: translateY(-8px) rotate(4deg); }
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const bounceIn = keyframes`
  0%   { transform: scale(0.75); opacity: 0; }
  60%  { transform: scale(1.06); opacity: 1; }
  100% { transform: scale(1); }
`;

// ─── Scroll-into-view hook ────────────────────────────────────────────────────
function useInView(threshold = 0.18) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── Count-up hook ────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1400, active = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const step = target / (duration / 16);
    let cur = 0;
    const id = setInterval(() => {
      cur = Math.min(cur + step, target);
      setVal(Math.floor(cur));
      if (cur >= target) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [active, target, duration]);
  return val;
}

// ─── Global Styles ────────────────────────────────────────────────────────────
const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    font-family: 'Raleway', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #fff;
    color: ${C.blue.dark4};
    -webkit-font-smoothing: antialiased;
  }
`;

// ─── Navbar ───────────────────────────────────────────────────────────────────
const Nav = styled.nav`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 48px;
  background: rgba(255, 255, 255, 0.93);
  backdrop-filter: blur(14px);
  border-bottom: 2px solid ${C.blue.light2};

  @media (max-width: 600px) { padding: 12px 20px; }
`;

const NavLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-weight: 900;
  color: ${C.blue.dark1};
  letter-spacing: -0.3px;
  user-select: none;
`;

const LogoBadge = styled.img<{ size?: number }>`
  width: ${p => p.size ?? 40}px;
  height: ${p => p.size ?? 40}px;
  border-radius: ${p => Math.round((p.size ?? 40) * 0.3)}px;
  flex-shrink: 0;
  display: block;
  object-fit: cover;
`;

const NavBtn = styled.a`
  background: ${C.blue.dark1};
  color: #fff;
  padding: 10px 24px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 800;
  text-decoration: none;
  box-shadow: 0 4px 0 ${C.blue.dark2};
  transition: transform 0.15s, box-shadow 0.15s;
  &:hover  { transform: translateY(-2px); box-shadow: 0 6px 0 ${C.blue.dark2}; }
  &:active { transform: translateY(2px);  box-shadow: 0 2px 0 ${C.blue.dark2}; }
`;

// ─── Hero ─────────────────────────────────────────────────────────────────────
const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 120px 24px 80px;
  background: linear-gradient(158deg, ${C.blue.light3} 0%, #fff 52%, ${C.yellow.light3} 100%);
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const FloatEmoji = styled.span<{ x: number; y: number; sz: number; delay: number; dur: number }>`
  position: absolute;
  left: ${p => p.x}%;
  top: ${p => p.y}%;
  font-size: ${p => p.sz}px;
  animation: ${float} ${p => p.dur}s ease-in-out ${p => p.delay}s infinite;
  opacity: 0.6;
  pointer-events: none;
  user-select: none;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 700px;
`;

const HeroEyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: ${C.blue.light2};
  color: ${C.blue.dark1};
  padding: 6px 18px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 800;
  margin-bottom: 24px;
  animation: ${bounceIn} 0.55s ease both;
`;

const HeroTitle = styled.h1`
  font-size: clamp(40px, 7.5vw, 80px);
  font-weight: 900;
  color: ${C.blue.dark1};
  line-height: 1.05;
  letter-spacing: -1.5px;
  margin-bottom: 22px;
  animation: ${fadeInUp} 0.65s ease 0.1s both;

  .accent {
    color: ${C.purple.regular};
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: 3px; left: 0; right: 0;
      height: 8px;
      background: ${C.yellow.regular};
      border-radius: 4px;
      z-index: -1;
    }
  }
`;

const HeroSub = styled.p`
  font-size: clamp(16px, 2.5vw, 20px);
  color: ${C.blue.dark0};
  line-height: 1.65;
  max-width: 480px;
  margin: 0 auto 40px;
  animation: ${fadeInUp} 0.65s ease 0.22s both;
`;

const StoreBadge = styled.a`
  display: inline-block;
  transition: transform 0.18s, filter 0.18s;
  filter: drop-shadow(0 4px 10px rgba(0,0,0,0.12));
  &:hover  { transform: translateY(-4px); filter: drop-shadow(0 8px 18px rgba(0,0,0,0.18)); }
  &:active { transform: translateY(1px);  filter: drop-shadow(0 2px 6px rgba(0,0,0,0.12)); }
  img { display: block; height: 52px; width: auto; }
`;

const StoreBadgeWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
  animation: ${fadeInUp} 0.65s ease 0.32s both;
`;

// ─── Phone mockup visuals ─────────────────────────────────────────────────────
const HeroPhones = styled.div`
  margin-top: 64px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 20px;
  animation: ${fadeInUp} 0.65s ease 0.38s both;

  @media (max-width: 600px) { gap: 10px; margin-top: 48px; }
`;

const PhoneShell = styled.div<{ bg: string; tall?: boolean }>`
  width: ${p => p.tall ? "168px" : "144px"};
  height: ${p => p.tall ? "356px" : "298px"};
  background: ${p => p.bg};
  border-radius: 28px;
  padding: 22px 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 11px;
  overflow: hidden;
  box-shadow: ${p => p.tall
    ? `0 28px 64px ${C.blue.light1}aa, 0 0 0 3px ${C.blue.regular}`
    : `0 16px 40px rgba(0,0,0,0.07), 0 0 0 2px rgba(0,0,0,0.04)`};
  transform: ${p => p.tall ? "none" : "translateY(22px)"};
  transition: transform 0.35s;
  &:hover { transform: ${p => p.tall ? "translateY(-8px)" : "translateY(12px)"}; }

  @media (max-width: 600px) {
    width: ${p => p.tall ? "128px" : "108px"};
    height: ${p => p.tall ? "272px" : "228px"};
    border-radius: 22px;
    padding: 16px 10px 14px;
    gap: 9px;
  }
`;

const PRow = styled.div<{ w?: number; bg?: string }>`
  height: 11px;
  width: ${p => `${p.w ?? 100}%`};
  background: ${p => p.bg ?? C.blue.light2};
  border-radius: 6px;
`;

const PBox = styled.div<{ bg?: string }>`
  flex: 1;
  background: ${p => p.bg ?? C.blue.light2};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 34px;
`;

const PChip = styled.div<{ bg: string; textDark?: boolean }>`
  padding: 0 12px;
  height: 34px;
  background: ${p => p.bg};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 900;
  color: ${p => p.textDark ? C.blue.dark4 : "#fff"};
`;

// ─── Section helpers ──────────────────────────────────────────────────────────
const SLabel = styled.div`
  text-align: center;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: ${C.blue.regular};
  margin-bottom: 10px;
`;

const STitle = styled.h2`
  text-align: center;
  font-size: clamp(26px, 4vw, 46px);
  font-weight: 900;
  color: ${C.blue.dark1};
  letter-spacing: -0.5px;
  line-height: 1.12;
  margin-bottom: 14px;
`;

const SSub = styled.p`
  text-align: center;
  font-size: clamp(15px, 2vw, 18px);
  color: #555;
  line-height: 1.65;
  max-width: 520px;
  margin: 0 auto 56px;
`;

// ─── Feature Cards strip ──────────────────────────────────────────────────────
const CardsSection = styled.section`
  padding: 90px 24px;
  background: #fff;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 22px;
  max-width: 1040px;
  margin: 0 auto;
`;

const FeatureCard = styled.div<{ bg: string; vis: boolean; delay: number }>`
  background: ${p => p.bg};
  border-radius: 26px;
  padding: 36px 28px;
  cursor: default;
  opacity: ${p => p.vis ? 1 : 0};
  transform: ${p => p.vis ? "translateY(0)" : "translateY(30px)"};
  transition: opacity 0.55s ease ${p => p.delay}s, transform 0.55s ease ${p => p.delay}s, box-shadow 0.25s;
  &:hover { box-shadow: 0 18px 42px rgba(0,0,0,0.09); transform: translateY(-6px); transition-delay: 0s; }
`;

const CardIcon = styled.div`
  font-size: 50px;
  margin-bottom: 18px;
  display: inline-block;
  transition: transform 0.3s;
  ${FeatureCard}:hover & { transform: scale(1.22) rotate(-6deg); }
`;

const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 900;
  color: ${C.blue.dark1};
  margin-bottom: 10px;
`;

const CardBody = styled.p`
  font-size: 15px;
  color: #555;
  line-height: 1.62;
`;

// ─── Feature Detail sections ──────────────────────────────────────────────────
const DetailSection = styled.section<{ bg?: string }>`
  padding: 100px 48px;
  background: ${p => p.bg ?? "#fff"};
  @media (max-width: 768px) { padding: 70px 20px; }
`;

const DetailRow = styled.div<{ rev?: boolean }>`
  display: flex;
  align-items: center;
  gap: 64px;
  max-width: 1040px;
  margin: 0 auto;
  flex-direction: ${p => p.rev ? "row-reverse" : "row"};
  @media (max-width: 768px) { flex-direction: column; gap: 40px; }
`;

const DetailText = styled.div<{ vis: boolean; fromRight?: boolean }>`
  flex: 1;
  max-width: 440px;
  opacity: ${p => p.vis ? 1 : 0};
  transform: ${p => p.vis ? "translateX(0)" : `translateX(${p.fromRight ? "32px" : "-32px"})`};
  transition: opacity 0.6s ease, transform 0.6s ease;
`;

const DetailVisual = styled.div<{ vis: boolean; fromRight?: boolean }>`
  flex: 1;
  max-width: 400px;
  opacity: ${p => p.vis ? 1 : 0};
  transform: ${p => p.vis ? "translateX(0)" : `translateX(${p.fromRight ? "-32px" : "32px"})`};
  transition: opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s;
  @media (max-width: 768px) { max-width: 320px; width: 100%; }
`;

const Tag = styled.div<{ bg: string; col: string }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: ${p => p.bg};
  color: ${p => p.col};
  padding: 5px 14px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.2px;
  margin-bottom: 18px;
`;

const DTitle = styled.h2`
  font-size: clamp(28px, 4vw, 46px);
  font-weight: 900;
  color: ${C.blue.dark1};
  letter-spacing: -0.5px;
  line-height: 1.1;
  margin-bottom: 18px;
`;

const DDesc = styled.p`
  font-size: 17px;
  color: #555;
  line-height: 1.72;
  margin-bottom: 26px;
`;

const Bullet = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 13px;
  font-size: 15px;
  color: #444;
  line-height: 1.55;
`;

const Dot = styled.div<{ bg: string }>`
  width: 26px;
  height: 26px;
  background: ${p => p.bg};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  flex-shrink: 0;
  margin-top: 1px;
`;

const VisCard = styled.div<{ bg?: string }>`
  background: ${p => p.bg ?? "#fff"};
  border-radius: 28px;
  padding: 28px;
  box-shadow: 0 20px 52px rgba(13,64,136,0.11);
  width: 100%;
`;

// ─── Interactive game card ────────────────────────────────────────────────────
const QCard = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 22px;
  margin-bottom: 14px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.05);
`;

const QText = styled.div`
  font-size: 16px;
  font-weight: 800;
  color: ${C.blue.dark1};
  margin-bottom: 14px;
`;

const Opt = styled.button<{ sel?: boolean; correct?: boolean }>`
  width: 100%;
  text-align: left;
  padding: 11px 16px;
  margin-bottom: 9px;
  border-radius: 13px;
  font-size: 14px;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  border: 2px solid ${p => p.correct ? C.blue.dark1 : p.sel ? C.yellow.dark1 : "transparent"};
  background: ${p => p.correct ? C.blue.regular : p.sel ? C.yellow.light2 : C.blue.light3};
  color: ${p => p.correct ? "#fff" : C.blue.dark1};
  transform: ${p => (p.sel || p.correct) ? "scale(1.02)" : "scale(1)"};
  transition: transform 0.15s, background 0.15s, border-color 0.15s;
  &:hover:not(:disabled) { transform: scale(1.02); background: ${p => p.correct ? C.blue.regular : C.yellow.light2}; }
`;

// ─── Streak card ──────────────────────────────────────────────────────────────
const StreakCard = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 22px;
  margin-bottom: 14px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.05);
`;

const DayDot = styled.div<{ done?: boolean; today?: boolean }>`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${p => p.today ? "18px" : "11px"};
  font-weight: 800;
  background: ${p => p.today ? C.yellow.regular : p.done ? C.blue.regular : C.blue.light2};
  color: ${p => (p.done || p.today) ? "#fff" : C.blue.light1};
  box-shadow: ${p => p.today ? `0 4px 0 ${C.yellow.dark1}` : "none"};
  transition: transform 0.2s;
  &:hover { transform: scale(1.12); }
`;

// ─── Stats section ────────────────────────────────────────────────────────────
const StatsSection = styled.section`
  background: ${C.blue.dark1};
  padding: 90px 24px;
  text-align: center;
`;

const StatsGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 64px;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 0 auto;
`;

const StatItem = styled.div<{ vis: boolean; delay: number }>`
  opacity: ${p => p.vis ? 1 : 0};
  transform: ${p => p.vis ? "translateY(0)" : "translateY(22px)"};
  transition: opacity 0.55s ease ${p => p.delay}s, transform 0.55s ease ${p => p.delay}s;
`;

// ─── Download section ─────────────────────────────────────────────────────────
const DownloadSection = styled.section`
  padding: 110px 24px;
  background: linear-gradient(138deg, ${C.yellow.light3} 0%, ${C.blue.light3} 100%);
  text-align: center;
`;


// ─── Footer ───────────────────────────────────────────────────────────────────
const Footer = styled.footer`
  background: ${C.blue.dark4};
  color: ${C.blue.light2};
  padding: 36px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  @media (max-width: 600px) { flex-direction: column; text-align: center; padding: 28px 20px; }
`;

// ═════════════════════════════════════════════════════════════════════════════
// Main Component
// ═════════════════════════════════════════════════════════════════════════════
export default function LandingPage() {
  const cards   = useInView();
  const feat1   = useInView();
  const feat2   = useInView();
  const feat3   = useInView();
  const stats   = useInView();
  const dl      = useInView();

  const [picked, setPicked] = useState<number | null>(null);

  const dlCount  = useCountUp(10000, 1500, stats.inView);
  const cpCount  = useCountUp(5000,  1500, stats.inView);
  const gmCount  = useCountUp(50,    1500, stats.inView);

  const CORRECT = 1; // "Gaming 🎮" is the correct answer in the demo

  return (
    <>
      <GlobalStyle />

      {/* ── Navbar ─────────────────────────────────────────────────────── */}
      <Nav>
        <NavLogo>
          <LogoBadge src={`${process.env.PUBLIC_URL}/j42-website-icon-192.png`} alt="Journey 42" />
          Journey 42
        </NavLogo>
        <NavBtn href={GP_URL} target="_blank" rel="noopener noreferrer">
          Get the App
        </NavBtn>
      </Nav>

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <HeroSection>
        {/* floating background emojis */}
        <FloatEmoji x={7}  y={14} sz={36} delay={0}   dur={4.2}>💛</FloatEmoji>
        <FloatEmoji x={88} y={11} sz={28} delay={1.1} dur={3.6}>💙</FloatEmoji>
        <FloatEmoji x={4}  y={66} sz={24} delay={2.0} dur={5.0}>⭐</FloatEmoji>
        <FloatEmoji x={92} y={58} sz={32} delay={0.6} dur={4.6}>✨</FloatEmoji>
        <FloatEmoji x={14} y={84} sz={22} delay={1.6} dur={3.9}>🎮</FloatEmoji>
        <FloatEmoji x={83} y={79} sz={26} delay={0.9} dur={4.3}>🎯</FloatEmoji>
        <FloatEmoji x={50} y={7}  sz={20} delay={2.4} dur={4.9}>💜</FloatEmoji>
        <FloatEmoji x={70} y={88} sz={30} delay={1.3} dur={4.1}>🏆</FloatEmoji>
        <FloatEmoji x={28} y={10} sz={18} delay={3.0} dur={5.2}>🎁</FloatEmoji>

        <HeroContent>
          <HeroEyebrow>💛 For Couples · Free to Play</HeroEyebrow>
          <HeroTitle>
            Play Together.<br />
            <span className="accent">Grow Together.</span>
          </HeroTitle>
          <HeroSub>
            Journey 42 brings couples closer through fun daily games,
            meaningful questions, and shared experiences — every single day.
          </HeroSub>
          <StoreBadgeWrap>
            <StoreBadge href={GP_URL} target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/playstore-badge.svg`} alt="Get it on Google Play" />
            </StoreBadge>
            <StoreBadge href={IOS_URL} target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/appstore-badge.svg`} alt="Download on the App Store" />
            </StoreBadge>
          </StoreBadgeWrap>
        </HeroContent>

        <HeroPhones>
          <PhoneShell bg={C.blue.light3}>
            <PRow w={55} bg={C.blue.light1} />
            <PBox bg={C.blue.light2}>🤔</PBox>
            <PRow w={80} bg={C.blue.light1} />
            <PChip bg={C.blue.regular}>Answer!</PChip>
          </PhoneShell>

          <PhoneShell bg={C.blue.dark1} tall>
            <PRow w={50} bg={`${C.blue.light1}40`} />
            <PBox bg={`${C.blue.light1}18`}>💛</PBox>
            <PRow w={80} bg={`${C.blue.light1}40`} />
            <PRow w={65} bg={`${C.blue.light1}40`} />
            <PChip bg={C.yellow.regular} textDark>Play Now!</PChip>
          </PhoneShell>

          <PhoneShell bg={C.purple.light4}>
            <PRow w={55} bg={C.purple.light2} />
            <PBox bg={C.purple.light3}>🎯</PBox>
            <PRow w={80} bg={C.purple.light2} />
            <PChip bg={C.purple.regular}>Level Up!</PChip>
          </PhoneShell>
        </HeroPhones>
      </HeroSection>

      {/* ── Feature Cards ──────────────────────────────────────────────── */}
      <CardsSection ref={cards.ref}>
        <SLabel>Why Journey 42?</SLabel>
        <STitle>Fun. Meaningful. Daily.</STitle>
        <SSub>
          More than just chatting — shared experiences that spark laughter,
          deeper conversations, and real connection.
        </SSub>
        <CardGrid>
          {[
            { icon: "🎮", title: "Daily Games",        body: "Answer questions, draw, guess, and reveal your answers. From silly to meaningful — every day is a new adventure.", bg: C.blue.light3,   delay: 0    },
            { icon: "🔥", title: "Streaks & Rewards",  body: "Keep your daily streak going and earn relationship milestones, collectibles, and surprise bonuses together.",       bg: C.yellow.light3, delay: 0.15 },
            { icon: "📸", title: "Memories",           body: "Save favourite moments, revisit past answers, and watch how your relationship grows over time.",                   bg: C.purple.light5, delay: 0.30 },
          ].map(c => (
            <FeatureCard key={c.title} bg={c.bg} vis={cards.inView} delay={c.delay}>
              <CardIcon>{c.icon}</CardIcon>
              <CardTitle>{c.title}</CardTitle>
              <CardBody>{c.body}</CardBody>
            </FeatureCard>
          ))}
        </CardGrid>
      </CardsSection>

      {/* ── Feature 1: Daily Games ─────────────────────────────────────── */}
      <DetailSection bg={C.blue.light3} ref={feat1.ref}>
        <DetailRow>
          <DetailText vis={feat1.inView}>
            <Tag bg={C.blue.light2} col={C.blue.dark1}>🎮 Daily Games</Tag>
            <DTitle>A new adventure every day</DTitle>
            <DDesc>
              Play bite-sized games together — answer trivia, reveal personal
              stories, draw and guess, and discover how well you really know
              each other.
            </DDesc>
            <Bullet><Dot bg={C.blue.light2}>✓</Dot><span>Questions that spark real conversations</span></Bullet>
            <Bullet><Dot bg={C.blue.light2}>✓</Dot><span>Playful drawing &amp; guessing games</span></Bullet>
            <Bullet><Dot bg={C.blue.light2}>✓</Dot><span>Silly to thoughtful — every session is unique</span></Bullet>
          </DetailText>

          <DetailVisual vis={feat1.inView} fromRight>
            <VisCard>
              <QCard>
                <QText>🤔 What's my favourite way to relax?</QText>
                {["Reading 📚", "Gaming 🎮", "Cooking 🍳", "Walks 🚶"].map((opt, i) => (
                  <Opt
                    key={i}
                    sel={picked === i && i !== CORRECT}
                    correct={picked !== null && i === CORRECT}
                    onClick={() => setPicked(i)}
                    disabled={picked !== null}
                  >
                    {opt}
                  </Opt>
                ))}
              </QCard>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 13, color: "#888", fontWeight: 700 }}>Day 7 of 42</span>
                <span
                  style={{ background: C.yellow.regular, borderRadius: 50, padding: "6px 16px", fontSize: 13, fontWeight: 900, color: C.blue.dark4, cursor: "pointer" }}
                  onClick={() => setPicked(null)}
                >
                  {picked !== null ? "Reset ↺" : "Next →"}
                </span>
              </div>
            </VisCard>
          </DetailVisual>
        </DetailRow>
      </DetailSection>

      {/* ── Feature 2: Streaks ─────────────────────────────────────────── */}
      <DetailSection bg="#fff" ref={feat2.ref}>
        <DetailRow rev>
          <DetailText vis={feat2.inView} fromRight>
            <Tag bg={C.yellow.light2} col={C.yellow.dark2}>🔥 Streaks &amp; Progression</Tag>
            <DTitle>Build your relationship level</DTitle>
            <DDesc>
              Every game played grows your bond. Track your streak, complete
              daily missions, unlock milestones, and celebrate how far
              you've come together.
            </DDesc>
            <Bullet><Dot bg={C.yellow.light2}>🔥</Dot><span>Daily missions and streak rewards</span></Bullet>
            <Bullet><Dot bg={C.yellow.light2}>🏆</Dot><span>Relationship milestones and collectibles</span></Bullet>
            <Bullet><Dot bg={C.yellow.light2}>🎁</Dot><span>Surprise events and bonus games</span></Bullet>
          </DetailText>

          <DetailVisual vis={feat2.inView}>
            <VisCard bg={C.yellow.light3}>
              <StreakCard>
                <div style={{ fontSize: 15, fontWeight: 800, color: C.blue.dark1, marginBottom: 14 }}>🔥 Your 7-day streak!</div>
                <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
                  {["M","T","W","T","F","S","S"].map((d, i) => (
                    <DayDot key={i} done={i < 6} today={i === 6}>{i === 6 ? "🔥" : d}</DayDot>
                  ))}
                </div>
              </StreakCard>
              <div style={{ background: "#fff", borderRadius: 20, padding: 20, boxShadow: "0 4px 16px rgba(0,0,0,0.04)" }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: C.blue.dark1, marginBottom: 12 }}>Relationship Level</div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontSize: 28 }}>💛</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
                      <span style={{ fontSize: 13, fontWeight: 800, color: C.blue.dark1 }}>Level 4 — Soulmates</span>
                      <span style={{ fontSize: 12, color: "#888" }}>780 / 1000</span>
                    </div>
                    <div style={{ background: C.blue.light2, borderRadius: 8, height: 10, overflow: "hidden" }}>
                      <div style={{ background: `linear-gradient(90deg, ${C.blue.regular}, ${C.purple.light1})`, width: "78%", height: "100%", borderRadius: 8 }} />
                    </div>
                  </div>
                </div>
              </div>
            </VisCard>
          </DetailVisual>
        </DetailRow>
      </DetailSection>

      {/* ── Feature 3: Memories ────────────────────────────────────────── */}
      <DetailSection bg={C.purple.light5} ref={feat3.ref}>
        <DetailRow>
          <DetailText vis={feat3.inView}>
            <Tag bg={C.purple.light3} col={C.purple.dark2}>📸 Memories</Tag>
            <DTitle>Memories that matter</DTitle>
            <DDesc>
              Save your favourite moments, revisit past answers, and send
              gifts and surprises to brighten your partner's day — right
              inside the app.
            </DDesc>
            <Bullet><Dot bg={C.purple.light3}>📸</Dot><span>Save and revisit favourite game moments</span></Bullet>
            <Bullet><Dot bg={C.purple.light3}>🎁</Dot><span>Send gifts, compliments and fun surprises</span></Bullet>
            <Bullet><Dot bg={C.purple.light3}>🌱</Dot><span>See your relationship story unfold over time</span></Bullet>
          </DetailText>

          <DetailVisual vis={feat3.inView} fromRight>
            <VisCard>
              <div style={{ fontSize: 13, fontWeight: 800, color: C.purple.dark1, marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
                <span>📸</span> Your Memories
              </div>
              {[
                { emoji: "🎮", text: "Day 1 — First game together!",          sub: "June 1",  bg: C.blue.light2   },
                { emoji: "💛", text: "Day 7 — First week streak!",            sub: "June 7",  bg: C.yellow.light2 },
                { emoji: "🏆", text: "Level 3 — Reached 'Close Friends'",     sub: "June 14", bg: C.purple.light3 },
              ].map((m, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 12px", background: m.bg, borderRadius: 14, marginBottom: 9, cursor: "default", transition: "transform 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.02)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <span style={{ fontSize: 22 }}>{m.emoji}</span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 800, color: C.blue.dark1 }}>{m.text}</div>
                    <div style={{ fontSize: 11, color: "#888", fontWeight: 600 }}>{m.sub}</div>
                  </div>
                </div>
              ))}
              <div style={{ background: C.purple.light3, borderRadius: 14, padding: "12px 16px", display: "flex", alignItems: "center", gap: 10, cursor: "pointer", transition: "transform 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.02)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              >
                <span style={{ fontSize: 22 }}>🎁</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: C.purple.dark2 }}>New surprise from Alex!</div>
                  <div style={{ fontSize: 11, color: C.purple.dark1 }}>Tap to reveal 🎉</div>
                </div>
              </div>
            </VisCard>
          </DetailVisual>
        </DetailRow>
      </DetailSection>

      {/* ── Stats ──────────────────────────────────────────────────────── */}
      <StatsSection ref={stats.ref}>
        <STitle style={{ color: "#fff" }}>Couples are already playing 💛</STitle>
        <SSub style={{ color: C.blue.light1, marginBottom: 60 }}>
          Join thousands of couples building stronger connections every day.
        </SSub>
        <StatsGrid>
          {[
            { val: dlCount,  suffix: "+", label: "Downloads"        , delay: 0    },
            { val: cpCount,  suffix: "+", label: "Couples Connected" , delay: 0.18 },
            { val: gmCount,  suffix: "+", label: "Unique Games"      , delay: 0.36 },
          ].map(s => (
            <StatItem key={s.label} vis={stats.inView} delay={s.delay}>
              <div style={{ fontSize: "clamp(40px, 7vw, 68px)", fontWeight: 900, color: C.yellow.regular, lineHeight: 1, marginBottom: 8 }}>
                {s.val.toLocaleString()}{s.suffix}
              </div>
              <div style={{ fontSize: 16, color: C.blue.light1, fontWeight: 700 }}>{s.label}</div>
            </StatItem>
          ))}
        </StatsGrid>
      </StatsSection>

      {/* ── Download CTA ───────────────────────────────────────────────── */}
      <DownloadSection ref={dl.ref}>
        <STitle style={{ fontSize: "clamp(32px, 5.5vw, 64px)", letterSpacing: -1 }}>
          Ready to grow<br />together? 💛
        </STitle>
        <SSub style={{ marginBottom: 48 }}>
          Free to download. Play daily. Stay connected.<br />
          Available on Android and iOS.
        </SSub>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <StoreBadge href={GP_URL} target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/playstore-badge.svg`} alt="Get it on Google Play" />
          </StoreBadge>
          <StoreBadge href={IOS_URL} target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/appstore-badge.svg`} alt="Download on the App Store" />
          </StoreBadge>
        </div>
      </DownloadSection>

      {/* ── Footer ─────────────────────────────────────────────────────── */}
      <Footer>
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 900, fontSize: 18, color: "#fff" }}>
          <LogoBadge size={32} src={`${process.env.PUBLIC_URL}/j42-website-icon-192.png`} alt="Journey 42" />
          Journey 42
        </div>
        <div style={{ display: "flex", gap: 24, fontSize: 13, fontWeight: 600 }}>
          {[
            { label: "Google Play", href: GP_URL },
            { label: "App Store",   href: IOS_URL },
            { label: "Privacy",  href: "#" },
            { label: "Contact",  href: "mailto:support@chalkstudios.com" },
          ].map(l => (
            <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
              style={{ color: C.blue.light1, textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => ((e.target as HTMLElement).style.color = "#fff")}
              onMouseLeave={e => ((e.target as HTMLElement).style.color = C.blue.light1)}
            >
              {l.label}
            </a>
          ))}
        </div>
        <div style={{ fontSize: 12, opacity: 0.45 }}>© 2026 ChalkStudio. All rights reserved.</div>
      </Footer>
    </>
  );
}
