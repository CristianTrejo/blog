import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import styles from './style';
const axios = require('axios').default;
const server = 'http://localhost:8080';


const Main = () => {
	const [posts, setPosts] = useState([]);

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
			<img src={post.image} />
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
			<Grid item xs={12}>
				<Grid container style={styles.content}>
					{posts.map(post => (
						PostComponent(post)
					))}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Main;