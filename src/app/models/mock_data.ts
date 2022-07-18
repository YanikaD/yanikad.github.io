import { Skills } from "./skills.model";
import { Contact } from "./contact.model";
import { Profile } from "./profile.model";
import { Project } from "./project.model";

// create skill data
const html = new Skills("HTML", "/assets/html-5.png","Intermediate");
const css = new Skills("CSS", "/assets/css.png","Intermediate");
const js = new Skills("JavaScript", "/assets/js.png","Intermediate");
const ts = new Skills("TypeScript", "/assets/ts.png","Intermediate");
const python = new Skills("Python", "/assets/python.png","Intermediate");
const java = new Skills("Java", "/assets/java.png","Intermediate");
const sql = new Skills("SQL", "/assets/sql.png","Intermediate");
const angular = new Skills("Angular", "/assets/angular.png","Intermediate");
const react = new Skills("ReactJS", "/assets/react.png","Intermediate");
const springboot = new Skills("SpringBoot", "/assets/spring-boot.png","Basic");
const git = new Skills("Git", "/assets/git.png","Intermediate");
const docker = new Skills("Docker", "/assets/Docker.png","Basic");

export const mock_skills = [
    html, css, js, ts, python, java, sql, angular, react, git, docker, springboot
    ]

// create projects data
const java_proj = new Project("Java","Developed Turn base & 8-bit Action games","/assets/Java2.JPG",[java,git]);
// const java2 = new Project("Java2","Game 8-bit action", [java,git]);
const se = new Project("Tutor Here", "Developed Matching System Web Application","/assets/SE.JPG", [js,html,css,react,git]);
// const soft_arch = new Project("Chat gun cup", "chatting microservice", [js,html,css,react,springboot,docker,git]);
const ssnc = new Project("Internship","Developed Support Toolkit, Web Application, for helping automate tasks","/assets/ssnc.jpg",[ts,html,css,angular,springboot,git])

export const mock_project = [
    java_proj, se, ssnc
]
//create profile data
export const my_profile = new Profile("Yanika Dontong","/assets/Prefil.png",
                                        "Web Developer","https://github.com/YanikaD",
                                        "https://www.linkedin.com/in/yanikad/",
                                        "/assets/YanikaD_Resume.pdf",
                                        "I'm a front-end developer based in Bangkok. I describe myself as a passionate developer who combining the logic and creative design to make user-friendly websites, and I have an eager to learn and trying new things to find the best solution to solve the problems. I am excited to work alongside other amazing programmers and learn so much more!")
