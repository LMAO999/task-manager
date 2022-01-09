import React from 'react'
import { initializeApp } from "firebase/app";
import GetStarted from './Components/GetStarted/GetStarted';
import LogIn from './Components/LogIn/LogIn';
import About from './Components/About/About';
import { Container } from 'postcss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn';
import Contact from './Components/Contact/Contact';
import DashBoard from './Components/DashBoard/DashBoard';


const firebaseConfig = {
	apiKey: "AIzaSyAR8qPnYMhL3qL421hIpCaPs96c1FocNzI",
	authDomain: "task-scheduler-113e0.firebaseapp.com",
	projectId: "task-scheduler-113e0",
	storageBucket: "task-scheduler-113e0.appspot.com",
	messagingSenderId: "341258515863",
	appId: "1:341258515863:web:2602a18b1ab66ddfdd00d2",
	measurementId: "G-72F27YGBBX"
};

initializeApp(firebaseConfig);

function App() {
	return (
		<div  className="bg-gradient-to-r from-indigo-500 box ">
			<Router>
				<Switch>
					<Route path = "/about">
						<About/>
					</Route>
					<Route path = "/Home">
						<Home/>
					</Route>

					
					<Route path = "/" exact>
						<GetStarted/>
					</Route>
					<Route path = "/login" exact>
						<LogIn/>
					</Route>
					<Route path = "/signin" exact>
						<SignIn/>
					</Route>
					<Route path = "/contact" exact>
						<Contact/>
					</Route>
					<Route path = "/dashboard" exact>
						<DashBoard/>
					</Route>
					


				</Switch>
			</Router>
			
		</div>
	);
}

export default App;
