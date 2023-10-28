import CardHomePage from "../Components/CardHomePage";
import Footer from "../Components/Footer";
import Menu from "../Components/Menu";
import { PiStarFourFill } from "react-icons/pi";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Homepages() {
  const descriptionControls = useAnimation();
  const characteristicsControls = useAnimation();
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const descriptionCharacteristicsVariants = {
    visible: { opacity: 1, marginLeft: 0, transition: { duration: 0.6 } },
    hidden: { opacity: 0, marginLeft: -100 },
  };

  useEffect(() => {
    if (inView) {
      descriptionControls.start("visible");
    }
  }, [descriptionControls, inView]);

  useEffect(() => {
    if (inView2) {
      characteristicsControls.start("visible");
    }
  }, [characteristicsControls, inView2]);

  return (
    <div>
      <Menu />
      <header className="w-full min-h-max grid grid-cols-2 flex-row bg-neutral-200 rounded-2xl">
        <motion.div
          initial={{ marginLeft: -1000 }}
          animate={{ marginLeft: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center flex-col w-full h-full px-12 col-span-1"
        >
          <h1 className="text-3xl font-bold font-gabarito mb-5 text-blue-800">
            Task Application
          </h1>
          <p className="font-gabarito text-xl ml-2">
            ¡Presentamos la aplicación definitiva para hacer tu vida más
            <b className="text-yellow-500"> organizada y productiva!</b> Con
            nuestra innovadora aplicación de gestión de tareas, nunca más te
            sentirás abrumado por tus responsabilidades diarias.
          </p>
        </motion.div>
        <div className="flex w-full h-96 justify-end col-span-1">
          <motion.img
            initial={{ marginRight: -1000 }}
            animate={{ marginRight: 0 }}
            transition={{ duration: 0.6 }}
            src="/working-banner.png"
            className="w-auto h-[100%] rounded-b-2xl"
          />
        </div>
      </header>
      <motion.section
        animate={descriptionControls}
        initial="hidden"
        variants={descriptionCharacteristicsVariants}
        className={`mt-32 w-full flex flex-col items-center`}
      >
        <PiStarFourFill className="text-3xl p-2 h-auto w-auto bg-neutral-300 rounded-xl text-blue-800 mb-5" />
        <p className="font-gabarito text-lg w-[70%] text-center">
          Con nuestra aplicación, puedes crear, actualizar y eliminar tareas de
          manera sencilla y eficiente. Imagina tener todas tus tareas
          importantes al alcance de tu mano, sin la necesidad de anotarlas en
          papeles o depender de tu memoria. Ya no más olvidos ni estrés
          innecesario.
        </p>
      </motion.section>
      <motion.div ref={ref} />
      <motion.section
        ref={ref2}
        animate={characteristicsControls}
        initial="hidden"
        variants={descriptionCharacteristicsVariants}
        className="w-full mt-32 p-5 flex flex-row "
      >
        <div className="w-full flex flex-col">
          <h2 className="text-2xl w-full text-center">
            Características destacadas de nuestra aplicación
          </h2>
          <div className="flex flex-wrap flex-row w-full justify-center items-center">
            <CardHomePage color="blue" title="Creación de tareas" />
            <CardHomePage color="yellow" title="Actualización de tareas" />
            <CardHomePage color="blue" title="Eliminación de tareas" />
            <CardHomePage color="yellow" title="Vista de tareas" />
            <CardHomePage color="blue" title="Sincronización multiplataforma" />
          </div>
        </div>
        <div></div>
      </motion.section>
      <Footer />
    </div>
  );
}

export default Homepages;
