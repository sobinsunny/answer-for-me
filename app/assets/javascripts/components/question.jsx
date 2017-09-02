

class Question extends React.Component {

	constructor(props) {
		super(props);
		this.state ={
			questions: []
		}
	}

	render() {
		return (
			<div>
				<div className="ui stackable menu">
					<div className="item">
					 	 <img src="/images/logo.png" />
					</div>
					 	<a className="item">Features</a>
						<a className="item active">Testimonials</a>
						<a className="item">Sign-in</a>
				</div>
					<h2 className="ui header"> Questions </h2> 
					<QuestionItems questions = {this.props.questions} />
			</div>  
		);
	}
};