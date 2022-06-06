import './App.css';
import Main from './components/Main';
import CreateNew from './components/CreateNew';
import { RecoilRoot } from 'recoil';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom";

function App() {
	return (
		<RecoilRoot>
			<Router>
				<Routes>
					<Route path="/" element={<Main />}/>
					<Route path="/create-new" element={<CreateNew />} />
				</Routes>
			</Router>
		</RecoilRoot>
	);
}

export default App;
