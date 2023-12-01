import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Form3 from "../Form/form3";
import Form2 from "../Form/form2";
import Form1 from "../Form/form";

const steps = [
	{
		label: "Employee Data",
	},
	{
		label: "Company Data",
	},
	{
		label: "Jo Dil Kre Likh De Bhai",
	},
];

const forms = [
	{
		description: <Form1 />,
	},
	{
		description: <Form2 />,
	},
	{
		description: <Form3 />,
	},
];

export default function Progress() {
	const [activeStep, setActiveStep] = React.useState(0);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<Grid container spacing={2}>
			<Grid item xs={4}>
				<Box sx={{ maxWidth: 400 }}>
					<Stepper activeStep={activeStep} orientation="vertical">
						{steps.map((step, index) => (
							<Step key={step.label}>
								<StepLabel
									optional={
										index === 2 ? (
											<Typography variant="caption">Last step</Typography>
										) : null
									}
								>
									{step.label}
								</StepLabel>
								<StepContent>
									<Typography>{step.description}</Typography>
									<Box sx={{ mb: 2 }}>
										<div>
											<Button
												variant="contained"
												onClick={handleNext}
												sx={{ mt: 1, mr: 1 }}
											>
												{index === steps.length - 1 ? "Finish" : "Continue"}
											</Button>
											<Button
												disabled={index === 0}
												onClick={handleBack}
												sx={{ mt: 1, mr: 1 }}
											>
												Back
											</Button>
										</div>
									</Box>
								</StepContent>
							</Step>
						))}
					</Stepper>
				</Box>
			</Grid>
			<Grid item xs={8}>
				{activeStep === steps.length && (
					<Paper square elevation={0} sx={{ p: 3 }}>
						<Typography>All steps completed - you&apos;re finished</Typography>
						<Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
							Reset
						</Button>
					</Paper>
				)}
				{activeStep < steps.length && (
					<Box sx={{ p: 3 }}>{forms[activeStep].description}</Box>
				)}
			</Grid>
		</Grid>
	);
}
