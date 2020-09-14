import styled from "styled-components";

export const Paragraph = styled.p`
  color: ${({theme}) => theme.colorTextDark};
  line-height: 1.5;
  font-size: 1rem;
  font-weight: ${({theme}) => theme.fontRegular};
  margin-bottom: 15px;
  &:first-of-type{
    margin-top: 0;
  }
  
`;