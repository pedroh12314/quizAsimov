import styled from 'styled-components';

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  background-color: #00000099;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px; 
  p {
    color: white;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`;

export default function Footer(props) {
  return (
    <FooterWrapper {...props}>
      <p>
        Este quiz foi feito pensando em ver o quanto cada um sabe sobre a <b>Asimov Jr.</b>
      </p>
    </FooterWrapper>
  );
}
