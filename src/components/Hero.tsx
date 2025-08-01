import { Button } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="container py-20 md:py-32">
      {/* Logo para mobile - aparece primeiro */}
      <motion.div 
        className="lg:hidden flex justify-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img 
          src="/logo.svg" 
          alt="Froener e Bulhões Advocacia" 
          className="w-60 h-60 object-contain"
        />
      </motion.div>

      <div className="grid lg:grid-cols-2 place-items-center gap-10">
        <motion.div 
          className="text-center lg:text-start space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.main 
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="inline">
              <span className="inline bg-gradient-to-r from-amber-700 to-amber-900 text-transparent bg-clip-text">
                Froener e Bulhões
              </span>{" "}
              Advocacia
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mt-4 text-amber-700">
              Especialistas em Direito Trabalhista e Cível
            </h2>
          </motion.main>

          <motion.p 
            className="text-lg md:text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Escritório com atuação sólida na defesa dos direitos trabalhistas, empresas e particulares. 
            Atendemos causas relacionadas a rescisões, indenizações, contratos, cobranças, responsabilidade civil e muito mais. 
            Atendimento personalizado, com excelência jurídica e foco na solução eficiente de conflitos.
          </motion.p>

          <motion.div 
            className="space-y-4 md:space-y-0 md:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="https://wa.me/+5567991147535"
              target="_blank"
            >
              <Button className="w-full md:w-auto px-8 py-4 bg-amber-700 hover:bg-amber-800 transition-all duration-300 hover:scale-105">
                Fale Conosco pelo WhatsApp
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Hero cards sections - apenas desktop */}
        <motion.div 
          className="z-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <HeroCards />
        </motion.div>
      </div>
    </section>
  );
};
