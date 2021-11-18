import React, { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
	render() {
		console.log(this.props);
		return (
			<div>
				{/* Write code here that displays the usernames of all users in the Redux store */}
				{/* In addition, display the total number of users curently in the store */}
				<h3>Users!</h3>
				<ul>
					{this.props.users.map((user, i) => {
						return <li key={i}>{user.username}</li>;
					})}
				</ul>
				Total # of users: {this.props.userCount}
			</div>
		);
	}
}

//add mapStateToProps here
const mapStateToProps = (state) => {
	console.log(state);
	return { users: state.users, userCount: state.users.length };
};

// connect this component to Redux
export default connect(mapStateToProps)(Users);
