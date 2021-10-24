import styled from 'styled-components';

/* eslint-disable-next-line */
export interface StyleguideProps {}

const StyledStyleguide = styled.div`
  color: pink;
`;

export function Styleguide(props: StyleguideProps) {
  return (
    <StyledStyleguide>
      <h1>Welcome to Styleguide!</h1>
    </StyledStyleguide>
  );
}

export default Styleguide;
