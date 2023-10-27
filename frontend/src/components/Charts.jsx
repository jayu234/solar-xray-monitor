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
            style={{ width: "100%", height: "810px" }}
        >
            <SwiperSlide>
                <Box>
                    <Typography fontFamily={'inherit'} align='center' mb={1} fontSize={26}>Flux</Typography>
                    <Graph values={data} />
                    <Box>
                        <Typography fontFamily={'inherit'} fontSize={22} mb={1}>1. Flux</Typography>
                        <Typography fontFamily={'inherit'} align='justify'>
                            The “Basic Solar Count (Flux) vs. Time” graph provides a direct view of the variations in solar emissions. On the x-axis, we have the timeline, spanning from the start to the end of the observation period. The y-axis represents the solar flux or the number of X-ray photons detected during each time interval
                        </Typography>
                    </Box>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box>
                    <Typography fontFamily={'inherit'} align='center' mb={1} fontSize={26}>Time of flare occurances</Typography>
                    <FullGraph
                        values={data}
                        data={data.time_of_occurances}
                        details={{
                            type: "time_of_occurances",
                            legend: "Time of flare occurances",
                        }}
                    />
                    <Box>
                        <Typography fontFamily={'inherit'} fontSize={22} mb={1}>2. Time of Flare Occurrence</Typography>
                        <Typography fontFamily={'inherit'} align='justify'>
                            The “Time of Occurrence” graph showcases the temporal distribution of solar flares within the observed timeframe. On the x-axis, we have the timeline, ranging from the project’s start date to its end date. The y-axis represents the frequency or intensity of solar flares during that period. Each data point on the graph corresponds to a recorded solar flare event
                        </Typography>
                    </Box>
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
                    <Typography fontFamily={'inherit'} fontSize={22}>3. Time of Rise</Typography>
                    <Typography fontFamily={'inherit'} align='justify'>
                        The “Time of Rise” graph portrays the acceleration of solar flare activity from its onset to its peak intensity. On the x-axis, we have the time duration measured in hours or minutes, depicting how quickly solar flares escalate. The y-axis indicates the frequency of solar flares that exhibit a particular time of rise.
                    </Typography>
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
                    <Typography fontFamily={'inherit'} fontSize={22}>4. Time of Decay</Typography>
                    <Typography fontFamily={'inherit'} align='justify'>
                        The “Time of Decay” graph illustrates the duration during which solar flares subside from their peak intensity. On the x-axis, we have the time measured in hours or minutes, indicating how long it takes for flares to decrease in intensity after reaching their peak. The y-axis represents the frequency of solar flares that exhibit a particular decay time.
                    </Typography>
                </Box>
            </SwiperSlide>
        </Swiper>
    )
}

export default Charts