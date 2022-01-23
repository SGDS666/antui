import { useState } from 'react';
import style from './demo1.module.scss'
import axios from 'axios';
const Demo1 = () => {
    const [moves, setMove] = useState([])

    const getMove = async () => {
        const {data:{movieList}} = await axios.get('/ajax/movieOnInfoList?token=&optimus_uuid=689C1E207C5C11EC8AB767F1762EF471484E9356BE7544499F76ABA7936B547C&optimus_risk_level=71&optimus_code=50')
        setMove(movieList)

    }
    return (
        <div>
            <button className={style.but} onClick={getMove}>点我刷新</button>
            <ul className={style.list}>
                {moves.map(({id,nm,rt})=><li key={id} className={style.lis}>电影名字:{nm} 上线日期:{rt}</li>)}
            </ul>
        </div>
    );
}

export default Demo1;
