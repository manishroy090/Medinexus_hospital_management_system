import { Label } from "@/components/medinexus/label";
import { Input } from "@/components/medinexus/input";
import { Textarea } from "@/components/medinexus/textarea";
import Addbtn from "@/components/medinexus/Addbtn";
import Cancelbtn from "@/components/medinexus/Cancelbtn";

const Form = () => {
  return (
    <form>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            First Name
          </Label>
          <Input />
          <p className="text-xs text-red-500 mt-1"></p>
        </div>

        <div>
          <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            Last Name
          </Label>
          <Input />
          <p className="text-xs text-red-500 mt-1"></p>
        </div>

        <div>
          <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            Phone Number
          </Label>
          <Input />
          <p className="text-xs text-red-500 mt-1"></p>
        </div>

        <div>
          <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            Email Address
          </Label>
          <Input />
          <p className="text-xs text-red-500 mt-1"></p>
        </div>

        <div>
          <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            Primary Doctor
          </Label>
          <select className="w-full border rounded-md h-10 px-3">
            <option value="">Select BloodGroup</option>

            <option></option>
          </select>
          <p className="text-xs text-red-500 mt-1"></p>
        </div>

        <div>
          <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            DOB
          </Label>
          
          <input type="date" className="w-full border rounded-md h-10 px-3" />
          
          {/* <Controller
                name="dob"
                control={control}
                render={({ field }) => (
                  <CustomDatePicker
                    value={field.value}
                    onChange={field.onChange}
                    error={errors.dob?.message}
                  />
                )}
              /> */}
        </div>

        <div>
          <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            Gender
          </Label>

          <select className="w-full border rounded-md h-10 px-3">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <p className="text-xs text-red-500 mt-1"></p>
        </div>

        <div>
          <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            Blood Group
          </Label>
          <select className="w-full border rounded-md h-10 px-3">
            <option value="">Select BloodGroup</option>

            <option></option>
          </select>
          <p className="text-xs text-red-500 mt-1"></p>
        </div>

        <div>
          <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            Status
          </Label>
          <select className="w-full border rounded-md h-10 px-3">
            <option value="">Select Status</option>

            <option></option>
          </select>
          <p className="text-xs text-red-500 mt-1"></p>
        </div>
      </div>

      <h1 className="py-4">Address Information</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            Address 1{" "}
          </Label>
          <Input />
          <p className="text-xs text-red-500 mt-1"></p>
        </div>

        <div>
          <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            Address 2{" "}
          </Label>
          <Input />
          <p className="text-xs text-red-500 mt-1"></p>
        </div>

        <div>
          <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            Country
          </Label>

          <select className="w-full border rounded-md h-10 px-3">
            <option value="">Select Country</option>

            <option></option>
          </select>
          <p className="text-xs text-red-500 mt-1"></p>
        </div>

        <div>
          <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            State
          </Label>
          <Input />
          <p className="text-xs text-red-500 mt-1"></p>
        </div>

        <div>
          <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            City
          </Label>
          <Input />
          <p className="text-xs text-red-500 mt-1"></p>
        </div>

        <div>
          <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            PineCode
          </Label>
          <Input />
          <p className="text-xs text-red-500 mt-1"></p>
        </div>
      </div>

      <div className="flex  place-content-end pr-10 space-x-4">
        <Cancelbtn label="Cancel" url="/patients" />
        <Addbtn label={"Submit"} />
      </div>
    </form>
  );
};

export default Form;
