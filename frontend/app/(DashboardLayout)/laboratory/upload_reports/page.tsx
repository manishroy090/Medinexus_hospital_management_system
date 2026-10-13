"use client";
import { Label } from "@/components/medinexus/label";
import { Input } from "@/components/medinexus/input";
import { CloudUpload, FlaskConical } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const page = () => {
  const fileuploadref = useRef(null);
  const fileupload = useRef(null);

  useEffect(() => {
    const fileuploadbtn = fileuploadref.current;
    if (!fileuploadbtn) return;

    const handleGlobalClick = () => {
      fileupload.current.click();
    };

    fileuploadbtn.addEventListener("click", handleGlobalClick);

    return () => {
      fileuploadbtn.removeEventListener("click", handleGlobalClick);
    };
  }, [fileuploadref, fileupload]);

  return (
    <div className="">
      <div className="bg-gradient-to-r from-[#14967f] to-[#12b886] px-6 py-4 flex justify-between">
        <div>
          <h2 className="text-white text-lg font-semibold tracking-wide">
            Upload Report
          </h2>
          <p className="text-white/80 text-xs mt-1">
            Fill in the details to create a new Upload Report
          </p>
        </div>
      </div>

      <form className="py-4 flex flex-col space-y-6 bg-white p-8  ">
        <div className="flex space-x-10 ">
          <div className="flex flex-col space-y-2 w-1/2">
            <Label>Test</Label>
            <select className="w-full border rounded-md h-10 px-3 border-gray-300">
              <option value="">Select Status</option>
              <option></option>
            </select>
          </div>

          <div className="flex flex-col space-y-2 w-1/2">
            <Label>Patient</Label>
            <select className="w-full border rounded-md h-10 px-3 border-gray-300">
              <option value="">Select Status</option>
              <option></option>
            </select>
          </div>

          <div className="flex flex-col space-y-2 w-1/2">
            <Label>Doctor</Label>
            <select className="w-full border rounded-md h-10 px-3 border-gray-300">
              <option value="">Select Status</option>
              <option></option>
            </select>
          </div>
        </div>

        <div className="flex space-x-10 ">
          <div className="flex flex-col space-y-2 w-1/2">
            <Label>Report Category</Label>
            <select className="w-full border rounded-md h-10 px-3 border-gray-300">
              <option value="">Select Status</option>
              <option></option>
            </select>
          </div>

          <div className="flex flex-col space-y-2 w-1/2">
            <Label>Result</Label>
            <Input className="border-gray-300"/>
          </div>

          <div className="flex flex-col space-y-2 w-1/2 ">
            <Label>Status</Label>
            <select className="w-full border rounded-md h-10 px-3 border-gray-300">
              <option value="">Select Status</option>
              <option></option>
            </select>
          </div>
        </div>

        <div className="flex space-x-10 ">
          <div className="flex flex-col space-y-2 w-1/2">
            <Label>Verified By</Label>
            <select className="w-full border rounded-md h-10 px-3 border-gray-300">
              <option value="">Select Status</option>
              <option></option>
            </select>
          </div>

          <div className="flex flex-col space-y-2 w-1/2">
            <Label>Value</Label>
            <Input className="border-gray-300"/>
          </div>

          <div className="flex flex-col space-y-2 w-1/2">
            <Label>Unit</Label>
            <Input className="border-gray-300" />
          </div>
        </div>

        <div className="flex flex-col space-y-10 ">
          <Label>Upload File</Label>
          <div
            ref={fileuploadref}
            className="border border-gray-300 rounded flex flex-col space-y-4 items-center justify-center h-72"
          >
            <div className="bg-slate-200 p-4 rounded">
              <CloudUpload />
              <Input type="file" className="hidden" ref={fileupload} />
            </div>
            <span>Drag & drop your file here</span>
            <span>Supports PDF ,JPG,PNG, up to 10MB</span>
            <button className="bg-gradient-to-r from-[#14967f] to-[#12b886] rounded p-2 text-white">Browser File</button>
          </div>
        </div>

        <div className="flex flex-col space-y-10  ">
          <Label>Remarks</Label>
          <textarea className="border border-gray-300 rounded"></textarea>
        </div>

        <div className="flex justify-end  space-x-4">
            <button
              type="button"
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-[#14967f] text-white font-medium hover:opacity-90 shadow-md transition"
            >
              Submit
            </button>

        </div>
      </form>


    </div>
  );
};

export default page;
