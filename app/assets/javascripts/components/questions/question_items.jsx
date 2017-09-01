

const QuestionItems = (props) => {
	const questionItems  =  props.questions.map( (question) => {
	  	return < QuestionItem  key = { question.id } question = { question } />
	});

	return <ul> {questionItems} </ul>
}

