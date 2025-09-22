export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
  explanation: string;
}

export const questions: Question[] = [
  // Introducció a la programació
  {
    id: 1,
    question: "Quants tipus d'operacions bàsiques pot realitzar un ordinador?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 1,
    category: "Introducció a la programació",
    explanation: "Un ordinador pot realitzar 3 tipus d'operacions: operacions aritmètiques bàsiques, operacions de tipus lògic i emmagatzematge i recuperació d'informació."
  },
  {
    id: 2,
    question: "Què és un programa?",
    options: [
      "Un tipus de dada",
      "Un conjunt d'ordres que executa l'ordinador per aconseguir un objectiu",
      "Un dispositiu físic",
      "Una variable"
    ],
    correctAnswer: 1,
    category: "Programes i algorismes",
    explanation: "Un programa és un conjunt d'ordres que executa l'ordinador per aconseguir un objectiu."
  },

  // Algorismes
  {
    id: 3,
    question: "Què és un algorisme?",
    options: [
      "Un llenguatge de programació",
      "La descripció exacta de la seqüència de passos per resoldre un problema",
      "Un tipus de variable",
      "Un sistema operatiu"
    ],
    correctAnswer: 1,
    category: "Programes i algorismes",
    explanation: "Un algorisme és la descripció exacta i sense ambigüitats de la seqüència de passos elementals per resoldre un problema."
  },

  // Llenguatges de programació
  {
    id: 4,
    question: "Quants tipus principals de llenguatges de programació hi ha segons el nivell?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 1,
    category: "Llenguatges de programació",
    explanation: "Hi ha 3 tipus principals: llenguatges de baix nivell, de nivell intermig i d'alt nivell."
  },
  {
    id: 5,
    question: "Quin llenguatge està format per uns i zeros?",
    options: [
      "Llenguatge assemblador",
      "Llenguatge C",
      "Llenguatge màquina",
      "Python"
    ],
    correctAnswer: 2,
    category: "Llenguatges de baix nivell",
    explanation: "El llenguatge màquina està format per codi binari (uns i zeros) que entén directament el microprocessador."
  },
  {
    id: 6,
    question: "Quin és el principal avantatge dels llenguatges d'alt nivell?",
    options: [
      "Són més ràpids",
      "Són fàcils d'entendre i no tenen incompatibilitats entre microprocessadors",
      "Ocupen menys memòria",
      "No necessiten traducció"
    ],
    correctAnswer: 1,
    category: "Llenguatges d'alt nivell",
    explanation: "Els llenguatges d'alt nivell són fàcils d'entendre i no tenen incompatibilitats entre microprocessadors diferents."
  },
  {
    id: 7,
    question: "Quin llenguatge va ser creat per Guido van Rossum l'any 1991?",
    options: ["Java", "Python", "JavaScript", "C"],
    correctAnswer: 1,
    category: "Llenguatges d'alt nivell",
    explanation: "Python va ser creat per Guido van Rossum l'any 1991."
  },

  // Assembladors i intèrprets
  {
    id: 8,
    question: "Què fa un compilador?",
    options: [
      "Executa el programa directament",
      "Tradueix el codi font a codi executable",
      "Només verifica errors",
      "Gestiona la memòria"
    ],
    correctAnswer: 1,
    category: "Assembladors i intèrprets",
    explanation: "Un compilador tradueix el codi font escrit en un llenguatge d'alt nivell a codi executable per l'ordinador."
  },
  {
    id: 9,
    question: "Quina és la diferència principal entre un compilador i un intèrpret?",
    options: [
      "El compilador és més lent",
      "L'intèrpret tradueix i executa instrucció per instrucció, el compilador genera codi objecte",
      "No hi ha diferències",
      "L'intèrpret només funciona amb Python"
    ],
    correctAnswer: 1,
    category: "Assembladors i intèrprets",
    explanation: "L'intèrpret tradueix i executa directament instrucció per instrucció, mentre que el compilador genera un fitxer de codi objecte."
  },
  {
    id: 10,
    question: "Què fa un programa linkador o muntador?",
    options: [
      "Comprova errors de sintaxi",
      "Resol direccionaments i combina codi objecte amb llibreries externes",
      "Tradueix a codi màquina",
      "Optimitza el codi"
    ],
    correctAnswer: 1,
    category: "Assembladors i intèrprets",
    explanation: "El linkador resol els direccionaments del codi objecte a les llibreries externes i els combina en un executable."
  },

  // Fases de desenvolupament
  {
    id: 11,
    question: "Quantes fases principals té el desenvolupament d'un programa?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 1,
    category: "Fases de desenvolupament",
    explanation: "Hi ha 4 fases principals: Anàlisi, Disseny, Implementació i Documentació."
  },
  {
    id: 12,
    question: "Quin és l'objectiu principal de la fase d'anàlisi?",
    options: [
      "Programar l'aplicació",
      "Establir què ha de fer el programari, no com ho ha de fer",
      "Provar l'aplicació",
      "Documentar el codi"
    ],
    correctAnswer: 1,
    category: "Fases de desenvolupament",
    explanation: "L'anàlisi estableix què ha de fer el programari, no com ho ha de fer."
  },
  {
    id: 13,
    question: "Durant quina fase es dissenyen els algorismes?",
    options: ["Anàlisi", "Disseny", "Implementació", "Documentació"],
    correctAnswer: 1,
    category: "Fases de desenvolupament",
    explanation: "Durant la fase de disseny s'estableix com es duen a terme els objectius i es dissenyen els algorismes."
  },

  // Dades i variables
  {
    id: 14,
    question: "Què és una variable?",
    options: [
      "Un tipus de dada",
      "Una operació matemàtica",
      "Una zona de memòria amb un nom on es desa una dada",
      "Un error de programació"
    ],
    correctAnswer: 2,
    category: "Dades i variables",
    explanation: "Una variable és una zona de memòria a la que se li assigna un nom, on es desa una dada d'un determinat tipus."
  },
  {
    id: 15,
    question: "Com es declara una variable de tipus enter en Java?",
    options: ["enter num;", "int num;", "number num;", "integer num;"],
    correctAnswer: 1,
    category: "Dades i variables",
    explanation: "En Java, una variable de tipus enter es declara amb 'int num;'."
  },

  // Diagrames de flux
  {
    id: 16,
    question: "Com es coneixen també els diagrames de flux?",
    options: ["Pseudocodi", "Ordinogrames", "Algorismes", "Fluxogrames"],
    correctAnswer: 1,
    category: "Diagrames de flux",
    explanation: "Els diagrames de flux també es coneixen com ordinogrames."
  },
  {
    id: 17,
    question: "Quin símbol s'utilitza per representar una decisió en un diagrama de flux?",
    options: ["Rectangle", "Oval", "Rombe", "Cercle"],
    correctAnswer: 2,
    category: "Diagrames de flux",
    explanation: "El símbol de decisió té forma de rombe i expressa una operació de comprovació cert/fals."
  },
  {
    id: 18,
    question: "Què indica l'operador '==' en un diagrama de flux?",
    options: [
      "Assignació",
      "Comparació d'igualtat",
      "Suma",
      "Multiplicació"
    ],
    correctAnswer: 1,
    category: "Diagrames de flux",
    explanation: "L'operador '==' s'utilitza per comparar si dues dades són iguals, mentre que '=' s'usa per assignació."
  },

  // Casos pràctics
  {
    id: 19,
    question: "Què fa l'operador '%' en programació?",
    options: [
      "Calcula el percentatge",
      "Calcula el residu de la divisió",
      "Multiplica per 100",
      "Divideix per 100"
    ],
    correctAnswer: 1,
    category: "Casos pràctics",
    explanation: "L'operador '%' calcula el residu de la divisió entre dos nombres."
  },
  {
    id: 20,
    question: "En un diagrama de flux, quina instrucció treure un intent d'una variable 'intents'?",
    options: [
      "intents = -1",
      "intents = intents - 1",
      "intents - 1",
      "intents = -intents"
    ],
    correctAnswer: 1,
    category: "Casos pràctics",
    explanation: "Per treure un intent, s'utilitza 'intents = intents - 1' que resta 1 al valor actual de la variable."
  }
];