import React from "react";
import API from "./api";

// GET DATA
export default class JobTitleList extends React.Component {
  componentDidMount() {
    const paramRequest = {
      system_id: "c9bc9fb9-d13f-42e9-9b73-66ffd54183ba",
      hotel_group_id: "033c0410-ef44-4821-b77b-b39603ba377f",
    };
    API.post("hotel-group/get-job-titles", paramRequest)
      .then(
        (res) => {
          console.log(res);
          console.log(res.data);
        },
      )
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  render() {
    return (
      <div className="w-full">
        <div className="w-full bg-gradient-to-r from-blue-950 to-blue-800"></div>
      </div>
    );
  }
}
