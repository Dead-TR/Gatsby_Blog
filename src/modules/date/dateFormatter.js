export const dateFormatter = (date) => {
  const today = Date.now()

  const dateReferens = new Date(date)

  const year = dateReferens.getFullYear();
  const month = dateReferens.getMonth();
  const day = dateReferens.getDate();
  const hours = dateReferens.getHours();
  const mins = dateReferens.getMinutes();
  const weekDay = dateReferens.getDay();

  const formatter = (data) => {
    return (String(data).length === 1)? `0${data}` : data;
  }

  const fHours = formatter(hours);
  const fMins = formatter(mins);
  const fDay = formatter(day);
  const fMounth = formatter(month);

  if ((today - date) <  86400000) {
    return `Today ${fHours}:${fMins}`;
  }

  if ((today - date) <  (86400000*2)) {
    return `Yesterday ${fHours}:${fMins}`;
  }

  if ((today - date) <  (86400000*7)) {
    return `${weekDay} ${fHours}:${fMins}`;
  }

  return `${fDay}.${fMounth}.${year}`;
};
