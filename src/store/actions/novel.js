import { GET_TUIJIAN_NOVEL_LIST } from '../types/novel'
import { createAction } from 'redux-actions'

export const tuijianNovelList = createAction(GET_TUIJIAN_NOVEL_LIST, ()=>{
    return new Promise(resolve => {
        async function request () {
            let d = await wepy.request('https://www.apiopen.top/novelApi');
            console.log(d);
         }
      })
});