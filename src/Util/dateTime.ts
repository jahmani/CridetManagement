export function UTCToLocal(utcDateString:string){
    const date = new Date()
    var offsetms = date.getTimezoneOffset() * 60 * 1000;
    let utcDate = new Date(utcDateString);
    utcDate = new Date(utcDate.valueOf() - offsetms);
    return utcDate.toISOString()
}
export function LocalToUTC(localDateString:string){
    const date = new Date()
    var offsetms = date.getTimezoneOffset() * 60 * 1000;
    let localDate = new Date(localDateString);
    localDate = new Date(localDate.valueOf() + offsetms);
    return localDate.toISOString()
}