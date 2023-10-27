import React from 'react'
import { Button, Container, Grid, Typography } from '@mui/material'
import UploadModal from './Modal';

function Upload({ data, setData, setOperation, operation }) {
    const [open, setOpen] = React.useState(false);
    return (
        <Container sx={{ marginBottom: "8rem" }}>
            {open && <UploadModal open={open} setOpen={setOpen} data={data} setData={setData} operation={operation} />}
            {/* <-------------- Analyzation --------------> */}
            <Grid container mt={10} justifyContent={"space-between"}>
                <Grid item xs={6}>
                    <Typography mb={4} fontSize={36} fontFamily={"inherit"}>
                        Analyze
                    </Typography>
                    <Typography fontSize={17} fontFamily={"inherit"} align='justify'>
                        Solar flares are caused by the Sun’s magnetic field and can disrupt or even destroy infrastructure on Earth. Predicting such events has been challenged by a lack of high-resolution solar data, which has only existed since 2010. Through deep learning, FDL’s Super-resolution team was able to extract information from low-resolution images to obtain a deeper understanding of solar-magnetic activity that better accounts for solar flares.
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Button sx={{ fontSize: "16px", color: "#1D2029", border: ".10526em solid #1D2029", textTransform: "none", borderRadius: "0", fontFamily: 'inherit', paddingY: "1rem", paddingX: "2rem", ":hover": { backgroundColor: "#1D2029", color: "white" } }} onClick={() => { setOperation("analyze"); setOpen(true) }}>Try it out</Button>
                </Grid>
            </Grid>
            {/* <-------------- Classification --------------> */}
            <Grid container mt={10} justifyContent={"space-between"}>
                <Grid item xs={2}>
                    <Button sx={{ fontSize: "16px", color: "#1D2029", border: ".10526em solid #1D2029", textTransform: "none", borderRadius: "0", fontFamily: 'inherit', paddingY: "1rem", paddingX: "2rem", ":hover": { backgroundColor: "#1D2029", color: "white" } }} onClick={() => { setOperation("classify"); setOpen(true) }}>Try it out</Button>
                </Grid>
                <Grid item xs={6}>
                    <Typography mb={4} fontSize={36} fontFamily={"inherit"}>
                        Classification
                    </Typography>
                    <Typography fontSize={17} fontFamily={"inherit"} align='justify'>
                        Solar flares are caused by the Sun’s magnetic field and can disrupt or even destroy infrastructure on Earth. Predicting such events has been challenged by a lack of high-resolution solar data, which has only existed since 2010. Through deep learning, FDL’s Super-resolution team was able to extract information from low-resolution images to obtain a deeper understanding of solar-magnetic activity that better accounts for solar flares.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Upload