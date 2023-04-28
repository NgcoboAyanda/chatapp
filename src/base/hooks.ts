import { TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import type { RootState, AppDispatch } from './store'

//function to convert timestamp to 24 hour time notation
export const convertTimestampTo24Hour = (timestamp: number): string => {
    const date = new Date(timestamp)
    const hours = date.getHours()
    let minutes = date.getMinutes()
    const seconds = date.getSeconds()
    //if mintes are less than 10, we want to add 0 as a prefix
    return `${hours}:${minutes<10?`0${minutes}`: minutes}`
}


//Use throughout app instead of plain 'useDispatch' and 'useSelector'
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector