import {Container} from "../../components/Container.ts";
import {S} from './ErrorPage_Styles.ts'
import {FlexWrapp} from "../../components/FlexWrapp.ts";
import {Icon} from "../../components/icon/Icon.tsx";
import {Decor} from "../../components/Decor.ts";

export const ErrorPage = () => {
    return (
        <S.ErrorPage>
            <Decor>
                <Icon id={'decor3.3'} width={'253'} height={'253'} viewBox={'0 0 240 240'}/>
                <Icon id={'decor6.3'} width={'174'} height={'174'} viewBox={'0 0 174 174'}/>
            </Decor>
            <Container>
                <FlexWrapp $align={'center'} $justify={'center'} $direction={'column'}>
                    <S.ErrorPageStatus>404</S.ErrorPageStatus>
                    <S.ErrorPageTitle>Ой...</S.ErrorPageTitle>
                    <S.ErrorPageSubtitle>Такой страницы не существует :(</S.ErrorPageSubtitle>
                </FlexWrapp>
            </Container>
        </S.ErrorPage>
    );
};

