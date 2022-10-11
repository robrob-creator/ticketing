import React, { useState } from "react";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Image, Modal } from "antd";
import View from "../view";

export default function Table({ data, headers, setTableData, setPrevData }) {
  const [viewOpen, setViewOpen] = useState(false);
  const [current, setCurrent] = useState();
  return (
    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-xl">
      <Modal
        title={<p>{current?.title}</p>}
        style={{ top: 0, float: "right" }}
        visible={viewOpen}
        footer={false}
        bodyStyle={{ height: "100vh" }}
        onOk={() => setViewOpen(false)}
        onCancel={() => setViewOpen(false)}
      >
        <a
          href="#"
          class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <Image
            width={200}
            src="https://wpimg.pixelied.com/blog/wp-content/uploads/2021/06/15134429/Spotify-Good-Contrast-Examples-2-768x761.jpg"
          />
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {current?.title}
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Description:
            <br />
            {current?.description}
          </p>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Organizer: {current?.organizer}
          </p>
        </a>
      </Modal>
      <table className="w-full text-sm text-left  text-gray-400 dark:text-gray-400 border-separate rounded-full">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
          <tr>
            {headers &&
              headers.map((item, index) => {
                return (
                  <th scope="col" className="py-3 px-6">
                    {item}
                  </th>
                );
              })}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white "
                  >
                    <div class="flex flex-row ...">
                      <div>
                        {" "}
                        <Image
                          width={20}
                          src="https://wpimg.pixelied.com/blog/wp-content/uploads/2021/06/15134429/Spotify-Good-Contrast-Examples-2-768x761.jpg"
                        />
                      </div>
                      <div> {item.title}</div>
                    </div>
                  </th>
                  <td className="py-4 px-6">{item.organizer}</td>
                  <td className="py-4 px-6"> {item.venue}</td>

                  <td className="py-4 px-6">{item.date}</td>
                  <td className="py-4 px-6">{item.availableTicket}</td>
                  <td className="py-4 px-6">{item.price}</td>
                  <td className="py-4 px-6">
                    <EyeOutlined
                      className="mx-2"
                      style={{ color: "blue" }}
                      onClick={() => {
                        setCurrent(item);
                        setViewOpen(true);
                      }}
                    />
                    <EditOutlined className="mx-2" style={{ color: "blue" }} />
                    <DeleteOutlined
                      style={{ color: "red" }}
                      className="mx-2"
                      onClick={() => {
                        setTableData(
                          data.filter((items) => items.id !== item.id)
                        );
                        setPrevData(
                          data.filter((items) => items.id !== item.id)
                        );
                      }}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
