import React from 'react';
import Nav from './nav/nav';
import InfoHeader from './info-header';
import Card from './card';
import WorkHistory from './work/work-history';
import WorkDetail from './work/work-detail';
import Footer from './footer';

class App extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <InfoHeader />
                <br />
                <div className={'container-fluid'} style={{padding: '0px'}}>
                    <div className={'col-sm-6 col-xs-12'} id="leftCol">
                        <Card name="😁 About Me" desc="Everyone has a story to tell!" id="#about">
                            <div className={'container-fluid col-xs-12 text-left'}>
                                <p>
                                    Hello! My name is Kyle!<br /><br />
                                    Currently I'm in southeast Michigan, and during the week I make my way out to Detroit to work at Quicken Loans!<br /> 
                                    As a Software Engineer there, I'm a full stack developer currently doing front-end development on their products.<br /><br />
                                    I graduated with my Bachelor of Science degree in Computer Science from Eastern Michigan University!
                                    During my time at EMU, I did some pretty cool stuff! I worked for the campus Housing &amp; Residence Life program there as an RA. 
                                    I was also apart of Kick and Push Longboarding Club, made the dean's list 6 times, and graduated magna cum laude with a 3.74 cumulative GPA.<br /><br />
                                    I've always been very passionate about computers, and I love developing software!
                                    I find it really interesting to see how things work together through the entire stack! 
                                    I primarily learned Java while at EMU, and I began teaching myself C# and front-end during my free time prior to graduation.
                                    I've since gained lots of experience with TypeScript and Angular, as well as .NET Core and WPF/UWP Development.
                                    I've also had some experience developing for Android and iOS, and those were some of my favorite projects while at EMU! 
                                    Additionally, I also have some experience developing video games in Unity.<br /><br />
                                    If you have any questions, please feel free to email me!
                                </p>
                            </div>
                        </Card>
                        <Card name="💻 Work History" desc="Oh man, look at the places I've been!" id="#workHist" titleAlign="center">
                            <div className={'text-left'}>
                                <WorkHistory position="Software Engineer" company="Quicken Loans" location="Detroit, MI" startTime="August 2019">
                                    <WorkDetail>
                                        Working on web application utilizing Angular. Conducting code reviews. Wrote unit tests in Jasmine for
                                        various components, services, pipes, and directives for application.
                                        <br />
                                        <br />
                                        <b><u>Technologies Used</u></b>
                                        <br />
                                        <div className={'icon-container'}>
                                            <i className={'devicon-angularjs-plain colored workHistIcon'}></i>
                                            <i className={'devicon-typescript-plain colored workHistIcon'}></i>
                                            <i className={'devicon-sass-plain colored workHistIcon'}></i>
                                            <i className={'devicon-html5-plain colored workHistIcon'}></i>
                                            <i className={'devicon-bootstrap-plain colored workHistIcon'}></i>
                                            <i className={'devicon-github-plain colored workHistIcon'}></i>
                                        </div>
                                    </WorkDetail>
                                </WorkHistory>
                                <WorkHistory position="Software Engineer" company="Daifuku" location="Novi, MI" startTime="May 2016" endTime="August 2019">
                                    <WorkDetail>
                                        Built web applications utilizing Angular, TypeScript, C# .NET Core, and MSSQL to create progressive web apps (PWA).
                                        Led Angular front-end development. Built C# .NET Core backend. By developing PWAs for these products, these allowed
                                        the apps to perform better on a variety of different devices. Build times were improved, and the apps were able to make
                                        use of service workers which allows the apps to be stored on devices for offline use and prompted users to install the
                                        apps locally if they liked. Service workers also allowed the Push API to be used so push notifications can be received on 
                                        all devices connected to the server.
                                    </WorkDetail>
                                    <WorkDetail>
                                        Created C# WPF Applications to be used for setup of systems utilizing the PWAs. These apps allowed users to configure
                                        additional features for the web apps without creating errors in the raw JSON files. This allowed systems to be setup
                                        with more ease and automation, and reduced the amount of time technicans spend setting up systems.
                                    </WorkDetail>
                                    <WorkDetail>
                                        Developed an Electron app to be used standalone by internal system engineers to save them time deploying systems on site.
                                        This app wraps a portion of one the Angular apps through Electron to be used as a cross-platform desktop app. The app exports
                                        a JSON file which can then be imported into the corresponding Angular app.
                                    </WorkDetail>
                                    <WorkDetail>
                                        Assisted in managing local GitLab server. Trained engineers on how to use Git for version control. Assisted engineers with
                                        questions on using Git, and specifics with using GitLab.
                                        <br />
                                        <br />
                                        <b><u>Technologies Used</u></b>
                                        <br />
                                        <div className={'icon-container'}>
                                            <i className={'devicon-angularjs-plain colored workHistIcon'}></i>
                                            <i className={'devicon-typescript-plain colored workHistIcon'}></i>
                                            <i className={'devicon-nodejs-plain colored workHistIcon'}></i>
                                            <i className={'devicon-csharp-plain colored workHistIcon'}></i>
                                            <i className={'devicon-cplusplus-plain colored workHistIcon'}></i>
                                            <i className={'devicon-sass-plain colored workHistIcon'}></i>
                                            <i className={'devicon-html5-plain colored workHistIcon'}></i>
                                            <i className={'devicon-bootstrap-plain colored workHistIcon'}></i>
                                            <i className={'devicon-gitlab-plain colored workHistIcon'}></i>
                                        </div>
                                    </WorkDetail>
                                </WorkHistory>
                                <WorkHistory position="Resident Advisor" company="Eastern Michigan University" location="Ypsilanti, MI" startTime="August 2014" endTime="April 2016">
                                    <WorkDetail>
                                        Organized/maintained a friendly community in Brown/Munson Apartments. 
                                        Assisted residents in various situations. 
                                        Planned/Implemented various educational programs. 
                                        Demonstrated leadership throughout hall.
                                    </WorkDetail>
                                    <WorkDetail>
                                        Wrote a Google Apps Script Web Application that utilizes Google Forms, 
                                        Google Sheets, Google Calendar, and Gmail to organize and assign move 
                                        out times for residents throughout the hall.
                                        <br />
                                        <br />
                                        <b><u>Technologies Used</u></b>
                                        <br />
                                        <div className={'icon-container'}>
                                            <i className={'devicon-javascript-plain colored workHistIcon'}></i>
                                            <i className={'devicon-google-plain-wordmark colored workHistIcon'}></i>
                                        </div>
                                    </WorkDetail>
                                </WorkHistory>
                                <WorkHistory position="Software Engineering Intern" company="KLA Laboratories, Inc." location="Dearborn, MI" startTime="July 2015" endTime="August 2015">
                                    <WorkDetail>
                                        Developed a Visual C# Windows Form Application implementing Microsoft Office 
                                        libraries to output a spreadsheet used to complete networking surveys.
                                        <br />
                                        <br />
                                        <b><u>Technologies used for development</u></b>
                                        <br />
                                        <div className={'icon-container'}>
                                            <i className={'devicon-csharp-plain colored workHistIcon'}></i>
                                            <i className={'devicon-dot-net-plain colored workHistIcon'}></i>
                                            <i className={'devicon-windows8-plain colored workHistIcon'}></i>
                                        </div>
                                    </WorkDetail>
                                </WorkHistory>
                            </div>
                        </Card>
                    </div>
                    <div className={'col-sm-6 col-xs-12'} id="rightCol">
                        <Card name="👨‍💻 Skills" desc="I'm a Software Engineer that likes to focus on Mobile &amp; Web Development!" id="#skills">
                            <div className={'col-xs-12'} style={{padding: '0px 24px'}}>
                                <h4>Platforms</h4>
                                <div className={'icon-container'}>
                                    <i className={'devicon-android-plain colored skillIcon'} ></i>
                                    <i className={'devicon-apple-plain colored skillIcon'} data-toggle="tooltip" data-trigger="hover" data-placement="bottom" title="iOS"></i>
                                    <i className={'devicon-windows8-plain colored skillIcon'} data-toggle="tooltip" data-trigger="hover" data-placement="bottom" title="Windows"></i>
                                </div>
                                <br />
                                <h4>Languages</h4>
                                <div className={'icon-container'}>
                                    <i className={'devicon-java-plain-wordmark colored skillIcon'} ></i>
                                    <i className={'devicon-csharp-plain colored skillIcon'} ></i>
                                    <i className={'devicon-python-plain-wordmark colored skillIcon'} ></i>
                                    <i className={'devicon-swift-plain-wordmark colored skillIcon'} ></i>
                                    <i className={'devicon-c-plain colored skillIcon'} ></i>
                                    <i className={'devicon-typescript-plain colored skillIcon'} ></i>
                                    <i className={'devicon-javascript-plain colored skillIcon'} ></i>
                                    <i className={'devicon-jquery-plain-wordmark colored skillIcon'} ></i>
                                    <i className={'devicon-html5-plain-wordmark colored skillIcon'} ></i>
                                    <i className={'devicon-css3-plain-wordmark colored skillIcon'} ></i>
                                    <i className={'devicon-sass-plain colored skillIcon'} ></i>
                                </div>
                                <br />
                                <h4>Frameworks</h4>
                                <div className={'icon-container'}>
                                    <i className={'devicon-angularjs-plain colored skillIcon'}></i>
                                    <i className={'devicon-react-plain colored skillIcon'}></i>
                                    <i className={'devicon-bootstrap-plain-wordmark colored skillIcon'}></i>
                                    <i className={'devicon-nodejs-plain colored skillIcon'}></i>
                                    <i className={'devicon-dotnet-plain-wordmark colored skillIcon'}></i>
                                </div>
                                <br />
                                <h4>Source Control/Tools</h4>
                                <div className={'icon-container'}>
                                    <i className={'devicon-git-plain-wordmark colored skillIcon'}></i>
                                    <i className={'devicon-github-plain-wordmark colored skillIcon'}></i>
                                    <i className={'devicon-gitlab-plain-wordmark colored skillIcon'}></i>
                                    <i className={'devicon-sourcetree-plain colored skillIcon'} data-toggle="tooltip" data-trigger="hover" data-placement="bottom" title="Subversion"></i>
                                </div>
                                <h4>Database</h4>
                                <div className={'icon-container'}>
                                    <i className={'devicon-mysql-plain-wordmark colored skillIcon'}></i>
                                    <i className={'devicon-windows8-plain colored skillIcon'} data-toggle="tooltip" data-trigger="hover" data-placement="bottom" title="MSSQL"></i>
                                </div>
                                <br />
                                <br />
                                <p>
                                    I have a lot of experience in programming in Java, which makes it my primary choice of language. It's what EMU used for their curriculum, which helped
                                    introduce me to a lot of the core concepts and ideas of computer science. Learning Java first also helped me learn how to develop Android applications!
                                    <br />
                                    I've gotten lot of experience with C#, as it is incredibly similar to Java. Developing REST APIs for the products at Daifuku, we ended up using .NET Core,
                                    and .NET Standard for some libraries. For my software capstone at EMU, I worked a team of classmates to create a .NET Framework MVC website for a client
                                    which interacted with a MySQL database through C#. I also did get some experience using C# with Unity for a game programming class I took. While at KLA,
                                    I got an introduction to C# for Windows Forms Apps, and through my time at Daifuku, I've got even more experience with WPF apps. I ended up architecting
                                    a handful of MVVM WPF apps which help set up a few JSON files for our web apps, and perform a couple of quality checking processes.
                                    <br />
                                    Daifuku also introduced me to TypeScript, and I got to architect 2 progressive web apps utilizing Angular. While creating these PWAs, I did a lot of research
                                    on web development, modern features of the web, and Angular! I took it upon myself to take what I was working on and make the apps into PWAs, and implemented
                                    features that are very beneficial to the products I was developing. This introduced me Service Workers, web app manifests, Web Workers, and other PWA concepts.
                                    I started teaching myself JavaScript while still at EMU, and this continued into my position at Daifuku where I work on the entire stack.
                                    <br />
                                    I think it's an important thing to keep learning whenever you have the opportunity to, and I enjoy learning about different Technologies and how to apply them!
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
