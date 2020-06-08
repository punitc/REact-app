const courses = [
  {
    id: 1,
    title: "HTML5",
    slug: "HTML5-Discover-Create-Pages-JavaScript-ebook/dp/B00YIAS8Y8/ref=zg_bs_939226_1?_encoding=UTF8&psc=1&refRID=9PKVDY42X690AADWZANV",
    authorId: 1,
    category: "HTML5"
  },
  {
    id: 2,
    title: "JavaScript Cookbook",
    slug: "JavaScript-Cookbook-Programming-Shelley-Powers-ebook/dp/B00SS9G9DC/ref=zg_bs_939226_2?_encoding=UTF8&psc=1&refRID=9PKVDY42X690AADWZANV",
    authorId: 2,
    category: "JavaScript"
  },
  {
    id: 3,
    title: "JavaScript: The Good Parts",
    slug: "Douglas-Crockford/dp/0596517742/ref=zg_bs_939226_3?_encoding=UTF8&psc=1&refRID=9PKVDY42X690AADWZANV",
    authorId: 3,
    category: "JavaScript"
  },
  {
    id: 4,
    title: "Eloquent JavaScript",
    slug: "/Eloquent-JavaScript-3rd-Introduction-Programming/dp/1593279507/ref=zg_bs_939226_4?_encoding=UTF8&psc=1&refRID=9PKVDY42X690AADWZANV",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 5,
    title: "Programming Typescript",
    slug: "/Programming-TypeScript-Making-JavaScript-Applications/dp/1492037656/ref=zg_bs_939226_5?_encoding=UTF8&psc=1&refRID=9PKVDY42X690AADWZANV",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 6,
    title: "JavaScript and JQuery",
    slug: "JavaScript-JQuery-Interactive-Front-End-Development/dp/1118531647/ref=zg_bs_939226_6?_encoding=UTF8&psc=1&refRID=9PKVDY42X690AADWZANV",
    authorId: 3,
    category: "JavaScript"
  },
  {
    id: 7,
    title: "Learning Web Design",
    slug: "Jennifer-Robbins/dp/1491960205/ref=zg_bs_939226_7?_encoding=UTF8&psc=1&refRID=9PKVDY42X690AADWZANV",
    authorId: 1,
    category: "Software Practices"
  },
  {
    id: 8,
    title: "Web Design with HTML, CSS",
    slug: "Web-Design-HTML-JavaScript-jQuery/dp/1119038634/ref=zg_bs_939226_8?_encoding=UTF8&psc=1&refRID=9PKVDY42X690AADWZANV",
    authorId: 2,
    category: "Software Architecture"
  },
  {
    id: 9,
    title: "JavaScript All-in-One for Dummies",
    slug: "MySQL-JavaScript-All-One-Dummies/dp/1119468388/ref=zg_bs_939226_9?_encoding=UTF8&psc=1&refRID=9PKVDY42X690AADWZANV",
    authorId: 3,
    category: "JavaScript"
  },
  {
    id: 10,
    title: "JavaScript in easy steps",
    slug: "JavaScript-easy-steps-Mike-McGrath/dp/1840788771/ref=zg_bs_939226_10?_encoding=UTF8&psc=1&refRID=9PKVDY42X690AADWZANV",
    authorId: 2,
    category: "HTML5"
  }
];

const authors = [
  { id: 1, name: "Preston Prescott" },
  { id: 2, name: "Shelly Powers" },
  { id: 3, name: "Douglas Crockford" }
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors
};
