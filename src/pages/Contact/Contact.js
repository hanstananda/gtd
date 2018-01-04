import React, { PropTypes } from 'react';
import { PageWrap } from '../../index';

export default class Contact extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<PageWrap>
				<h1>Contact Us</h1>
			</PageWrap>
		);
	}
}

Contact.propTypes = {
};
