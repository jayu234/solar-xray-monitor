import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";

const ClassificationCSV = ({ data }) => {
    const [peakarray, setpeakarray] = useState([]);

    useEffect(() => {
        var dataarray = [];
        if (data.x) {
            var n = data.x.length;
            var n1 = data.time_of_occurances.length;
            var i = 0,
                j = 0;
            dataarray = [];
            while (i < n && j < n1) {
                if (data.time_of_occurances[j] === data.x[i]) {
                    dataarray.push({ x: data.x[i], y: data.y[i] });
                    i += 1;
                    j += 1;
                } else {
                    i += 1;
                }
            }

            setpeakarray(dataarray);
        }
    }, [data]);

    return (
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th style={{ backgroundColor: "#fff" }}>Sl No.</th>
                        <th style={{ backgroundColor: "#fff" }}>Observed Start Time</th>
                        <th style={{ backgroundColor: "#fff" }}>Peak Time</th>
                        <th style={{ backgroundColor: "#fff" }}>Observed End Time</th>
                        <th style={{ backgroundColor: "#fff" }}>Calculated Start TIme</th>
                        <th style={{ backgroundColor: "#fff" }}>Calculated End Time</th>
                        <th style={{ backgroundColor: "#fff" }}>Pre-Flare Count Rate</th>
                        <th style={{ backgroundColor: "#fff" }}>Total Count Rate</th>
                        <th style={{ backgroundColor: "#fff" }}>Class</th>
                    </tr>
                </thead>

                {data.calculated_end_times ? (
                    data.calculated_end_times.map((ele, idx) => (
                        <>
                            <tr>
                                <td>{idx + 1}</td>
                                <td>{data.observed_start_times[idx]}</td>
                                <td>{data.peak_times[idx]}</td>
                                <td>{data.observed_end_times[idx]}</td>
                                <td>{data.calculated_start_times[idx]}</td>
                                <td>{data.calculated_end_times[idx]}</td>
                                <td>{data.pre_flare_count_rates[idx]}</td>
                                <td>{data.total_count_rates[idx]}</td>
                                <td>{data.class[idx]}</td>
                            </tr>
                        </>
                    ))
                ) : (
                    <li>Nothing to display</li>
                )}
            </table>
            <div>
                <Button
                    sx={{ marginTop: "2rem", fontSize: "16px", color: "#1D2029", border: ".10526em solid #1D2029", textTransform: "none", borderRadius: "0", fontFamily: 'inherit', paddingY: "1rem", paddingX: "2rem", ":hover": { backgroundColor: "#1D2029", color: "white" } }}
                    onClick={() => {
                        var html = document.querySelector("table").outerHTML;
                        export_table_to_csv(html, "table.csv");
                    }}
                >
                    Download as CSV file
                </Button>
            </div>
        </Box>
    );
    function download_csv(csv, filename) {
        var csvFile;
        var downloadLink;

        // CSV FILE
        csvFile = new Blob([csv], { type: "text/csv" });

        // Download link
        downloadLink = document.createElement("a");

        // File name
        downloadLink.download = filename;

        // We have to create a link to the file
        downloadLink.href = window.URL.createObjectURL(csvFile);

        // Make sure that the link is not displayed
        downloadLink.style.display = "none";

        // Add the link to your DOM
        document.body.appendChild(downloadLink);

        // Lanzamos
        downloadLink.click();
    }

    function export_table_to_csv(html, filename) {
        var csv = [];
        var rows = document.querySelectorAll("table tr");

        for (var i = 0; i < rows.length; i++) {
            var row = [],
                cols = rows[i].querySelectorAll("td, th");

            for (var j = 0; j < cols.length; j++) row.push(cols[j].innerText);

            csv.push(row.join(","));
        }

        // Download CSV
        download_csv(csv.join("\n"), filename);
    }
};

export default ClassificationCSV;
