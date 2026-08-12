import styled from "styled-components";

export const SkillsIntro = styled.div`
  margin-bottom: 1rem;
  line-height: 1.5rem;
`;

export const SkillsGroup = styled.div`
  margin-bottom: 0.875rem;

  .group {
    font-weight: 700;
    margin-bottom: 0.275rem;
  }

  .items {
    color: ${({ theme }) => theme.colors?.text[200]};
    line-height: 1.5rem;
    max-width: 620px;
  }
`;
