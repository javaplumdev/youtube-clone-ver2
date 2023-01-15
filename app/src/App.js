import './App.css';

import { Categories, Navbar, VideoComponent, Home } from './components/index';
import { ContextFunction } from './context/context-config';

function App() {
	return (
		<ContextFunction>
			<div className="App">
				<Navbar />
				<Home />
			</div>
		</ContextFunction>
	);
}

export default App;
