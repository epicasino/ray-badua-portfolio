export default function ContactForm() {
  return (
    <section className="contactForm container col-span-2 grid grid-rows-3 content-center">
      <h1 className="text-5xl grid content-center justify-center row-span-1 underline">
        Contact Form
      </h1>
      <form
        className="contactForm grid grid-cols-2 gap-4 mx-10 content-start row-span-2 text-black"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <input
          type="hidden"
          name="access_key"
          value="bb1232a3-f140-4f05-8bb3-c26f7638f5c4"
        ></input>

        <input
          type="hidden"
          name="redirect"
          value="https://web3forms.com/success"
        />

        <input
          type="checkbox"
          name="botcheck"
          id=""
          style={{ display: "none" }}
        />

        <input type="text" placeholder="First Name" name="fName"></input>

        <input type="text" placeholder="Last Name" name="lName"></input>

        <input
          type="email"
          placeholder="email@email.com"
          name="email"
          className="col-span-2"
        ></input>

        <textarea
          className="col-span-2"
          placeholder="Your Message"
          name="message"
          rows="10"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white rounded-md col-span-2 mx-auto py-3 px-10 my-6"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
