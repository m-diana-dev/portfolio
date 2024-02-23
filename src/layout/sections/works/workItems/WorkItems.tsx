import {WorkItem} from "../../works/workItems/WorkItem.tsx";
import img1 from "../../../../assets/images/works/1.jpg"
import img2 from "../../../../assets/images/works/2.jpg"
import img3 from "../../../../assets/images/works/3.jpg"
import img4 from "../../../../assets/images/works/4.jpg"
import img5 from "../../../../assets/images/works/5.jpg"
import img6 from "../../../../assets/images/works/6.jpg"
import img7 from "../../../../assets/images/works/7.jpg"
import img8 from "../../../../assets/images/works/8.jpg"
import img9 from "../../../../assets/images/works/9.jpg"
import img10 from "../../../../assets/images/works/10.jpg"
import imgWebp1 from "../../../../assets/images/works/1.webp"
import imgWebp2 from "../../../../assets/images/works/2.webp"
import imgWebp3 from "../../../../assets/images/works/3.webp"
import imgWebp4 from "../../../../assets/images/works/4.webp"
import imgWebp5 from "../../../../assets/images/works/5.webp"
import imgWebp6 from "../../../../assets/images/works/6.webp"
import imgWebp7 from "../../../../assets/images/works/7.webp"
import imgWebp8 from "../../../../assets/images/works/8.webp"
import imgWebp9 from "../../../../assets/images/works/9.webp"
import imgWebp10 from "../../../../assets/images/works/10.webp"
import {LabelType} from "../../../../layout/sections/works/Works.tsx";
import {FC} from "react";
import {AnimatePresence} from "framer-motion";
import {S} from './WorkItems_Styles.ts'


type WorkItemsPropsType = {
    currentFilterStatus: LabelType
}
type WorkItemsDataType = {
    id: number
    img: string
    imgWebp: string
    title: string
    type: LabelType
}

export const WorkItems: FC<WorkItemsPropsType> = ({currentFilterStatus}) => {
    const workItemsData: WorkItemsDataType[] = [
        {id: 1, img: img4, imgWebp: imgWebp4, title: 'RealGame', type: 'landing'},
        {id: 2, img: img7, imgWebp: imgWebp7, title: 'DreamKidsClub', type: 'corporate'},
        {id: 3, img: img8, imgWebp: imgWebp8, title: 'Нянюшка', type: 'corporate'},
        {id: 4, img: img9, imgWebp: imgWebp9, title: 'Alummax', type: 'corporate'},
        {id: 5, img: img1, imgWebp: imgWebp1, title: 'GreenHouse', type: 'wordpress'},
        {id: 6, img: img2, imgWebp: imgWebp2, title: 'Integra', type: 'store'},
        {id: 7, img: img3, imgWebp: imgWebp3, title: 'Gerkules', type: 'store'},
        {id: 8, img: img5, imgWebp: imgWebp5, title: 'Creative Group', type: 'landing'},
        {id: 9, img: img6, imgWebp: imgWebp6, title: 'Выкуп авто', type: 'landing'},
        {id: 10, img: img10, imgWebp: imgWebp10, title: 'Liko', type: 'wordpress'},
    ]

    let filteredWorks = workItemsData.filter(el => el.type === 'landing')

    if (currentFilterStatus === 'landing') {
        filteredWorks = workItemsData.filter(el => el.type === 'landing')
    } else if (currentFilterStatus === 'corporate') {
        filteredWorks = workItemsData.filter(el => el.type === 'corporate')
    } else if (currentFilterStatus === 'wordpress') {
        filteredWorks = workItemsData.filter(el => el.type === 'wordpress')
    } else if (currentFilterStatus === 'app') {
        filteredWorks = workItemsData.filter(el => el.type === 'app')
    } else {
        filteredWorks = workItemsData.filter(el => el.type === 'store')
    }

    return (
        <S.WorkItems>
            <AnimatePresence>
                {filteredWorks.map(el => <WorkItem layout={true}
                                                   initial={{ opacity: 0, rotate: 30 }}
                                                   animate={{ opacity: 1, rotate: 0 }}
                                                   transition={{ duration: 0.4 }}
                                                   key={el.id} img={el.img} imgWebp={el.imgWebp} title={el.title}/>)}
            </AnimatePresence>
        </S.WorkItems>
    );
}
