export interface Professional {
  id: string;
  name: string;
  description: string;
  imgUrl: string;
  score: number;
  qtdScores: number;
}

const profissionals: Professional[] = [
  {
    id: "1",
    name: "Marcão Machadada",
    description:
      "Salve, salve, galera! Sou o Marcão Machadada, o único cabeleireiro que pode transformar uma juba de leão em um corte digno de um rei com um único movimento de tesoura.",
    imgUrl: "/professionals/profissional-1.jpg",
    score: 5,
    qtdScores: 87,
  },
  {
    id: "2",
    name: "Beto Brutal",
    description:
      "Quando o assunto é barba, ninguém faz melhor que Beto Brutal! Suas lâminas afiadas são lendárias e seu estilo é inconfundível. Para um visual marcante e robusto, ele é o seu homem!",
    imgUrl: "/professionals/profissional-2.jpg",
    score: 4.5,
    qtdScores: 39,
  },
  {
    id: "3",
    name: "Kathya Tesourada",
    description:
      "Kathya não tem medo de tesourar! Com precisão e ousadia, ela transforma qualquer cabelo em uma obra-prima rústica. Seu lema? Corte raiz sem perder a feminilidade!",
    imgUrl: "/professionals/profissional-3.jpg",
    score: 5,
    qtdScores: 91,
  },
  {
    id: "4",
    name: "Sérgio Serrador",
    description:
      "Sérgio é conhecido por sua técnica impecável e estilo único. Com sua serra (ou melhor, tesoura) em mãos, ele cria visuais que impressionam. Barba bem-feita é com ele mesmo!",
    imgUrl: "/professionals/profissional-4.jpg",
    score: 4.5,
    qtdScores: 29,
  },
  {
    id: "5",
    name: "Rafa Raspa Tudo",
    description:
      "Para aqueles que preferem um look mais rente, Rafa é o especialista! Sua máquina raspa tudo com precisão, deixando um acabamento perfeito. Raspar é a sua arte!",
    imgUrl: "/professionals/profissional-5.jpg",
    score: 4.5,
    qtdScores: 44,
  },
  {
    id: "6",
    name: "Fernanda Faísca",
    description:
      "Fernanda traz um toque de brilho e energia a cada corte. Com suas lâminas ágeis, ela faz milagres em qualquer tipo de cabelo. Precisa de um look cheio de faísca? É com ela mesmo!",
    imgUrl: "/professionals/profissional-6.jpg",
    score: 5,
    qtdScores: 46,
  },
];

export default function useProfessionals() {
  return {
    profissionals,
  };
}
