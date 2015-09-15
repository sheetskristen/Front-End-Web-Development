var tweetboxField = $('.tweetbox__field');
var tweets = $('.tweets');
var maxCharacters = 140; 

$('.tweetbox').on('submit', function (event) {
  event.preventDefault();

  var newTweet = $('.tweet').first().clone();

  var textAreaValue = tweetboxFieldLectures:
	Class 1:
		index.html
		script.js
		style.css
	Class 2:
		Jeff's Class 1 Materials Revisited:
			index.html
			script.js
			style.css
	Class 4:
		index.html
		script.js
	Class 5:
		index.html
		script.js
	Class 6 :
		avatar.jpg
		index.html
		jquery.js
		script.js
		style.css
	Class 7 :
		avatar.jpg
		index.html
		jquery.js
		script.js
		style.css
.val();

  newTweet.find('.tweet__content').text(textAreaValue);
  newTweet.find('.tweet__time').text('now');
  
  newTweet.removeClass ('favorited retweeted')

  tweets.prepend(newTweet);

  tweetboxField.val('');
}); 

var calculateRemainingCharacters = function(){
	var textAreaValue = tweetboxField.val();
	var textAreaLength = textAreaValue.length;  
	
	$('.tweetbox__button').prop('disabled', textAreaLength > maxCharacters);
	
	
	$('.tweetbox__counter').text(maxCharacters - textAreaLength);
};
	
calculateRemainingCharacters();

$('.tweetbox__field').on('keyup', calculateRemainingCharacters);

$('.tweets').on('click','.retweet', function (){
	$(this).closest('.tweet').toggleClass('retweeted');
})

$('.tweets').on('click','.favorite', function (){
	$(this).closest('.tweet').toggleClass('favorited');
})