import styled, {css} from "styled-components";

export const ContentWrapper = styled.div`
  position: relative;
  width: 67%;
  height: 100%;
  ${({homepage}) => !homepage && css`
    padding: 60px 80px;
    overflow: auto;
  `}
  ${({gallery}) => gallery && css`
    padding: 30px;
  `}
`;