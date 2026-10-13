import { HospitalApi } from "../libs/axios";
import { IPatient } from "../interface/Ipatient";
import { toaster } from "@utils/apputils";

//get all patient Api
export async function getAllPatient() {
  const patients = await HospitalApi.get("/patient")
    .then((res) => {
      return res.data.patients;
    })
    .catch((error) => {
      console.log("error", error);
    });

  return patients;
}

//create patient api
export async function createPatient(patientDetails: IPatient) {
 return await HospitalApi.post("/patient/create", patientDetails)
    .then((res) => {
      if(res.status ==201){
        toaster(res.data.message, "success");
      }

      return res.data;
    })
    .catch((error) => {
      if (error.response.status == 422) {
        toaster(error.response.data.message, "warning");
      }
    });
}

//edit patient api
export async function PatientDetails(patientId: any) {
  const result = await HospitalApi.get(`/patient/edit/${patientId}`)
    .then((res) => {
      return res.data.patientDetails;
    })
    .catch((error) => {
      console.log("error", error);
    });

  return result;
}

//update patient api
export async function updatePatient(
  patientId: String,
  patientDetails: IPatient,
) {
  return await HospitalApi.put(
    `patient/update/${patientId}`,
    patientDetails,
  ).then((res) => {
      if(res.status == 200){
        toaster(res.data.message, "success");
      }

      return res.data
    })
    .catch((error) => {
      console.log("error", error);
    });

}

//delete patient api
export async function deletePatient(patientId: String) {
  const result = await HospitalApi.delete(`patient/delete/${patientId}`)
    .then((res) => {
      if(res.status ==200){
        toaster(res.data.message, "danger");
      }
    })
    .catch((error) => {
      console.log("error", error);
    });

}

export async function excelExport() {
  const { data } = await HospitalApi.post(
    "patient/excel/export",
    {},
    {
      responseType: "blob",
    },
  );

  return data;
}
