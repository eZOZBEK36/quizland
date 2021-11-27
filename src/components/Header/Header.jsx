import React from 'react'

const Header = (props) => {
	return (
		<nav className="navbar navbar-info bg-info navbar-expand-lg" aria-label="Eighth navbar example">
			<div className="container">
				<span className="navbar-brand">Quizland</span>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarsExample07">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<span className="nav-link active" aria-current="page">Home</span>
						</li>
						<li className="nav-item">
							<span className="nav-link">Link</span>
						</li>
					</ul>
					<form>
						<input className="form-control" type="text" placeholder="Search" aria-label="Search" />
					</form>
				</div>
			</div>
		</nav>
	)
}

export default Header