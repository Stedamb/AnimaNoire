// dateUtils.js
export const getDate = (dateString: string) => {
    const date = new Date(dateString);
    const days = ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"];
    const months = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];

    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${dayName} ${day} ${month} ${year}`;
};

export const getDayName = (dateString: string) => {
    const date = new Date(dateString);
    const days = ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"];
    return days[date.getDay()];
};

export const dateOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  } as const;