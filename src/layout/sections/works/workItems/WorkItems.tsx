import styled from "styled-components";
import {WorkItem} from "../../works/workItems/WorkItem.tsx";
import img1 from "../../../../assets/images/works/1.jpg"
import {LabelType} from "../../../../layout/sections/works/Works.tsx";
import {FC} from "react";


type WorkItemsPropsType = {
    currentFilterStatus: LabelType
}
type WorkItemsDataType = {
    img: string
    imgWebp: string
    title: string
    type: LabelType
}

export const WorkItems: FC<WorkItemsPropsType> = ({currentFilterStatus}) => {
    const workItemsData: WorkItemsDataType[] = [
        {img: img1, imgWebp: '', title: 'landing', type: 'landing'},
        {img: img1, imgWebp: '', title: 'corporate', type: 'corporate'},
        {img: img1, imgWebp: '', title: 'wordpress', type: 'wordpress'},
        {img: img1, imgWebp: '', title: 'app', type: 'app'},
        {img: img1, imgWebp: '', title: 'store', type: 'store'},
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
        <StyledWorkItems>
            {filteredWorks.map(el => <WorkItem img={el.img} imgWebp={el.imgWebp} title={el.title}/>)}
        </StyledWorkItems>
    );
}

const StyledWorkItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -20px;
  @media ${({theme}) => theme.media.mobile} {
    margin-left: -15px;
  }
`