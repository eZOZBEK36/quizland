import React, { useState } from 'react'

const Greeting = ({ setIsGreeting }) => {
	const [ check, setCheck ] = useState(false)
	return (
		<div className="container">
			<h2 className="text-center py-3">Lorem ipsum dolor sit amet, consectetur adipisicing.</h2>
			<p className="px-2" style={ { textAlign: 'justify' } }>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nesciunt minima optio harum vitae nostrum quasi ex cum nobis voluptatum. Reprehenderit natus omnis facilis adipisci, mollitia corporis amet culpa quidem delectus quod illo molestiae commodi quae officiis beatae quasi. Commodi omnis harum eos eaque, odio, excepturi beatae id accusantium, cumque molestias nisi repudiandae illo soluta facilis aspernatur aut nam odit magnam sapiente porro hic sit? Harum sunt iste, aspernatur excepturi distinctio voluptas, voluptatem cumque dolorum, maiores laboriosam alias consequatur nihil? Placeat facere accusantium hic ducimus molestias assumenda vitae nihil atque eligendi repellendus magni ex, quo doloribus in nulla temporibus voluptatem iusto maiores corrupti at praesentium totam, qui error aliquam. Natus fugit, fuga, minima voluptatum ab temporibus labore pariatur quidem dolore ipsa rerum maxime aut omnis. Nesciunt vel rerum similique qui sapiente velit facere error laudantium dolores, deleniti ipsa, dicta consequuntur dolorem odio perspiciatis eligendi quia? Fugiat, eveniet. Soluta molestias incidunt cumque aspernatur error! Nobis fugit possimus placeat inventore optio quibusdam, sed ullam! Aspernatur alias aliquam saepe repellendus illum exercitationem dolorum nostrum, odit odio accusamus tenetur molestias non et cumque commodi perferendis necessitatibus quisquam fugit! Voluptate ipsum, libero rerum ullam neque quaerat natus fuga exercitationem. Voluptatem dicta quis amet sed quae!
			</p>
			<p className="px-2" style={ { textAlign: 'justify' } }>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nesciunt minima optio harum vitae nostrum quasi ex cum nobis voluptatum. Reprehenderit natus omnis facilis adipisci, mollitia corporis amet culpa quidem delectus quod illo molestiae commodi quae officiis beatae quasi. Commodi omnis harum eos eaque, odio, excepturi beatae id accusantium, cumque molestias nisi repudiandae illo soluta facilis aspernatur aut nam odit magnam sapiente porro hic sit? Harum sunt iste, aspernatur excepturi distinctio voluptas, voluptatem cumque dolorum, maiores laboriosam alias consequatur nihil? Placeat facere accusantium hic ducimus molestias assumenda vitae nihil atque eligendi repellendus magni ex, quo doloribus in nulla temporibus voluptatem iusto maiores corrupti at praesentium totam, qui error aliquam. Natus fugit, fuga, minima voluptatum ab temporibus labore pariatur quidem dolore ipsa rerum maxime aut omnis. Nesciunt vel rerum similique qui sapiente velit facere error laudantium dolores, deleniti ipsa, dicta consequuntur dolorem odio perspiciatis eligendi quia? Fugiat, eveniet. Soluta molestias incidunt cumque aspernatur error! Nobis fugit possimus placeat inventore optio quibusdam, sed ullam! Aspernatur alias aliquam saepe repellendus illum exercitationem dolorum nostrum, odit odio accusamus tenetur molestias non et cumque commodi perferendis necessitatibus quisquam fugit! Voluptate ipsum, libero rerum ullam neque quaerat natus fuga exercitationem. Voluptatem dicta quis amet sed quae!
			</p>
			<p className="px-2" style={ { textAlign: 'justify' } }>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nesciunt minima optio harum vitae nostrum quasi ex cum nobis voluptatum. Reprehenderit natus omnis facilis adipisci, mollitia corporis amet culpa quidem delectus quod illo molestiae commodi quae officiis beatae quasi. Commodi omnis harum eos eaque, odio, excepturi beatae id accusantium, cumque molestias nisi repudiandae illo soluta facilis aspernatur aut nam odit magnam sapiente porro hic sit? Harum sunt iste, aspernatur excepturi distinctio voluptas, voluptatem cumque dolorum, maiores laboriosam alias consequatur nihil? Placeat facere accusantium hic ducimus molestias assumenda vitae nihil atque eligendi repellendus magni ex, quo doloribus in nulla temporibus voluptatem iusto maiores corrupti at praesentium totam, qui error aliquam. Natus fugit, fuga, minima voluptatum ab temporibus labore pariatur quidem dolore ipsa rerum maxime aut omnis. Nesciunt vel rerum similique qui sapiente velit facere error laudantium dolores, deleniti ipsa, dicta consequuntur dolorem odio perspiciatis eligendi quia? Fugiat, eveniet. Soluta molestias incidunt cumque aspernatur error! Nobis fugit possimus placeat inventore optio quibusdam, sed ullam! Aspernatur alias aliquam saepe repellendus illum exercitationem dolorum nostrum, odit odio accusamus tenetur molestias non et cumque commodi perferendis necessitatibus quisquam fugit! Voluptate ipsum, libero rerum ullam neque quaerat natus fuga exercitationem. Voluptatem dicta quis amet sed quae!
			</p>
			<form className="pb-5" onSubmit={ (e) => {
				e.preventDefault()
				if (check) setIsGreeting(true)
			} }>
				<div className="px-2 py-3">
					<input checked={ check } onChange={ () => setCheck(!check) } className="form-check-input me-2" type="checkbox" id="accept" />
					<label className="form-check-label" htmlFor="accept">Confirm</label>
				</div>
				<button className="btn btn-info">Accept</button>
			</form>
		</div>
	)
}

export default Greeting