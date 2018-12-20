// Adds the bio information
document.querySelector("#bio-paragraph").innerHTML = DATA.bio;

function renderProjects(data) {
    let source = document.querySelector("#projects-template").innerHTML;
    let template = Handlebars.compile(source);
    for (project of data.projects) {
        if (project.category == "favorites") {
            let html = returnProjectTemplate(template, project);
            document
                .querySelector("#favorite div")
                .insertAdjacentHTML("beforeend", html);
        } else if (project.category == "python") {
            let html = returnProjectTemplate(template, project);
            document
                .querySelector("#python div")
                .insertAdjacentHTML("beforeend", html);
        } else if (project.category == "html") {
            let html = returnProjectTemplate(template, project);
            document
                .querySelector("#html div")
                .insertAdjacentHTML("beforeend", html);
        } else if (project.category == "javascript") {
            let html = returnProjectTemplate(template, project);
            document
                .querySelector("#javascript div")
                .insertAdjacentHTML("beforeend", html);
        }
    }
}

function returnProjectTemplate(template, project) {
    return template({
        title: project.title,
        github: project.github,
        description: project.description
    });
}

renderProjects(DATA);
