import React from 'react'

const Quiz = ({ pages, setPages, balls, setBalls, test, setTest }) => {
	const submitHandler = (e) => {
		e.preventDefault()
		if (pages < test.length && e.target.elements.answer.value) {
			setPages(pages + 1)
		}
		if (e.target.elements.answer.value === 'true') {
			setBalls(1 + balls)
		}
	}

	const shuffle = (array) => {
		let i = array.length
		let j = 0
		let temp

		while (i--) {
			j = Math.floor(Math.random() * (i + 1))

			temp = array[ i ]
			array[ i ] = array[ j ]
			array[ j ] = temp
		}
		return array
	}

	return (
		<div className="container">
			{ test.map((test, i) => {
				if (pages === i) {
					return (<div className="py-4" key={ test.id }>
						<div>{ test.question }</div>
						<form className="py-2" onSubmit={ e => submitHandler(e) }>
							{
								shuffle(test.variants).map((v, i) => {
									return (
										<div key={ i }>
											<input className="form-check-input me-2" type="radio" name="answer" value={ v.isTrue } id={ v.body + i } />
											<label className="form-check-label" htmlFor={ v.body + i }>{ v.body }</label>
										</div>
									)
								})
							}
							<button className="btn btn-success mt-2">Send</button>
						</form>
					</div>
					)
				}
				return true
			}) }
		</div>
	)
}

export default Quiz