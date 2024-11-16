import { getUserIdFromToken } from "@/app/helpers/jwt";
import { getExamSchedule } from "@/app/utils/actions/examSchedule";
import { redirect } from "next/navigation";

const ExamSchedule = async () => {
  const decoded = await getUserIdFromToken();

  if (!decoded?.userId) {
    redirect("/login");
    return null;
  }

  console.log("decoded2", decoded.userId);

  const examSchedule = await getExamSchedule(decoded.userId as string);
  console.log(examSchedule);

  return <div>ExamSchedule</div>;
};

export default ExamSchedule;
