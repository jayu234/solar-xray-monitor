import React from "react";
import { Box } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
const ClassificationChart = ({data}) => {
  const colors = {
    'A': ['rgb(255, 243, 59)','rgb(255, 243, 59, 1)'],
    'B': ['rgb(253, 199, 12)','rgb(253, 199, 12, 1)'],
    'C': ['rgb(243, 144, 63)','rgb(243, 144, 63, 1)'],
    'M': ['rgb(237, 104, 60)','rgb(237, 104, 60, 1)'],
    'X': ['rgb(233, 62, 58)','rgb(233, 62, 58, 1)'],
  }
    const chartData =  {
        labels: data.flare_classes,
        datasets: [
          {
            label: ' ms',
            data:  Object.values(data.class_total_time),
            backgroundColor: data.flare_classes.map((item)=>colors[item][0]),
            borderColor: data.flare_classes.map((item)=>colors[item][1]),
            hoverOffset: 4
          },
        ],
      };
      
    return (
        <Box sx={{width: "90%", marginX: "auto"}}>
            <Box sx={{width: "50%", marginX: "auto"}}>
                <Doughnut data={chartData} options={{
                  rotation: -90,
                  circumference: 180,
                  cutout: "95%",
                }}/>
            </Box>
        </Box>
    );
};

export default ClassificationChart;
