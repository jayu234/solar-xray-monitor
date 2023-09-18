import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import FullGraph from './FullGraph';
import Graph from './Graph';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Box, Typography } from '@mui/material';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
    ],
};

function Charts({ data }) {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            navigation
            pagination={{ clickable: true }}
            style={{ width: "100%", height: "510px" }}
        >
            <SwiperSlide>
                <Box>
                    <Typography fontFamily={'inherit'} align='center' mb={1} fontSize={26}>Flux</Typography>
                    <Graph values={data} />
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box>
                    <Typography fontFamily={'inherit'} align='center' mb={1} fontSize={26}>TIme of flare occurances</Typography>
                    <FullGraph
                        values={data}
                        data={data.time_of_occurances}
                        details={{
                            type: "time_of_occurances",
                            legend: "Time of flare occurances",
                        }}
                    />
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box>
                    <Typography fontFamily={'inherit'} align='center' mb={1} fontSize={26}>Time of Rise</Typography>
                    <FullGraph
                        values={data}
                        data={data.left}
                        details={{ type: "time_of_rise", legend: "Time of Rise" }}
                    />
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box>
                    <Typography fontFamily={'inherit'} align='center' mb={1} fontSize={26}>Time of Decay</Typography>
                    <FullGraph
                        values={data}
                        data={data.right}
                        details={{ type: "time_of_decay", legend: "Time of Decay" }}
                    />
                </Box>
            </SwiperSlide>
        </Swiper>
    )
}

export default Charts