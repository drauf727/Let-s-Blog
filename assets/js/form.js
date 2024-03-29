const submission = document.querySelector('form');

submission.addEventListener('submit', (i) =>{
i.preventDefault();
const newSubmission = new FormData(submission);
const submissionObject = Object.fromEntries(newSubmission);
const jsonObject = JSON.stringify(submissionObject);
localStorage.setItem('formSubmit', jsonObject);

window.location.href = "blog.html";
}
)