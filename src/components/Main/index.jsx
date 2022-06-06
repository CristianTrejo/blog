import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import styles from './style';
import { useNavigate } from "react-router-dom";
const axios = require('axios').default;
const server = 'http://localhost:8080';


const Main = () => {
	let navigate = useNavigate();
	const [posts, setPosts] = useState([]);

	/**
	 * GetPosts is an async function that uses axios to get data from the server and then sets the state
	 * of posts to the data returned from the server.
	 */
	const getPosts = async () => {
		axios.get(`${server}/posts`).then(function (response) {
			setPosts(response.data.data)
		}).catch(function (error) {
			console.log(error);
		});
	}
	useEffect(() => {
		getPosts();
	}, []);

	/**
	 * It takes a post object as an argument and returns a grid container with the post's title, text, and
	 * image.
	 * @returns A React component.
	 */
	const PostComponent = (post) => {
		return (
			<Grid container justifyContent="center" alignItems="center" style={styles.post}>
				<Grid item xs={12}>
					<h2>{post.title}</h2>
				</Grid>
				<Grid item xs={12}>
					<text>{post.text}</text>
				</Grid>
				<Grid item xs={12}>
					<img src={post.image} style={styles.image} />
				</Grid>
			</Grid>
		)
	}

	return (
		<Grid
			container
			spacing={2}
			style={styles.container}
			justifyContent="center"
			alignItems="cetner"
		>
			<Grid item xs={12} style={{textAlign: 'center'}}>
				<Button variant="contained" onClick={() => navigate('/create-new')} style={{marginBottom: 16}}>
					Crear nueva entrada
				</Button>
				<Grid container style={styles.content}>
					{posts.length > 0 ?posts.map(post => (
						PostComponent(post)
					)) : <h3 >No hay publicaciones</h3>}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Main;