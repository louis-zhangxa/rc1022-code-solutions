var $survey = document.querySelector('.survey');
var $closeSurvey = document.querySelector('.pop-up-button');
var $surveypage = document.querySelector('.column-blank');

function survey(event) {
  $surveypage.className = 'column-pop';
}

function closeSurvey(event) {
  $surveypage.className = 'column-blank';
}

$survey.addEventListener('click', survey);
$closeSurvey.addEventListener('click', closeSurvey);
