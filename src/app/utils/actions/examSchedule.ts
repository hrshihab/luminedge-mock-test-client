export const getExamSchedule = async (userId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/schedule/${userId}`
  );
  const data = await res.json();
  return data;
};
