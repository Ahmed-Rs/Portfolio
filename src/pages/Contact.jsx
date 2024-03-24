import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import emailjs from "@emailjs/browser";
import Helicopter from "../models/Helicopter";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const Contact = () => {
  const formRef = useRef(null);
  const { alert, showAlert, hideAlert } = useAlert();
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("Idle");
  const [flight, setFlight] = useState(false);
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
        showAlert({ message: "Message envoyé avec succès !", type: "success" });
        // On enclenchera l'animation de décollage de l'hélicoptère une fois le message envoyé
        setFlight(true);
        setTimeout(() => {
          setFlight(false);
          setContactForm({ name: "", email: "", message: "" });
        }, 3500);
      })
      .catch((error) => {
        setLoading(false);
        setCurrentAnimation("Static Pose");
        setFlight(false);
        console.error("Error: ", error);
        showAlert({
          message: "Erreur lors l'envoi de votre message !",
          type: "danger",
        });
      });
  };

  return (
    <section className="relative flex flex-col lg:flex-row justify-center items-center h-screen bg-gray-50 py-12 px-4 lg:px-8">
      {alert.show && (
        <Alert alert={alert} showAlert={showAlert} hideAlert={hideAlert} />
      )}

      <div className="relative flex flex-col flex-1 min-w-[50%] max-w-4xl h-screen m-0 mt-20">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Contactez-moi
        </h1>
        <form
          ref={formRef}
          className="relative flex z-20 flex-col gap-4 w-full m-0 mt-4 bg-white shadow-lg rounded-lg p-6"
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
      <div className="absolute bg-gray-50 top-[170px] z-10 left-0 right-0 w-full h-screen">
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
              // Le mouvement primaire de l'hélicoptère (au chargement de la page) est généré par le différentiel entre la valeur ci-dessous de "position" et celle dans le fichier Helicopter.jsx lorsque "flight===false"
              // Dans Contact.js et Helicopter.js, on a "flight===false" au chargement de la page, mais "position" a 2 valeurs différentes dans ces 2 fichiers, donc l'hélicoptère vas venir depuis la position initiale ci-dessous, rejoindre celle définie dans Helicopter.js dans le useFrame() lorsque "flight===false", ce qui lui fera faire un atterrissage
              position={[0, 1, 3]}
              rotation={[10.8, 41, 17.2]}
              scale={[0.014, 0.014, 0.014]}
              currentAnimation={currentAnimation}
              filledInputs={filledInputs}
              flight={flight}
              setFlight={setFlight}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
