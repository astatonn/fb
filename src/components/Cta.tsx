import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Precisa de
            <span className="bg-gradient-to-b from-amber-700 to-amber-900 text-transparent bg-clip-text">
              {" "}
              Assessoria Jurídica{" "}
            </span>
            Especializada?
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Entre em contato conosco e agende uma consulta. Nossa equipe está pronta 
            para analisar seu caso e oferecer as melhores soluções jurídicas.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <a
            href="https://wa.me/+5567991147535"
            target="_blank"
            className="w-full md:mr-4 md:w-auto"
          >
            <Button className="w-full md:mr-4 md:w-auto bg-amber-700 hover:bg-amber-800">
              Falar no WhatsApp
            </Button>
          </a>
          <Button
            variant="outline"
            className="w-full md:w-auto border-amber-700 text-amber-700 hover:bg-amber-50"
          >
            Agendar Consulta
          </Button>
        </div>
      </div>
    </section>
  );
};
