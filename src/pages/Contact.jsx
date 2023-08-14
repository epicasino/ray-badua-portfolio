import ContactForm from '../components/main/contact/ContactForm';
import ContactText from '../components/main/contact/ContactText';
import '../components/main/contact/contact.css'

export default function Contact() {
  return (
    <>
      <section className="grid grid-cols-3 gap-4 m-5" id="contact">
        <ContactText />
        <ContactForm />
      </section>
    </>
  );
}
