import * as React from 'react';
import { Box, Collapse, Container, Divider, Grid, List, ListItemButton, ListItemText, Typography } from '@mui/material'
import PropTypes from 'prop-types';
import Charts from './Charts';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import AnalyzationCSV from './AnalyzationCSV';
import KnowMore from './KnowMore';

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


function Analyze({ data, setData }) {
    const [index, setIndex] = React.useState(0);
    const [open, setOpen] = React.useState(false);

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
                                <ListItemText primary="Analyze" primaryTypographyProps={{ fontFamily: 'inherit' }} />
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Divider sx={{ borderBottomWidth: 3, borderColor: "#000" }} />
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton onClick={() => { setIndex(1) }} sx={{ pl: 4 }} >
                                        <ListItemText primary="Charts" primaryTypographyProps={{ fontFamily: 'inherit', fontWeight: index === 1 ? 600 : 400 }} />
                                    </ListItemButton>
                                </List>
                                {/* <Divider sx={{ borderBottomWidth: 3, borderColor: "#000" }}/> */}
                                <List component="div" disablePadding>
                                    <ListItemButton onClick={() => { setIndex(2) }} sx={{ pl: 4 }} >
                                        <ListItemText primary="CSV" primaryTypographyProps={{ fontFamily: 'inherit', fontWeight: index === 2 ? 600 : 400 }} />
                                    </ListItemButton>
                                </List>
                            </Collapse>
                            <ListItemButton onClick={() => { setIndex(3) }}>
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
                                        <li>Rows: {data.x.length}</li>
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
                                </Grid>
                            </Grid>
                        )}
                        {index === 1 && (
                            <Box padding={2}>
                                <Charts data={data} />
                            </Box>
                        )}
                        {index === 2 && (
                            <Box padding={2}>
                                <AnalyzationCSV data={data} />
                            </Box>
                        )}
                        {index === 3 && (
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

export default Analyze