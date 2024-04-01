const submission = document.querySelector('form');
const jsonString = [];
const jsonObject = [];

submission.addEventListener('submit', (i) =>{
i.preventDefault();
const newSubmission = new FormData(submission);
const submissionObject = Object.fromEntries(newSubmission);
jsonString.push(submissionObject);
const jsonObject = JSON.stringify(jsonString);
localStorage.setItem('formSubmit', jsonObject);
window.location.href = "blog.html";
}
)