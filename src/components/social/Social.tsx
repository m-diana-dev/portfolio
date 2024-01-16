import {FC} from "react";
import {Icon} from "../../components/icon/Icon.tsx";

type SocialPropsType = {
    items: string[]
}
export const Social: FC<SocialPropsType> = ({items}) => {
    return (
        <div>
            {items.map(el => <a><Icon id={el} width={'30'} height={'30'} viewBox={'0 0 50 50'}/></a>)}
        </div>
    );
}