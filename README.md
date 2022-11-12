## TODO
- Build profile section
- Finish templated page for individual projects (need )
- Add delete functionality to website front end
- Add testing with Jest/Cypress

## Unfinished Project Finder
This web app project is designed to be able to facilitate open source contributions without needing to find large projects to contribute to by allowing people to easily upload and find other peoples' unfinished projects that were meant to be finished but are missing one or more features. Users are required to log in through Github on the app before being able to upload their projects to the directory. 

The website provides guidelines to users who want to upload their project to the directory and enforces checks to make sure that each project adheres to the basic guidelines (has README.md and CONTRIBUTING.md, uploader must be owner of the repo, etc). 

## Technical choices
I decided to go with NextJS for this project as I wanted to use a monolith project structure for this web app - the reason behind this choice being that it would save time having to navigate between directories as I didn't feel this was a large enough project to warrant having two directories in a monorepo. 

With regards to authentication, I have used Github OAuth via the next-auth package as this web app interacts with the Github API and therefore makes it a lot more convenient to find and reference users 

Regarding CSS, I have used TailwindCSS since it's easy to use and can make mobile-responsiveness very easy. 