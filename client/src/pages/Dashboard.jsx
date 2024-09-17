import React from "react";

const Dashboard = () => {
  const data = [
    "hello",
    "he",
    "hello",
    "he",
    "hello",
    "he",
    "hello",
    "he",
    "hello",
    "he",
    "hello",
    "he",
    "hello",
    "he",
    "hello",
    "he",
    "hello",
    "he",
  ];
  return (
    <div className=" h-auto w-auto bg-yellow-50">
      <div class="w-1/2 mx-auto p-2">
        <h1 className="text-center">World</h1>
        <div class="bg-blue-200 shadow-md rounded-lg my-6">
          <table class="text-left w-full border-collapse">
            <thead>
              <tr>
                <th class="py-4 px-6 w-4/5 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                  Name
                </th>
                <th class="py-4 px-6 w-1/5 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                  Request
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((e) => {
                return (
                  <tr class="hover:bg-grey-lighter">
                    <td class="py-4 px-6 border-b border-grey-light">{e}</td>
                    <td class="py-4 px-6 border-b border-grey-light">
                      <a
                        href="#"
                        class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark"
                      >
                        Edit
                      </a>
                      <a
                        href="#"
                        class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div class="w-1/2 mx-auto p-2">
        <h1 className=" text-center ">Requests</h1>
        <div class="bg-white shadow-md rounded-lg my-6">
          <table class="text-left w-full border-collapse">
            <thead>
              <tr>
                <th class="py-4 px-6 w-4/5 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                  Name
                </th>
                <th class="py-4 px-6 w-1/5 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                  Accept
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((e) => {
                return (
                  <tr class="hover:bg-grey-lighter">
                    <td class="py-4 px-6 border-b border-grey-light">{e}</td>
                    <td class="py-4 px-6 border-b border-grey-light">
                      <a
                        href="#"
                        class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark"
                      >
                        Edit
                      </a>
                      <a
                        href="#"
                        class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div class="w-1/2 mx-auto p-2">
        <h1 className=" text-center ">Suggestions</h1>
        <div class="bg-white shadow-md rounded-lg my-6">
          <table class="text-left w-full border-collapse">
            <thead>
              <tr>
                <th class="py-4 px-6 w-4/5 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                  Name
                </th>
                <th class="py-4 px-6 w-1/5 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                  Request
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((e) => {
                return (
                  <tr class="hover:bg-grey-lighter">
                    <td class="py-4 px-6 border-b border-grey-light">{e}</td>
                    <td class="py-4 px-6 border-b border-grey-light">
                      <a
                        href="#"
                        class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark"
                      >
                        Edit
                      </a>
                      <a
                        href="#"
                        class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
