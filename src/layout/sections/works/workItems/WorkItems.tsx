import {WorkItem} from "../../works/workItems/WorkItem.tsx";
import img1 from "../../../../assets/images/works/1.jpg"
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
        {id: 1, img: img1, imgWebp: '', title: 'landing', type: 'landing'},
        {id: 2, img: img1, imgWebp: '', title: 'corporate', type: 'corporate'},
        {id: 3, img: img1, imgWebp: '', title: 'wordpress', type: 'wordpress'},
        {id: 4, img: img1, imgWebp: '', title: 'app', type: 'app'},
        {id: 5, img: img1, imgWebp: '', title: 'store', type: 'store'},
        {id: 6, img: img1, imgWebp: '', title: 'store', type: 'store'},
        {id: 7, img: img1, imgWebp: '', title: 'store', type: 'store'},
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
