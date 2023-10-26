const months = {
  "01": "Января",
  "02": "Февраля",
  "03": "Марта",
  "04": "Апреля",
  "05": "Майя",
  "06": "Июня",
  "07": "Июля",
  "08": "Августа",
  "09": "Сентября",
  "10": "Октября",
  "11": "Ноября",
  "12": "Декабря",
};

export const getMonthString = (month: string): string => {
  return months[month as keyof typeof months];
};
