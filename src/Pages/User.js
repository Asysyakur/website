import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GetUser, deleteUser } from "../redux/actions/userAction";

export default function User() {
  const users = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();

  GetUser();
  
  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };
  
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 mx-auto lg:p-10 md:p-6 pl-0 flex flex-col justify-between h-auto">
          <div className="container">
            <h1 class="text-left font-bold text-[48px] text-black mr-4">
              Kelola User
            </h1>
            <Link to={`/add`}>Add</Link>
            <div className="relative overflow-x-auto mt-10">
              <table class="w-full text-lg text-left ">
                <thead class="text-lg  bg-blue-500 text-white">
                  <tr class="border-b-2 font-bold ">
                    <th scope="col" class="px-6 py-3 text-center">
                      No
                    </th>
                    <th scope="col" class="px-6 py-3 text-center">
                      Nama
                    </th>
                    <th scope="col" class="px-6 py-3 text-center">
                      Email
                    </th>
                    <th scope="col" class="px-6 py-3 text-center">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr class="bg-white border-b-2 text-lg">
                      <th scope="row" class="px-6 py-4 font-medium text-center">
                        {user.id}
                      </th>
                      <th scope="row" class="px-6 py-4 font-medium text-center">
                        {user.name}
                      </th>
                      <th scope="row" class="px-6 py-4 font-medium text-center">
                        {user.email}
                      </th>
                      <th class="px-6 py-4 text-center items-center justify-center flex gap-8">
                        <Link to={`/add/${user.id}`} state={{ data: user }}>
                          Edit
                        </Link>
                        <button onClick={() => handleDelete(user.id)}>
                          Delete
                        </button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
