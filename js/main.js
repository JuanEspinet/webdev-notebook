$(document).ready(function(){
	$('#whatIsjQuery').click(function(){
		console.log('Caught a What is jQuery query!');
		$('#jQueryExplanation').toggleClass('visible');
		$('#whatIsjQuery').toggleText('What the heck IS jQuery?', 'Ah! Now I understand. Thanks!');
	});
});
$.fn.toggleText = function(t1, t2){
  if (this.text() == t1) this.text(t2);
  else                   this.text(t1);
  return this;
};