export default {
  dateConvertFullTimeString(timestamp, lang = 'en') {
    if (timestamp) {
      const date = new Date(timestamp);
      return new Intl.DateTimeFormat(lang, { dateStyle: 'long', timeStyle: 'medium' }).format(
        date,
      );
    }
    return new Intl.DateTimeFormat(lang, { dateStyle: 'long', timeStyle: 'medium' }).format(
      new Date(),
    );
  },
};
