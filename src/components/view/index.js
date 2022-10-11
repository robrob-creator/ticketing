import React from "react";
import { Modal, Image } from "antd";

export default function View(viewOpen, setViewOpen) {
  return (
    <Modal
      title={<p>Ticket Setup</p>}
      style={{ top: 0, float: "right" }}
      visible={viewOpen}
      footer={false}
      bodyStyle={{ height: "100vh" }}
      onOk={() => setViewOpen(false)}
      onCancel={() => setViewOpen(false)}
    >
      <Image
        width={200}
        src="https://wpimg.pixelied.com/blog/wp-content/uploads/2021/06/15134429/Spotify-Good-Contrast-Examples-2-768x761.jpg"
      />
      MOdal
    </Modal>
  );
}
