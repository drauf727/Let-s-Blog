const submission = document.querySelector('form');
const submissionObject = localStorage.getItem("formSubmit") ? JSON.parse(localStorage.getItem("formSubmit")) : [];

submission.addEventListener('submit', (i) =>{
i.preventDefault();
const newSubmission = new FormData(submission);
const newSubmissionObject = Object.fromEntries(newSubmission);
submissionObject.push(newSubmissionObject);
localStorage.setItem('formSubmit', JSON.stringify(submissionObject));
window.location.href = "blog.html";
}
)