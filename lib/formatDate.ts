import { MONTHS } from '../constants/months';

export const formatDate = (date: string, isFull: boolean) => {
  const formattedDate = new Date(date);
  const day = formattedDate.getDate();
  const month = MONTHS[formattedDate.getMonth()];
  const year = formattedDate.getFullYear();

  return isFull ? `${day} ${month} ${year}` : `${day} ${month}`;
};
