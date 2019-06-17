var jobs = [
  'Don\'t hate what you don\'t understand. - John Lennon',
  'The good life is inspired by love and guided by knowledge. - Bertrand Russell',
  'It is not only necessary to love, it is necessary to say so. - French proverb',
  'Reason and love are sworn enemies. - Pierre Corneille'
]

function newQuote()
{
  var randomNumber = Math.floor(Math.random() * (jobs.length));
  document.getElementById('quote').innerHTML = jobs[randomNumber];
}
