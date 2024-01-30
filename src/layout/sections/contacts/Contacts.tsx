import styled from "styled-components";
import {Container} from "../../../components/Container.ts";
import {FlexWrapp} from "../../../components/FlexWrapp.ts";
import {SectionSubtitle} from "../../../components/SectionSubtitle.ts";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {SectionText} from "../../../components/SectionText.ts";
import {Button, StyledButton} from "../../../components/button/Button.tsx";
import {Social} from "../../../components/social/Social.tsx";
import {Decor} from "../../../components/Decor.ts";
import {Icon} from "../../../components/icon/Icon.tsx";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <Decor>
                    <Icon id={'decor5.2'} width={'142'} height={'142'} viewBox={'0 0 140 140'}/>
                </Decor>
                <FlexWrapp justify={'space-between'} align={'flex-start'}>
                    <ContactsContent>
                        <SectionSubtitle>Контакты</SectionSubtitle>
                        <SectionTitle>Готовы начать свой проект?</SectionTitle>
                        <SectionText>
                            Чтобы связаться со мной, напишите мне в любой из мессенджеров или на почту, которые представлены ниже, либо заполните форму на сайте. Я отвечу Вам в ближайщее время!
                        </SectionText>
                        <Social items={['telegram', 'whatsapp', 'mail2']}/>
                    </ContactsContent>
                    <ContactsForm>
                        <Field placeholder={'Имя'}/>
                        <Field placeholder={'Телефон'}/>
                        <Field placeholder={'Сообщение'} as={'textarea'}/>
                        <FlexWrapp align={'center'} wrap={'wrap'}>
                            <Button>Отправить</Button>
                            <FormNote>Отправляя форму, Вы соглашаетесь с политикой конфиденциальности</FormNote>
                        </FlexWrapp>
                    </ContactsForm>
                </FlexWrapp>
            </Container>
        </StyledContacts>
    );
}

const StyledContacts = styled.section`
  ${SectionTitle} {
    margin-bottom: 15px;
  }

  ${SectionText} {
    margin-bottom: 20px;
    @media ${({theme}) => theme.media.mobile} {
      margin-bottom: 10px;
    }
  }

  ${Decor} {
    z-index: 0;
    overflow: visible;

    svg:nth-child(1) {
      transform: rotate(180deg);
      bottom: -100px;
      left: 25%;
      @media screen and (max-width: 1200px) {
        width: 120px;
        height: 120px;
      }
      @media ${({theme}) => theme.media.tablet} {
        width: 100px;
        height: 100px;
        bottom: -60px;
      }
      @media ${({theme}) => theme.media.mobile} {
        width: 80px;
        height: 80px;
        bottom: -100px;
        left: auto;
        right: 70px;
      }
      @media ${({theme}) => theme.media.mobileSmall} {
        right: 20px;
      }
    }
  }

  ${Container}{
    >${FlexWrapp} {
      @media ${({theme}) => theme.media.mobile} {
        flex-direction: column;
      }
    }
  }
`

const ContactsContent = styled.div`
  max-width: 525px;
  width: 100%;
  margin-right: 50px;
  @media ${({theme}) => theme.media.mobile} {
    margin-bottom: 25px;
    margin-right: 0;
    max-width: 100%;
  }
`
const ContactsForm = styled.form`
  max-width: 600px;
  width: 100%;
  @media ${({theme}) => theme.media.mobile} {
    max-width: 100%;
  }
  textarea{
    resize: none;
    height: 140px;
  }
  ${StyledButton}{
    @media ${({theme}) => theme.media.mobileSmall} {
      width: 100%;
      margin-bottom: 10px;
    }
  }
`
const Field = styled.input`
  width: 100%;
  padding: 12px 0px;
  border-bottom: 1px solid ${({theme}) => theme.colors.title};
  font-size: 18px;
  color: ${({theme}) => theme.colors.title};
  font-weight: 500;
  line-height: 140%;

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  & + ${FlexWrapp} {
    margin-top: 15px;
  }

  &::placeholder {
    color: rgba(${({theme}) => theme.colors.title}, 0.80);
  }

  &:focus-visible {
    outline: 1px solid ${({theme}) => theme.colors.title};
  }

  @media ${({theme}) => theme.media.tablet} {
    font-size: 16px;
  }
`
const FormNote = styled.small`
  color: rgba(${({theme}) => theme.colors.title}, 0.80);
  font-size: 14px;
  line-height: 100%;
  max-width: calc(100% - 160px);
  text-align: left;
  margin-left: 20px;
  @media ${({theme}) => theme.media.mobileSmall} {
    max-width: 100%;
    margin-left: 0;
    font-size: 12px;
  }
`