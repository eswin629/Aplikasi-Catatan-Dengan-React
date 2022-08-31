const getInitialData = () => ([
  {
    id: 1,
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    createdAt: '2022-06-18T04:27:34.572Z',
    archived: false,
  },
  {
    id: 2,
    title: "JavaScript",
    body: "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries",
    createdAt: '2022-06-18T04:27:34.572Z',
    archived: false,
  },
  {
    id: 3,
    title: "React",
    body: "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies",
    createdAt: '2022-06-18T04:27:34.572Z',
    archived: false,
  },
  {
    id: 4,
    title: "CSS",
    body: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript ",
    createdAt: '2022-06-18T04:27:34.572Z',
    archived: false,
  },
  {
    id: 5,
    title: "HTML",
    body: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript",
    createdAt: '2022-06-18T04:27:34.572Z',
    archived: true,
  },
  {
    id: 6,
    title: "MySQL",
    body: "MySQL is an open-source relational database management system. Its name is a combination of 'My', the name of co-founder Michael Widenius's daughter, and 'SQL', the abbreviation for Structured Query Language.",
    createdAt: '2022-06-18T04:27:34.572Z',
    archived: true,
  },
]);

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  return new Date(date).toLocaleDateString("id-ID", options)
}

export { getInitialData, showFormattedDate };
