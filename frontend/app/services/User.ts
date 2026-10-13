import { Axios, HospitalApi } from "../libs/axios";
import { Iuser } from "@/interface/Iuser";
import { toaster } from "@utils/apputils";

//get User api call from here
export async function getUsers() {
  const { data } = await HospitalApi.get("/auth/users");
  return data.users;
}

//create user api call from here
export async function createUser(data: Iuser) {
  const user = HospitalApi.post("auth/signup", data)
    .then((res) => {
      if (res.data.status == 201) {
        toaster(res.data.message, "success");
      }
      return res.data;
    })
    .catch((error) => {
      console.log(error.response.status);
      if (error.response.status == 422) {
        //  return error.response.data.message;
        toaster(error.response.data.message, "warning");
      }
    });

  return user;
}

//get user api call from here
export async function getUser(user_id: any) {
  const { data } = await HospitalApi.get(`/auth/users/${user_id}`);
  return data.user;
}

//update user api call from here
export async function updateUser(id: string | number, payload: Iuser) {
 return  await HospitalApi.put(`/auth/users/${id}`, payload)
    .then((res) => {
      if (res.status == 200) {
        toaster(res.data.message, "success");
      }

      return res.data
    })
    .catch((error) => {
      if (error.response.status == 422) {
        //  return error.response.data.message;
        toaster(error.response.data.message, "warning");
      }
    });
}

//delete user api call from here
export async function deleteUserById(id: any) {
   await HospitalApi.delete(`/auth/users/${id}`)
  .then((res)=>{
    if(res.status ==200){
      res.data.message
      toaster(res.data.message, "danger");

    }
  }).catch((error)=>{
    console.log("error",error)

  })
 
}

export async function excelExport() {
  const { data } = await HospitalApi.post(
    "/auth/users/excel/export",
    {},
    {
      responseType: "blob",
    },
  );

  return data;
}
