import Hero from '../components/sections/Hero';
import { heroData } from '../data/hero';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      
      <section className="home-content">
        <div className="container">
          <div className="home-content__section">
            <h2>About Me</h2>
            <p>
              I'm a passionate software developer with a strong foundation in full-stack development. 
              My journey in technology began with a curiosity about how things work, which evolved into 
              a career dedicated to building innovative solutions that make a difference.
            </p>
            <p>
              Over the years, I've worked on diverse projects ranging from web applications to complex 
              backend systems. I believe in writing clean, maintainable code and following best practices 
              that ensure scalability and performance.
            </p>
          </div>

          <div className="home-content__section">
            <h2>What I Do</h2>
            <p>
              I specialize in modern web technologies including React, TypeScript, Node.js, and various 
              cloud platforms. My approach combines technical expertise with a deep understanding of user 
              needs, ensuring that every solution I build is both powerful and user-friendly.
            </p>
            <p>
              Whether it's architecting scalable systems, optimizing performance, or crafting intuitive 
              user interfaces, I bring dedication and attention to detail to every project. I'm constantly 
              learning and adapting to new technologies to stay at the forefront of the industry.
            </p>
          </div>

          <div className="home-content__section">
            <h2>My Philosophy</h2>
            <p>
              I believe that great software is built on three pillars: solid engineering principles, 
              user-centric design, and continuous improvement. Code should be elegant, systems should 
              be reliable, and products should delight users.
            </p>
            <p>
              Collaboration is key to success. I thrive in environments where ideas are shared freely, 
              feedback is constructive, and everyone is committed to excellence. I'm always eager to 
              learn from others and share my knowledge with the community.
            </p>
          </div>

          <div className="home-content__section">
            <h2>Beyond Code</h2>
            <p>
              When I'm not coding, I enjoy exploring new technologies through side projects, contributing 
              to open source, and staying active in the developer community. I believe in giving back and 
              helping others grow in their careers.
            </p>
            <p>
              I'm also passionate about mentoring aspiring developers and sharing insights through writing. 
              Technology is constantly evolving, and I find joy in both learning and teaching as we navigate 
              this ever-changing landscape together.
            </p>
          </div>

          <div className="home-content__section">
            <h2>Let's Connect</h2>
            <p>
              I'm always interested in hearing about new opportunities, collaborations, or just having a 
              conversation about technology. Whether you have a project in mind, want to discuss ideas, 
              or simply want to connect, feel free to reach out.
            </p>
            <p>
              You can find me on various platforms or send me an email at {heroData.socialLinks[0]?.platform}. 
              I look forward to connecting with you!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
