import styled from "styled-components";

export const Heading = styled.h2`
  color: ${({theme}) => theme.colorMain};
  font-weight: ${({theme}) => theme.fontMedium};
  font-size: ${({small}) => small ? '1.4rem' : '1.8rem'};
  margin-top: 0;
  margin-bottom: 20px;
`;