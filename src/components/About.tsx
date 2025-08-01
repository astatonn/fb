import { Statistics } from "./Statistics";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="flex items-center justify-center lg:w-[300px] mb-6 lg:mb-0">
            <img
              src="/logo.svg"
              alt="Froener e Bulhões Advocacia"
              className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain"
            />
          </div>
          <div className="flex flex-col justify-between flex-1">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center lg:text-left">
                <span className="bg-gradient-to-b from-amber-700 to-amber-900 text-transparent bg-clip-text">
                  Sobre{" "}
                </span>
                o Escritório
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mt-4 text-center lg:text-left">
                Com sede em Campo Grande/MS, o escritório Froener e Bulhões Advocacia 
                é especializado em Direito Trabalhista e Cível, oferecendo soluções 
                jurídicas personalizadas para empresas e particulares. Nossa equipe 
                experiente atua com dedicação e conhecimento técnico para garantir 
                os melhores resultados aos nossos clientes.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mt-4 text-center lg:text-left">
                Nosso compromisso é oferecer atendimento de excelência, 
                transparência e agilidade na resolução de conflitos jurídicos.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
