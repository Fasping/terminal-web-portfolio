import styled from "styled-components";

export const ExpIntro = styled.div`
  margin-bottom: 1rem;
  line-height: 1.5rem;
`;

export const ExpList = styled.div`
  margin-bottom: 1.25rem;

  .role {
    font-weight: 700;
    margin-bottom: 0.275rem;
  }

  .company {
    color: ${({ theme }) => theme.colors?.primary};
    margin-bottom: 0.275rem;
  }

  .meta {
    color: ${({ theme }) => theme.colors?.text[200]};
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }

  .desc {
    color: ${({ theme }) => theme.colors?.text[200]};
    text-align: justify;
    line-height: 1.5rem;
    max-width: 620px;
  }
`;
