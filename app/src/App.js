import './App.css';

import { Categories, Navbar, VideoDetails, Home } from './components/index';
import { ContextFunction } from './context/context-config';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Router>
			<ContextFunction>
				<div className="App">
					<Navbar />

					<Routes>
						<Route path="/home" element={<Home />} />
						<Route path="/video/details/:id" element={<VideoDetails />} />
					</Routes>
				</div>
			</ContextFunction>
		</Router>
	);
}

export default App;
