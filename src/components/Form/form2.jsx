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
	{ value: "India", label: "India" },
	{ value: "U.S.A", label: "U.S.A" },
	{ value: "Canada", label: "Canada" },
	{ value: "Mexico", label: "Mexico" },
	{ value: "Other", label: "Other" },
];

const initialValues = {
	cname: "",
	address: "",
	empno: "",
	year: "",
	location: "",
	type: "",
};
export default function Form2() {
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
					id="cname"
					value={values.company}
					name="cname"
					label="Company Name"
					defaultValue=""
					type="text"
					onChange={handleInputChange}
				/>
				<TextField
					required
					id="address"
					values={values.address}
					name="address"
					label="Address"
					defaultValue=""
					type="text"
					onChange={handleInputChange}
				/>

				<TextField
					required
					id="empno"
					name="empno"
					values={values.empno}
					label="No. of Employees"
					defaultValue=""
					type="number"
					onChange={handleInputChange}
				/>

				<TextField
					required
					id="year"
					name="year"
					value={values.year}
					label="Est. Year"
					defaultValue=""
					type="text"
					onChange={handleInputChange}
				/>

				<TextField
					id="location"
					select
					label="Location"
					values={values.location}
					name="location"
					defaultValue=""
					helperText="Location"
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
					<FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
					<RadioGroup
						aria-labelledby="demo-radio-buttons-group-label"
						defaultValue="it"
						value={values.type}
						name="type"
						onChange={handleInputChange}
					>
						<FormControlLabel value="it" control={<Radio />} label="IT" />
						<FormControlLabel
							value="architecture"
							control={<Radio />}
							label="Architecture"
						/>
						<FormControlLabel
							value="textile"
							control={<Radio />}
							label="Textile"
						/>
						<FormControlLabel value="other" control={<Radio />} label="Other" />
					</RadioGroup>
				</FormControl>
			</div>
		</Box>
	);
}
