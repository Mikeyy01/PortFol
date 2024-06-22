# Portfolio - Semester 6

TBA

## Live Website

My portfolio is currently hosted on Vercel.
Check it out here: [https://portfolio-s6.vercel.app/](https://portfolio-s6.vercel.app/)


# Portfolio Set-up Guide

### 1. Clone the repository:
```
git clone https://git.fhict.nl/I476238/portfolio-s6
```
### 2. Navigate to the portfolio folder:

```
cd portfolio-s6
```

### 3. Install Dependencies

```
npm install
```
### 4. Run Portfolio

To just view the final portfolio, enter the following command:

```
npm start
```

To preview portfolio while making active changes enter this instead:

```
npm run dev
```



##### - Once the portfolio is started, visit: http://localhost:5173/


## ToDo List
- [X] ~~Create Language Onboarding Screen~~
- [X] ~~Homepage~~
- [X] ~~Favicon~~
- [X] ~~Fixed Position NavBar~~
- [X] ~~404 Error Page~~
- [ ] Responsive Design
- [X] ~~Utilize Blobbity~~
- [X] ~~Implement Smooth Scrolling~~
- [x] ~~Implement GSAP~~
- [X] ~~Link Buttons with External Content~~
- [X] ~~Implement a Contact Form~~
- [X] ~~Project Sections~~
- [X] Video Section
- [X] ~~About Me~~
- [ ] JSON Text Import
- [X] ~~Website Thumbnail (When sharing website)~~
- [X] ~~Website Hosting~~

## User Stories  & Success Criteria
### Story  1
> As a user, I want to view Michael's resume, so that I can understand his professional background and skills.



##### Success Criteria:
- [X] A "View Resume" button is prominently displayed on the homepage.
- [X] Clicking the button opens/downloads the resume in a PDF format.

---

### Story  2 
>As a user, I want to learn about Michael's projects, so that I can see his work and capabilities.


##### Success Criteria:
- [X] A "Projects" section lists various projects with brief descriptions.
- [X] Each project has a link to more detailed information or a live demo.
- [X] Projects are visually represented with images or screenshots.

---
### Story  3
> As a user, I want to contact Michael, so that I can inquire about his services and/or collaborate with him.


##### Success Criteria:
- [X] A "Contact" section or form is available and easily accessible.

---
### Story  4
> As a user, I want to see a well-structured and visually appealing homepage, so that I am impressed with Michael's design skills.

##### Success Criteria:


- [x] Navbar is intuitive with clearly labeled sections.

- [ ] The website should be responsive; the layout adjusts to different screen sizes without losing functionality or readability.

---
### Story  5
> As a user, I want to view Michael's profile pages on different platforms, so I can connect with him there.


- [X] GitHub and LinkedIn links are displayed in the header and footer.

- [X] Clicking an icon opens the corresponding profile in a new tab.

---
### Story  6
> As a user, I want to view Michael's videos that he's edited

- [x] Preview of Edited videos

- [x] on hover thumbnail plays a preview of the videos

- [x] on click, user is redirected to edited video link

## Project File structure

```
$PROJECT_ROOT
│
├── public
│ ├── images
│ ├── favicon
│ ├── assets
│ └── index.html
│
├── src
│ ├── components
│ │ ├── App.jsx
│ │ ├── Preloader.jsx
│ │ ├── Navbar.jsx
│ │ ├── Section1.jsx
│ │ ├── Section2.jsx
│ │ ├── Section3.jsx
│ │ ├── VideoShowcase.jsx
│ │ ├── Contact.jsx
│ │ └── blobityConfig.js
│ │
│ ├── images
│ │ ├── VideoPort.png
│ │ ├── LaptopBG.png
│ │ ├── VideoPort2.png
│ │ ├── LaptopBG2.png
│ │ ├── VideoPort3.png
│ │ ├── LaptopBG3.png
│ │ ├── video1.png
│ │ ├── video1.gif
│ │ ├── video2.png
│ │ ├── video2.gif
│ │ ├── video3.png
│ │ └── video3.gif
│ │
│ ├── styles
│ │ ├── homepage.css
│ │ ├── navbar.css
│ │ ├── fonts.css
│ │ └── Preloader.css
│ │
│ ├── main.jsx
│ └── index.html
│
└── package.json
```

## Website Structure
```
┌── Preloader (Language Onboarding)
├── Navigation Menu
│ ├── Home
│ ├── Projects
│ ├── About Me 
│ └── Contact Me
│
├── Homepage
│ ├── Hero Section
│ │ ├── My Name and Professional Titles
│ │ └── Social Links and Resume Button
│ │
│ ├── Section 1: Projects Overview
│ │ ├── Project 1
│ │ ├── Project 2
│ │ └── Project 3
│ │
│ ├── Section 2: Video Showcase
│ │ ├── Video 1
│ │ ├── Video 2
│ │ └── Video 3
│ │
│ ├── Section 3: About Me
│ │ ├── Description 
│ │ ├── Tools and Technologies
│ │
│ ├── Section 4: Contact Me
│ │ ├── Contact Form
│ │ ├── Email
│ │ ├── GitHub Link
│ │ └── LinkedIn Link
│ │
│ └── Footer
│ └── Copyright Notice

```

## Bugs, Errors or Suggestions?

If you encounter any bugs, errors or have a suggestion please leave a **[New Issue](https://git.fhict.nl/I476238/portfolio-s6/-/issues/new)** on this repository with your remark.
