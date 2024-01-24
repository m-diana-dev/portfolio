import styled from "styled-components";
import {Container} from "../../../components/Container.ts";
import {SectionSubtitle} from "../../../components/SectionSubtitle.ts";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {WorkItems} from "../works/workItems/WorkItems.tsx";
import {Decor} from "../../../components/Decor.ts";
import {Icon} from "../../../components/icon/Icon.tsx";

export const Works = () => {
    const TabsItems = [
        {title: 'Landing Pages', label: 'landing'},
        {title: 'Интернет-магазины', label: 'store'},
        {title: 'Корпоративные сайты', label: 'corporate'},
        {title: 'WordPress', label: 'wordpress'},
        {title: 'Web-приложения', label: 'app'},
    ]

    return (
        <StyledWorks>
            <Decor>
                <Icon id={'decor4.4'} width={'128'} height={'112'} viewBox={'0 0 120 120'}/>
                <Icon id={'decor6.1'} width={'174'} height={'174'} viewBox={'0 0 150 150'}/>
            </Decor>
            <Container>
                <SectionSubtitle>Проекты</SectionSubtitle>
                <SectionTitle>Некоторые мои работы</SectionTitle>
                <Tabs>
                    {TabsItems.map(el => <TabsItem><TabsLink href="">{el.title}</TabsLink></TabsItem>)}
                </Tabs>
                <WorkItems/>
            </Container>
        </StyledWorks>
    );
}

const StyledWorks = styled.section`
  position: relative;
  ${Decor}{
    z-index: 0;
    svg:nth-child(1){
      top: 50px;
      right: 100px;
      @media screen and (max-width: 1200px){
        width: 90px;
        height: 80px;
      }
      @media ${({theme}) => theme.media.mobile} {
        display: none;
      }
    }
    svg:nth-child(2){
      bottom: -100px;
      right: 45%;
      @media screen and (max-width: 1200px){
        width: 140px;
        height: 140px;
        bottom: -80px;
      }
      @media ${({theme}) => theme.media.mobile} {
        width: 120px;
        height: 120px;
        bottom: -70px;
        right: 30%;
      }
    }
  }
  ${SectionTitle}{
    margin-bottom: 40px;
    @media ${({theme}) => theme.media.tablet} {
      margin-bottom: 30px;
    }
    @media ${({theme}) => theme.media.mobile} {
      margin-bottom: 20px;
    }
  }
`

const Tabs = styled.ul`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  @media ${({theme}) => theme.media.tablet} {
    padding-bottom: 5px;
    overflow-x: auto;
    margin-bottom: 25px;
    margin-right: -20px;
    margin-left: -20px;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media ${({theme}) => theme.media.mobile} {
    margin-bottom: 15px;
  }
`
const TabsItem = styled.li`
  font-size: 0.9rem;
  color: ${({theme}) => theme.colors.title};
  line-height: 140%;
  white-space: nowrap;
  @media ${({theme}) => theme.media.mobile} {
    font-size: 0.8rem;
  }

  &:not(:last-child) {
    margin-right: 24px;
    @media ${({theme}) => theme.media.tablet} {
      margin-right: 15px;
    }
  }
`
const TabsLink = styled.a`
  padding-bottom: 4px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 3px;
    border-radius: 2px;
    background-color: ${({theme}) => theme.colors.colorMain};
    transition: all .3s;
  }

  @media (any-hover: hover) {
    &:hover {
      &::before {
        width: 100%;
      }
    }
  }
`