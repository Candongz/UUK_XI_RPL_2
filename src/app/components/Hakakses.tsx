import React from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";


function Login() {
  return (
    <>
      <div>
        <div>
          <div>
            <div className="p-6 ms- pl-12">
              <h1 className="text-2xl font-semibold text-sky-950">All User</h1>
            </div>
            <div className="w-auto h-auto str ml-[960px] pr-4">
              <h1 className="text-xl font-semibold text-sky-600">Add</h1>
            </div>
          </div>
          <div className="pl-8 flex justify-center pt-8">
            <div className="w-[980px] shadow-lg">
              <div className="flex justify-center gap-24  bg-sky-100 py-2">
                <h1 className="font-semibold text-sky-900">Name</h1>
                <h1 className="font-semibold text-sky-900">Acces Status</h1>
                <h1 className="font-semibold text-sky-900">Email</h1>
                <h1 className="font-semibold text-sky-900 ml-44">Age</h1>
              </div>
              <div>
                <div className="pl-20 flex bg-white py-2">
                  <div className="flex mr-5 gap-9 -ml-14">
                    <MdEdit />
                    <MdDelete />
                  </div>
                  <div className="flex gap-24">
                    <h1 className="font-semibold">Pat Black</h1>
                    <h1 className="font-semibold">Admin</h1>
                    <h1 className="font-semibold">bill.berry@example.com</h1>
                    <h1 className="font-semibold pl-24">28</h1>
                  </div>
                </div>
                <div className="w-[980px] h-[1px] bg-slate-400"></div>
              </div>
              <div>
                <div className="pl-20 flex bg-white py-2">
                  <div className="flex mr-5 gap-9 -ml-14">
                    <MdEdit />
                    <MdDelete />
                  </div>
                  <div className="flex gap-24">
                    <h1 className="font-semibold">Pat Black</h1>
                    <h1 className="font-semibold">Admin</h1>
                    <h1 className="font-semibold">bill.berry@example.com</h1>
                    <h1 className="font-semibold pl-24">36</h1>
                  </div>
                </div>
                <div className="w-[980px] h-[1px] bg-slate-400"></div>
              </div>
              <div>
                <div className="pl-20 flex bg-white py-2">
                  <div className="flex mr-5 gap-9 -ml-14">
                    <MdEdit />
                    <MdDelete />
                  </div>
                  <div className="flex gap-24">
                    <h1 className="font-semibold">Pat Black</h1>
                    <h1 className="font-semibold">Admin</h1>
                    <h1 className="font-semibold">bill.berry@example.com</h1>
                    <h1 className="font-semibold pl-24">28</h1>
                  </div>
                </div>
                <div className="w-[980px] h-[1px] bg-slate-400"></div>
              </div>
              <div>
                <div className="pl-20 flex bg-white py-2">
                  <div className="flex mr-5 gap-9 -ml-14">
                    <MdEdit />
                    <MdDelete />
                  </div>
                  <div className="flex gap-24">
                    <h1 className="font-semibold">Pat Black</h1>
                    <h1 className="font-semibold">Admin</h1>
                    <h1 className="font-semibold">bill.berry@example.com</h1>
                    <h1 className="font-semibold pl-24">28</h1>
                  </div>
                </div>
                <div className="w-[980px] h-[1px] bg-slate-400"></div>
              </div>
              <div>
                <div className="pl-20 flex bg-white py-2">
                  <div className="flex mr-5 gap-9 -ml-14">
                    <MdEdit />
                    <MdDelete />
                  </div>
                  <div className="flex gap-24">
                    <h1 className="font-semibold">Pat Black</h1>
                    <h1 className="font-semibold">Admin</h1>
                    <h1 className="font-semibold">bill.berry@example.com</h1>
                    <h1 className="font-semibold pl-24">28</h1>
                  </div>
                </div>
                <div className="w-[980px] h-[1px] bg-slate-400"></div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
