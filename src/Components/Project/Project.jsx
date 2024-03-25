

import './Project.css';
const Project = () => {
    return (
        <div className='bg-black'>
          <div className="max-w-[1200px] mx-auto py-5  ">
          
            <h2 className="text-3xl text-[#5030f0] py-10 font-bold text-center">Some of My Projects</h2>
            <div className="flex flex-col gap-8 md:flex-row md:gap-10">
                {/* Project 1 */}
            
               
       <div className="card  w-full md:w-96 bg-base-100 shadow-xl">
  <figure className="relative overflow-hidden group">
    <img
      className="transition-transform duration-300 transform-gpu group-hover:scale-110"
      src="https://i.ibb.co/X7J2Ldv/Untitled-design-3.png"
      alt="Project"
    />
  </figure>
  <div className="card-body">
    <h2 className="card-title">BrandShop - All Brand Car</h2>
    <p>A full-stack single-page car repair web app where people can take and book services. Login system with Firebase and private routes. Dashboard for users and admins where admins can do CRUD operations and users can give reviews and monitor their booking list.</p>
    <div className="skill flex flex-wrap gap-2">
    <span>React.js</span>
      <span>Tailwind</span>
      <span>JavaScript</span>
      <span>Node.js</span>
      <span>Express.js</span>
      <span>MongoDB</span>
    </div>
    <div className="card-actions justify-between">
      <button className="btn btn-primary"><a href="https://brand-shop-47252.web.app/">Live Link</a></button>
      <button className="btn btn-primary"><a href="https://github.com/Maimun54/brand-shop-client">Github Link</a></button>
    </div>
  </div>
</div>
       <div className="card  w-full md:w-96 bg-base-100 shadow-xl">
  <figure className="relative overflow-hidden group">
    <img
      className="transition-transform duration-300 transform-gpu group-hover:scale-110"
      src="https://i.ibb.co/GtntPQw/Untitled-design-1.png"
      alt="Project"
    />
  </figure>
  <div className="card-body">
    <h2 className="card-title">WealthNest -Asset-Management</h2>
    <p>A full-stack multi-page Asset-Management-system web app where people can take and book services. Login system with Firebase and private routes. Dashboard for users and admins where admins can do CRUD operations and users can give reviews and monitor their booking list.</p>
    <div className="flex skill flex-wrap gap-2">
    <span>React.js</span>
      <span>Tailwind</span>
      <span>JavaScript</span>
      <span>Node.js</span>
      <span>Express.js</span>
      <span>MongoDB</span>
    </div>
    <div className="card-actions justify-between">
      <button className="btn btn-primary"><a href="https://learnnestmanagement.netlify.app/">Live Link</a></button>
      <button className="btn btn-primary"><a href="https://github.com/Maimun54/Assets-management-WealthNest-client?tab=readme-ov-file">Github Link</a></button>
    </div>
  </div>
</div>
       <div className="card  w-full md:w-96 bg-base-100 shadow-xl">
  <figure className="relative overflow-hidden group">
    <img
      className="transition-transform duration-300 transform-gpu group-hover:scale-110"
      src="https://i.ibb.co/By2LTMp/Untitled-design-2.png"
      alt="Project"
    />
  </figure>
  <div className="card-body">
    <h2 className="card-title">ChildCare- Blog website</h2>
    <p>A full-stack single-page car repair web app where people can take and book services. Login system with Firebase and private routes. Dashboard for users and admins where admins can do CRUD operations and users can give reviews and monitor their booking list.</p>
    <div className=" skill flex flex-wrap gap-2">
      <span>React.js</span>
      <span>Tailwind</span>
      <span>JavaScript</span>
      <span>Node.js</span>
      <span>Express.js</span>
      <span>MongoDB</span>
    </div>
    <div className="card-actions justify-between">
      <button className="btn btn-primary"><a href="https://child-blog-cfc06.web.app/">Live Link</a></button>
      <button className="btn btn-primary"><a href="https://github.com/Maimun54/blog-website-client">Github Link</a></button>
    </div>
  </div>
</div>

            </div>
        </div>
        </div>
    );
};

export default Project;