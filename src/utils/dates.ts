export function convertDateToTimestamp(dateString: string): number {
    let date = new Date(dateString);
    let timestamp = date.getTime();

    return timestamp;
}