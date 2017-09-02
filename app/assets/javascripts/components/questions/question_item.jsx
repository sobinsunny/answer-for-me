
const QuestionItem = ({question}) => {
 	return (
		<div className="ui piled segment"> 
			<h4 className="ui header"> {question.title} </h4>
			<p>
				{ question.description }
			</p>
 		</div>
 	)
}