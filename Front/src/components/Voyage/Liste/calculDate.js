export const dateMin = (date1,date2) => {
    const firstDate = new Date(date1)
    const secondDate = new Date(date2)
    return firstDate < secondDate
}

export const dateMax = (date1,date2) => {
    const firstDate = new Date(date1)
    const secondDate = new Date(date2)
    return firstDate > secondDate
}

export const dateEgal = (date1,date2) => {
    const firstDate = new Date(date1)
    const secondDate = new Date(date2)
    return firstDate.getTime() == secondDate.getTime()
}
