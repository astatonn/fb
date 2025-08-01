import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Scale, 
  FileText, 
  Briefcase, 
  Shield, 
  Calculator,
  Gavel,
  HandHeart
} from "lucide-react";
import { motion } from "framer-motion";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
  specialties: string[];
}

const serviceList: ServiceProps[] = [
  {
    title: "Direito Trabalhista",
    description: "Defesa completa dos direitos trabalhistas de empregados e empregadores",
    icon: <Briefcase className="w-12 h-12 text-amber-700" />,
    specialties: [
      "Rescisões trabalhistas",
      "Horas extras e adiconais",
      "Assédio moral e sexual",
      "Acidentes de trabalho",
      "Estabilidade no emprego",
      "Verbas rescisórias"
    ],
  },
  {
    title: "Direito Civil",
    description: "Soluções jurídicas para questões civis entre pessoas físicas e jurídicas",
    icon: <Scale className="w-12 h-12 text-amber-700" />,
    specialties: [
      "Responsabilidade civil",
      "Danos morais e materiais",
      "Direito do consumidor",
      "Indenizações",
      "Direito de família",
      "Sucessões"
    ],
  },
  {
    title: "Contratos",
    description: "Elaboração, revisão e assessoria em contratos empresariais e pessoais",
    icon: <FileText className="w-12 h-12 text-amber-700" />,
    specialties: [
      "Contratos empresariais",
      "Contratos de trabalho",
      "Revisão contratual",
      "Rescisão de contratos",
      "Contratos imobiliários",
      "Acordos comerciais"
    ],
  },
  {
    title: "Cobranças",
    description: "Recuperação eficiente de créditos através de meios judiciais e extrajudiciais",
    icon: <Calculator className="w-12 h-12 text-amber-700" />,
    specialties: [
      "Cobrança judicial",
      "Cobrança extrajudicial",
      "Execução de títulos",
      "Negativação",
      "Acordos de pagamento",
      "Recuperação de crédito"
    ],
  },
  {
    title: "Consultoria Jurídica",
    description: "Orientação preventiva para empresas e particulares",
    icon: <Shield className="w-12 h-12 text-amber-700" />,
    specialties: [
      "Consultoria empresarial",
      "Compliance trabalhista",
      "Auditoria jurídica",
      "Pareceres técnicos",
      "Orientação preventiva",
      "Due diligence"
    ],
  },
  {
    title: "Mediação e Conciliação",
    description: "Resolução de conflitos através de métodos alternativos",
    icon: <HandHeart className="w-12 h-12 text-amber-700" />,
    specialties: [
      "Mediação familiar",
      "Conciliação trabalhista",
      "Acordos extrajudiciais",
      "Câmara de mediação",
      "Resolução de conflitos",
      "Negociação assistida"
    ],
  },
];

export const Services = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-b from-amber-700 to-amber-900 text-transparent bg-clip-text">
            Áreas de{" "}
          </span>
          Especialidade
        </h2>
        <p className="md:w-2/3 mx-auto text-xl text-muted-foreground">
          Oferecemos serviços jurídicos especializados com foco na defesa dos seus direitos 
          e na solução eficiente de conflitos legais.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceList.map(({ title, description, icon, specialties }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
              <CardHeader className="text-center pb-4">
                <motion.div 
                  className="flex justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {icon}
                </motion.div>
                <CardTitle className="text-xl mb-2">{title}</CardTitle>
                <CardDescription className="text-base">{description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold text-amber-700 mb-3">Especialidades:</h4>
                  {specialties.map((specialty: string, specialtyIndex) => (
                    <motion.div
                      key={specialtyIndex}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (specialtyIndex * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <Gavel className="w-4 h-4 text-amber-600 mr-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{specialty}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-16">
        <p className="text-muted-foreground mb-6">
          Precisa de orientação jurídica especializada? Entre em contato conosco.
        </p>
        <a
          href="https://wa.me/+5567991147535"
          target="_blank"
          className="inline-flex items-center px-8 py-4 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors text-lg font-semibold"
        >
          Consulte Nossos Especialistas
        </a>
      </div>
    </section>
  );
};
