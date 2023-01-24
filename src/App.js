import { ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Main, ProtectedRoute } from './components';
import { theme } from './helper/theme';
import { Login, SmartPhone, Dashboard, Documentation } from './pages';

// @TODO: Dummy Component:

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Routes>
				<Route
					path="/"
					element={
						<ProtectedRoute>
							<Dashboard />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/smartphone"
					element={
						<ProtectedRoute>
							<SmartPhone />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/documentation"
					element={
						<ProtectedRoute>
							<Documentation />
						</ProtectedRoute>
					}
				/>
				<Route path="/login" element={<Login />} />
			</Routes>
		</ThemeProvider>
	);
}

export default App;
