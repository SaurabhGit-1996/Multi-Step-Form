import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const cities = [
	{ value: "New Delhi", label: "New Delhi" },
	{ value: "Gurugram", label: "Gurugram" },
	{ value: "Noida", label: "Noida" },
	{ value: "Mumbai", label: "Mumbai" },
	{ value: "Other", label: "Other" },
];

const initialValues = {
	fname: "",
	lname: "",
	age: "",
	city: "",
	gender: "",
};

export default function Form1() {
	const [values, setValues] = useState(initialValues);
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
		console.log(values);
	};

	return (
		<Box
			component="form"
			sx={{
				"& .MuiTextField-root": { m: 1, width: "25ch" },
			}}
			noValidate
			autoComplete="off"
		>
			<div>
				<TextField
					required
					id="fname"
					value={values.fname}
					name="fname"
					label="First Name"
					defaultValue=""
					type="text"
					onChange={handleInputChange}
				/>
				<TextField
					required
					id="lname"
					value={values.lname}
					name="lname"
					label="Last Name"
					defaultValue=""
					type="text"
					onChange={handleInputChange}
				/>

				<TextField
					id="age"
					label="Age"
					value={values.age}
					name="age"
					type="number"
					onChange={handleInputChange}
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<TextField
					id="city"
					select
					value={values.city}
					label="City"
					name="city"
					defaultValue=""
					helperText="Please select your city"
					onChange={handleInputChange}
				>
					{cities.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</TextField>
				<br />
				<FormControl>
					<FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
					<RadioGroup
						aria-labelledby="demo-radio-buttons-group-label"
						defaultValue="female"
						value={values.gender}
						name="gender"
						onChange={handleInputChange}
					>
						<FormControlLabel
							value="female"
							control={<Radio />}
							label="Female"
						/>
						<FormControlLabel value="male" control={<Radio />} label="Male" />
						<FormControlLabel value="other" control={<Radio />} label="Other" />
					</RadioGroup>
				</FormControl>
			</div>
		</Box>
	);
}
