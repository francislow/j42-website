import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";
import {
  Heart,
  Sparkles,
  ShieldCheck,
  Timer,
  MessageCircleHeart,
  Wand2,
  Gift,
  ArrowRight,
  Star,
  Check,
} from "lucide-react";

/**
 * J42 Landing Page — Styled Components edition
 * - Single-file React component
 * - styled-components for styling
 * - Framer Motion animations
 *
 * Notes:
 * 1) Install deps:
 *    - styled-components
 *    - framer-motion
 *    - lucide-react
 *    (and @types/styled-components for TS)
 * 2) If using Next.js, ensure styled-components SSR is configured.
 */

const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: dark;
  }
  * { box-sizing: border-box; }
  html, body { height: 100%; }
  body {
    margin: 0;
    font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji",
      "Segoe UI Emoji";
    background: #09090b; /* zinc-950 */
    color: #fff;
  }
  a { color: inherit; text-decoration: none; }
  button, input { font: inherit; }
  details summary { list-style: none; }
  details summary::-webkit-details-marker { display: none; }
`;

const Page = styled.div`
  min-height: 100vh;
  background: #09090b;
  color: #fff;
`;

const Bg = styled.div`
  pointer-events: none;
  position: fixed;
  inset: 0;
  overflow: hidden;
  z-index: 0;
`;

const Blob = styled.div<{ $pos: "top" | "right" | "bottom" }>`
  position: absolute;
  border-radius: 9999px;
  filter: blur(64px);
  background: rgba(255, 255, 255, 0.08);

  ${(p) =>
    p.$pos === "top" &&
    `
    left: 50%;
    top: -10%;
    transform: translateX(-50%);
    width: 520px;
    height: 520px;
  `}

  ${(p) =>
    p.$pos === "right" &&
    `
    right: -10%;
    top: 15%;
    width: 420px;
    height: 420px;
    background: rgba(255, 255, 255, 0.05);
  `}

  ${(p) =>
    p.$pos === "bottom" &&
    `
    left: -10%;
    bottom: -10%;
    width: 520px;
    height: 520px;
    background: rgba(255, 255, 255, 0.05);
  `}
`;

const Container = styled.div`
  width: 100%;
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: 640px) {
    padding: 0 24px;
  }
  @media (min-width: 1024px) {
    padding: 0 32px;
  }
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 40;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(9, 9, 11, 0.6);
  backdrop-filter: blur(10px);
`;

const HeaderRow = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

const BrandIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 16px;
  background: #fff;
  color: #18181b;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BrandText = styled.div`
  line-height: 1.1;
`;

const BrandName = styled.div`
  font-size: 14px;
  font-weight: 700;
`;

const BrandSub = styled.div`
  font-size: 11px;
  color: rgba(255, 255, 255, 0.6);
`;

const Nav = styled.nav`
  display: none;
  align-items: center;
  gap: 24px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);

  a:hover {
    color: rgba(255, 255, 255, 1);
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SmallGhost = styled.a`
  display: none;
  padding: 8px 12px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 14px;
  font-weight: 700;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  @media (min-width: 768px) {
    display: inline-flex;
  }
`;

const SmallPrimary = styled.a`
  padding: 8px 12px;
  border-radius: 16px;
  background: #fff;
  color: #18181b;
  font-size: 14px;
  font-weight: 800;

  &:hover {
    opacity: 0.95;
  }
`;

const Main = styled.main`
  position: relative;
  z-index: 1;
  padding-top: 40px;

  @media (min-width: 640px) {
    padding-top: 56px;
  }
`;

const HeroGrid = styled.div`
  display: grid;
  gap: 40px;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: 1.1fr 0.9fr;
  }
`;

const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 12px;
  color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
`;

const H1 = styled(motion.h1)`
  margin: 18px 0 0;
  font-weight: 800;
  letter-spacing: -0.02em;
  font-size: 40px;
  line-height: 1.05;

  @media (min-width: 640px) {
    font-size: 52px;
  }
`;

const Lead = styled(motion.p)`
  margin: 16px 0 0;
  max-width: 620px;
  font-size: 16px;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.7);
`;

const CTArow = styled(motion.div)`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
  }
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 18px;
  background: #fff;
  color: #18181b;
  font-size: 14px;
  font-weight: 900;
  box-shadow: 0 14px 40px rgba(255, 255, 255, 0.1);
  transition:
    transform 120ms ease,
    box-shadow 120ms ease,
    opacity 120ms ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 18px 60px rgba(255, 255, 255, 0.14);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.45);
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 14px;
  font-weight: 900;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.35);
  }
`;

const CheckRow = styled.div`
  margin-top: 22px;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
`;

const CheckItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

const PhoneWrap = styled(motion.div)`
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
`;

const PhoneOuter = styled.div`
  border-radius: 36px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 12px;
`;

const PhoneInner = styled.div`
  border-radius: 28px;
  background: rgba(24, 24, 27, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 16px;
`;

const RowBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const Pill = styled.div`
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  padding: 4px 10px;
  font-size: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
`;

const Card = styled.div`
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 16px;
`;

const CardTitle = styled.div`
  font-weight: 800;
  font-size: 14px;
`;

const CardText = styled.div`
  margin-top: 8px;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.75);
`;

const OptionGrid = styled.div`
  margin-top: 14px;
  display: grid;
  gap: 10px;
`;

const OptionPrimary = styled.div`
  border-radius: 18px;
  background: #fff;
  color: #18181b;
  padding: 12px 14px;
  font-weight: 900;
  font-size: 14px;
`;

const OptionGhost = styled.div`
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  padding: 12px 14px;
  font-weight: 900;
  font-size: 14px;
`;

const MiniStats = styled.div`
  margin-top: 14px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const Stat = styled.div`
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 12px;
`;

const StatLabel = styled.div`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
`;

const StatValue = styled.div`
  margin-top: 4px;
  font-weight: 900;
  font-size: 18px;
`;

const Subtle = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
`;

const Strip = styled.div`
  margin-top: 48px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
`;

const StripRow = styled.div`
  padding: 18px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const StripText = styled.div`
  font-size: 14px;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.85);
`;

const StripPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
`;

const Section = styled.section`
  padding: 64px 0;

  @media (min-width: 640px) {
    padding: 80px 0;
  }
`;

const SectionHead = styled.div`
  margin: 0 auto;
  max-width: 640px;
  text-align: center;
`;

const Kicker = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-radius: 9999px;
  padding: 6px 10px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const H2 = styled.h2`
  margin: 12px 0 0;
  font-size: 28px;
  font-weight: 900;
  letter-spacing: -0.02em;

  @media (min-width: 640px) {
    font-size: 34px;
  }
`;

const Sub = styled.p`
  margin: 12px 0 0;
  font-size: 15px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);
`;

const Grid3 = styled.div`
  margin-top: 40px;
  display: grid;
  gap: 14px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Feature = styled.div`
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 18px;
`;

const FeatureTop = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
`;

const FeatureIcon = styled.div`
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FeatureTitle = styled.div`
  font-weight: 900;
  font-size: 14px;
`;

const FeatureDesc = styled.p`
  margin: 6px 0 0;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
`;

const GridSteps = styled.div`
  margin-top: 40px;
  display: grid;
  gap: 14px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StepCard = styled.div`
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 18px;
`;

const StepNum = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 18px;
  background: #fff;
  color: #18181b;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StepRow = styled.div`
  display: flex;
  gap: 14px;
  align-items: flex-start;
`;

const StepTitle = styled.div`
  font-weight: 900;
  font-size: 14px;
`;

const StepDesc = styled.p`
  margin: 6px 0 0;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
`;

const DemoGrid = styled.div`
  margin-top: 40px;
  display: grid;
  gap: 14px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const DemoCard = styled.div`
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 18px;
`;

const DemoQ = styled.div`
  margin-top: 12px;
  font-weight: 900;
  font-size: 14px;
`;

const DemoMeta = styled.div`
  margin-top: 12px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
`;

const TestimonialsGrid = styled.div`
  margin-top: 40px;
  display: grid;
  gap: 14px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TestCard = styled.div`
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 18px;
`;

const TestTop = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Quote = styled.p`
  margin: 12px 0 0;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
`;

const Who = styled.div`
  margin-top: 14px;
  font-size: 12px;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.7);
`;

const PricingGrid = styled.div`
  display: grid;
  gap: 18px;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Panel = styled.div`
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px;
`;

const PanelTitle = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 900;
`;

const PanelText = styled.p`
  margin: 10px 0 0;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
`;

const Form = styled.form`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const Input = styled.input`
  width: 100%;
  flex: 1;
  padding: 12px 14px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: #09090b;
  color: #fff;
  font-size: 14px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.35);
  }
`;

const Submit = styled.button`
  padding: 12px 14px;
  border-radius: 18px;
  border: none;
  background: #fff;
  color: #18181b;
  font-size: 14px;
  font-weight: 900;
  cursor: pointer;

  &:hover {
    opacity: 0.95;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.45);
  }
`;

const MutedRow = styled.div`
  margin-top: 12px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Chips = styled.div`
  margin-top: 16px;
  display: grid;
  gap: 10px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Chip = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 12px 14px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.85);
`;

const LinkButton = styled.a<{ $primary?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border-radius: 18px;
  padding: 14px 14px;
  font-size: 14px;
  font-weight: 900;

  ${(p) =>
    p.$primary
      ? `
    background: #fff;
    color: #18181b;
  `
      : `
    background: rgba(255,255,255,0.10);
    border: 1px solid rgba(255, 255, 255, 0.10);
    color: #fff;
  `}

  &:hover {
    opacity: 0.95;
  }
`;

const DarkPanel = styled.div`
  margin-top: 16px;
  border-radius: 24px;
  background: rgba(9, 9, 11, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 18px;
`;

const Ul = styled.ul`
  margin: 12px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 10px;
`;

const Li = styled.li`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
`;

const FAQGrid = styled.div`
  margin: 40px auto 0;
  max-width: 768px;
  display: grid;
  gap: 14px;
`;

const FAQItem = styled.details`
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 18px;
`;

const FAQSummary = styled.summary`
  cursor: pointer;
  font-size: 14px;
  font-weight: 900;
  color: #fff;
`;

const FAQAnswer = styled.p`
  margin: 12px 0 0;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
`;

const FinalCTA = styled.div`
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px;
`;

const FinalRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
  }
`;

const FinalTitle = styled.div`
  font-size: 20px;
  font-weight: 900;
`;

const FinalSub = styled.div`
  margin-top: 6px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
`;

const Footer = styled.footer`
  margin-top: 24px;
  padding-top: 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 16px;

  a:hover {
    color: rgba(255, 255, 255, 0.9);
  }
`;

function SectionTitle({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <SectionHead>
      {kicker ? (
        <Kicker>
          <Sparkles size={14} aria-hidden />
          <span>{kicker}</span>
        </Kicker>
      ) : null}
      <H2>{title}</H2>
      {subtitle ? <Sub>{subtitle}</Sub> : null}
    </SectionHead>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <Feature>
      <FeatureTop>
        <FeatureIcon>
          <Icon size={20} aria-hidden />
        </FeatureIcon>
        <div>
          <FeatureTitle>{title}</FeatureTitle>
          <FeatureDesc>{desc}</FeatureDesc>
        </div>
      </FeatureTop>
    </Feature>
  );
}

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <StepCard>
      <StepRow>
        <StepNum>{n}</StepNum>
        <div>
          <StepTitle>{title}</StepTitle>
          <StepDesc>{desc}</StepDesc>
        </div>
      </StepRow>
    </StepCard>
  );
}

function Testimonials() {
  const items = [
    {
      quote:
        "We do one quick daily and it genuinely makes us feel more ‘on the same team’.",
      name: "A & J",
      tag: "2-minute dailies",
    },
    {
      quote:
        "The games are playful but somehow still lead to real conversations—without the awkwardness.",
      name: "M & K",
      tag: "fun → meaningful",
    },
    {
      quote: "It’s like a tiny relationship ritual. We laugh a lot more now.",
      name: "S & T",
      tag: "more laughter",
    },
  ];

  return (
    <TestimonialsGrid>
      {items.map((t) => (
        <TestCard key={t.name}>
          <TestTop>
            <Star size={16} aria-hidden />
            <Pill>{t.tag}</Pill>
          </TestTop>
          <Quote>“{t.quote}”</Quote>
          <Who>— {t.name}</Who>
        </TestCard>
      ))}
    </TestimonialsGrid>
  );
}

export default function LandingPage() {
  return (
    <Page>
      <GlobalStyle />

      <Bg>
        <Blob $pos="top" />
        <Blob $pos="right" />
        <Blob $pos="bottom" />
      </Bg>

      <Header>
        <Container>
          <HeaderRow>
            <Brand href="#top">
              <BrandIcon>
                <Heart size={20} aria-hidden />
              </BrandIcon>
              <BrandText>
                <BrandName>J42</BrandName>
                <BrandSub>Daily couple game</BrandSub>
              </BrandText>
            </Brand>

            <Nav>
              <a href="#features">Features</a>
              <a href="#how">How it works</a>
              <a href="#faq">FAQ</a>
            </Nav>

            <HeaderActions>
              <SmallGhost href="#pricing">Get it</SmallGhost>
              <SmallPrimary href="#pricing">Start now</SmallPrimary>
            </HeaderActions>
          </HeaderRow>
        </Container>
      </Header>

      <Main id="top">
        <Container>
          <HeroGrid>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <BadgeRow>
                  <Badge>
                    <Timer size={14} aria-hidden /> 2-minute daily play
                  </Badge>
                  <Badge>
                    <ShieldCheck size={14} aria-hidden /> Private & couple-only
                  </Badge>
                  <Badge>
                    <Sparkles size={14} aria-hidden /> Playful + meaningful
                  </Badge>
                </BadgeRow>
              </motion.div>

              <H1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
              >
                A tiny daily game that helps couples feel closer.
              </H1>

              <Lead
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                J42 makes connection easy: quick daily questions, fun
                mini-games, and low-pressure prompts that spark real
                conversations—without turning it into a therapy session.
              </Lead>

              <CTArow
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <PrimaryButton href="#pricing">
                  Get Early Access
                  <ArrowRight size={16} aria-hidden />
                </PrimaryButton>
                <SecondaryButton href="#demo">
                  See what you play
                </SecondaryButton>
              </CTArow>

              <CheckRow>
                <CheckItem>
                  <Check size={16} aria-hidden /> No awkward icebreakers
                </CheckItem>
                <CheckItem>
                  <Check size={16} aria-hidden /> Play side-by-side
                </CheckItem>
                <CheckItem>
                  <Check size={16} aria-hidden /> Built for busy schedules
                </CheckItem>
              </CheckRow>
            </div>

            <PhoneWrap
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <PhoneOuter>
                <PhoneInner>
                  <RowBetween>
                    <div
                      style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}
                    >
                      Today’s Daily
                    </div>
                    <Pill>Warm</Pill>
                  </RowBetween>

                  <div style={{ marginTop: 12 }}>
                    <Card>
                      <CardTitle>Would You Rather…</CardTitle>
                      <CardText>
                        Start the day with a warm buttery croissant or a stack
                        of fluffy pancakes?
                      </CardText>
                      <OptionGrid>
                        <OptionPrimary>Croissant vibes 🥐</OptionPrimary>
                        <OptionGhost>Pancake stack 🥞</OptionGhost>
                      </OptionGrid>
                    </Card>

                    <MiniStats>
                      <Stat>
                        <StatLabel>Sparks</StatLabel>
                        <StatValue>3</StatValue>
                      </Stat>
                      <Stat>
                        <StatLabel>Streak</StatLabel>
                        <StatValue>7</StatValue>
                      </Stat>
                      <Stat>
                        <StatLabel>Coins</StatLabel>
                        <StatValue>120</StatValue>
                      </Stat>
                    </MiniStats>

                    <div style={{ marginTop: 14 }}>
                      <Card>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            fontWeight: 900,
                            fontSize: 14,
                          }}
                        >
                          <MessageCircleHeart size={16} aria-hidden /> Reveal
                          together
                        </div>
                        <CardText style={{ marginTop: 6 }}>
                          Answer privately, then reveal and chat about the why.
                        </CardText>
                      </Card>
                    </div>
                  </div>
                </PhoneInner>
              </PhoneOuter>
              <Subtle>Preview UI (swap with real screenshots later)</Subtle>
            </PhoneWrap>
          </HeroGrid>
        </Container>

        <Strip>
          <Container>
            <StripRow>
              <StripText>
                Designed for couples who want more connection with less effort.
              </StripText>
              <StripPills>
                <Pill>2 min/day</Pill>
                <Pill>fun + meaningful</Pill>
                <Pill>no pressure</Pill>
                <Pill>daily ritual</Pill>
              </StripPills>
            </StripRow>
          </Container>
        </Strip>

        <Section id="features">
          <Container>
            <SectionTitle
              kicker="What you’ll actually do"
              title="Games that feel easy—and still go somewhere"
              subtitle="Quick prompts, silly moments, and deeper wins—without forcing heavy talks."
            />

            <Grid3>
              <FeatureCard
                icon={Sparkles}
                title="Daily Dailies"
                desc="A 2-minute question or mini-game that fits even on busy days."
              />
              <FeatureCard
                icon={Wand2}
                title="Play Boosts"
                desc="Optional modifiers to make a session spicier, sweeter, or more chaotic."
              />
              <FeatureCard
                icon={Gift}
                title="Missions & rewards"
                desc="Streaks, achievements, and little rewards that keep it fun."
              />
              <FeatureCard
                icon={MessageCircleHeart}
                title="Reveal together"
                desc="Answer privately, then reveal and talk—so it feels safe and fair."
              />
              <FeatureCard
                icon={ShieldCheck}
                title="Private by design"
                desc="Couple-only space. No public feeds. No weird social pressure."
              />
              <FeatureCard
                icon={Timer}
                title="Built for consistency"
                desc="Short sessions that stack into a habit—like brushing teeth, but cuter."
              />
            </Grid3>
          </Container>
        </Section>

        <Section id="how">
          <Container>
            <SectionTitle
              kicker="Simple loop"
              title="Pick a game, answer, reveal, talk"
              subtitle="A tiny ritual that keeps your relationship ‘warm’—even when life is hectic."
            />
            <GridSteps>
              <Step
                n="1"
                title="Choose today’s prompt"
                desc="Grab a Daily or pick a game mode (Would You Rather, True/False, Draw & Tell, and more)."
              />
              <Step
                n="2"
                title="Answer privately"
                desc="No peeking. Each person answers on their own screen—no influence, no pressure."
              />
              <Step
                n="3"
                title="Reveal + chat"
                desc="See each other’s choices and the “why”—then keep the conversation going naturally."
              />
            </GridSteps>
          </Container>
        </Section>

        <Section id="demo">
          <Container>
            <SectionTitle
              kicker="Examples"
              title="A few prompts you’ll see inside J42"
              subtitle="Balanced: playful enough to start, meaningful enough to matter."
            />
            <DemoGrid>
              {[
                {
                  tag: "Would You Rather",
                  q: "Plan a surprise date together or plan two mini dates and swap?",
                },
                {
                  tag: "True or False",
                  q: "I feel most loved when you notice the small things I do, even if we don’t talk about it.",
                },
                {
                  tag: "Draw & Tell",
                  q: "Sketch a tiny ‘us’ symbol. What does it mean to you?",
                },
                {
                  tag: "Pick a Side",
                  q: "On a free night: cozy couch + snacks or ‘let’s go out for dessert’ energy?",
                },
                {
                  tag: "Warm",
                  q: "What’s one thing I do that makes your day easier—without me realizing?",
                },
                {
                  tag: "Deep",
                  q: "When do you feel most safe with me—and what can I do more of?",
                },
              ].map((item) => (
                <DemoCard key={item.q}>
                  <Pill>{item.tag}</Pill>
                  <DemoQ>{item.q}</DemoQ>
                  <DemoMeta>Answer → Reveal → Talk</DemoMeta>
                </DemoCard>
              ))}
            </DemoGrid>

            <Testimonials />
          </Container>
        </Section>

        <Section id="pricing">
          <Container>
            <PricingGrid>
              <Panel>
                <PanelTitle>Early access</PanelTitle>
                <PanelText>
                  Launching soon. Leave your email to get the first invite +
                  founder perks.
                </PanelText>

                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    // TODO: Replace with your real submission logic
                    alert("Nice! Hook this form up to your email tool.");
                  }}
                >
                  <label htmlFor="email" style={{ display: "none" }}>
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="you@domain.com"
                  />
                  <Submit type="submit">Notify me</Submit>
                </Form>

                <MutedRow>
                  <ShieldCheck size={16} aria-hidden /> No spam. Unsubscribe
                  anytime.
                </MutedRow>

                <Chips>
                  {[
                    "Invite-only beta",
                    "Founder perks",
                    "iOS + Android",
                    "Couple-only space",
                  ].map((x) => (
                    <Chip key={x}>
                      <Check size={16} aria-hidden /> {x}
                    </Chip>
                  ))}
                </Chips>
              </Panel>

              <Panel>
                <PanelTitle>If you prefer store links</PanelTitle>
                <PanelText>
                  Swap these placeholders with your real App Store / Play Store
                  URLs.
                </PanelText>

                <div style={{ marginTop: 16, display: "grid", gap: 10 }}>
                  <LinkButton href="#" $primary>
                    <span>Download on the App Store</span>
                    <ArrowRight size={16} aria-hidden />
                  </LinkButton>
                  <LinkButton href="#">
                    <span>Get it on Google Play</span>
                    <ArrowRight size={16} aria-hidden />
                  </LinkButton>
                </div>

                <DarkPanel>
                  <div style={{ fontWeight: 900, fontSize: 14 }}>
                    Perfect for:
                  </div>
                  <Ul>
                    <Li>
                      <Check size={16} aria-hidden style={{ marginTop: 2 }} />
                      <span>Couples who feel “busy” lately</span>
                    </Li>
                    <Li>
                      <Check size={16} aria-hidden style={{ marginTop: 2 }} />
                      <span>Long-distance or mismatched schedules</span>
                    </Li>
                    <Li>
                      <Check size={16} aria-hidden style={{ marginTop: 2 }} />
                      <span>People who want more laughs + more depth</span>
                    </Li>
                  </Ul>
                </DarkPanel>
              </Panel>
            </PricingGrid>
          </Container>
        </Section>

        <Section id="faq">
          <Container>
            <SectionTitle
              kicker="FAQ"
              title="Quick answers"
              subtitle="Tell me your pricing model + exact game modes and I’ll tailor this copy."
            />

            <FAQGrid>
              <FAQItem>
                <FAQSummary>
                  Is J42 for new couples or long-term couples?
                </FAQSummary>
                <FAQAnswer>
                  Both. Prompts span Light → Warm → Deep so you can keep it
                  playful or go deeper when you feel ready.
                </FAQAnswer>
              </FAQItem>
              <FAQItem>
                <FAQSummary>Do we need to be in the same place?</FAQSummary>
                <FAQAnswer>
                  Nope. You can play side-by-side or from different
                  locations—answers stay private until you reveal.
                </FAQAnswer>
              </FAQItem>
              <FAQItem>
                <FAQSummary>Will this feel awkward?</FAQSummary>
                <FAQAnswer>
                  It’s designed to be low-pressure. Many prompts start fun and
                  naturally open the door to “real talk” if you want it.
                </FAQAnswer>
              </FAQItem>
              <FAQItem>
                <FAQSummary>Is our data private?</FAQSummary>
                <FAQAnswer>
                  J42 is built as a couple-only space. Add your own privacy
                  policy + data handling specifics here when ready.
                </FAQAnswer>
              </FAQItem>
            </FAQGrid>
          </Container>
        </Section>

        <Container>
          <FinalCTA>
            <FinalRow>
              <div>
                <FinalTitle>Make connection a daily habit.</FinalTitle>
                <FinalSub>2 minutes a day. A little more “us”.</FinalSub>
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <PrimaryButton href="#pricing">
                  Get Early Access <ArrowRight size={16} aria-hidden />
                </PrimaryButton>
                <SecondaryButton href="#features">
                  Explore features
                </SecondaryButton>
              </div>
            </FinalRow>
          </FinalCTA>

          <Footer>
            <div>© {new Date().getFullYear()} J42. All rights reserved.</div>
            <FooterLinks>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://chalkboystudios.github.io/j42-privacy-policy/"
              >
                Privacy
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://chalkboystudios.github.io/j42-privacy-policy/"
              >
                Terms
              </a>
              <a href="mailto:officialchalkstudio@gmail.com">Contact</a>
            </FooterLinks>
          </Footer>
        </Container>

        <div style={{ height: 28 }} />
      </Main>
    </Page>
  );
}
