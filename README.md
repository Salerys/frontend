# Definitely Not Reddit (DNR) Frontend
This documentation covers the backend part of the project built with React.

[Backend can be found here!](https://github.com/Salerys/backend)

## Introduction

Portfolio Project 5 for the Code Institute course in AdvFE using React.<br>

The project application is called Definitely Not Reddit, or DNR in short and acts as a social media platform greatly inspired by reddit, where users can make posts, comment on said posts, and upvote both comments and posts.<br>

The idea for this project was the worldwide known platform Reddit, since I use it on a daily basis.<br>


[The deployed version can be found here!](https://ppt5-social-media-app-frontend-816a29351b29.herokuapp.com)

<br>

## Table of Contents

- [Introduction](#introduction)

- [Use Case](#use-case)
- [User Experience](#user-experience)
  - [Design](#design)
    - [Color Scheme](#color-scheme)
    - [Typography](#typography)
    - [CRUD](#crud)
    - [Future Features](#future-features)
- [Agile Project Management](#agile-project-management)
- [Development](#development)
  - [Technologies Used](#technologies-used)
    - [Languages](#languages)
    - [Frameworks Modules Libraries & Plugins](#frameworks-modules-libraries--plugins)
    - [Programs & Tools](#programs--tools)
  - [Deployment](#deployment)
    - [Version Control](#version-control)
    - [Heroku Deployment](#heroku-deployment)
  - [Testing](#testing)
    - [Validator Testing](#validator-testing)
    - [Manual Testing](#manual-testing)
    - [Browsers Tested](#browsers-tested)
    - [Known Unfixed Bugs](#known-unfixed-bugs)
- [Credits](#credits)
  - [Resources](#resources)
  - [Acknowledgements](#acknowledgements)

## Use Case

DNR gives users the ability to post in various topics with freedom of speech (of course keeping to societal rules), and discuss topics freely, without corrupt censure modifying content.<br>

Everyone who ever used Reddit should understand and use this application with ease.<br>

## User Experience

### Design

#### Color Scheme

The colors (as well as the visuals in general) weren't prioritized during the creation of the app. It is simplified for easy use, and must be updated in the future to create a more engaging user experience.<br>

#### Typography

No special typography was used for the project.<br>

Standard font used for the browser.<br>

Only different font-size were used.<br>


#### CRUD

CRUD functionality is implemented with the following features:

**Profile**

- Create Profile
- Read Profile
- Update Profile
- Delete Profile
  <br>

**Post**

- Create Post
- Read Post
- Update Post
- Delete Post
  <br>

**Votes**

- Upvote - Post
- Downvote - Post
- Delete - Own vote from Post
  <br>

**Comments**

- Create - Comment
- Read - Comment
- Update - Comment
- Delete - Comment
  <br>

  #### Future Features

For future development, the following featured should be implemented:
 - Upload own profile picture
 - Auto moderating for slurs, racism, sexism and the rest of the things that are unlawful or unethical, including a profanity check for the profile picture
 - Giving awards on posts / comments
 - Commenting on comments, creating a "step-like" system for ease see-through
 - Saving favorite posts, topics, comments
 - Further personalization of profile
 - AI/ML system implementation for post suggestions based on the user's previous interests on the APP
 - Communities for certain topics/hobbies

## Agile Project Management

Agile structure approach, naming conventions, milestones and user stories were not used, partially due my ADHD issues as I await proper treatment and medication, partially due real-life issues, as I prioritized focusing on the project itself to be working first.
All the listed parts above are to be implemented later on.

## Development

### Technologies Used

#### Languages

The following languages have been used.<br>

- HTML
- CSS
- JavaScrips

#### Frameworks Modules Libraries & Plugins

 The following dependencies used for this project.<br>

- fontawesome (Icon library used for scalable vector icons in web applications)
- axios (Promise-based HTTP client for making requests in JavaScript)
- bootstrap (front-end framework for building responsive websites and web applications)
- react-bootstrap (React-specific implementation of Bootstrap components, offering ready-to-use Bootstrap components as React components)
- js-cookie (JavaScript library for handling cookies in the browser)
- jwt-decode (A library for decoding JSON Web Tokens)
- react (A JavaScript library for building user interfaces)
- react-router (A routing library for React that allows navigation and managing URLs in a React application)


#### Programs & Tools

During the development of this application, the following programs and tools have been used.<br>
<br>

- [ESLint](https://eslint.org/) (JavaScript testing)
- [Git](https://git-scm.com/) (Version control)
- [GitHub](https://github.com/) (Used as cloud repository)
- [Heroku](https://www.heroku.com/home) (Deployment of final application)
- [Jigsaw CSS Validator](https://jigsaw.w3.org/css-validator/) (CSS testing)
- [Lighthouse](https://lighthouse-metrics.com/) (Testing of Performance, Accessibility, Best Practices and SEO)
- [W3C HTML Validator](https://validator.w3.org/) (HTML testing)
- [Visual Studio Code](https://code.visualstudio.com/) (IDE - Integrated Development Environment)

**Vite & React**

Vite as a build tool was used to set up a ReactJS app, since create-react-app (CRA) is no longer the recommended method.<br>
I chose to use Vite because I ran into several issues of deprecated code and vulnerabilities when using CRA, and I wasn't able to fix them.<br>
[More about vite](https://vitejs.dev/guide/)<br>
<br>
Vite came with some additional ESlint rules I used.<br>

### Deployment

#### Version Control

This application was developed using Visual Studio Code as the IDE and GitHub for hosting the repository.<br>
<br>
Git was used for version control by using the following comments:<br>
<br>

- git add filename - Select the files that should be uploaded and updated to the GitHub repository.
- git commit -m "commit message" - Commenting the commit to better understand the changes in this specific commit.
- git push - Upload the commit to GitHub.

  #### Heroku Deployment

**Step 0: Initial Settings**

- Check if all dependencies are listet in the package.json.
  - Add "heroku-postbuild": "npm run build" to scripts
- Modify axiosDefault.js
  - Add the baseURL for Axios
- Create Procfile in root directory with the following content:web: npm run start

**Step 1: Use Account**

- Create a Heroku account
- Log into the Heroku account

**Step 2: Create New App**

- On the dashboard, click "New" in the upper right corner.
- Select "Create new app"
- Select a name for the application - the name should only contain lowercase letters, numbers, and dashes.
- Choose a region. (Europe as we are in Europe)

**Step 3: Define Deployment Method**

- Select GitHub as deployment method
- Connect GitHub account to Heroku
- Select account and search for repository
- Connect to found repository

**Step 4: Settings**

- Switch to the settings page (Menu in the top)
- Click on "Reveal Config Vars"
- Add the required Key/Value pairs:
- In the next section, click on "Add buildpack"
- If not already selected, add Node.js

**Step 5: Deploy Application**

- Switch to the deploy page (Menu in the top)
- Look under manual deployment
- Select a branch to deploy (Main in my case)
- Click "Deploy Branch"

**Step 6: Use App**

- Heroku will then set up the virtual environment with all packages, modules and libraries needed. (This can take some time)
- When Heroku is done with the deployment, click "View" and start to use the
- Use app
  <br>

### Testing

#### Validator Testing

<summary>HTML Validator</summary>

All tested pages of the application passed the WC3 HTML Validators.<br>

<summary>JS Validator</summary>

ESLint was used during the entire development and all issues were fixed as they came up.<br>

<summary>Lighthouse Desktop</summary>

Aside from the ESO, everything was satisfactory, as for the ESO it is known with React to have ESO problems.<br>

#### Manual Testing

Although no list with great detail is currently available, multiple friends/family members were asked to test the app, and every bug/issue found were either corrected and resolved, or marked as a known bug.

#### Browsers Tested

The following browsers were used for conducting the tests.

- Google Chrome iOS
- Google Chrome Win
  <br>
- Safari MacOS 
- Safari iOS
  <br>
- Opera GX

#### Automated Testing

Due to time limitations, no automated testing was conducted for the frontend application.<br>

#### Known Unfixed Bugs

- profile pictures aren't shown, as Heroku Database can't work with them. Outer tool such as Cloudinary is to be implemented
- refresh user profile after voting (voting on own posts shown in user Profile changes the vote counter, but the User has to refresh for it to be shown on the Profile)
- sorting by "most popular" doesn't work as intended, sorting doesn't happen
- lack of interface notifications by user actions, such as post edit/delete/ or profile edit/deletion


## Credits

### Resources

- All content was written and created by me.<br>
- Profile pictures were taken from [9gag](https://www.9gag.com).<br>
- Diagram used was made by [DBDiagram](https://dbdiagram.io).<br>
- During the creation of the project, lots of (re)searches using GOogle, Reddit, Stack, and Discord were made, as well as usage of documentations, and a shameful amount of questions towards my real-life friends.<br>


### Acknowledgements

- Thanks to [Dennis Schenkel](https://github.com/DennisSchenkel) for answering my questions as well as the general layout of the ReadME.
- Thanks to Kay for they effort as a facilitator of the Code Institute team.
- My real life friends Thomas and Matthew for helping me with all the questions.
