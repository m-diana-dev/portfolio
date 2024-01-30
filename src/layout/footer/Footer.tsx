import styled from "styled-components";
import {Container} from "../../components/Container.ts";
import {FlexWrapp} from "../../components/FlexWrapp.ts";
import {Social, SocialList} from "../../components/social/Social.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapp justify={'space-between'}>
                    <FooterText>© 2022 devDiana, Все права защищены</FooterText>
                    <Social items={['github', 'linkedin', 'codewars']}/>
                    <FooterText href={'#'} as={'a'}>Политика конфиденциальности</FooterText>
                </FlexWrapp>
            </Container>
        </StyledFooter>
    );
}

const StyledFooter = styled.footer`
  padding: 40px 0;
  background-color: ${({theme})=>theme.colors.secondaryBg};
  @media ${({theme}) => theme.media.mobile} {
    padding: 35px 0 25px;
  }
  ${FlexWrapp}{
    @media ${({theme}) => theme.media.mobile} {
     flex-direction: column-reverse;
    }
  }
  ${SocialList}{
    @media ${({theme}) => theme.media.mobile} {
      order: 1;
      margin-bottom: 10px;
    }
  }
`

const FooterText = styled.small`
  color: ${({theme})=>theme.colors.title};
  font-size: 14px;
  line-height: 100%;
  @media ${({theme}) => theme.media.mobile} {
    margin-bottom: 10px;
  }
`