const jsonObject = localStorage.getItem("formSubmit");
const submissionObjects = JSON.parse(jsonObject);
var submissionObject = Object.entries(submissionObjects);
console.log(submissionObject);

// function generateBlog(blogging){
//     let itemTitle = "";
//     let itemTheBlog = "";
//     let itemUser = "";
//     let itemFullBlog;
//     for(let i=0; i < blogging.length; i++) {
//         itemTitle += `${blogging[i][1].title}`;
//         itemTheBlog += `${blogging[i][1].theblog}`;
//         itemUser += `${blogging[i][1].user}`;
//         itemFullBlog = [itemTitle, itemTheBlog, itemUser];
//     }
//     console.log(itemFullBlog)
//     return itemFullBlog;
    
// }

function generateTitle(x){
    let itemTitle = "";
    for(let i=0; i< x.length; i++){
        itemTitle += `${x[i][1].title}`;
    }
    return itemTitle;
}

function generateBlog(x){
    let itemBlog = "";
    for(let i=0; i< x.length; i++){
        itemBlog += `${x[i][1].theblog}`;
    }
    return itemBlog;
}

function generateUser(x){
    let itemUser = "";
    for(let i=0; i< x.length; i++){
        itemUser += `${x[i][1].user}`;
    }
    return itemUser;
}

document.getElementById("blog-table").innerHTML = `
<tr>
<td>
${generateTitle(submissionObject)}
</td>
</tr>
<tr>
<td>
${generateBlog(submissionObject)}
</td>
</tr>
<tr>
<td>
Posted by: ${generateUser(submissionObject)}
</td>
</tr>
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

