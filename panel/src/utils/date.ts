import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko");

export const formatYYMMDD = (date: Date) => {
  return dayjs(date).format("YYYY.MM.DD");
};

export const getFirstDayOfWeek = (): { month: number; day: number } => {
  return { month: dayjs().startOf("week").month() + 1, day: Number(dayjs().startOf("week").format("DD")) };
};

export { dayjs };
