export const Contact = () => {
  return (
    <div className="bg-[#d3f1f0] py-12" id="contact">
      <div className="container flex-col md:flex-row flex items-stretch justify-between gap-[3rem]">
        <div className="md:w-[40%] w-[100%]" data-aos="fade-left">
          <img src="/assets/contact.JPG" alt="" className="w-full" />
        </div>

        <div className="md:w-[45%] w-[100%]" data-aos="fade-right">
          <h1 className="text-[40px]">Contact Us</h1>
          <p className="my-[1.5rem]">
            Discover the future of business with our AI-driven Data and Software
            Solutions. For inquiries, collaborations, or tailored services,
            connect with us today. Your journey to unparalleled success starts
            here.
          </p>
          <hr className="border-[#0d47a1]" />
          <div className="my-7 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <img src="/assets/mail.svg" alt="" />
              <p>info@cyberneticbg.co.za</p>
            </div>
            <div className="flex items-center gap-2">
              <img src="/assets/phone.svg" alt="" />
              <p>+27 76 532 0642</p>
            </div>
            <div className="flex items-center gap-2">
              <img src="/assets/location.svg" alt="" />
              <p>
                Nelson Mandela Square, Maude St, 2nd Floor, West Tower,
                Sandton,2196
              </p>
            </div>
          </div>
          <hr className="border-[#0d47a1]" />
          <br />
          <form className="w-full mb-4">
            <div className="flex flex-col gap-1 mb-2">
              <label className="font-medium" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input p-3 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-1 mb-2">
              <label className="font-medium" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="input p-3 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-1 mb-2">
              <label className="font-medium" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="input p-3 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-1 mb-2">
              <label className="font-medium" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Message"
                style={{ resize: "none" }}
                className="input p-3 rounded-md"
              />
            </div>
          </form>
          <button className="button">Contact Us</button>
        </div>
      </div>
    </div>
  );
};
