import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Backdrop, Button, CircularProgress, Icon, IconButton } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { md: "700px", xs: "100%" },
    height: { md: "auto", xs: '100%' },
    bgcolor: 'background.paper',
    border: '1px solid #cecece',
    boxShadow: 24,
    p: 2,
    ":focus-visible": { outline: "none" }
};

function UploadModal({ open, setOpen, data, setData, operation }) {
    const [dragActive, setDragActive] = useState(false);
    const [uploading, setUploading] = useState(false);
    const inputRef = React.useRef(null);
    const navigate = useNavigate();

    const handleDrag = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = function (e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files);
        }
    };

    const handleChange = function (e) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            handleFile(e, e.target.files);
        }
    };

    const onButtonClick = () => {
        inputRef.current.click();
    };

    async function handleFile(e, files) {
        const name = files[0].name;
        const type = name.slice(name.indexOf(".") + 1);
        const date = {
            year: name.slice(8, 12),
            month: name.slice(12, 14),
            day: name.slice(14, 16)
        }
        if (type !== 'lc') {
            alert("Please choose valid light-curve file");
        } else {
            setUploading(true);
            e.preventDefault();
            const formData = new FormData();
            formData.append("file", files[0]);
            try {
                const url = type === ""
                const res = await axios.post(`http://localhost:5000/${operation}`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    }
                });
                setData({ ...res.data, fileName: name, fileDate: date });
                console.log({ ...res.data, fileName: name, fileDate: date });
                setOpen(false);
                setDragActive(false);
                navigate("/result");
                setUploading(false);
            } catch (err) {
                alert("There was a problem with the server");
                setUploading(false);
            }
        }
    }
    const statuses = ['Uploading...', 'Analyzing...', 'Generating graphs...'];
    const [currentStatusIndex, setCurrentStatusIndex] = useState(0);

    useEffect(() => {
        // const intervalId = setInterval(() => {
        //     setCurrentStatusIndex((currentStatusIndex + 1)% statuses.length);
        // }, 15000);

        // return () => {
        //     clearInterval(intervalId);
        // };
        // console.log(currentStatusIndex);
        const timeOutId = setTimeout(()=>{
            setCurrentStatusIndex((currentStatusIndex+1)%3)
        }, 10000);
        return () => {
            clearTimeout(timeOutId);
        }
    }, [currentStatusIndex]);
    return (
        <>
            <Modal
                open={open}
                onClose={(event, reason) => {
                    if (reason !== "backdropClick")
                        setOpen(false)
                }}
                aria-labelledby="upload-modal"
                aria-describedby="upload-modal-description"
            >
                <Box sx={style}>
                    {/* Close and Upload button */}
                    <Box sx={{ columnGap: '1rem', marginTop: '0.5rem', position: 'relative' }}>
                        <IconButton onClick={() => { setOpen(false) }} ><CloseRoundedIcon sx={{ width: 20, height: 20 }} /></IconButton>
                    </Box>
                    {!uploading ? <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '400px', border: '2px dashed #000', backgroundColor: '#f3f4f7', marginY: '1rem' }}>
                        <Box component={'form'} onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
                            <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange} />
                            <label id="label-file-upload" htmlFor="input-file-upload">
                                <div style={{ color: '#98989b', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CloudUploadIcon sx={{ fontSize: '36px' }} /></div>
                                <Typography align='center' fontSize={20} fontFamily={'inherit'} fontWeight={500} color={"#98989b"} sx={{ userSelect: 'none' }}>Drag and drop your file here <br /><span style={{ color: '#1D2029' }}>Or</span></Typography>
                            </label>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Button sx={{ fontSize: "16px", color: "#1D2029", border: ".10526em solid #1D2029", textTransform: "none", borderRadius: "3px", fontFamily: 'inherit', ":hover": { backgroundColor: "#1D2029", color: "white" } }} onClick={onButtonClick}>Browse</Button>
                        </Box>
                        {dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div>}
                    </Box> : (<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '400px', border: '2px dashed #000', backgroundColor: '#f3f4f7', marginY: '1rem' }}>
                        <CircularProgress />
                        <Typography fontFamily={"inherit"} fontSize={30}>
                            Uploading...
                            {/* {statuses[currentStatusIndex]} */}
                        </Typography>
                    </Box>)}
                </Box>
            </Modal >
        </>
    )
}

export default UploadModal