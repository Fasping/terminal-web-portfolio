import styled from "styled-components";

/**
 * Page background: the theme body colour, one shade deeper, with a soft glow
 * of the primary colour at the top so the window has something to sit on.
 */
export const PageWrapper = styled.div`
  min-height: 100vh;
  min-height: 100dvh;
  padding: clamp(0.5rem, 2.5vw, 2rem);
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) =>
    `color-mix(in srgb, ${theme.colors?.body} 86%, #000 14%)`};
  background-image: ${({ theme }) =>
    `radial-gradient(90% 70% at 50% -10%, color-mix(in srgb, ${theme.colors?.primary} 14%, transparent), transparent 70%)`};
  background-repeat: no-repeat;
`;

export const Window = styled.main`
  width: 100%;
  max-width: 1180px;
  height: min(88dvh, 880px);

  display: flex;
  flex-direction: column;
  overflow: hidden;

  border-radius: 12px;
  border: 1px solid
    ${({ theme }) => `color-mix(in srgb, ${theme.colors?.text[300]} 45%, transparent)`};
  background-color: ${({ theme }) => theme.colors?.body};
  box-shadow:
    inset 0 1px 0 color-mix(in srgb, #fff 7%, transparent),
    0 24px 60px -18px rgba(0, 0, 0, 0.6);

  @media (max-width: 550px) {
    height: min(94dvh, 100%);
    border-radius: 10px;
  }
`;

export const TitleBar = styled.header`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.6rem 0.85rem;

  background-color: ${({ theme }) =>
    `color-mix(in srgb, ${theme.colors?.body} 88%, #fff 12%)`};
  border-bottom: 1px solid
    ${({ theme }) => `color-mix(in srgb, ${theme.colors?.text[300]} 35%, transparent)`};
`;

export const TrafficLights = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;

  span {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
  }

  span:nth-child(1) {
    background-color: #ff5f57;
  }
  span:nth-child(2) {
    background-color: #febc2e;
  }
  span:nth-child(3) {
    background-color: #28c840;
  }
`;

export const WindowTitle = styled.div`
  flex: 1;
  text-align: center;
  font-size: 0.8rem;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors?.text[300]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

/** Same width as the traffic lights, so the title stays optically centred. */
export const TitleBarSpacer = styled.div`
  width: 3.25rem;
  flex-shrink: 0;

  @media (max-width: 550px) {
    display: none;
  }
`;

export const WindowBody = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
`;
