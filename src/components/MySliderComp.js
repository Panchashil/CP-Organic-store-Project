import React from 'react';
import { useTheme, Box, MobileStepper, Button } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import staticData from '../shared/constant/ConstantData';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath: staticData.Panda,
  },
  {
    imgPath: staticData.Building,
  },
  {
    imgPath: staticData.Tiger,
  },
  {
    imgPath: staticData.redflower,
  },
];

const MySliderComp = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };

  return (
    <Box sx={{ position: 'relative', height: '50vh', overflow: 'hidden' }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={setActiveStep}
        enableMouseEvents
        interval={5000} // Adjust interval as needed
        style={{ height: '100%' }}
      >
        {images.map((step, index) => (
          <Box
            key={index}
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={step.imgPath}
              alt={`Slide ${index + 1}`}
              style={{
                maxWidth: '100%',
                height: 'auto',
                maxHeight: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </Box>
  );
};

export default MySliderComp;
