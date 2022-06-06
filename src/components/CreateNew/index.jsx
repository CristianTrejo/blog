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

	/**
	 * It takes the data from the form and sends it to the server.
	 */
	const postPost = () => {
		/* Checking if the title, text and image are not empty. If they are not empty, it will send the data
		to the server. If they are empty, it will show an alert. */
		if(title !== '' && text !== '' && image !== '' ){
			let data = {
				title: title,
				text: text,
				image: image
			};
			console.log(data)
			/* Sending the data to the server. */
			axios.post(`${server}/posts`, data).then(function (response) {
				console.log(response);
				navigate('/', { replace: true });
			}).catch(function (error) {
				console.log(error);
			});
		} else {
			alert('Debes llenar todos los datos');
		}
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
