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
import {FC, memo} from "react";
import emailjs from '@emailjs/browser';
import {FieldValues, useForm} from "react-hook-form";
import {Link} from "react-router-dom";

export const Contacts: FC = memo(() => {
    const {
        register,
        reset,
        formState: {
            errors
        },
        handleSubmit
    } = useForm({
        mode: "onBlur"
    })

    const sendEmail = (formData: FieldValues) => {
        emailjs
            .send("service_6wn5ym2", "template_jbzaw0t", formData, "2W2y56b7dgQV4gbmH")
        reset();
    };

    return (
        <S.Contacts id='contacts'>
            <Container>
                <Decor>
                    <Icon id={'decor5.2'} width={'142'} height={'142'} viewBox={'0 0 140 140'}/>
                </Decor>
                <FlexWrapp $justify={'space-between'} $align={'flex-start'}>
                    <S.ContactsContent>
                        <SectionSubtitle>Контакты</SectionSubtitle>
                        <SectionTitle>Готовы начать свой проект?</SectionTitle>
                        <SectionText>
                            Чтобы связаться со мной, напишите мне в любой из мессенджеров или на почту, которые
                            представлены ниже, либо заполните форму на сайте. Я отвечу Вам в ближайщее время!
                        </SectionText>
                        <Social items={[
                            {id: 'telegram', link: 'tg://resolve?domain=dev_diana'},
                            {id: 'whatsapp', link: 'https://wa.me/79283637910'},
                            {id: 'mail2', link: 'mailto:m.diana.dev@gmail.com'},
                        ]}/>
                    </S.ContactsContent>
                    <S.ContactsForm onSubmit={handleSubmit(sendEmail)}>
                        <S.Field {...register('name',
                            {
                                required: 'обязательное поле',
                                minLength: {value: 2, message: 'минимальная длина - 2 символов'}
                            })} placeholder={'Имя'}/>
                        {errors?.name &&
                            <S.FormError>{errors.name.message && errors.name.message.toString()}</S.FormError>}
                        <S.Field {...register('number',
                            {
                                required: 'обязательное поле',
                                pattern: {
                                    value: /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/,
                                    message: 'некорректный номер'
                                }
                            })} placeholder={'Телефон'}/>
                        {errors?.number &&
                            <S.FormError>{errors.number.message && errors.number.message.toString()}</S.FormError>}
                        <S.Field {...register('message',
                            {required: 'обязательное поле'})} placeholder={'Сообщение'} as={'textarea'}/>
                        {errors?.message &&
                            <S.FormError>{errors.message.message && errors.message.message.toString()}</S.FormError>}
                        <FlexWrapp $align={'center'} $wrap={'wrap'}>
                            <Button type='submit'>Отправить</Button>
                            <S.FormNote>Отправляя форму, Вы соглашаетесь с <S.FormLink><Link to={'/policy'}>политикой
                                конфиденциальности</Link></S.FormLink></S.FormNote>
                        </FlexWrapp>
                    </S.ContactsForm>
                </FlexWrapp>
            </Container>
        </S.Contacts>
    );
})