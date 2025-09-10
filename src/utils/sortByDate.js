export const sortByDate = (list) => {
    const sortedList = list.sort((a, b) => new Date(b.date) - new Date(a.date));
    return sortedList;
}