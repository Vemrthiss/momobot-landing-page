import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import * as Pic from "./Assets.jsx"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Fu Xiongwei, Ayman Khan, Jeremy Chia, Sean Yap',
    imgPath:
      '../assets/group_photo_0.jpg',
  },
  {
    label: 'Jeremy Chia, Nicodemus Yim, Akshaya Maddula, Fu Xiongwei',
    imgPath:
      '../assets/group_photo_1.jpg',
  },
  {
    label: 'Joel Tay, Kong Mei Jia, Claudia Lai, Poh Boon Pin',
    imgPath:
      '../assets/group_photo_2.jpg',
  },
  {
    label: 'Fatima Co Pepito, Corliss Tay, Ho Rui En, Nicodemus Yim, Anisha Singh Le Shuang',
    imgPath:
      '../assets/group_photo_3.jpg',
  },
  {
    label: 'Akhil Jayadeep, Augustine Lee',
    imgPath:
      '../assets/group_photo_4.jpg',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: '80%' , maxWidth: 800, flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval="5000"
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {(Math.abs(activeStep - index) <= 2 && index == 0) ? (
              <Pic.GroupPic1
              className="block w-full"
              />
            ) : null}
            {(Math.abs(activeStep - index) <= 2 && index == 1) ? (
              <Pic.GroupPic2
              className="block w-full"
              />
            ) : null}
            {(Math.abs(activeStep - index) <= 2 && index == 2) ? (
              <Pic.GroupPic3
              className="block w-full"
              />
            ) : null}
            {(Math.abs(activeStep - index) <= 2 && index == 3) ? (
              <Pic.GroupPic4
              className="block w-full"
              />
            ) : null}
            {(Math.abs(activeStep - index) <= 2 && index == 4) ? (
              <Pic.GroupPic5
              className="block w-full"
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
        {activeStep == 3 ? (
        <Paper
            square
            elevation={0}
            sx={{
            display: 'flex',
            alignItems: 'center',
            height: 80,
            pl: 2,
            bgcolor: 'background.default',
            paddingRight: '16px',
            textAlign: 'center'
            }}
        >
            <Typography sx={{width: "100%"}}>{images[activeStep].label}</Typography>
        </Paper>) : (
        <Paper
            square
            elevation={0}
            sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: 'background.default',
            paddingRight: '16px',
            textAlign: 'center'
            }}
        >
            <Typography sx={{width: "100%"}}>{images[activeStep].label}</Typography>
        </Paper>)}
        
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
