export const formatDate = (dateString, locale = "en-US") => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(locale, { dateStyle: "medium" }).format(date);
};

export const sortByDate = (list) => {
    const sortedList = list.sort((a, b) => new Date(b.date) - new Date(a.date));
    return sortedList;
};

export const transformDate = (dateString) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const currentDate = new Date(dateString);

    if (currentDate.getMonth() === today.getMonth() && currentDate.getFullYear() === today.getFullYear()) {
        if (currentDate.getDate() === today.getDate()) return "Today";
        else if (currentDate.getDate() === yesterday.getDate()) return "Yesterday";
        else return formatDate(dateString);
    } else {
        return formatDate(dateString);
    }
};
