import Modal from "@/components/medinexus/Modal";
import { Label } from "@/components/medinexus/label";
import { Input } from "@/components/medinexus/input";
import { Textarea } from "@/components/medinexus/textarea";
import { CirclePlus } from "lucide-react";
import { useState } from "react";
import { X } from "lucide-react";
import Form from "@/components/medinexus/patient/Form";

const Formmodal = ({
  showmainFrom,
  hideModal,
}: {
  showmainFrom: boolean;
  hideModal: () => void;
}) => {
  const [showModal, setModal] = useState(false);
  const [showPatientModal, setPatientShow] = useState(false);

  const hideModalhandler = () => {
    hideModal();
  };

  const hidePatienthanler = () => {
    setPatientShow(false);
  };

  return (
    <>
      <div>
        <Modal showModal={showmainFrom}>
          <div className="flex flex-col">
            <div className="flex bg-gradient-to-r from-[#14967f] to-[#12b886] px-6 py-4 ">
              <div className="w-full ">
                <h2 className="text-white text-lg font-semibold tracking-wide">
                  Appointments
                </h2>
                <p className="text-white/80 text-xs mt-1 w-fit">
                  Fill in the details to create a new appointments profile
                </p>
              </div>
              <div>
                <X
                  className="text-white cursor-pointer"
                  onClick={() => hideModalhandler()}
                />
              </div>
            </div>
            <form className="flex flex-col space-y-8 bg-white p-8">
              <div className="col-span-4">
                <Label>Appointment ID</Label>
                <Input />

                <p className="text-xs text-red-500"></p>
              </div>

              <div className="flex justify-between space-x-6">
                <div className="col-span-4">
                  <div className="flex justify-between">
                    <Label>Patient</Label>
                    <div
                      onClick={() => setPatientShow(true)}
                      className="flex items-center justify-center space-x-4"
                    >
                      <CirclePlus size={12} />
                      <span>Add New</span>
                    </div>
                  </div>
                  <Input />

                  <p className="text-xs text-red-500"></p>
                </div>

                <div className="col-span-4">
                  <Label>Department</Label>
                  <Input />

                  <p className="text-xs text-red-500"></p>
                </div>
              </div>

              <div className="flex justify-between space-x-6">
                <div className="col-span-4">
                  <Label>Doctor</Label>
                  <Input />

                  <p className="text-xs text-red-500"></p>
                </div>

                <div className="col-span-4">
                  <Label>Appointment Type</Label>
                  <Input />

                  <p className="text-xs text-red-500"></p>
                </div>
              </div>

              <div className="flex justify-between space-x-6">
                <div className="col-span-4">
                  <Label>Date of Appointment</Label>
                  <Input />

                  <p className="text-xs text-red-500"></p>
                </div>

                <div className="col-span-4">
                  <Label>Time</Label>
                  <Input />
                  <p className="text-xs text-red-500"></p>
                </div>
              </div>

              <div className="col-span-4">
                <Label>Appointment Reason</Label>
                <Textarea />
              </div>

              <div className="col-span-4 gap-2">
                <Label>Status</Label>
                <select className="w-full border rounded-md h-10 px-3">
                  <option value="">Select Status</option>
                  <option value="male">Checked Out</option>
                  <option value="female">Checked In</option>
                  <option value="female">Cancelled</option>
                  <option value="female">Schedule</option>
                  <option value="female">Confirmed</option>
                </select>

                <p className="text-xs text-red-500"></p>
              </div>
            </form>
          </div>
        </Modal>
      </div>

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
};

export default Formmodal;
