import {Container} from "../../../components/Container.ts";
import {FlexWrapp} from "../../../components/FlexWrapp.ts";
import {SectionSubtitle} from "../../../components/SectionSubtitle.ts";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {SectionText} from "../../../components/SectionText.ts";
import {Button} from "../../../components/button/Button.ts";
import {Social} from "../../../components/social/Social.tsx";
import {Decor} from "../../../components/Decor.ts";
import {Icon} from "../../../components/icon/Icon.tsx";
import {S} from './Contacts_Styles.ts'
import {FC} from "react";

export const Contacts: FC = () => {
    return (
        <S.Contacts id='contacts'>
            <Container>
                <Decor>
                    <Icon id={'decor5.2'} width={'142'} height={'142'} viewBox={'0 0 140 140'}/>
                </Decor>
                <FlexWrapp justify={'space-between'} align={'flex-start'}>
                    <S.ContactsContent>
                        <SectionSubtitle>Контакты</SectionSubtitle>
                        <SectionTitle>Готовы начать свой проект?</SectionTitle>
                        <SectionText>
                            Чтобы связаться со мной, напишите мне в любой из мессенджеров или на почту, которые
                            представлены ниже, либо заполните форму на сайте. Я отвечу Вам в ближайщее время!
                        </SectionText>
                        <Social items={['telegram', 'whatsapp', 'mail2']}/>
                    </S.ContactsContent>
                    <S.ContactsForm>
                        <S.Field placeholder={'Имя'}/>
                        <S.Field placeholder={'Телефон'}/>
                        <S.Field placeholder={'Сообщение'} as={'textarea'}/>
                        <FlexWrapp align={'center'} wrap={'wrap'}>
                            <Button>Отправить</Button>
                            <S.FormNote>Отправляя форму, Вы соглашаетесь с <S.FormLink>политикой
                                конфиденциальности</S.FormLink></S.FormNote>
                        </FlexWrapp>
                    </S.ContactsForm>
                </FlexWrapp>
            </Container>
        </S.Contacts>
    );
}