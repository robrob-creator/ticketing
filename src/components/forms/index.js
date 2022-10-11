import React, { useState } from "react";

export default function Form({
  setTableData,
  tableData,
  modalOpen,
  setModalOpen,
  setPrevData,
  prevData,
}) {
  const [formData, setFormData] = useState({
    id: tableData.length + 1,
    title: "",
    photo: "",
    description: "",
    venue: "",
    organizer: "",
    date: "",
    price: "",
    availableTicket: "",
  });
  const handleCreate = () => {
    if (formData) {
      setTableData([...tableData, formData]);
      setModalOpen(false);
      setPrevData([...tableData, formData]);
    } else {
      alert("please fill up the field");
    }
  };
  console.log(tableData);
  return (
    <form class="w-full max-w-lg">
      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="ticketName"
          >
            Ticket Name
          </label>
          <input
            class="h-2 appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="ticketName"
            value={formData.title}
            type="text"
            onChange={(e) => {
              setFormData({ ...formData, title: e.target.value });
            }}
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="description"
          >
            Description
          </label>
          <input
            class="h-2 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="description"
            type="text"
            value={formData.description}
            onChange={(e) => {
              setFormData({ ...formData, description: e.target.value });
            }}
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="organizer"
          >
            Event organizer
          </label>
          <input
            class="h-2 appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="organizer"
            type="text"
            value={formData.organizer}
            onChange={(e) => {
              setFormData({ ...formData, organizer: e.target.value });
            }}
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="venue"
          >
            Venue
          </label>
          <input
            class="h-2 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="venue"
            type="text"
            value={formData.venue}
            onChange={(e) => {
              setFormData({ ...formData, venue: e.target.value });
            }}
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="date"
          >
            Date
          </label>
          <input
            class="h-2 appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="date"
            type="text"
            value={formData.date}
            onChange={(e) => {
              setFormData({ ...formData, date: e.target.value });
            }}
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="availability"
          >
            Number of ticket
          </label>
          <input
            class="h-2 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="availabilty"
            type="text"
            value={formData.availableTicket}
            onChange={(e) => {
              setFormData({ ...formData, availableTicket: e.target.value });
            }}
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="organizer"
          >
            Price
          </label>
          <input
            class="h-2 appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="organizer"
            type="text"
            value={formData.price}
            onChange={(e) => {
              setFormData({ ...formData, price: e.target.value });
            }}
          />
        </div>
      </div>
      <button
        type="button"
        class="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => handleCreate()}
      >
        Create Ticket
      </button>
    </form>
  );
}
