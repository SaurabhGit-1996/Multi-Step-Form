import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const initialValues = { review: "" };
export default function Form3() {
	const [values, setValues] = useState(initialValues);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
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
			<form>
				<div>
					<TextField
						id="review"
						name="review"
						value={values.review}
						label="Your Reviews"
						multiline
						rows={4}
						type="text"
						onChange={handleInputChange}
					/>
				</div>
				<Button type="button" variant="contained">
					Submit
				</Button>
			</form>
		</Box>
	);
}
