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
              I'm a final year student at Delhi Technological University, currently working as an SDE Intern
              at ClearTax, Bengaluru. My tech journey has been diverse and enriching—from exploring investing
              and options trading in my first year to diving deep into development and problem-solving.
            </p>
            <p>
              In my third year, I committed to competitive programming and data structures, achieving
              <strong> Expert rating on Codeforces</strong> and <strong>Knight status on LeetCode</strong>.
              Previously, I also interned as an SDE at Ensuredit, Gurugram, where I honed my full-stack
              development skills.
            </p>
          </div>

          <div className="home-content__section">
            <h2>What I Do</h2>
            <p>
              I work on full-stack development with modern web technologies, building scalable and performant
              applications. My strong foundation in data structures, algorithms, and competitive programming
              enables me to write efficient, optimized code and tackle complex technical challenges.
            </p>
            <p>
              At ClearTax, I contribute to building systems that serve millions of users, focusing on
              creating robust solutions that scale. I'm passionate about writing clean, maintainable code
              and continuously learning new technologies to solve real-world problems effectively.
            </p>
          </div>

          <div className="home-content__section">
            <h2>My Journey</h2>
            <p>
              My tech journey started in my first year with learning about investing, options trading,
              and basic coding. In my second year, I focused on development and strengthening my DSA
              fundamentals. The real transformation happened in my third year when I went all-in on
              competitive programming.
            </p>
            <p>
              Through consistent practice and dedication, I achieved Expert rating on Codeforces and
              Knight status on LeetCode. This journey taught me problem-solving, algorithmic thinking,
              and the importance of perseverance—skills that translate directly to building better software.
            </p>
          </div>

          <div className="home-content__section">
            <h2>Beyond Code</h2>
            <p>
              When I'm not coding, you'll find me immersed in books—especially those on finance and technology.
              Reading helps me stay curious and informed about industry trends, financial markets, and emerging
              technologies that shape our world.
            </p>
            <p>
              I aspire to build a career in tech working at scale, solving problems that impact millions of users.
              I'm constantly learning, experimenting with new technologies, and seeking opportunities to grow as
              an engineer while contributing to meaningful projects.
            </p>
          </div>

          <div className="home-content__section">
            <h2>Let's Connect</h2>
            <p>
              I'm always open to discussing new opportunities, tech trends, competitive programming, or
              interesting projects. Whether you want to talk about algorithms, system design, full-stack
              development, or just connect over shared interests, feel free to reach out.
            </p>
            <p>
              You can find me on {heroData.socialLinks.map((link, i) =>
                i === heroData.socialLinks.length - 1 ? `or ${link.platform}` :
                i === heroData.socialLinks.length - 2 ? link.platform + ' ' :
                link.platform + ', '
              ).join('')}. Let's connect and build something amazing together!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
