"use client"
import { Label } from "@/components/medinexus/label";
import { Input } from "@/components/medinexus/input";
import { Textarea } from "@/components/medinexus/textarea";
import Table from "@/components/medinexus/Table";
import { useEffect, useState } from "react";

const page = () => {
  const [appointmentRequest,setAppointmentRequest] = useState<[]>([])


  useEffect(()=>{
      const data = [
    {
      date_time: "30 Apr 2025 - 09:30 AM",
      patient_name: "Alberto Ripley",
      phone_number: "+1 56556 54565",
      doctor_name: "Dr. John Smith",
      specilaization: "Cardiologist",
      mode: "In-person",
      status: "Pending",
    },
    {
      date_time: "30 Apr 2025 - 09:30 AM",
      patient_name: "Manish Yadav",
      phone_number: "+1 56556 54565",
      doctor_name: "Dr. John Smith",
      specilaization: "Urologist",
      mode: "In-person",
      status: "Pending",
    },
    {
      date_time: "30 Apr 2025 - 09:30 AM",
      patient_name: "Carol Lam",
      phone_number: "+1 56556 54565",
      doctor_name: "Dr. John Smith",
      specilaization: "Neurosurgeon",
      mode: "In-person",
      status: "Pending",
    },
    
  ];

     setAppointmentRequest(data)
  },[])

  return (
    <div className="flex flex-col space-y-4 w-full  px-8 mt-10">
      <Table
        columns={[
          { title: "Date & Time" },
          { title: "Patient" },
          { title: "Phone" },
          { title: "Doctor" },
          { title: "Specilazation" },
          { title: "Mode" },
          { title: "Status" },
        ]}
        data={appointmentRequest}
      />
    </div>
  );
};

export default page;
