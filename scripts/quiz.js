function processQuiz()
{
	var q1 = document.forms.quiz1.question1;
	var score = 0;
	if( q1[ 0 ].checked )
	{
	 score=score+1;
	}
	
	var q2 = document.forms.quiz1.question2;
	
	if( q2[ 1 ].checked ){
		score=score+1;
	}
	
    var q3 = document.forms.quiz1.question3;
	
	if( q3[ 2 ].checked ){
		score=score+1;
	}
alert ("You got "+ score + " correct!");
}