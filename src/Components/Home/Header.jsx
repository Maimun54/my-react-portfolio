import Typewriter from 'typewriter-effect';
import { IoDownloadOutline } from "react-icons/io5";

import ParticleBg from '../ParticleBg/ParticleBg';




const Header = ({ particleBg }) => {
    return (
       
        <section>
             <div className='bg-black'>
    {particleBg && <ParticleBg particleBg={particleBg} />}
          <div className='lg:w-[1200px]  mx-auto'>
              <section className="header  min-h-screen flex items-center">
             
                  <div className="container mx-auto px-4">
                      <div className="flex flex-col md:flex-row items-center">
               <div className="md:w-1/2">
               <h1 className="text-4xl md:text-5xl font-bold text-[#5030f0] mb-2 md:mb-4">
                       Hi, I’m <br /> Maimun Islam
                  </h1>
          <h3 className="text-xl font-bold md:text-2xl text-red-600 mb-4">
                   <Typewriter
                                      options={{
                                          strings: [
                                              "Front End Developer",
                                              "React Developer",
                                              "Wordpress Expert",
                                              "Programmer"
                                          ],
                                          autoStart: true,
                                          loop: true,
                                      }}
                                  />
                              </h3>
                              <p className="text-white pr-0 md:pr-8 mb-4 md:w-3/4">
                                  
           I am a self-driven and passionate web developer, driven by the desire to build confidence and recognition through harnessing my potential in the realm of web development. My goal is to showcase my innovative and creative skills to contribute to both personal and company growth. I have a keen interest in continuous learning, always seeking to expand my knowledge and gain experience with emerging technologies.
                              </p>
                              <a href="#">
                                  <button className='btn btn-danger'><IoDownloadOutline /> Resume</button>
                              </a>
                          </div>
                          <div className="lg:w-[60%] md:w-full mt-6 md:mt-0">
                              <img src="https://i.ibb.co/TrWshxx/5855046-1-prev-ui.png" alt="Developer" className="w-full h-auto" />
                          </div>
                      </div>
                  </div>
              </section>
              
          </div>
          
      </div>
        </section>
     
       
    );
};

export default Header;
