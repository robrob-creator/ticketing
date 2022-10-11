import "./App.css";
import Header from "./components/header";
import Table from "./components/table";
import data from "./assets/datasource.json";
import { useEffect, useState } from "react";
import { SettingOutlined, PullRequestOutlined } from "@ant-design/icons";
import { Button, Modal, Image } from "antd";
import View from "./components/view";
import Form from "./components/forms";

function App() {
  const [tableData, setTableData] = useState();
  const [prevData, setPrevData] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  const [headers, setHeaders] = useState([
    "Ticket name",
    "Event Organizer",
    "Venue",
    "Date",
    "Availability",
    "Price",
    "Actions",
  ]);

  useEffect(() => {
    setTableData(data);
  }, [data]);

  useEffect(() => {
    setPrevData(data);
  }, []);
  return (
    <div className="min-h-screen bg-gray-200">
      <Header />
      <div className="overflow-x-auto relative mx-16 ">
        <form className="my-4">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div class="relative">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-200  border-b-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              onChange={(e) => {
                if (e.target.value) {
                  setTableData(
                    tableData.filter((item) =>
                      item.title.includes(e.target.value)
                    )
                  );
                } else {
                  setTableData(prevData);
                }
              }}
            />
          </div>
        </form>

        <div class="flex justify-between ...">
          <h1 className="inline-block  font-bold my-8 place-self-start">
            List of Products
          </h1>
          <div className="inline-block font-bold text-blue-800 my-8 place-self-end">
            <button
              className="border-2 rounded-lg mr-2 border-blue-800 py-2 p-2"
              onClick={() => setModalOpen(true)}
            >
              Create Ticket
            </button>
            <button className="border-2 rounded-lg mr-2 border-blue-800 ">
              <PullRequestOutlined className="p-3 " />
            </button>
            <button className="border-2 rounded-lg mr-2 border-blue-800">
              <SettingOutlined className="p-3" />
            </button>
          </div>
        </div>
        {viewOpen && <View viewOpen={viewOpen} setViewOpen={setViewOpen} />}
        <Modal
          title={<p>Ticket Setup</p>}
          style={{ top: 0, float: "right" }}
          visible={modalOpen}
          footer={false}
          bodyStyle={{ height: "100vh" }}
          onOk={() => setModalOpen(false)}
          onCancel={() => setModalOpen(false)}
        >
          <Image
            width={200}
            src="https://wpimg.pixelied.com/blog/wp-content/uploads/2021/06/15134429/Spotify-Good-Contrast-Examples-2-768x761.jpg"
          />
          <Form
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            setTableData={setTableData}
            tableData={tableData ? tableData : data}
            setPrevData={setPrevData}
            prevData={prevData}
          />
        </Modal>
        <Table
          data={tableData}
          setTableData={setTableData}
          headers={headers}
          setPrevData={setPrevData}
          prevData={prevData}
        />
      </div>
    </div>
  );
}

export default App;
