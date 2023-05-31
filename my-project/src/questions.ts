export interface QuizObject {
  title: string,
  variants: string[],
  correct: number,
}

export const questions: QuizObject[] = [
  {
    title: "Care este capitala Spaniei?",
    variants: ["Madrid", "Barcelona", "Sevilla", "Valencia"],
    correct: 0
  },
  {
    title: "Câte planete există în sistemul solar?",
    variants: ["7", "8", "9", "10"],
    correct: 1
  },
  {
    title: "Cine a scris piesa de teatru 'Hamlet'?",
    variants: ["William Shakespeare", "George Bernard Shaw", "Anton Chekhov", "Henrik Ibsen"],
    correct: 0
  },
  {
    title: "În ce an a avut loc prima călătorie a omului pe Lună?",
    variants: ["1967", "1969", "1972", "1980"],
    correct: 1
  },
  {
    title: "Care este cel mai lung râu din lume?",
    variants: ["Nilul", "Amazonul", "Mississippi", "Yangtze"],
    correct: 0
  },
  {
    title: "Câte elemente chimice există în tabelul periodic?",
    variants: ["92", "104", "118", "130"],
    correct: 2
  },
  {
    title: "Cine a compus simfonia a 5-a?",
    variants: ["Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Johann Sebastian Bach", "Franz Schubert"],
    correct: 1
  },
  {
    title: "Care este cel mai mare ocean al lumii?",
    variants: ["Oceanul Atlantic", "Oceanul Pacific", "Oceanul Indian", "Oceanul Arctic"],
    correct: 1
  },
  {
    title: "Câte jucători sunt într-o echipă de fotbal?",
    variants: ["10", "11", "12", "13"],
    correct: 1
  },
  {
    title: "Cine a scris romanul 'Pride and Prejudice'?",
    variants: ["Jane Austen", "Charlotte Brontë", "Emily Brontë", "Virginia Woolf"],
    correct: 0
  }
]