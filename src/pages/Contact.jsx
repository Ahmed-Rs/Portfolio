import { Suspense, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Helicopter from "../models/Helicopter";
import Loader from "../components/Loader";

const Contact = () => {
  const formRef = useRef(null);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("Idle");
  const [currentSpeed, setCurrentSpeed] = useState(0.1);
  const [filledInputs, setFilledInputs] = useState(0);

  // Décompte du nombre d'inputs remplis
  const updateFilledInputs = () => {
    const count = Object.values(contactForm).filter(
      (value) => value.trim() !== ""
    ).length;
    setFilledInputs(count);
  };
  useEffect(() => {
    updateFilledInputs();
  }, [contactForm]);
  console.log("filledInputs", filledInputs);

  const handleChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };
  const handleOnFocus = () => {};
  const handleOnBlur = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: contactForm.name,
          to_name: "Ahmed",
          from_email: contactForm.email,
          to_email: "wagentester4@gmail.com",
          message: contactForm.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        alert("Message envoyé avec succès !");
        // On enclenchera l'animation de décollage de l'hélicoptère une fois le message envoyé
      })
      .catch((error) => {
        setLoading(false);
        alert("Problème lors de l'envoi du message !");
        setCurrentAnimation("Static Pose");
        console.error("Error: ", error);
      });
    setContactForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center h-screen bg-gray-50 py-12 px-4 lg:px-8">
      <div className="flex flex-col flex-1 min-w-[50%] max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Contactez-moi
        </h1>
        <form
          ref={formRef}
          className="flex flex-col gap-4 w-full mt-4 bg-white shadow-lg rounded-lg p-6"
          onSubmit={handleSubmit}
        >
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nom
            <input
              type="text"
              name="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Marc"
              value={contactForm.name}
              onChange={handleChange}
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
            />
          </label>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
            <input
              type="email"
              name="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="marc@dupuis.com"
              value={contactForm.email}
              onChange={handleChange}
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
            />
          </label>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Ton message
            <textarea
              name="message"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Dites moi tout !"
              rows="4"
              value={contactForm.message}
              onChange={handleChange}
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
            />
          </label>
          <button
            type="submit"
            className="mt-4 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            disabled={loading}
          >
            {loading ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>
      </div>
      <div className="lg:w1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 60,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[1.5, 2, 1]} intensity={20} />
          <Suspense fallback={<Loader />}>
            <Helicopter
              position={[0, 0, 0]}
              rotation={[10.8, 41.2, 17.2]}
              scale={[0.03, 0.03, 0.03]}
              currentAnimation={currentAnimation}
              filledInputs={filledInputs}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
