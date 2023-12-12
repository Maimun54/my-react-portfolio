import { useForm } from "react-hook-form";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

import emailjs from '@emailjs/browser';
import { useRef } from "react";
import Swal from "sweetalert2";
const Contact = () => {
  const form = useRef();
    const {
        register,reset,handleSubmit,formState: { errors },} = useForm()
        const onSubmit= data => {
            console.log(data)
            emailjs.send('service_7v9mu4g', 'template_q5i7c5v', form.current, 'lGgUZ17OaAPqrYpBK')
      .then((result) => {
          console.log(result.text);
          if(result.text==='OK'){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your message successfully send",
              showConfirmButton: false,
              timer: 1500
            });
            reset()
          }
      }, (error) => {
          console.log(error.text);
      });
        }
    return (
        <div className="max-w-[1200px] mx-auto p-4">
            <div className="flex">
                <div className="w-1/2">
        <h2 className="text-3xl font-bold">Let’s talk</h2>
        <p>I'm eager to connect with you! If you have any questions, want to say hello,<br/> or just share your thoughts, feel free to send a message. I'll do my utmost to respond promptly</p>
        <div className="">
  <div className="mx-auto md:w-3/4 lg:w-full">
    
    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input type="text" {...register("from_name",{required:true})} name="from_name" placeholder="name" className="input input-bordered"  />
          {errors.from_name && <span className="text-red-600">This field is required</span>}
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("from_email",{required:true})} name="from_email" placeholder="email" className="input input-bordered"/>
          {errors.from_email && <span className="text-red-600">This field is required</span>}
        </div>
        
        <div className="form-control  mt-6">
        <label className="label">
            <span className="label-text">Message</span>
          </label>
        <textarea  type="text" {...register("message",{required:true})} name="message"  className="textarea textarea-bordered" placeholder="message"></textarea>
        {errors.message && <span className="text-red-600">This field is required</span>}
        </div>
        <button className="btn btn-primary"><input type="submit" value="Send Message" /></button>
      </form>
      <div className="p-5">
        
       
      </div>
      
    </div>
  </div>
</div>
        </div>
                <div className="w-1/2 ml-20">
                    <div>
                    <img src="https://i.ibb.co/8K88qTn/img6.png" alt="" />
                    </div>
                    <div className="flex">
                        



                        <ul className="">
                     <li className="flex py-2 gap-2 items-center text-xl "><FaLocationDot />
                       Cox's Bazar,Bangladesh </li>
                     <li className="flex  py-2 items-center gap-2 text-xl"> <MdOutlineMailOutline /> maimunislam@gmail.com</li>
                     <li className="flex py-2 items-center text-xl gap-2"><FaPhoneVolume />
 01867324653 </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;