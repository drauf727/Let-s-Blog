const submissionObject = localStorage.getItem("formSubmit") ? JSON.parse(localStorage.getItem("formSubmit")) : [];
console.log(submissionObject);
const blogContainer = document.getElementById("blog-posts");

function generateBlog(blogging){
    for(let i=0; i < blogging.length; i++) {
        const blogHeader = document.createElement('h1');
        const blogBody = document.createElement('p');
        const blogFooter = document.createElement('p');
        blogHeader.textContent = `${blogging[i].title}`;
        blogBody.textContent = `${blogging[i].theblog}`;
        blogFooter.textContent = `Posted by: ${blogging[i].user}`;
        blogContainer.appendChild(blogHeader);
        blogContainer.appendChild(blogBody);
        blogContainer.appendChild(blogFooter);
    }    
}

generateBlog(submissionObject);

// function generateTitle(x){
//     let itemTitle = "";
//     for(let i=0; i< x.length; i++){
//         itemTitle += `${x[i][1].title}`;
//     }
//     return itemTitle;
// }

// function generateBlog(x){
//     let itemBlog = "";
//     for(let i=0; i< x.length; i++){
//         itemBlog += `${x[i][1].theblog}`;
//     }
//     return itemBlog;
// }

// function generateUser(x){
//     let itemUser = "";
//     for(let i=0; i< x.length; i++){
//         itemUser += `${x[i][1].user}`;
//     }
//     return itemUser;
// }

// document.getElementById("blog-table").innerHTML = `
// <tr>
// <td>
// ${generateTitle(submissionObject)}
// </td>
// </tr>
// <tr>
// <td>
// ${generateBlog(submissionObject)}
// </td>
// </tr>
// <tr>
// <td>
// Posted by: ${generateUser(submissionObject)}
// </td>
// </tr>
// `;



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
