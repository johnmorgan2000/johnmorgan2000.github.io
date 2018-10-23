// Adds the bio information
document.querySelector("#bio-paragraph").innerHTML = DATA.bio;

function renderProjects(data) {
    let source = document.querySelector("#projects-template").innerHTML;
    let template = Handlebars.compile(source);
    for (project of data.projects) {
        if (project.category == "favorites") {
            let html = template({
                title: project.title,
                github: project.github,
                description: project.description
            });
            document
                .querySelector("#favorite div")
                .insertAdjacentHTML("beforeend", html);
        } else if (project.category == "python") {
            let html = template({
                title: project.title,
                github: project.github,
                description: project.description
            });
            document
                .querySelector("#python div")
                .insertAdjacentHTML("beforeend", html);
        } else if (project.category == "html") {
            let html = template({
                title: project.title,
                github: project.github,
                description: project.description
            });
            document
                .querySelector("#html div")
                .insertAdjacentHTML("beforeend", html);
        } else if (project.category == "javascript") {
            let html = template({
                title: project.title,
                github: project.github,
                description: project.description
            });
            document
                .querySelector("#javascript div")
                .insertAdjacentHTML("beforeend", html);
        }
    }
}

renderProjects(DATA);
