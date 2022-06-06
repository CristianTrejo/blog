import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./style";
import { textAlign } from "@mui/system";
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
		<Grid container alignItems="center" justifyContent="center" style={styles.container}>
			<Grid item xs={10}>
				<Grid container alignItems="center" justifyContent="center" style={styles.content} rowSpacing={2}>
					<Grid item xs={8}>
						<TextField label="Titulo" variant="outlined" onChange={event => setTitle(event.target.value)} fullWidth />
					</Grid>
					<Grid item xs={8}>
						<TextField label="Texto" multiline rows={4} onChange={event => setText(event.target.value)} fullWidth />
					</Grid>
					<Grid item xs={8}>
						<TextField label="URL Imagen" onChange={event => setImage(event.target.value)} fullWidth />
					</Grid>
					<Grid item xs={5} style={{textAlign: 'center'}}>
						<Button variant="contained" onClick={postPost} style={{width: '100%'}} >Guardar</Button>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default CreateNew;
