

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
     		<h1> Questions </h1> 
     		  <QuestionItems questions = {this.props.questions} />
    	 </div>  
    );
  }
};