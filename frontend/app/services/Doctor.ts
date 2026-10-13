import { HospitalApi } from "../libs/axios";
import { IDoctor } from "../interface/IDoctor";
import { toaster } from "@utils/apputils";

//get all doctors api
export async function getAllDoctor() {
  const doctors = await HospitalApi.get("doctors")
    .then((res) => {
      return res.data.doctors;
    })
    .catch((error) => {
      console.log("error", error);
    });

  return doctors;
}

//create doctor api
export async function createDoctor(payload: any) {
  return await HospitalApi.post("doctors/create", payload, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => {
      if (res.status == 201) {
        toaster(res.data.message, "success");
      }

      return res.data
    })
    .catch((error) => {
      if (error.response.status == 422) {
        toaster(error.response.data.message, "warning");
      }
    });
  // return register;
}

//get doctorapi module
export async function getDoctor(id: String) {
  const doctor = await HospitalApi.get(`doctors/edit/${id}`)
    .then((res) => {
      return res.data.doctor;
    })
    .catch((error) => {
      console.log("error", error);
    });
  return doctor;
}

//update doctorapi module
export async function updateDoctor(id: string | number, payload: any) {
   return await HospitalApi.put(`doctors/update/${id}`, payload)
  .then((res)=>{
    if(res.status == 200){
      toaster(res.data.message, "success");

    }
    return res.data
  })
  .catch((error)=>{
    console.log("error",error)

  })
}

//view doctordetail a api
export async function View(id: any) {
  const doctor = await HospitalApi.get(`doctors/view/${id}`)
    .then((res) => {
    
      return res.data.doctordetails;
    })
    .catch((error) => {
      console.log("error", error);
    });
  return doctor;
}

//delete doctor api
export async function deleteDoctor(id: string) {
  const doctor = await HospitalApi.delete(`doctors/delete/${id}`)
  .then((res)=>{
     if(res.status ==200){
      toaster(res.data.message, "danger");

     }
  })
  .catch((error)=>{
      console.log("error",error)
  })

}
