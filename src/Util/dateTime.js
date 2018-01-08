export function UTCToLocal(utcDateString) {
    var date = new Date();
    var offsetms = date.getTimezoneOffset() * 60 * 1000;
    var utcDate = new Date(utcDateString);
    utcDate = new Date(utcDate.valueOf() - offsetms);
    return utcDate.toISOString();
}
export function LocalToUTC(localDateString) {
    var date = new Date();
    var offsetms = date.getTimezoneOffset() * 60 * 1000;
    var localDate = new Date(localDateString);
    localDate = new Date(localDate.valueOf() + offsetms);
    return localDate.toISOString();
}
//# sourceMappingURL=dateTime.js.map