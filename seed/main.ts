import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Cria usuários default
  const users = await prisma.player.createMany({
    data: [
      {
        username: "Yuri",
        email: "yuri@example.com",
      },
      {
        username: "Joel",
        email: "joel@example.com",
      },
    ],
  });

  console.log("✅ Usuários criados:", users);

  // Cria perguntas
  const questions = [
    // ---- EASY ----
    {
      text: "Qual resultado de 2 + '2' em JavaScript?",
      type: "multiple_choice",
      options: ["4", "'22'", "NaN", "Erro"],
      answer: "'22'",
      difficulty: "easy",
    },
    {
      text: "Qual método remove o último elemento de um array?",
      type: "multiple_choice",
      options: ["shift()", "unshift()", "pop()", "splice()"],
      answer: "pop()",
      difficulty: "easy",
    },
    {
      text: "Qual destes valores é falsy em JS?",
      type: "multiple_choice",
      options: ["'false'", "0", "[]", "'0'"],
      answer: "0",
      difficulty: "easy",
    },
    {
      text: "Qual extensão padrão de arquivos JSON?",
      type: "multiple_choice",
      options: [".yml", ".yaml", ".json", ".txt"],
      answer: ".json",
      difficulty: "easy",
    },
    {
      text: "Qual comando cria um commit no Git?",
      type: "multiple_choice",
      options: [
        "git commit -m 'msg'",
        "git save 'msg'",
        "git push 'msg'",
        "git log 'msg'",
      ],
      answer: "git commit -m 'msg'",
      difficulty: "easy",
    },
    {
      text: "O que typeof null retorna em JS?",
      type: "multiple_choice",
      options: ["null", "undefined", "object", "NaN"],
      answer: "object",
      difficulty: "easy",
    },
    {
      text: "Qual comando mostra todas as branches no Git?",
      type: "multiple_choice",
      options: ["git show", "git log", "git branch", "git list"],
      answer: "git branch",
      difficulty: "easy",
    },
    {
      text: "Qual método converte array em string separada por vírgula?",
      type: "multiple_choice",
      options: ["join()", "concat()", "split()", "toString()"],
      answer: "join()",
      difficulty: "easy",
    },
    {
      text: "Qual desses NÃO é tipo primitivo em JS?",
      type: "multiple_choice",
      options: ["number", "object", "string", "boolean"],
      answer: "object",
      difficulty: "easy",
    },
    {
      text: "Em JSON, as chaves devem estar entre:",
      type: "multiple_choice",
      options: ["Aspas simples", "Aspas duplas", "Sem aspas", "Tanto faz"],
      answer: "Aspas duplas",
      difficulty: "easy",
    },

    // ---- MEDIUM ----
    {
      text: "Qual código imprime corretamente todos os itens de um array?",
      type: "multiple_choice",
      options: [
        "A) for (let i in arr) { console.log(arr[i]); }",
        "B) arr.forEach(item => console.log(item));",
        "C) for (let i=0; i<=arr.length; i++) { console.log(arr[i]); }",
        "D) arr.map(console.log)",
      ],
      answer: "B) arr.forEach(item => console.log(item));",
      difficulty: "medium",
    },
    {
      text: "Qual desses códigos clona corretamente um objeto?",
      type: "multiple_choice",
      options: [
        "A) let clone = obj;",
        "B) let clone = {...obj};",
        "C) let clone = JSON.parse(JSON.stringify(obj));",
        "D) Ambos B e C",
      ],
      answer: "D) Ambos B e C",
      difficulty: "medium",
    },
    {
      text: "Qual desses códigos retorna 'Hello World'?",
      type: "multiple_choice",
      options: [
        "A) console.log('Hello' + 'World');",
        "B) console.log('Hello' + ' ' + 'World');",
        "C) console.log(`Hello ${World}`);",
        "D) console.log(Hello World)",
      ],
      answer: "B) console.log('Hello' + ' ' + 'World');",
      difficulty: "medium",
    },
    {
      text: "Qual desses códigos exporta corretamente uma função em Node.js?",
      type: "multiple_choice",
      options: [
        "A) exports.myFunc = myFunc;",
        "B) module.exports = myFunc;",
        "C) export default myFunc;",
        "D) Todos acima",
      ],
      answer: "D) Todos acima",
      difficulty: "medium",
    },
    {
      text: "Qual código React é válido?",
      type: "multiple_choice",
      options: [
        "A) const [state, setState] = useState;",
        "B) const [state, setState] = useState(0);",
        "C) const state = useState(0); setState(1);",
        "D) useState = (0)",
      ],
      answer: "B) const [state, setState] = useState(0);",
      difficulty: "medium",
    },
    {
      text: "Qual desses JSON é válido?",
      type: "multiple_choice",
      options: [
        "A) {name: 'John'}",
        'B) {"name": "John"}',
        "C) {'name': 'John'}",
        "D) {name = 'John'}",
      ],
      answer: 'B) {"name": "John"}',
      difficulty: "medium",
    },
    {
      text: "Qual desses YAML está correto?",
      type: "multiple_choice",
      options: [
        "A) user: {name: John, age: 30}",
        "B) user:\\n  name: John\\n  age: 30",
        "C) user = {name: John, age: 30}",
        "D) user: (name: John, age: 30)",
      ],
      answer: "B) user:\\n  name: John\\n  age: 30",
      difficulty: "medium",
    },
    {
      text: "Qual código retorna true?",
      type: "multiple_choice",
      options: [
        "A) [] == false",
        "B) {} == false",
        "C) null == undefined",
        "D) '0' === 0",
      ],
      answer: "C) null == undefined",
      difficulty: "medium",
    },
    {
      text: "Qual código faz shallow copy de array?",
      type: "multiple_choice",
      options: [
        "A) let b = a.slice();",
        "B) let b = [...a];",
        "C) let b = Array.from(a);",
        "D) Todos acima",
      ],
      answer: "D) Todos acima",
      difficulty: "medium",
    },
    {
      text: "Qual desses códigos Git está correto para renomear branch?",
      type: "multiple_choice",
      options: [
        "A) git branch -m old new",
        "B) git rename old new",
        "C) git switch old new",
        "D) git update old new",
      ],
      answer: "A) git branch -m old new",
      difficulty: "medium",
    },

    // ---- HARD ----
    {
      text: "Dado o código: setTimeout(()=>console.log('A'),0); console.log('B');. Qual saída?",
      type: "multiple_choice",
      options: ["A depois B", "B depois A", "A e B ao mesmo tempo", "Erro"],
      answer: "B depois A",
      difficulty: "hard",
    },
    {
      text: "Qual saída correta do código: console.log([...'hello'].reverse().join(''))",
      type: "multiple_choice",
      options: ["'olleh'", "'hello'", "undefined", "Erro"],
      answer: "'olleh'",
      difficulty: "hard",
    },
    {
      text: "Qual configuração de observabilidade está correta?",
      type: "multiple_choice",
      options: [
        "A) logs: {level: 'info', output: 'stdout'}",
        "B) logs: [level: info, output: stdout]",
        "C) logs(level=info, output=stdout)",
        "D) logs => {level: 'info'}",
      ],
      answer: "A) logs: {level: 'info', output: 'stdout'}",
      difficulty: "hard",
    },
    {
      text: "Qual saída correta: console.log(0.1 + 0.2 === 0.3)",
      type: "multiple_choice",
      options: ["true", "false", "undefined", "Erro"],
      answer: "false",
      difficulty: "hard",
    },
    {
      text: "Qual será o resultado?\n\n```js\nconsole.log((true + false) > 1);\n```",
      type: "multiple_choice",
      options: ["true", "false"],
      answer: "false",
      difficulty: "hard",
    },
    {
      text: "Qual destes valores é considerado falso?",
      type: "multiple_choice",
      options: ["'0'", "[]", "{}", "null"],
      answer: "null",
      difficulty: "easy",
    },
    {
      text: "O que acontece neste caso?\n\n```js\nlet x = 10;\n(function(){\n  console.log(x);\n  let x = 20;\n})();\n```",
      type: "code",
      options: ["10", "20", "undefined", "ReferenceError"],
      answer: "ReferenceError",
      difficulty: "hard",
    },
    {
      text: "Qual opção representa um JSON inválido?",
      type: "multiple_choice",
      options: [
        'A) {"num": 1, "bool": true}',
        'B) {"arr": [1,2,3]}',
        "C) {\"name\": 'John'}",
        'D) {"obj": {"a": 1}}',
      ],
      answer: "C) {\"name\": 'John'}",
      difficulty: "hard",
    },
    {
      text: "Qual saída correta: console.log(typeof NaN)",
      type: "multiple_choice",
      options: ["'number'", "'NaN'", "'undefined'", "'object'"],
      answer: "'number'",
      difficulty: "hard",
    },
    {
      text: "Qual código evita callback hell?",
      type: "multiple_choice",
      options: [
        "A) then().then()",
        "B) async/await",
        "C) Promise.all()",
        "D) Todos acima",
      ],
      answer: "D) Todos acima",
      difficulty: "hard",
    },
    {
      text: "Qual saída correta: console.log([1,2,3] + [4,5])",
      type: "multiple_choice",
      options: ["'1,2,34,5'", "[1,2,3,4,5]", "Erro", "undefined"],
      answer: "'1,2,34,5'",
      difficulty: "hard",
    },
    {
      text: "Qual estratégia de escalabilidade é mais indicada para Node.js?",
      type: "multiple_choice",
      options: [
        "Clusterização",
        "Threads bloqueantes",
        "Fork síncrono",
        "Loop infinito",
      ],
      answer: "Clusterização",
      difficulty: "hard",
    },
    {
      text: "Qual saída correta: console.log(Boolean([]) && Boolean({}))",
      type: "multiple_choice",
      options: ["true", "false", "undefined", "Erro"],
      answer: "true",
      difficulty: "hard",
    },
  ];

  await prisma.question.createMany({
    data: questions,
  });

  console.log("✅ Perguntas criadas!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
