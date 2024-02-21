//About me section defined 

import "./about.css";


const About = () => {
    return (
        <section className="about-me">
            <div className="rounded-image"> <img src="./images/selfie.png" alt="About Me" /></div>
                <div>

                    <h1>About Me</h1>
                    <p>My name is Riley Gaffney and I am currently a student in the Fullstack Web Development boot-camp.
                        I have a passion for technology and love to learn new concepts and ideas.
                        In my spare time, you can find me working on my code, playing video games or spending time with my family and friends.
                    </p>
                    <p></p>
                </div>
        </section>
    );
}

export default About;
