const jsonObject = localStorage.getItem("formSubmit");
const submissionObjects = JSON.parse(jsonObject);
var submissionObject = Object.entries(submissionObjects);
console.log(submissionObject);

function generateBlog(blogging){
    let item = "";
    for(let i=0; i < blogging.length; i++) {
        item += `<li>${blogging[i][1].user}</li>`;
    }
    return item;
}

document.querySelector("main").innerHTML = `
<ol>
${generateBlog(submissionObject)}
</ol>
`;



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

