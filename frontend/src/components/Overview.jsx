import React from 'react'
import { Avatar, Box, Container, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import SunText from './SunText'

function Overview() {
    return (
        <Container >
            {/* <Typography mt={6} mb={6} align="center" color={"inherit"} sx={{ fontSize: "150px" }} fontFamily={'inherit'} fontWeight={600}>
            </Typography> */}
            <Box sx={{display: 'flex', justifyContent: 'center', marginTop: "3rem", marginBottom: "1.5rem"}}>
                <SunText />
            </Box>
            <Grid container alignItems={"flex-start"} justifyContent={"center"} sx={{ margin: "0 2rem 0 2rem" }}>
                <Grid item xs={5} mt={1}>
                    <List>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.71 50.71"><path d="M50.71.71L50 0l-7.33 7.33A25 25 0 0 0 7.33 42.67L0 50l.71.71L8 43.38A25 25 0 0 0 43.38 8zM3.35 25.35A22 22 0 0 1 40.54 9.46L9.46 40.54a21.91 21.91 0 0 1-6.11-15.19zm44 0a22 22 0 0 1-37.18 15.9l31.08-31.08a21.89 21.89 0 0 1 6.1 15.18z"></path></svg>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>
                                <p className='font-poppins font-600' >Diameter</p>
                                <p className='font-poppins' >1,391,000,000 km</p>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.71 50.71"><g fillRule="evenodd"><path d="M40.11 5.18c-.36-.27-.73-.52-1.11-.77L4.41 39c.25.38.5.75.77 1.11zM35 2.28c-.44-.18-.9-.35-1.36-.52L1.76 33.64c.17.46.34.92.52 1.36zM37.68 3.61c-.4-.23-.81-.45-1.22-.66L3 36.46c.21.41.43.82.66 1.22zM32 1.26c-.5-.14-1-.27-1.51-.37L.89 30.52c.11.51.23 1 .37 1.51zM14.44 2.85a25.14 25.14 0 0 0-5.71 3.83L6.68 8.73a25.08 25.08 0 0 0-3.83 5.7zM20.46.83a25.77 25.77 0 0 0-2.52.63L1.46 17.94a25.77 25.77 0 0 0-.63 2.52zM28.71.58C28.14.5 27.57.45 27 .41L.41 27c0 .57.09 1.14.17 1.71zM50.35 25.35v-.28L25.07 50.34h.28c.55 0 1.1 0 1.65-.06L50.29 27c.03-.55.06-1.1.06-1.65zM24.93.36c-.67 0-1.33 0-2 .11L.47 22.94c-.07.66-.1 1.32-.11 2zM42.3 7c-.32-.3-.65-.59-1-.88L6.1 41.3c.29.35.58.68.88 1zM50.24 23.05c-.05-.56-.12-1.12-.21-1.67L21.38 50c.55.09 1.11.16 1.67.21zM49.68 19.61c-.12-.5-.25-1-.4-1.49L18.12 49.28c.49.15 1 .28 1.49.4zM49.51 31.78a23.57 23.57 0 0 0 .49-2.39L29.39 50a23.57 23.57 0 0 0 2.39-.51zM44.27 9c-.29-.34-.59-.67-.9-1L8 43.37c.31.31.64.61 1 .9zM46.29 39a25.18 25.18 0 0 0 2.13-4L35 48.42a25.62 25.62 0 0 0 4-2.13zM46 11.28c-.25-.37-.52-.74-.79-1.09l-35 35c.35.27.72.54 1.09.79zM47.51 13.78c-.22-.41-.44-.81-.67-1.21L12.57 46.84l1.21.67zM48.75 16.54c-.17-.45-.36-.89-.55-1.33l-33 33c.44.19.88.38 1.33.55z"></path></g></svg>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>
                                <p className='font-poppins font-600' >Surface Area</p>
                                <p className='font-poppins' >6.09×1012 km<sup>2</sup></p>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.71 50.71"><path d="M25.35.35a25 25 0 1 1-25 25 25 25 0 0 1 25-25z" fillRule="evenodd"></path></svg>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>
                                <p className='font-poppins font-600' >Mass</p>
                                <p className='font-poppins' >5.97237×10<sup>24</sup> kg</p>
                            </ListItemText>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={6}>
                    <Typography mb={2} fontSize={36} fontFamily={"inherit"}>
                        Solar Flares
                    </Typography>
                    <Typography fontSize={17} fontFamily={"inherit"} align='justify'>
                        Solar flares are sudden bursts of energy and radiation from the Sun's surface, triggered by the release of magnetic energy in its atmosphere. These eruptions emit X-rays and ultraviolet light, posing risks to Earth's technology and environment. Disrupting radio communications, GPS signals, and power grids, solar flares also impact satellites, astronauts, and spacecraft through space weather phenomena. Scientists study and monitor these flares to predict and mitigate their effects, ensuring the protection of our technological infrastructure.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Overview