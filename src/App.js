import { ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Main, ProtectedRoute } from './components';
import { Documentation } from './pages';
import { theme } from './helper/theme';
import { Login } from './pages';

// @TODO: Dummy Component:
const Dashboard = () => <Main>Dashboard</Main>;

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
					path="/documentaion"
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
