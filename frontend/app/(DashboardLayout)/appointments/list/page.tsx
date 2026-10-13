import { TextAlignJustify, Calendar, SquareKanban } from "lucide-react";
import Link from "next/link";
import Table from "@/components/medinexus/Table";
const page = () => {
  return (
    <div className="flex flex-col space-y-4 w-full  px-8 mt-10">
      <Table
        columns={[
          { title: "AppointmentId" },
          { title: "Patient" },
          { title: "Doctor" },
          { title: "Mode" },
          { title: "Status" },
          { title: "Action" },
        ]}
      />
    </div>
  );
};

export default page;
