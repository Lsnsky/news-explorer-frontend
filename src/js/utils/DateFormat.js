export const dateFormat = function() {
    const date = new Date();
    let currentDate = date;
    let startSearchDate = new Date(date.getTime() - (7 * 24 * 60 * 60 * 1000));
    currentDate = currentDate.toISOString();
    startSearchDate = startSearchDate.toISOString();
    return {
        currentDate,
        startSearchDate
    };

}