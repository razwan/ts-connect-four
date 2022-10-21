import styled from 'styled-components';

interface IHeadingWrapper {
  color?: string;
}

export const LargeHeading = styled.h1<IHeadingWrapper>`
  color: ${(props) => props.color};
  font-size: 3.5rem;
  font-weight: 700;
  margin: 0px;
  `;
  
  export const MediumHeading = styled.h2<IHeadingWrapper>`
  color: ${(props) => props.color};
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0px;
  `;
  
  export const SmallHeading = styled.h3<IHeadingWrapper>`
  color: ${(props) => props.color};
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0px;
  `;
  
  export const XSmallHeading = styled.h4<IHeadingWrapper>`
  color: ${(props) => props.color};
  font-size: 1rem;
  font-weight: 700;
  margin: 0px;
`;