const ContactForm = () => {
  return (
    <div>
      <form action="" className=" flex flex-col gap-3 w-full p-5">
        <div className=" flex gap-3 w-full">
          <input
            type="text"
            placeholder="Your Name"
            className=" bg-primary/10 md:w-1/3 w-full p-2 focus:outline-none text-sm rounded text-primary border border-primary"
          />
          <input
            type="email"
            required
            placeholder="Your Email"
            className=" bg-primary/10 p-2 md:w-1/3 w-full focus:outline-none text-sm rounded text-primary border border-primary"
          />
          <input
            type="tel"
            required
            placeholder="Phone Number"
            className=" bg-primary/10 p-2 md:w-1/3 w-full focus:outline-none text-sm rounded text-primary border border-primary"
          />
        </div>
        <div className="">
          <textarea
            name=""
            id=""
            placeholder=" Your Message"
            className=" bg-primary/10 p-2 focus:outline-none text-sm rounded text-primary w-full h-36 border border-primary"
          />
        </div>
        <div className=" flex justify-end">
          <a href="mailto: omotolaniosems@gmail.com">
            <button className="bg-primary text-white p-1.5 px-2 rounded-full">
              Send Message
            </button>
          </a>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
