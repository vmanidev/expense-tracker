export const formatDate = (dateString, locale = "en-US") => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format(date);
}

export const sortByDate = (list) => {
    const sortedList = list.sort((a, b) => new Date(b.date) - new Date(a.date));
    return sortedList;
}