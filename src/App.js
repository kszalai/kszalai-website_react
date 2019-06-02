import React from 'react';
import Nav from './nav/nav';
import InfoHeader from './info-header';
import Card from './card';

class App extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <InfoHeader />
                <br />
                <div className={'col-sm-6 col-xs-12'} id="leftCol">
                    <Card name="About Me" desc="Everyone has a story to tell!" id="#about">
                        <div className={'container-fluid col-xs-12 text-left'}>
                            <p>
                                Hello! My name is Kyle!<br /><br />
                                Currently I'm in southeast Michigan, and during the week I make my way out to Novi to work at Daifuku.<br />
                                As a Software Engineer there, I'm a full stack developer currently leading front-end development on their products.<br /><br />
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
                </div>
                <div className={'col-sm-6 col-xs-12'} id="rightCol">
                    <Card name="Skills" desc="I'm a Software Engineer that likes to focus on Mobile &amp; Web Development!" id="#skills">
                        <div className={'col-xs-12'} style={{padding: '0px 24px'}}>
                            <h4>Platforms</h4>
                            <i className={'devicon-android-plain colored'}></i>
                            <i className={'devicon-apple-plain colored'} data-toggle="tooltip" data-trigger="hover" data-placement="bottom" title="iOS"></i>
                            <i className={'devicon-windows8-plain colored'} data-toggle="tooltip" data-trigger="hover" data-placement="bottom" title="Windows"></i>
                            <br />
                            <h4>Languages</h4>
                            <i className={'devicon-java-plain-wordmark colored'}></i>
                            <i className={'devicon-csharp-plain colored'}></i>
                            <i className={'devicon-python-plain-wordmark colored'}></i>
                            <i className={'devicon-swift-plain-wordmark colored'}></i>
                            <i className={'devicon-c-plain colored'}></i>
                            <br />
                            <i className={'devicon-typescript-plain colored'} data-toggle="tooltip" data-trigger="hover" data-placement="bottom" title="TypeScript"></i>
                            <i className={'devicon-javascript-plain colored'} data-toggle="tooltip" data-trigger="hover" data-placement="bottom" title="JavaScript"></i>
                            <i className={'devicon-jquery-plain-wordmark colored'}></i>
                            <i className={'devicon-html5-plain-wordmark colored'}></i>
                            <i className={'devicon-css3-plain-wordmark colored'}></i>
                            <i className={'devicon-sass-plain colored'}></i>
                            <br />
                            <h4>Frameworks</h4>
                            <i className={'devicon-angularjs-plain colored'}  data-toggle="tooltip" data-trigger="hover" data-placement="bottom" title="Angular 2/4"></i>
                            <i className={'devicon-bootstrap-plain-wordmark colored'}></i>
                            <i className={'devicon-nodejs-plain-wordmark colored'}></i>
                            <i className={'devicon-dotnet-plain-wordmark colored'}></i>
                            <br />
                            <h4>Source Control/Tools</h4>
                            <i className={'devicon-git-plain-wordmark colored'}></i>
                            <i className={'devicon-github-plain-wordmark colored'}></i>
                            <i className={'devicon-gitlab-plain-wordmark colored'}></i>
                            <i className={'devicon-sourcetree-plain colored'} data-toggle="tooltip" data-trigger="hover" data-placement="bottom" title="Subversion"></i>
                            <i className={'devicon-gulp-plain colored'}></i>
                            <h4>Database</h4>
                            <i className={'devicon-mysql-plain-wordmark colored'}></i>
                            <i className={'devicon-windows8-plain colored'} data-toggle="tooltip" data-trigger="hover" data-placement="bottom" title="MSSQL"></i>
                            <br />
                            <br />
                            <p>
                                I have lots of experience in programming in Java, which makes it my primary choice of language. It's what EMU uses for their curriculum, and that
                                helped vastly when learning how to develop Android applications! On top of that, I also know Swift and can develop for iOS as well. I have
                                experience with C# as I used it when developing video games in Unity. For my software capstone, I worked a team of classmates to create a website
                                for a client using the .NET framework which interacted with a MySQL database through C#. I got plenty of experience with C# in Windows Forms Apps
                                while at my internship at KLA Labs! I have had the opportunity to get some experience with Intel Assembly and C when taking my Operating 
                                Systems class, where we built a base for our own version of Linux from scratch. I have experience with Google Apps Script too. Since it stems from
                                JavaScript, I developed a web app for EMU's Housing &amp; Residence Life department that assists in scheduling move outs for residents with 
                                their RAs. At Daifuku I've gotten a lot experience working with TypeScript and Angular 2! In part with implementing Angular for a new project,
                                I took it upon myself to learn how to create progressive web apps and how service workers work in order to implement those technologies into that
                                project.
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

export default App;
