"use client";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Table from "@components/medinexus/Table";
import { useState } from "react";
import Link from "next/link";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ModeIcon from "@mui/icons-material/Mode";
import DeleteIcon from "@mui/icons-material/Delete";
import { deletePatient } from "@/services/Patients";

const List = ({ data, query }: { data: any; query: any }) => {
  const deletePatientDetails = async (patientId: String) => {
    await deletePatient(patientId);
  };

  return (
    <div>
      <Table
        data={data}
        showaction={true}
        actionlist={[
          {
            label: "View",
            icon: <VisibilityIcon className="text-blue-600" />,
            href: (item) => `/patients/view`,
          },
          {
            label: "Edit",
            icon: <ModeIcon className="text-yellow-600" />,
            href: (item) => `/patients/createpatients?userId=${item.id}`,
          },
          {
            label: "Delete",
            icon: <DeleteIcon className="text-red-600" />,
            confirm: true,
            onClick: (item) => deletePatientDetails(item.id),
          },
        ]}
        columnRenderers={{
          image: (value, row) => {
            return (
              <div className="mt-4 bg-yellow-200 rounded-full h-8 w-11 pt-1 ">
              <img
                className="w-9 h-7 ml-1"
                src={
                  row.image
                    ? `http://localhost:8080/uploads/patients/${row?.image}`
                    : row?.gender == "male"
                      ? "/hrm_image/male.png"
                      : "/hrm_image/female.jpg"
                }
              />
              </div>
            );
          },

          status:(value,row) =>{
             return(
              <span className="bg-blue-600 p-1 text-white rounded">{value}</span>
             )
          }
        }}
        columns={[
          { title: "Name" },
          { title: "Age" },
          { title: "Gender" },
          { title: "Phone Number" },
          { title: "Address" },
          { title: "Last Visit" },
          { title: "Image" },
          { title: "Status" },
          { title: "Primary Doctor" },
        ]}
        query={query}
      />
    </div>
  );
};

export default List;
