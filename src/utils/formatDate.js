export const formatDate = (dateString, locale = "en-US") => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format(date);
}