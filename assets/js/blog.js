const jsonObject = [];
jsonObject.push(localStorage.getItem("formSubmit"));
const submissionObjects = JSON.parse(jsonObject);
const test = [];
const submissionObject = [];
test.push(submissionObjects);
submissionObject = Object.entries(test);
console.log(submissionObject);

const displayBlog = function (submissionObject) {
    const blogText = document.querySelector('#blog-table');
  
    blogText.innerHTML = '';
  
    for (let i = 0; i < submissionObject.length; i++) {
      const currentBlog = submissionObject[i];
  
      const newBlogPost = document.createElement("tr");
  
      const titleCell = document.createElement("td");
      titleCell.textContent = currentBlog.title;
      newBlogPost.append(titleCell);
  
      const blogCell = document.createElement("td");
      blogCell.textContent = currentBlog.theblog;
      newBlogPost.append(blogCell);
  
      const userNameCell = document.createElement("td");
      userNameCell.textContent = currentBlog.user;
      newBlogPost.append(userNameCell);
  
      blogText.append(newBlogPost);
    }
  }

let darkMode = "no";
const darkModeToggle = document.querySelector('#mode');

darkModeToggle.addEventListener("click", () => {
    if (darkMode !== "yes"){
        enableDarkMode();
        darkMode = "yes";
        console.log(darkMode)
    }else{
        disableDarkMode();
        darkMode = "no";
        console.log(darkMode);
    };
});

const enableDarkMode = () => {
    document.body.classList.add("darkmode");
}

const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
}

displayBlog();