import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Award, Users, Scale } from "lucide-react";
import { motion } from "framer-motion";

interface SuccessCaseProps {
  icon: React.ReactNode;
  area: string;
  title: string;
  description: string;
  result: string;
  badge: string;
}

const successCases: SuccessCaseProps[] = [
  {
    icon: <Scale className="w-8 h-8 text-amber-700" />,
    area: "Direito Trabalhista",
    title: "Rescisão Indireta com Indenização",
    description: "Cliente conseguiu comprovar assédio moral e condições inadequadas de trabalho, resultando em rescisão indireta.",
    result: "R$ 45.000",
    badge: "Valor Obtido"
  },
  {
    icon: <Award className="w-8 h-8 text-amber-700" />,
    area: "Responsabilidade Civil",
    title: "Indenização por Danos Morais",
    description: "Caso de danos morais por negativação indevida, com rápida resolução através de acordo extrajudicial.",
    result: "R$ 15.000",
    badge: "Acordo"
  },
  {
    icon: <Users className="w-8 h-8 text-amber-700" />,
    area: "Direito Civil",
    title: "Cobrança Empresarial",
    description: "Recuperação de valores em atraso de cliente empresarial através de ação executiva eficiente.",
    result: "R$ 120.000",
    badge: "Recuperado"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-amber-700" />,
    area: "Direito Trabalhista",
    title: "Adicional de Insalubridade",
    description: "Reconhecimento judicial de adicional de insalubridade não pago durante todo o período laboral.",
    result: "R$ 28.000",
    badge: "Sentença Favorável"
  }
];

export const SuccessCases = () => {
  return (
    <section id="success-cases" className="container py-24 sm:py-32">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-b from-amber-700 to-amber-900 text-transparent bg-clip-text">
            Casos de{" "}
          </span>
          Sucesso
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Conheça alguns dos resultados obtidos para nossos clientes. 
          Cada caso representa nosso compromisso com a excelência jurídica e a defesa dos direitos.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {successCases.map((case_item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {case_item.icon}
                    </motion.div>
                    <div>
                      <CardTitle className="text-lg">{case_item.title}</CardTitle>
                      <CardDescription className="text-amber-700 font-semibold">
                        {case_item.area}
                      </CardDescription>
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Badge variant="secondary" className="bg-amber-100 text-amber-700">
                      {case_item.badge}
                    </Badge>
                  </motion.div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{case_item.description}</p>
                <motion.div 
                  className="bg-gray-50 p-4 rounded-lg border"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p className="text-sm text-gray-700 font-semibold">Resultado:</p>
                  <motion.p 
                    className="text-2xl font-bold text-gray-800"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                  >
                    {case_item.result}
                  </motion.p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-muted-foreground mb-4">
          Estes são apenas alguns exemplos dos resultados que obtivemos para nossos clientes.
        </p>
        <a
          href="https://wa.me/+5567991147535"
          target="_blank"
          className="inline-flex items-center px-6 py-3 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors"
        >
          Consulte seu caso conosco
        </a>
      </div>
    </section>
  );
};