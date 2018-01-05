import React, { PropTypes } from 'react';
import { PageWrap } from '../../index';

export default class Anthem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<PageWrap>
				<div className="container-fluid">
					<div className="row default-bg full-height-screen">
						<div className="col-md-12">
							<h1>Anthem</h1>
							<h3>
							From diffrent places, different times<br></br>
							With a common goal in our minds<br></br>
							We want to enjoy this moment while it lasts<br></br>
							Have you ever stopped and wonder why <br></br>
							That now we can share a common sky <br></br>
							So many of us with different childhoods<br></br>
							Different dreams, different lives<br></br>
							<br></br>
							Chorus:<br></br>
							I know now what the answer is<br></br>
							I'm sure I'm gonna miss<br></br>
							This special day when we get Together<br></br>
							As clouds drift and seasons flee<br></br>
							We will porbably not meet<br></br>
							And different lives we'll lives<br></br>
							No once we'll forget this great day we have<br></br>
							</h3>
						</div>
					</div>
				</div>
			</PageWrap>


		);
	}
}

Anthem.propTypes = {
};
