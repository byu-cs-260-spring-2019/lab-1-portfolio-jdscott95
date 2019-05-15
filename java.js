var jobs = [
  'Hello World!',
  'String Parser',
  'Relational Database',
  '3-D Maze'
]

function newProject()
{
  var randomNumber = Math.floor(Math.random() * (jobs.length));
  document.getElementById('projectName').innerHTML = jobs[randomNumber];
}
