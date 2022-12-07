import { dateMax, dateMin } from "./calculDate";

export function minDateInArray(array) {
    let all = array?.length;
    if (all ===0) return
    let minimum = array[all-1]?.date.date;
    while (all--){
        if(dateMin(array[all]?.date.date,minimum)){
            minimum = array[all]?.date.date
        }
    }
    return minimum;
}


export function maxDateInArray(array) {
    let all = array?.length;
    if (all ===0) return
    let maximum = array[all-1]?.date.date;
    while (all--){
        if(dateMax(array[all]?.date.date,maximum)){
            maximum = array[all]?.date.date
        }
    }
    return maximum;
}
