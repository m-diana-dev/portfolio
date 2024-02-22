import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {SectionText} from "../../../components/SectionText.ts";
import {Decor} from "../../../components/Decor.ts";
import {Container} from "../../../components/Container.ts";
import {FlexWrapp} from "../../../components/FlexWrapp.ts";
import {Button} from "../../../components/button/Button.ts";


const Contacts = styled.section`
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

  ${Container} {
    > ${FlexWrapp} {
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

  textarea {
    resize: none;
    height: 140px;
  }

  ${Button} {
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
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active  {
    box-shadow: 0 0 0 30px #fff inset !important;
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
const FormLink = styled.a`
  cursor: pointer;
  transition: all .3s;
  @media (any-hover: hover) {
    &:hover {
      color: ${({theme}) => theme.colors.colorMain};
    }
  }
`
const FormError = styled.div`
  //position: absolute;
  //bottom: -15px;
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  color: #c40a0a;
`

export const S = {
    Contacts,
    ContactsContent,
    ContactsForm,
    Field,
    FormNote,
    FormLink,
    FormError,
}