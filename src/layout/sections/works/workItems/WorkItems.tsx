import styled from "styled-components";
import {WorkItem} from "../../works/workItems/WorkItem.tsx";
import img1 from "../../../../assets/images/works/1.jpg"


export const WorkItems = () => {
    const WorkItemsArr = [
        {img: img1, imgWebp: '', title: 'title 1'},
        {img: img1, imgWebp: '', title: 'title 2'},
        {img: img1, imgWebp: '', title: 'title 3'},
        {img: img1, imgWebp: '', title: 'title 4'},
        {img: img1, imgWebp: '', title: 'title 5'},
    ]
    return (
        <StyledWorkItems>
            {WorkItemsArr.map(el=><WorkItem img={el.img} imgWebp={el.imgWebp} title={el.title}/>)}
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