import * as React from 'react';
import { Box, Collapse, Button, Divider, Grid, List, ListItemButton, ListItemText, Typography } from '@mui/material'
import PropTypes from 'prop-types';
import Charts from './Charts';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import AnalyzationCSV from './AnalyzationCSV';
import KnowMore from './KnowMore';
import ClassificationChart from './ClassificationChart';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ClassificationCSV from './ClassificationCSV';
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


function Classification({ data, setData }) {
    const [index, setIndex] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [showFullText, setShowFullText] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [previewArr, setPreviewArr] = React.useState([]);

    React.useEffect(() => {
        var dataarray = [];
        if (data.rows) {
            for (let i = 0; i < 10; i++) {
                dataarray.push({
                    r1: data.rows[i][0],
                    r2: data.rows[i][1],
                    r3: data.rows[i][2],
                    r4: data.rows[i][3],
                })
            }
            setPreviewArr(dataarray);
        }
    }, [data]);
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
        var rows = document.querySelectorAll(".table tr");

        for (var i = 0; i < rows.length; i++) {
            var row = [],
                cols = rows[i].querySelectorAll("td, th");

            for (var j = 0; j < cols.length; j++) row.push(cols[j].innerText);

            csv.push(row.join(","));
        }

        // Download CSV
        download_csv(csv.join("\n"), filename);
    }
    return (Object.keys(data).length > 0 ? (
        <Box sx={{ marginY: "2rem" }}>
            <Typography mb={2} fontSize={40} fontWeight={600} fontFamily={"inherit"} align='center'>
                Results
            </Typography>
            <Divider sx={{ borderBottomWidth: 1 }} />
            <Box sx={{ marginLeft: "1.5rem", marginY: "2rem", flexGrow: 1, display: 'flex' }}>
                <Grid container columnGap={2}>
                    <Grid item xs={3}>
                        <List
                            sx={{ width: '100%', maxWidth: 360 }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                        >
                            <Divider sx={{ borderBottomWidth: 3, borderColor: "#000" }} />
                            <ListItemButton onClick={() => { setIndex(0) }}>
                                <ListItemText primary="LC File" primaryTypographyProps={{ fontFamily: 'inherit', fontWeight: index === 0 ? 600 : 400 }} />
                            </ListItemButton>
                            <Divider sx={{ borderBottomWidth: 3, borderColor: "#000" }} />
                            <ListItemButton onClick={handleClick}>
                                <ListItemText primary="Classification" primaryTypographyProps={{ fontFamily: 'inherit' }} />
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Divider sx={{ borderBottomWidth: 3, borderColor: "#000" }} />
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton onClick={() => { setIndex(1) }} sx={{ pl: 4 }} >
                                        <ListItemText primary="Preprocessed" primaryTypographyProps={{ fontFamily: 'inherit', fontWeight: index === 1 ? 600 : 400 }} />
                                    </ListItemButton>
                                </List>
                                <List component="div" disablePadding>
                                    <ListItemButton onClick={() => { setIndex(2) }} sx={{ pl: 4 }} >
                                        <ListItemText primary="Classify" primaryTypographyProps={{ fontFamily: 'inherit', fontWeight: index === 2 ? 600 : 400 }} />
                                    </ListItemButton>
                                </List>
                                {/* <Divider sx={{ borderBottomWidth: 3, borderColor: "#000" }}/> */}
                                <List component="div" disablePadding>
                                    <ListItemButton onClick={() => { setIndex(3) }} sx={{ pl: 4 }} >
                                        <ListItemText primary="CSV" primaryTypographyProps={{ fontFamily: 'inherit', fontWeight: index === 3 ? 600 : 400 }} />
                                    </ListItemButton>
                                </List>
                            </Collapse>
                            <ListItemButton onClick={() => { setIndex(4) }}>
                                <ListItemText primary="Know more" primaryTypographyProps={{ fontFamily: 'inherit', fontWeight: index === 3 ? 600 : 400 }} />
                            </ListItemButton>
                            <Divider sx={{ borderBottomWidth: 3, borderColor: "#000" }} />
                        </List>
                    </Grid>
                    {/* <Divider orientation="vertical" flexItem sx={{ borderRightWidth: 5, borderColor: "black" }}/> */}
                    <Grid item xs={8}>
                        {index === 0 && (
                            <Grid container padding={2} ml={4}>
                                <Grid item xs={3}>
                                    <Typography fontSize={18} fontWeight={600} fontFamily={"inherit"}>File: </Typography>{data.fileName}
                                    <Typography mt={2} fontSize={18} fontWeight={600} fontFamily={"inherit"}>Date: </Typography> {data.fileDate.day} / {data.fileDate.month} / {data.fileDate.year}
                                    <Typography mt={2} fontSize={18} fontWeight={600} fontFamily={"inherit"}>Attributes: </Typography>
                                    <ul style={{ marginLeft: "1.5rem" }}>
                                        <li>Time</li>
                                        <li>Rate</li>
                                        <li>Error</li>
                                        <li>Fractional Exposure</li>
                                    </ul>
                                    <Typography mt={2} fontSize={18} fontWeight={600} fontFamily={"inherit"}>Dimentions: </Typography>
                                    <ul style={{ marginLeft: "1.5rem" }}>
                                        <li>Rows: {data.rows.length}</li>
                                        <li>Columns: 4</li>
                                    </ul>
                                </Grid>
                                <Grid item xs={8} marginLeft={8}>
                                    <Typography fontSize={18} fontWeight={600} fontFamily={"inherit"}>Preview: </Typography>
                                    <table className='table'>
                                        <thead >
                                            <tr style={{ backgroundColor: "#fff" }}>
                                                <th style={{ backgroundColor: "#fff" }}>Sl No.</th>
                                                <th style={{ backgroundColor: "#fff" }}>Time</th>
                                                <th style={{ backgroundColor: "#fff" }}>Rate</th>
                                                <th style={{ backgroundColor: "#fff" }}>Error</th>
                                                <th style={{ backgroundColor: "#fff" }}>Fractional Exposure</th>
                                            </tr>
                                        </thead>
                                        {data.rows ? (
                                            previewArr.map((ele, idx) => (
                                                <tbody key={idx}>
                                                    <tr>
                                                        <td>{idx + 1}</td>
                                                        <td>{ele.r1}</td>
                                                        <td>{ele.r2}</td>
                                                        <td>{ele.r3}</td>
                                                        <td>{ele.r4}</td>
                                                    </tr>
                                                </tbody>
                                            ))
                                        ) : (
                                            <li>Nothing to display</li>
                                        )}
                                    </table>
                                    <Box>
                                        <Button
                                            sx={{ marginTop: "1rem", fontSize: "14px", color: "#1D2029", border: ".10526em solid #1D2029", textTransform: "none", borderRadius: "0", fontFamily: 'inherit', paddingY: "0.5rem", paddingX: "1rem", ":hover": { backgroundColor: "#1D2029", color: "white" } }}
                                            onClick={() => {
                                                var html = document.querySelector(".table").outerHTML;
                                                export_table_to_csv(html, "table.csv");
                                            }}
                                        >
                                            Download as CSV file
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        )}
                        {index === 1 && (
                            <Box padding={2}>
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    spaceBetween={10}
                                    navigation
                                    pagination={{ clickable: true }}
                                    style={{ width: "100%", height: "550px" }}
                                >
                                    <SwiperSlide>
                                        <Box>
                                            <Typography fontFamily={'inherit'} fontSize={22} fontWeight={500}>Raw data:</Typography>
                                            <img src='/raw_data.png' width={1000} height={500} />
                                        </Box>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Box>
                                            <Typography fontFamily={'inherit'} fontSize={22} fontWeight={500}>Individual intervals:</Typography>
                                            <img src='/individual_intervals.png' width={1000} height={500} />
                                        </Box>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Box>
                                            <Typography fontFamily={'inherit'} fontSize={22} fontWeight={500}>Smoothened intervals :</Typography>
                                            <img src='/smoothened_intervals.png' width={1000} height={500} />
                                        </Box>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Box>
                                            <Typography fontFamily={'inherit'} fontSize={22} fontWeight={500}>Interpolated data:</Typography>
                                            <img src='/interpolated_data.png' width={1000} height={500} />
                                        </Box>
                                    </SwiperSlide>
                                </Swiper>
                            </Box>
                        )}
                        {index === 2 && (
                            <Box padding={2}>
                                <ClassificationChart data={data} />
                                <Box mb={2} mt={2}>
                                    {(data.flare_classes.includes('A') || data.flare_classes.includes('B')) && <Box sx={{ width: "100%" }}>
                                        <Typography fontFamily={'inherit'} fontSize={22} mb={1} fontWeight={500}>A or B-Class Solar Flares: The Smallest Disturbances</Typography>
                                        <Typography fontFamily={'inherit'} align='justify'>
                                            A or B-class solar flares are the smallest in the classification system. While they may not be as powerful as their larger counterparts, they are still fascinating astronomical events. B-class flares are relatively common and typically have minimal impact on Earth. These flares are considered minor disturbances and are often overshadowed by larger events.
                                        </Typography>
                                    </Box>}
                                    {data.flare_classes.includes('C') && <Box sx={{ width: "100%" }}>
                                        <Typography fontFamily={'inherit'} fontSize={22} mb={1} fontWeight={500}>C-Class Solar Flares: Noticeable Effects</Typography>
                                        <Typography fontFamily={'inherit'} align='justify'>
                                            Moving up the classification scale, we encounter C-class solar flares. These eruptions are more significant than B-class flares and can have noticeable effects on our planet. C-class flares are known to cause brief radio blackouts at the polar regions and may lead to minor radiation storms. Although they are not generally harmful, they can pose challenges to communication systems.
                                        </Typography>
                                    </Box>}
                                    {data.flare_classes.includes('M') && <Box sx={{ width: "100%" }}>
                                        <Typography fontFamily={'inherit'} fontSize={22} mb={1} fontWeight={500}>M-Class Solar Flares: A Moderate Impact</Typography>
                                        <Typography fontFamily={'inherit'} align='justify'>
                                            M-class solar flares take the classification to the next level of impact. They are capable of causing brief but more widespread radio blackouts, particularly affecting high-frequency communication near the polar regions. Additionally, M-class flares have the potential to create minor radiation storms that could endanger astronauts in space.
                                        </Typography>
                                    </Box>}
                                    {data.flare_classes.includes('X') && <Box sx={{ width: "100%" }}>
                                        <Typography fontFamily={'inherit'} fontSize={22} mb={1} fontWeight={500}>X-Class Solar Flares: The Most Powerful Eruptions</Typography>
                                        <Typography fontFamily={'inherit'} align='justify'>
                                            X-class solar flares represent the highest level of solar activity in our classification system. These are the most powerful and intense solar eruptions. An X-class flare can release an immense amount of energy, causing significant disturbances to our technology-dependent world. Each letter increase on the classification scale represents a ten-fold increase in energy output. For example, an X1 flare is ten times more powerful than an M1 flare.
                                        </Typography>
                                    </Box>}
                                </Box>
                                <Box display={"flex"} justifyContent={"flex-end"} mr={2}>
                                    {!showFullText && <Button endIcon={<ExpandMore />} sx={{ fontSize: "16px", color: "#1D2029", border: ".10526em solid #1D2029", textTransform: "none", borderRadius: "0", fontFamily: 'inherit', ":hover": { backgroundColor: "#1D2029", color: "white" } }} onClick={() => setShowFullText(true)}>Read more about classes</Button>}
                                </Box>
                                <Collapse in={showFullText} timeout="auto" unmountOnExit>
                                    <Box>
                                        <Swiper
                                            modules={[Navigation, Pagination]}
                                            spaceBetween={10}
                                            navigation
                                            pagination={{ clickable: true }}
                                            style={{ width: "100%", height: "510px" }}
                                        >
                                            <SwiperSlide>
                                                <Box>
                                                    <Typography fontFamily={'inherit'} align='center' mb={1} fontSize={26}>Class A or B</Typography>
                                                    <img src='/A_and_B_class.jpg' width={300} height={280} style={{ margin: "0 20rem" }} />
                                                    <Box sx={{ marginX: "2rem" }}>
                                                        <Typography fontFamily={'inherit'} fontSize={22} mb={1}>The Smallest Disturbances</Typography>
                                                        <Typography fontFamily={'inherit'} align='justify'>
                                                            A or B-class solar flares are the smallest in the classification system. While they may not be as powerful as their larger counterparts, they are still fascinating astronomical events. B-class flares are relatively common and typically have minimal impact on Earth. These flares are considered minor disturbances and are often overshadowed by larger events.
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Box>
                                                    <Typography fontFamily={'inherit'} align='center' mb={1} fontSize={26}>Class C</Typography>
                                                    <img src='/C_class.jpg' width={300} height={280} style={{ margin: "0 20rem" }} />
                                                    <Box sx={{ marginX: "2rem" }}>
                                                        <Typography fontFamily={'inherit'} fontSize={22} mb={1}>Noticeable Effects</Typography>
                                                        <Typography fontFamily={'inherit'} align='justify'>
                                                            Moving up the classification scale, we encounter C-class solar flares. These eruptions are more significant than B-class flares and can have noticeable effects on our planet. C-class flares are known to cause brief radio blackouts at the polar regions and may lead to minor radiation storms. Although they are not generally harmful, they can pose challenges to communication systems.
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Box>
                                                    <Typography fontFamily={'inherit'} align='center' mb={1} fontSize={26}>Class M</Typography>
                                                    <img src='/M_class.jpg' width={300} height={280} style={{ margin: "0 20rem" }} />
                                                    <Box sx={{ marginX: "2rem" }}>
                                                        <Typography fontFamily={'inherit'} fontSize={22} mb={1}>A Moderate Impact</Typography>
                                                        <Typography fontFamily={'inherit'} align='justify'>
                                                            M-class solar flares take the classification to the next level of impact. They are capable of causing brief but more widespread radio blackouts, particularly affecting high-frequency communication near the polar regions. Additionally, M-class flares have the potential to create minor radiation storms that could endanger astronauts in space.
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Box>
                                                    <Typography fontFamily={'inherit'} align='center' mb={1} fontSize={26}>Class X</Typography>
                                                    <img src='/X_class.jpg' width={300} height={280} style={{ margin: "0 20rem" }} />
                                                    <Box sx={{ marginX: "2rem" }}>
                                                        <Typography fontFamily={'inherit'} fontSize={22} mb={1}>The Most Powerful Eruptions</Typography>
                                                        <Typography fontFamily={'inherit'} align='justify'>
                                                            X-class solar flares represent the highest level of solar activity in our classification system. These are the most powerful and intense solar eruptions. An X-class flare can release an immense amount of energy, causing significant disturbances to our technology-dependent world. Each letter increase on the classification scale represents a ten-fold increase in energy output. For example, an X1 flare is ten times more powerful than an M1 flare.
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </SwiperSlide>
                                        </Swiper>
                                    </Box>
                                </Collapse>
                            </Box>
                        )}
                        {index === 3 && (
                            <Box padding={2}>
                                <ClassificationCSV data={data} />
                            </Box>
                        )}
                        {index === 4 && (
                            <Box padding={2}>
                                <KnowMore />
                            </Box>
                        )}
                    </Grid>
                </Grid>
            </Box>
        </Box>
    ) : (<Box sx={{ display: "flex", width: "100%", height: "100vh", justifyContent: "center", alignItems: "center" }}>
        <Typography fontFamily={"inherit"} fontSize={32} align="center">Please upload a file <br /> to see the results.</Typography>
    </Box>)
    )
}

export default Classification