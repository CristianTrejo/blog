import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const axios = require('axios').default;
const server = 'http://localhost:8080';

const CreateNew = () => {
	const [title, setTitle] = useState('');
	const [text, setText] = useState('');
	const [image, setImage] = useState('');
	let navigate = useNavigate();

	const postPost = () => {
		let data = {
			title: title,
			text: text,
			image: image
		};
		console.log(data)
		axios.post(`${server}/posts`, data).then(function (response) {
			console.log(response);
			navigate('/', { replace: true });
		}).catch(function (error) {
			console.log(error);
		});
	}

	return (
		<Grid container alignItems="center" justifyContent="center">
			<Grid item xs={10}>
				<Grid container alignItems="center" justifyContent="center">
					<Grid item xs={10}>
						<TextField label="Titulo" variant="outlined" onChange={event => setTitle(event.target.value)} />
					</Grid>
					<Grid item xs={10}>
						<TextField label="Texto" multiline rows={4} onChange={event => setText(event.target.value)} />
					</Grid>
					<Grid item xs={10}>
						<TextField label="URL Imagen" onChange={event => setImage(event.target.value)} />
					</Grid>
					<Grid item xs={10}>
						<Button variant="contained" onClick={postPost}>Guardar</Button>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default CreateNew;
