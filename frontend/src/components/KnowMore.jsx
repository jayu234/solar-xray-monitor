import React, { useState } from 'react'
import { Box, Button, Collapse, Typography } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

function KnowMore() {
    const [showFullText1, setShowFullText1] = useState(false);
    const [showFullText2, setShowFullText2] = useState(false);
    return (
        <Box>
            <Typography fontFamily={'inherit'} fontSize={22} fontWeight={500} mb={1}>
                What is a Light Curve File?
            </Typography>

            <Typography fontFamily={'inherit'} align={"justify"} mb={2}>
                A Light Curve (LC) file is a data file that records the variation in brightness or intensity of an astronomical object over a specific period. In the context of solar flares, a light curve file captures how the intensity of solar emission changes over time. It provides a graphical representation of the dynamic behaviour of solar activity.
            </Typography>

            <Typography fontFamily={'inherit'} fontSize={22} fontWeight={500} mb={1}>
                Data Representation:
            </Typography>
            <Typography fontFamily={'inherit'} align={"justify"} mb={2}>
                A typical LC file consists of a series of data points, each associated with a timestamp and an intensity value. The timestamp marks when the measurement was taken, and the intensity value reflects the amount of energy or brightness emitted by the Sun at that moment.
            </Typography>

            <Typography fontFamily={'inherit'} fontSize={22} fontWeight={500} mb={1}>
                Gathering Light Curve Data:
            </Typography>

            <Typography fontFamily={'inherit'} align={"justify"} mb={2}>
                Solar flare LC file data can be collected from various sources, such as ground-based observatories, space telescopes, and satellite missions. Instruments that observe in different wavelengths (e.g., X-rays, ultraviolet, visible light) provide diverse insights into the flare's behaviour. And in our case data is gathered from Chandrayaan’s Solar X-ray Monitor.
            </Typography>
            <Box display={"flex"} justifyContent={"flex-end"} mr={2}>
                {!showFullText1 && <Button endIcon={<ExpandMore />} sx={{ fontSize: "16px", color: "#1D2029", border: ".10526em solid #1D2029", textTransform: "none", borderRadius: "0", fontFamily: 'inherit', ":hover": { backgroundColor: "#1D2029", color: "white" } }} onClick={() => setShowFullText1(true)}>Read more</Button>}
            </Box>
            <Collapse in={showFullText1} timeout="auto" unmountOnExit>
                <Typography fontFamily={'inherit'} fontSize={22} fontWeight={500} mb={1}>
                    Significance and Use:
                </Typography>
                <Typography fontFamily={'inherit'} align={"justify"} mb={2}>
                    <Typography fontFamily={'inherit'} align={"justify"} mb={1}>Light curve files hold immense value for solar research: </Typography>
                    <ul style={{ marginLeft: "2rem" }}>
                        <li>
                            Studying Solar Dynamics: LC files allow scientists to study the dynamic nature of solar flares, revealing patterns, trends, and irregularities.
                        </li>
                        <li>
                            Flare Classification: By analyzing light curves, researchers can categorize solar flares based on their intensity, duration, and other characteristics.
                        </li>
                        <li>
                            Space Weather Prediction: Understanding solar flares is crucial for space weather forecasting, as intense flares can impact satellite communication, power grids, and even space missions.
                        </li>
                        <li>
                            Unveiling Solar Processes: Light curves shed light on the underlying physical processes behind solar flares, aiding in advancing our knowledge of solar physics.
                        </li>
                    </ul>
                </Typography>
                <Typography fontFamily={'inherit'} fontSize={22} fontWeight={500} mb={1}>
                    Analyzing Light Curves:
                </Typography>
                <Typography fontFamily={'inherit'} align={"justify"} mb={1}>
                    Analyzing an LC file involves:
                </Typography>
                <ul>
                    <li>
                        Visualization: Converting the data into a graphical representation helps visualize the intensity variation over time. This allows researchers to identify trends and anomalies.
                    </li>
                    <li>
                        Feature Extraction: Relevant features, like peak intensity, duration, rise time, and decay time, are extracted from the light curve to quantify and describe the flare's characteristics.
                    </li>
                    <li>
                        Classification: Utilizing machine learning and statistical techniques, researchers classify flares into different categories (e.g., C-class, M-class, X-class) based on their intensity. This helps in understanding the potential impact of a flare.
                    </li>
                </ul>
                <Typography fontFamily={'inherit'} fontSize={22} fontWeight={500} mb={1} mt={2}>
                    Light Curves and What They Can Tell Us:
                </Typography>
                <Typography fontFamily={'inherit'} align={"justify"} mb={2}>
                    Images show a scientist where in an object light is emitted. Another piece of information we have about light is when it reaches the detector. Astronomers use this "timing" information to create light curves and perform timing analysis.
                </Typography>
                <Typography fontFamily={'inherit'} align={"justify"} mb={2}>
                    Light curves are graphs that show the brightness of an object over some time. In the study of objects that change their brightness over time, such as novae, supernovae, and variable stars, the light curve is a simple but valuable tool to a scientist.
                </Typography>
                <Typography fontFamily={'inherit'} fontSize={22} fontWeight={500} mb={1}>
                    What can we learn from light curves?
                </Typography>
                <Typography fontFamily={'inherit'} align={"justify"} mb={2}>
                    The record of changes in brightness that a light curve provides can help astronomers understand processes at work within the object they are studying and identify specific categories (or classes) of stellar events. We know generally what light curves look like for a set of objects, so when we plot a new light curve, we can compare it to those standard light curves to possibly identify the type of object we're observing.
                </Typography>
                <Typography fontFamily={'inherit'} align={"justify"} mb={2}>
                    If the light curve we measured looked like the graph below, we would identify the object as an eclipsing binary star. The light curve also shows us that it takes 10 days for one of the stars in the binary to orbit completely around the other. Astronomers would say that the binary system has an orbital period of 10 days.
                </Typography>
                <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                    <img src="/img1.png" width={300} />
                    <Typography component={"em"} fontFamily={'inherit'} align={"justify"} mb={3} >
                        Light curve of an eclipsing binary system
                    </Typography>
                </Box>
                <Typography fontFamily={'inherit'} align={"justify"} mb={2}>
                    If, instead, the light curve we measured looked like the one below, we would know that this object was the death of a star by a massive explosion called a supernova!
                </Typography>
                <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                    <img src="/img2.png" width={300} />
                    <Typography component={"em"} fontFamily={'inherit'} align={"justify"} mb={2}>
                        The light curve of a supernova
                    </Typography>
                </Box>
                <Typography fontFamily={'inherit'} fontSize={22} fontWeight={500} mb={1}>
                    Timing analysis
                </Typography>
                <Typography fontFamily={'inherit'} align={"justify"} mb={2}>
                    Timing analysis allows astronomers to study the dynamic properties of an object. The targets of timing studies include accretion flows, oscillations, and accretion disk instabilities, as well as magnetic field configurations and instabilities in compact and non-compact stellar systems and active galaxies.
                </Typography>
                <Typography fontFamily={'inherit'} align={"justify"} mb={2}>
                    Anyone who has played a musical instrument knows how important it is to tune the instrument. Occasionally, a tuning fork is used to do that. A typical tuning fork used by musicians is for a pure A tone, of 440 Hz. But how does that apply in this situation? One Hertz (Hz) is one wave, or cycle, per second. A pure tone like an A travels just like a wave through the air, received by the eardrum as a signal at 440 waves per second. Now, imagine a musical chord. A C-major chord is made up of the notes C, E and G. The chord can be decomposed into three waves, each having a different frequency in Hz. In fact, any sound can be decomposed into a number of frequencies — some stronger, some weaker.
                </Typography>
                <Typography fontFamily={'inherit'} align={"justify"} mb={2}>
                    Sound is not the only type of data that can be decomposed into a number of frequencies. Astronomers can make time series data of astronomical objects. A time series is a series of data points taken at successive time intervals – data taken over time. Astronomers use a number of tools to study time series data in terms of the frequencies present in the data. This is useful to astronomers because it allows them to determine periodic components of the data, which can then be related to physical properties of the system, like rotation, binary period, and so on.
                </Typography>
                <Box display={"flex"} justifyContent={"flex-end"} mr={2}>
                    {!showFullText2 && <Button endIcon={<ExpandMore />} sx={{ fontSize: "16px", color: "#1D2029", border: ".10526em solid #1D2029", textTransform: "none", borderRadius: "0", fontFamily: 'inherit', ":hover": { backgroundColor: "#1D2029", color: "white" } }} onClick={() => setShowFullText2(true)}>Read more</Button>}
                </Box>
                <Collapse in={showFullText2} timeout="auto" unmountOnExit>
                    <Typography fontFamily={'inherit'} fontSize={22} fontWeight={500} mb={1}>
                        Methods of timing analysis:
                    </Typography>
                    <Typography fontFamily={'inherit'} fontSize={20} fontWeight={500} mb={1}>
                        1. Fourier transform
                    </Typography>
                    <Typography fontFamily={'inherit'} align={"justify"} mb={2}>
                        A Fourier transform is a mathematical operation that changes data from time domain to frequency domain. This allows the data to be represented as the sum of a series of sines and cosines at various amplitudes, rather than as a continuous function.
                    </Typography>
                    <Typography fontFamily={'inherit'} align={"justify"} mb={2}>
                        Astronomers use Fourier transform to visualize the data as a large number of periodic components, each with a different period and a different strength. Very strong components may appear in data where there is a periodicity present. Astronomers then must estimate the significance of this feature (which is another way of saying that they must determine how much confidence they have that it is a true periodicity in the data).
                    </Typography>
                    <Typography fontFamily={'inherit'} align={"justify"} mb={2}>
                        When astronomers are looking for new phenomena, such as pulsars, they are very conservative in what they take to be a real signal. A frequency has to be many times stronger than it would be in a random data set to be taken seriously. A Fourier transform is based on a mathematical theorem that any signal can be decomposed into an infinite number of sine waves. This means that Fourier analysis works best when the signal we are looking for is very similar to a sine wave.
                    </Typography>
                    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                        <img src='/img3.png' width={400} />
                        <Typography component={"em"} fontFamily={'inherit'} align={"center"} mb={2} sx={{ width: "80%", mx: "auto" }}>
                            Fourier analysis of the time series on the left results in the Fourier power spectra on the right. It is clear that the analysis does identify the periodic behavior in the data.
                        </Typography>
                    </Box>
                    <Typography fontFamily={'inherit'} fontSize={20} fontWeight={500} mb={1}>
                        2. Epoch folding
                    </Typography>
                    <Typography fontFamily={'inherit'} align={"justify"} mb={2}>
                        Another method that is useful for a signal with arbitrary shape is epoch folding. This is done by choosing a range of periods, and "folding" the data at those periods.
                    </Typography>
                    <Typography fontFamily={'inherit'} align={"justify"} mb={2}>
                        As an example, say an astronomer has one reading per second for 500 seconds of an object. She suspects that the object has a period of 25 seconds, so she will "fold the data on a period of 25 seconds." To do this, she would start with the first 25 points, and then add the second 25 points (points 26-50) to the first 25. Now add the third set of 25 points, and so on, until she reaches the end of the data set. If the period of the source is not close to 25 seconds, then times where the signal is high will cancel out with times where the signal is low in each of the 25 "bins", and the resulting epoch folded light curve will look sort of flat and boring. If, however, 25 seconds is very close to a period that is actually in the data, then bins where the signal is high will add together, and bins where it is low will add together, and the result will be a very nice looking epoch folded light curve. At this point, the astronomer must again assess how significant the resulting light curve is. This is generally done by looking at the spread of values, or errors, in the typical bin, and comparing how much higher the high bins are than the standard error.
                    </Typography>
                    <Typography fontFamily={'inherit'} align={"justify"} mb={2}>
                        The illustrations below show the process of epoch folding for an X-ray binary system called Circinus X-1 using data from the All-Sky Monitor aboard the RXTE satellite.
                    </Typography>
                    <Typography fontFamily={'inherit'} align={"justify"} mb={2}>
                        Here is the original lightcurve. There are spikes in the intensity that seem to repeat at regular intervals.
                    </Typography>
                    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                        <img src='/img4.png' width={500} />
                    </Box>
                    <Typography fontFamily={'inherit'} align={"justify"} mb={2}>
                        Looking closer at the data, we can determine that those peaks are occurring about every 16.6 days. So, let's cut the light curve into segments that are 16.6 days long
                    </Typography>
                    <Typography fontFamily={'inherit'} align={"justify"} mb={2}>
                        To perform the epoch folding technique, we add those light curves together to end up with a single light curve that is 16.6 days in length where the intensities in each time bin are are the sum of the intensities of the cut lightcurves. If we've chosen a period that's close the real period, the highs will sum together to show a peak in the plot.
                    </Typography>
                </Collapse>
            </Collapse>
        </Box>
    )
}

export default KnowMore