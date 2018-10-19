/* Password strength indicator */
function passwordStrength(password) {

	var desc = [{'width':'0px'}, {'width':'20%'}, {'width':'40%'}, {'width':'60%'}, {'width':'80%'}, {'width':'100%'}];
	
	var descClass = ['', 'pw_bad', 'pw_poor', 'pw_good', 'pw_great', 'pw_batman'];

	var passEval = ['At least 8 symbols', 'Bad', 'Poor', 'Good', 'Strong', 'Excellent'];

	var evalColor = ['#bbbec8', '#d93c44', '#d9b145', '#b4df58', '#1ee572', '#b137ea']

	var a = 0;
		b = 0;
		c = 0;
		d = 0;
		e = 0;

	var score = 0;

	//if password bigger than 6 give 1 point
	if (password.length > 7) { a++ } else { a = 0 } ;

	//if password has both lower and uppercase characters give 1 point	
	if ((password.match(/[a-z]/)) && (password.match(/[A-Z]/)) && (a>0))  { b++ } else { b = 0 } ;

	//if password has at least one number give 1 point
	if (password.match(/[0-9]/) && (a>0))  { c++ } else { c = 0 } ;

	//if password has at least one special caracther give 1 point
	if ( password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/) && (a>0))	 { d++ } else { d = 0 } ;

	//if password bigger than 12 give another 1 point
	if (password.length > 11)  { e++ } else { e = 0 } ;

	score = a+b+c+d+e;

	// display indicator
	$("#pass-progress_line").removeClass().addClass(descClass[score]).stop().animate(desc[score], 200);
	$("#pw_score").text(passEval[score]).css('color', evalColor[score]);
}

$(document).ready(function(){

	$("#new-pass_enter").on('keyup change paste', function() {
	  	passwordStrength($(this).val());
	});

});