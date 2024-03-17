import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };
  const handleOnFocus = () => {};
  const handleOnBlur = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      // formRef.current.reset();
      alert("Message envoyé avec succès !");
      setContactForm({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex flex-col flex-1 min-w-[50%]">
        <h1 className="head-text">Contactez-moi</h1>
        <form
          ref={formRef}
          className="flex flex-col gap-6 w-full mt-14"
          onSubmit={handleSubmit}
        >
          <label htmlFor="" className="font-semibold">
            Nom
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Marc"
              value={contactForm.name}
              onChange={handleChange}
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
            />
          </label>
          <label htmlFor="" className="font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="marc@dupuis.com"
              value={contactForm.email}
              onChange={handleChange}
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
            />
          </label>
          <label htmlFor="" className="font-semibold">
            Ton message
            <textarea
              type="text"
              name="message"
              className="input"
              placeholder="Dites moi tout !"
              value={contactForm.message}
              onChange={handleChange}
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            disabled={loading}
          >
            {loading ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
