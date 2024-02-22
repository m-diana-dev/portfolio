import {Container} from "../../../components/Container.ts";
import {SectionSubtitle} from "../../../components/SectionSubtitle.ts";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {WorkItems} from "../works/workItems/WorkItems.tsx";
import {Decor} from "../../../components/Decor.ts";
import {Icon} from "../../../components/icon/Icon.tsx";
import {useState} from "react";
import {S} from './Works_Styles.ts'

export type LabelType = 'landing' | 'store' | 'corporate' | 'wordpress' | 'app'
export const Works = () => {
    const TabsItems: { title: string, label: LabelType }[] = [
        {title: 'Landing Pages', label: 'landing'},
        {title: 'Интернет-магазины', label: 'store'},
        {title: 'Корпоративные сайты', label: 'corporate'},
        {title: 'WordPress', label: 'wordpress'},
        {title: 'Web-приложения', label: 'app'},
    ]

    const [currentFilterStatus, setCurrentFilterStatus] = useState<LabelType>('landing')

    const ChangeFilterStatus = (label: LabelType) => setCurrentFilterStatus(label)

    return (
        <S.Works id='projects'>
                <Decor>
                    <Icon id={'decor4.4'} width={'128'} height={'112'} viewBox={'0 0 120 120'}/>
                    <Icon id={'decor6.1'} width={'174'} height={'174'} viewBox={'0 0 150 150'}/>
                </Decor>
            <Container>
                <SectionSubtitle>Проекты</SectionSubtitle>
                <SectionTitle>Некоторые мои работы</SectionTitle>
                <S.Tabs>
                    {TabsItems.map((el, index) => <S.TabsItem key={index}>
                        <S.TabsLink $active={currentFilterStatus === el.label}
                                  onClick={() => ChangeFilterStatus(el.label)}>{el.title}</S.TabsLink>
                    </S.TabsItem>)}
                </S.Tabs>
                <WorkItems currentFilterStatus={currentFilterStatus}/>
            </Container>
        </S.Works>
    );
}