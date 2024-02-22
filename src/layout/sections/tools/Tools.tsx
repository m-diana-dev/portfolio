import {Icon} from "../../../components/icon/Icon.tsx";
import {S} from './Tools_Styled.ts'
import {FC} from "react";

export const Tools: FC = () => {
    const toolsItems = [
        {id: 'html', box: '0 0 20 20'},
        {id: 'javascript', box: '0 0 24 24'},
        {id: 'react', box: '0 0 27 24'},
        {id: 'css', box: '0 0 31 31'},
        {id: 'typescript', box: '0 0 24 24'},
        {id: 'redux', box: '0 0 24 24'},
    ]
    return (
        <S.Tools>
            <S.ToolsItems>
                {toolsItems.map((el, index) => <Icon key={index} id={el.id} height={'80'} width={'80'} viewBox={el.box}/>)}
            </S.ToolsItems>
            <S.ToolsItems>
                {toolsItems.map((el, index) => <Icon key={index} id={el.id} height={'80'} width={'80'} viewBox={el.box}/>)}
            </S.ToolsItems>
        </S.Tools>
    );
}
