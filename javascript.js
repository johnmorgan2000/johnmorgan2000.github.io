// Adds the bio information
document.querySelector("#bio-paragraph").innerHTML = DATA.bio;

function renderProjects(data) {
    let source = document.querySelector("#projects-template").innerHTML;
    let template = Handlebars.compile(source);
    for (project of data.projects) {

        html = returnProjectTemplate(template, project);
        document
                .querySelector("#favorite div")
                .insertAdjacentHTML("beforeend", html);
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
