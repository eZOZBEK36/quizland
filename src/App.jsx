import React, { useState } from 'react'
import Quiz from './components/Questions/Quiz'
import Header from './components/Header/Header'
import Greeting from './components/Greeting/Greeting'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
	const [ pages, setPages ] = useState(0)
	const [ balls, setBalls ] = useState(0)
	const [ test, setTest ] = useState([
		{
			id: 1,
			question: '2x2 nechchi',
			variants: [
				{
					num: 1,
					body: '5',
					isTrue: 'false'
				},
				{
					num: 2,

					body: '8',
					isTrue: 'false'
				},
				{
					num: 3,
					body: '4',
					isTrue: 'true'
				},
				{
					num: 4,
					body: '2',
					isTrue: 'false'
				},
			],
		},
		{
			id: 2,
			question: '5x5 nechchi',
			variants: [
				{
					num: 1,
					body: '15',
					isTrue: 'false'
				},
				{
					num: 2,
					body: '25',
					isTrue: 'true'
				},
				{
					num: 3,
					body: '48',
					isTrue: 'false'
				},
				{
					num: 4,
					body: '32',
					isTrue: 'false'
				},
			],
		},
		{
			id: 3,
			question: '10x10 nechchi',
			variants: [
				{
					num: 1,
					body: '100',
					isTrue: 'true'
				},
				{
					num: 2,
					body: '200',
					isTrue: 'false'
				},
				{
					num: 3,
					body: '500',
					isTrue: 'false'
				},
				{
					num: 4,
					body: '50',
					isTrue: 'false'
				},
			],
		}
	])
	const [ isGreeting, setIsGreeting ] = useState(false)
	return (
		<Router>
			<Header />
			{
				!isGreeting ? <Greeting setIsGreeting={ setIsGreeting } /> :

					<Routes>
						<Route path="/" element={
							pages !== test.length ? <Quiz
								pages={ pages }
								setPages={ setPages }
								balls={ balls }
								setBalls={ setBalls }
								test={ test }
								setTest={ setTest }
							/>
								:
								<div className="container">
									<h1>{ balls }/{ test.length }</h1>
									<button onClick={ () => {
										setPages(0)
										setBalls(0)
									} } className="btn btn-success">Retry</button>
								</div>
						} />
					</Routes>
			}
		</Router>
	)
}

export default App