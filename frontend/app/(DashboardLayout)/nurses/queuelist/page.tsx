"use client";
import Card from "@/components/medinexus/nurses/cards/Cards";
import { useState, useEffect, useCallback } from "react";
import Table from "@/components/medinexus/Table";
import { Queuecards } from "@/data/nurses/nursesquese";
import { CiFilter } from "react-icons/ci";
import { CiMenuKebab } from "react-icons/ci";
import Datepicker from "@/components/medinexus/Datepicker";
import { Input } from "@/components/medinexus/input";
import SortBy from "@/components/medinexus/SortBy";
import { Ifilter } from "@/interface/IFilter";
import Link from "next/link";
import Modal from "@/components/medinexus/Modal";
import { CirclePlus, X } from "lucide-react";
import { Label } from "@/components/medinexus/label";
import { register } from "module";
import { Userschema } from "@/schemas/Users.Schema";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Textarea } from "@/components/medinexus/textarea";
import { FaClock } from "react-icons/fa6";
import Form from "@/components/medinexus/patient/Form";

export default function page() {
  const [cardlist, setCards] = useState(Queuecards);
  const [queueList, setqueueList] = useState<[]>([]);
  const [boardDisplay, setboardDisplay] = useState<[]>([]);
  const [boardToken, setboardToken] = useState<[]>([]);
  const [showBoardModal, setShowBoardModal] = useState(false);
  const [showTokenModal, setShowTokenModal] = useState(false);
  const [showPatientModal, setPatientShow] = useState(false);
  const [departments, setDepartments] = useState([]);
  const [DoCou, setDoCou] = useState([]);

  const [query, setquery] = useState<Ifilter>({
    search: null,
    filters: null,
    dateRange: { key: null, from: null, to: null },
    sort: { key: null, order: null },
  });

  //toggel modal code
  function openBoardModal() {
    setShowBoardModal(true);
  }

  function openTokenModal() {
    setShowTokenModal(true);
  }

  function openAddPatientModal() {
    setShowAddPatientModal(true);
  }

  const hidePatienthanler = () => {
    setPatientShow(false);
  };

  //  Free search
  const handleSearch = (e: any) => {
    setquery((filterValue) => ({
      ...filterValue,
      search: e.target.value,
    }));
  };

  const handleDateChange = useCallback((date: any) => {
    const customdate = { key: "created_at", from: date.from, to: date.to };
    setquery((filterValue) => ({
      ...filterValue,
      dateRange: customdate,
    }));
  }, []);

  const handleShorting = useCallback((value: string) => {
    setquery((filterValue) => ({
      ...filterValue,
      sort: { key: "id", order: value },
    }));
  }, []);

  //form submission code
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Userschema) });

  useEffect(() => {
    const queueLists = [
      {
        id: 1,
        token: "T-001 04:15pm",
        patientName: "Aarav Sharma",
        doctor: "Harendra Jha",
        priority: "Normal",
        status: "Completed",
        action: " ",
      },
      {
        id: 2,
        token: "T-002 03:28pm",
        patientName: "Sita Thapa",
        doctor: "Ramesh Adhikari",
        priority: "High",
        status: "In Progress",
        action: " ",
      },
      {
        id: 3,
        token: "T-003 12:56pm",
        patientName: "Bibek Joshi",
        doctor: "Prakash Sharma",
        priority: "Normal",
        status: "Waiting",
        action: " ",
      },
      {
        id: 4,
        token: "T-004 09:30am",
        patientName: "Anisha Karki",
        doctor: "Suman Shrestha",
        priority: "Urgent",
        status: "In Consultation",
        action: " ",
      },
    ];

    setqueueList(queueLists);
  }, []);

  useEffect(() => {
    const boardDisplay = [
      {
        ticket: "T-0015",
        name: "Marsha Noland",
        doctor: "Dr. David Lee",
        status: "Waiting",
      },
      {
        ticket: "T-0016",
        name: "Irma Armstrong",
        doctor: "Dr. Anna Kim",
        status: "Waiting",
      },
      {
        ticket: "T-0017",
        name: "Ezra Belcher",
        doctor: "Dr. David Lee",
        status: "Urgent",
      },
      {
        ticket: "T-0018",
        name: "Gen Lentz",
        doctor: "Dr. Lisa White",
        status: "Waiting",
      },
    ];

    setboardDisplay(boardDisplay);
  }, []);

  useEffect(() => {
    const boardToken = [
      {
        counter: "Counter 1",
        ticket: "T-0015",
        doctor: "Dr. David Lee",
      },
      {
        counter: "Counter 2",
        ticket: "T-0016",
        doctor: "Dr. Anna Kim",
      },
      {
        counter: "Counter 3",
        ticket: "T-0017",
        doctor: "Dr. David Lee",
      },
    ];
    setboardToken(boardToken);
  }, []);

  return (
    <>
      <div className="flex justify-between items-center mb-8" text-center>
        <h2 className="text-lg font-semibold text-gray-700">Live Queue</h2>
        <div className="flex gap-4 items-center">
          <div className="font-semibold bg-white border-1 border-none pl-2 py-2 rounded-sm">
            Now Serving:{" "}
            <span className="font-bold border-1 border-none rounded-sm px-4 py-2 bg-emerald-600 text-white">
              T-001
            </span>
          </div>

          <div
            onClick={openBoardModal}
            className="bg-white border-1 border-black px-4 py-2 rounded-lg hover:bg-emerald-600 hover:text-white transition duration-300 cursor-pointer"
          >
            Display Board
          </div>

          <div
            onClick={openTokenModal}
            className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-800 transition duration-300 ease-in-out cursor-pointer"
          >
            + <span className="ml-2"> Generate Token </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        {cardlist.map((item, index) => (
          <Card
            key={index}
            label={item.label}
            total={item.total}
            icon={item.icon}
          />
        ))}
      </div>

      <div>
        <div className="flex justify-between space-x-4 ">
          <div className="flex space-x-6">
            <div>
              <Input
                type="text"
                placeholder="Search"
                className="placeholder-gray-500 placeholder-opacity-100 placholder-text-red-500 w-96 h-9 rounded bg-white shadow"
              />
            </div>

            <Datepicker onChange={handleDateChange} />
            <SortBy handleShorting={handleShorting} />
          </div>
        </div>
      </div>

      <div className="bg-white rounded px-1 mt-8">
        <Table
          columns={[
            { title: "TOKEN / TIME" },
            { title: "Patient" },
            { title: "Doctor" },
            { title: "Priority" },
            { title: "Status" },
            { title: "Action" },
          ]}
          data={queueList}
        />
      </div>

      {/* Display Board Modal code Start from here */}
      <Modal
        showModal={showBoardModal}
        className="w-[60rem] rounded-2xl overflow-hidden shadow-2xl mt-8"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#14967f] to-[#12b886] px-6 py-4 flex">
          <div className="w-full ">
            <h2 className="text-white text-lg font-semibold tracking-wide">
              Token Display Board
            </h2>{" "}
          </div>
          <div>
            <X
              className="text-white cursor-pointer"
              onClick={() => setShowBoardModal(false)}
            />
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-row justify-between gap-8 bg-white p-6">
          {/* Now Serving */}
          <div className="flex flex-1 flex-col justify-center space-y-6 relative -top-12">
            <h2 className="w-full text-lg font-bold text-gray-700 text-center mb-2 p-3 text-white bg-emerald-600 overflow-hidden rounded-t-lg">
              Now Serving
            </h2>

            <div className="flex flex-col items-center justify-center rounded-xl border border-emerald-100 p-6 text-center">
              <p className="text-lg font-semibold text-white bg-emerald-600 px-4 py-2 rounded-md shadow-sm">
                Counter 2
              </p>

              <h1 className="text-5xl font-bold text-emerald-600 tracking-wide">
                T-014
              </h1>

              <div className="flex flex-row items-center justify-center mt-4 text-sm gap-5 text-gray-800">
                <p className="mt-4"> Susan Babin, </p>

                <p className="mt-4">Dr. Sarah Johnson,</p>

                <p className="mt-4">Orthopedic Surgeon</p>
              </div>
            </div>

            {/* Other Counter */}
            <div className="flex flex-row gap-4 mt-6">
              {boardToken.map((boardToken) => (
                <div
                  className="flex flex-col items-center justify-center rounded-xl border border-gray-300 p-6 text-center"
                  key={boardToken.ticket}
                >
                  <h2 className="text-sm text-gray-300">
                    {" "}
                    {boardToken.counter}{" "}
                  </h2>
                  <h1 className="text-xl text-gray-600">{boardToken.ticket}</h1>
                  <p className="text-sm text-gray-500">{boardToken.doctor}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Up Next */}
          <div className="flex flex-1 flex-col">
            <table className="text-left w-full border border-gray-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="text-white bg-emerald-600">
                  <th className="text-lg font-bold p-3" colSpan={2}>
                    Up Next
                  </th>
                </tr>
              </thead>

              <tbody>
                {boardDisplay.map((tokenBoard) => (
                  <tr
                    key={tokenBoard.ticket}
                    className={` hover:bg-gray-100 transition${
                      tokenBoard.status === "Urgent"
                        ? "bg-amber-50"
                        : "bg-white"
                    }`}
                  >
                    <td className="p-4">
                      <p className="text-lg font-bold text-emerald-700">
                        {tokenBoard.ticket}
                      </p>

                      <p className="text-lg font-semibold text-gray-800 mt-1">
                        {tokenBoard.name}
                      </p>

                      <p className="text-sm text-gray-500 mt-1 ">
                        {tokenBoard.doctor}
                      </p>
                    </td>

                    <td className="text-right p-4">
                      <span
                        className={`font-semibold text-xs px-3 py-1 inline-block rounded-full ${
                          tokenBoard.status === "Urgent"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-emerald-100 text-emerald-700"
                        }`}
                      >
                        {tokenBoard.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-between items-center bg-gray-100 text-white px-6 py-4">
          <div className="flex flex-col text-lg font-semibold text-gray-700">
            <p>Patients Waiting</p>
            <p>{boardDisplay.length}</p>
          </div>
          <div>
            <FaClock className="w-8 h-8 text-yellow-400" />
          </div>
        </div>
      </Modal>

      {/* Generate token Modal code Start from here */}
      <Modal
        showModal={showTokenModal}
        className="w-[60rem] rounded-2xl overflow-hidden shadow-2xl mt-8"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#14967f] to-[#12b886] px-6 py-4 flex">
          <div className="w-full ">
            <h2 className="text-white text-lg font-semibold tracking-wide">
              Generate Token
            </h2>
            <p className="text-white/80 text-xs mt-1 w-fit">
              Fill in the details to generate a token for the patient
            </p>
          </div>
          <div>
            <X
              className="text-white cursor-pointer"
              onClick={() => setShowTokenModal(false)}
            />
          </div>
        </div>

        {/* Form */}
        <form className="flex flex-col space-y-8 bg-white p-8">
          <div className="col-span-4">
            <Label>Token Number</Label>
            <Input
              {...register("token_number")}
              readOnly
              className="bg-gray-200"
              value="T-015"
            />
            {errors?.["token_number"] && (
              <p className="text-xs text-red-500">
                {errors["token_number"].message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-8 gap-4 mt-2">
            <div className="col-span-4">
              <Label className="flex items-center justify-between">
                <span>Patient</span>
                <span className="flex items-center justify-center space-x-4 cursor-pointer" onClick={() => setPatientShow(true)}>
                  <CirclePlus size={12} />
                  <span>Add New</span>
                </span>
              </Label>

              <Label
                onClick={() => setPatientShow(true)}
                className="flex items-center justify-center space-x-4"
              ></Label>
              <Input {...register("Patient")} />
              {errors?.["Patient"] && (
                <p className="text-xs text-red-500">
                  {errors["Patient"].message}
                </p>
              )}
            </div>

            <div className="col-span-4">
              <Label>Department</Label>
              <select
                {...register("department_id")}
                className="w-full border rounded-md h-10 px-3"
              >
                <option value="">Select</option>
                {departments?.map((department: any) => (
                  <option key={department.id} value={department.id}>
                    {department.name}
                  </option>
                ))}
              </select>
              {errors?.["department_id"] && (
                <p className="text-xs text-red-500">
                  {errors["department_id"].message}
                </p>
              )}
            </div>

            <div className="col-span-4">
              <Label>Doctor/Counter</Label>
              <select
                {...register("role_id")}
                className="w-full border rounded-md h-10 px-3"
              >
                <option value="">Select</option>
                {DoCou?.map((DoCou: any) => (
                  <option key={DoCou.id} value={DoCou.id}>
                    {DoCou.title}
                  </option>
                ))}
              </select>
              {errors?.["role_id"] && (
                <p className="text-xs text-red-500">
                  {errors["role_id"].message}
                </p>
              )}
            </div>

            <div className="col-span-4">
              <Label>Priority</Label>
              <select
                {...register("priority")}
                className="w-full border rounded-md h-10 px-3"
              >
                <option value="">Select</option>
                <option value="low">Normal</option>
                <option value="high">Urgent</option>
              </select>
              {errors?.["priority"] && (
                <p className="text-xs text-red-500">
                  {errors["priority"].message}
                </p>
              )}
            </div>

            <div className="col-span-4">
              <Label>Check-in Date</Label>
              <Input {...register("checkDate")} />
              {errors?.["checkDate"] && (
                <p className="text-xs text-red-500">
                  {errors["checkDate"].message}
                </p>
              )}
            </div>

            <div className="col-span-4">
              <Label>Check-in Time</Label>
              <Input {...register("checkTime")} />
              {errors?.["checkTime"] && (
                <p className="text-xs text-red-500">
                  {errors["checkTime"].message}
                </p>
              )}
            </div>
          </div>
          <div className="col-span-4">
            <Label>Reason for visit</Label>
            <Textarea {...register("appointmentReason")} />
            {errors?.["appointmentReason"] && (
              <p className="text-xs text-red-500">
                {errors["appointmentReason"].message}
              </p>
            )}
          </div>

          <div className="col-span-4">
            <Label>Status</Label>
            <select
              {...register("status")}
              className="w-full border rounded-md h-10 px-3"
            >
              <option value="">Select</option>
              <option value="low">Waiting</option>
              <option value="high">In Consultation</option>
              <option value="high">Completed</option>
              <option value="high">Cancelled</option>
            </select>
            {errors?.["status"] && (
              <p className="text-xs text-red-500">{errors["status"].message}</p>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-3 pt-4 border-t">
            <button
              onClick={() => setShowTokenModal(false)}
              type="button"
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-[#14967f] text-white font-medium hover:opacity-90 shadow-md transition"
            >
              Generate Token
            </button>
          </div>
        </form>
      </Modal>


      {/* Add Patient Modal code Start from here */}
      <Modal showModal={showPatientModal}>
        <div className="flex flex-col">
          <div className="flex bg-gradient-to-r from-[#14967f] to-[#12b886] px-6 py-4 ">
            <div className="w-full ">
              <h2 className="text-white text-lg font-semibold tracking-wide">
                Patients
              </h2>
              <p className="text-white/80 text-xs mt-1 w-fit">
                Fill in the details to create a new Patients profile
              </p>
            </div>
            <div>
              <X
                className="text-white cursor-pointer"
                onClick={() => hidePatienthanler()}
              />
            </div>
          </div>

          <div className="py-6 px-8">
            <Form />
          </div>
        </div>
      </Modal>
    </>
  );
}
