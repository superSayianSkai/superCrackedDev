import js from "../assets/images/js.png";
import python from "../assets/images/python.png";
import java from "../assets/images/java.png";
export const Languages = [
  {
    fields: "JavaScript",
    about:
      "JavaScript is traditionally known as a frontend language, but with the advent of Node.js, it has become a popular choice for backend development as well",
    icon: js,
    links: "/javasScriptRoadMap",
  },
  {
    fields: "Python",
    about:
      "Python is known as beginner-friendly, but with Django and Flask, it’s also popular for backend development, enabling secure and scalable applications.",
    icon: python,
    links: "/pythonRoadMap",
  },
  {
    fields: "Java",
    about:
      "Java is widely used for backend development, with frameworks like Spring Boot enabling secure and scalable applications.",
    icon: java,
    links: "/javaRoadMap",
  },
];

// The langauges roadmap
export const JavaScriptRoadmap = [
  {
    week: "Week 1",
    weekGoal: "Introduction to JavaScript",
    resources: [
      {
        link: "https://youtu.be/JqCo6XaXTAk?si=zKvn2BMpfAqvO2Uf",
        resource: "What is JavaScript and how does it work?",
      },
      {
        link: "https://youtu.be/-V78aXkUWwQ?si=B8fzb7H_6-G3Qf3e",
        resource: "Embedding JavaScript into HTML",
      },
      {
        link: "https://youtu.be/0xShDHwdpas?si=DGtqnV1FcdJN-Sl6",
        resource: "Outputs",
      },
      {
        link: "https://youtu.be/0xShDHwdpas?si=DGtqnV1FcdJN-Sl6",
        resource: "Statements",
      },
    ],
  },
  {
    week: "Week 2",
    weekGoal: "JavaScript Basics",
    resources: [
      {
        link: "https://youtu.be/pZQeBJsGoDQ?si=NjZypAYd7unB4wBo",
        resource: "Variables: var, let, and const",
      },
      {
        link: "https://youtu.be/nCwQY8inRvU?si=scCgGccJpy3dgFVm",
        resource: "Data Types",
      },
      {
        link: "https://youtu.be/FyGIKD2fxIo?si=hOPXUAEjGcUHFTMN",
        resource: "Operators",
      },
    ],
  },
  {
    week: "Week 3",
    weekGoal: "Control Flow",
    resources: [
      {
        link: "https://youtu.be/PgUXiprlg1k?si=NC01pl0sOwF74b8P",
        resource: "if-else Statements",
      },
      {
        link: "https://youtu.be/2gE2K8i5tvs?si=Q7F0oIgXIzpOikv_",
        resource: "Switch Statements",
      },
      {
        link: "https://youtu.be/_Xf6g1ZYxiI?si=RRt8H7f75gQZxjBK",
        resource: "Loops: for, while, and do-while",
      },
    ],
  },
  {
    week: "Week 4",
    weekGoal: "Functions and Scope",
    resources: [
      {
        link: "https://youtu.be/iUVizahgOTg?si=qc4TDakrNWBR0Wv4",
        resource: "Defining and Calling Functions",
      },
      {
        link: "https://youtu.be/jDqmFt03Gy0?si=9a1stk19Vuqh6R_F",
        resource: "Function Expressions",
      },
      {
        link: "https://youtu.be/fRRRkognpOs?si=rTmLNKxyIKavyjgJ",
        resource: "Arrow Functions",
      },
      {
        link: "https://youtu.be/KyqmbIkZGIo?si=w4yn876c6mYltPHx",
        resource: "Scope: Global, Local, and Block Scope",
      },
      {
        link: "https://youtu.be/beZfCfiuIkA?si=jBrhRhUpg2qvyLSM",
        resource: "Closures",
      },
    ],
  },
  {
    week: "Week 5",
    weekGoal: "Working with Arrays",
    resources: [
      {
        link: "https://youtu.be/0SyTDl4pb4w?si=OcyyvY9l2e-twHSE",
        resource: "Creating and Manipulating Arrays",
      },

      {
        link: "https://youtu.be/RsFBsBep-hA?si=Tu4mTyXhSsZCrnMu",
        resource: "Sorting and Searching in Arrays",
      },
    ],
  },
  {
    week: "Week 6",
    weekGoal: "Working with Objects",
    resources: [
      {
        link: "https://youtu.be/kXwDrcsONhA?si=YQ04QqxL_X19lan7",
        resource: "Creating Objects with Object Literals",
      },
      {
        link: "https://youtu.be/L_jPXw1DWEI?si=SCu5GJmVDuwRnabu",
        resource: "Accessing and Modifying Object Properties",
      },
      {
        link: "https://youtu.be/tVq4L8tnWuA?si=AsYUt8MdK4LHK_d8",
        resource: "Iterating Over Objects",
      },
    ],
  },
  {
    week: "Week 7",
    weekGoal: "DOM Manipulation",
    resources: [
      {
        link: "https://youtu.be/NO5kUNxGIu0?si=UyYWMehDVmdNBtnw",
        resource: "Understanding the Document Object Model (DOM)",
      },
      {
        link: "https://youtu.be/FQtjI1PC5Z0?si=BIJhPJaOLP8gvOf9",
        resource: "Selecting Elements",
      },
      {
        link: "https://youtu.be/DobkTqMg_k0?si=dGNlNujbwDbk7iKX",
        resource: "Modifying Content and Attributes",
      },
      {
        link: "https://youtu.be/gGq98JDryEk?si=w0oGivKPDKMUYM0Y",
        resource: "Creating and Removing Elements",
      },
    ],
  },
  {
    week: "Week 8",
    weekGoal: "Events and Event Listeners",
    resources: [
      {
        link: "https://youtu.be/UVRDq-wnfgk?si=7yZsBwesm45WrOOa",
        resource: "Introduction to Event Listeners",
      },
      {
        link: "https://youtu.be/hGbkWWHTGS4?si=MEWNO3qi1ULMLpdD",
        resource: "Common Events: click, keydown, mouseover",
      },
      {
        link: "https://youtu.be/yn_3MncFMJc?si=WXl49iP1g7EAxWSc",
        resource: "Event Delegation and Propagation",
      },
    ],
  },
  {
    week: "Week 9",
    weekGoal: "Asynchronous JavaScript",
    resources: [
      {
        link: "https://youtu.be/exBgWAIeIeg?si=GVANrzLcAK2WrjUm",
        resource: "Introduction to Asynchronous Programming",
      },
    ],
  },
  {
    week: "Week 10",
    weekGoal: "Error Handling and Debugging",
    resources: [
      {
        link: "https://youtu.be/BztW_u6HDbs?si=Z5lJjH1Aw_1i_sdW",
        resource: "Using try-catch for Error Handling",
      },
      {
        link: "https://youtu.be/TcTSqhpm80Y?si=FlZeTAxUlXiHp8nl",
        resource: "Debugging Techniques with Developer Tools",
      },
    ],
  },
  {
    week: "Week 11",
    weekGoal: "Object-Oriented Programming (OOP)",
    resources: [
      {
        link: "https://youtu.be/rlLuL3jYLvA?si=0DjFA-BkTOswcjAw",
        resource: "Understanding Object-oriented Programming ",
      },
      {
        link: "https://youtu.be/583MGxjypgU?si=i_LWgHI87oEvSXwu",
        resource: "Understanding Prototypes in JavaScript",
      },
      {
        link: "https://youtu.be/U2vxAEiaVRY?si=UnNEhS5cY7fEV_ZU",
        resource: "Creating Classes and Using the new Keyword",
      },
      {
        link: "https://youtu.be/DqUPa0D2N78?si=8UtI5ES-tGAnfK5x",
        resource: "Inheritance",
      },
    ],
  },
  {
    week: "Week 12",
    weekGoal: "Advanced Functions",
    resources: [
      {
        link: "https://youtu.be/Jdlo8ZDt5Jg?si=-_aX6WeN7uxqjcW9",
        resource: "Understanding the 'this' Keyword",
      },
      {
        link: "https://youtu.be/rZc7_2YXbP8?si=fk8dBZJQvlwyR_4F",
        resource: "Call, Apply, and Bind Methods",
      },
      {
        link: "https://youtu.be/XzFFLWSUpxs?si=l_CfHbUnBl57A4OI",
        resource: "Immediately Invoked Function Expressions (IIFEs)",
      },
    ],
  },
  {
    week: "Week 13",
    weekGoal: "Advanced Arrays and Iterables",
    resources: [
      {
        link: "https://youtu.be/6D7XOGXbyfs?si=lxuHepYz4FYijwym",
        resource: "Understanding Iterators and Generators",
      },
      {
        link: "https://youtu.be/DZzdA-nHrnQ?si=MdNihtrSytrTqTvl",
        resource: "Using the Spread and Rest Operators",
      },
      {
        link: "https://youtu.be/VHZXFejorMc?si=tt8u5lbd7XfQvBHw",
        resource: "Deep Cloning and Merging Arrays",
      },
    ],
  },
  {
    week: "Week 14",
    weekGoal: "JavaScript Modules",
    resources: [
      {
        link: "https://youtu.be/s9kNndJLOjg?si=cCrZ2sl3wRhiwPHT",
        resource: "Using ES6 Modules (import)",
      },
    ],
  },
  {
    week: "Week 15",
    weekGoal: "Performance Optimization",
    resources: [
      {
        link: "https://youtu.be/Hy0pQXVm52k?si=c2AftHtOW-GJHWg5",
        resource: "Optimizing Loops and DOM Manipulations",
      },
      {
        link: "https://youtu.be/cjIswDCKgu0?si=E9uJw690KImwSjiw",
        resource: "Debouncing and Throttling Functions",
      },
      {
        link: "https://youtube.com/playlist?list=PL0k8toYFGjDvGN8J2CIJ-JX-EO8o8G00i&si=1CLxWVX4bhXUMn4C",
        resource: "Understanding Memory Management in JavaScript",
      },
    ],
  },
  {
    week: "Week 16",
    weekGoal: "Working with the Browser API",
    resources: [
      {
        link: "https://youtu.be/MOd5cTJ6kaA?si=5dM1h6iB6fBWHY9y",
        resource: "Using LocalStorage and SessionStorage",
      },
      {
        link: "https://youtu.be/2JYT5f2isg4?si=Omwb0YRqx-J0jHIG",
        resource: "HTTP Networking (Fetch and Rest APIs) ",
      },
      {
        link: "https://youtu.be/916M64DuRnk?si=CiJgAwPwy6mtzPoz",
        resource: "Geolocation API",
      },
      {
        link: "https://youtu.be/Bm0JjR4kP8w?si=SZoo9W7xqZCv6Td4",
        resource: "Notification API",
      },
    ],
  },
  {
    week: "Week 17",
    weekGoal: "Advanced JavaScript Features",
    resources: [
      {
        link: "https://youtube.com/playlist?list=PLw5h0DiJ-9PDAQSugtq6s_Iy3dRrN6w_v&si=oUVDGqumt-AjtY4a",
        resource: "Using Proxy and Reflect",
      },
      {
        link: "https://youtu.be/eW6nVCb9MQ8?si=ViGWNddwqKm5G80A",
        resource: "Understanding Symbols and Iterators",
      },
      {
        link: "https://youtu.be/bLmHYji0Bxw?si=BZ0DMsedJBYWRi3d",
        resource: "Using JavaScript WeakMaps and WeakSets",
      },
    ],
  },
  {
    week: "Week 18",
    weekGoal: "Final Project and Mastery",
    resources: [
      {
        link: "https://youtu.be/6eFwtaZf6zc?si=2_udXpRVOf7sqjfm",
        resource: "To-Do App with local storage",
      },
      {
        link: "https://youtu.be/krUdJ87uxXc?si=uzwBporNq3eNMsss",
        resource: "Weather App",
      },
      {
        link: "https://youtu.be/rAUn1Lom6dw?si=Y0o_8SrzmPgF6YHu",
        resource: "Build Tetris",
      },
    ],
  },
];

//python roadmap

export const PythonBackendRoadmap = [
  {
    week: "Week 1",
    weekGoal: "Introduction to Python",
    resources: [
      {
        link: "https://youtu.be/QoIRX37VZpo?si=7gvDcf-7G-kJYMW9",
        resource: "What is Python?",
      },
      {
        link: "https://youtu.be/C0QE5V_VEmY?si=LLLNHPRtSIDpstzo",
        resource: "Python program execution",
      },
      {
        link: "https://youtu.be/WIlQukiXs-E?si=ZQHPWPUJxLgUp8hk",
        resource: "Python shell and getting started",
      },
      {
        link: "https://youtu.be/hp4pYFASTrc?si=al_hOi-tR9HXryQb",
        resource: "Writing your first program: 'Hello, World!'",
      },
      {
        link: "https://youtu.be/fJKdIf11GcI?si=Ag2lBM0jQq9imDp0",
        resource: "Installing packages with pip",
      },
      {
        link: "https://youtu.be/ihEA9WEGSl0?si=0q6Ars0rjgob3gZi",
        resource: "Basic data types and operations",
      },
    ],
  },
  {
    week: "Week 2",
    weekGoal: "Working with Strings and Data Structures",
    resources: [
      {
        link: "https://youtu.be/iYCiWadRZ8I?si=1LSzeqDgAokYk1Ij",
        resource: "Strings: Basic introduction",
      },
      {
        link: "https://youtube.com/playlist?list=PLBlnK6fEyqRiEs0J_0q5EFzk_hzpPQ0tU&si=XqRzHbgzgPCt0ngB",
        resource: "String formatting and methods",
      },
      {
        link: "https://youtube.com/playlist?list=PLBlnK6fEyqRjSgal6OIEfzK4upXvkHSxW&si=SM3B6St0Tz1MNzk6",
        resource: "Lists",
      },

      {
        link: "https://youtube.com/playlist?list=PLBlnK6fEyqRhJ_qiFbz9KZB1CO1HXBDHb&si=CNjJItaslJW2y64B",
        resource: "Tuples, dictionaries, and sets",
      },
    ],
  },
  {
    week: "Week 3",
    weekGoal: "Control Flow",
    resources: [
      {
        link: "https://youtu.be/hf-amsrHa4M?si=Zl0qFj3pIrEfFsTy",
        resource: "If, elif, and else statements",
      },
      {
        link: "https://youtu.be/cUV__S8Jaqs?si=jZ08P0zZUjKxlmhV",
        resource: "For loops and while loops",
      },
      {
        link: "https://youtu.be/ivl5-snqul8?si=Cx4eMAA1J1Vu10PC",
        resource: "Recursion ",
      },
      {
        link: "https://youtu.be/97NdNoA3XUQ?si=zyns_HIlkXseymWm",
        resource: "Control flow statements (break, continue, pass)",
      },
      {
        link: "https://youtu.be/V_NXT2-QIlE?si=wM5MRKFhgU6pU6mi",
        resource: "Try, except, finally for error handling",
      },
    ],
  },
  {
    week: "Week 4",
    weekGoal: "Functions in Python",
    resources: [
      {
        link: "https://youtu.be/89cGQjB5R4M?si=VaCWb6TXbgfGsQkY",
        resource: "Declaring functions and passing arguments",
      },
      {
        link: "https://youtu.be/KyCw1uA1-M8?si=POIpgpuJVu0HKQ9t",
        resource: "Global vs. local scope",
      },
      {
        link: "https://youtu.be/KR22jigJLok?si=xxYBZtLYsi-JJt9Z",
        resource: "Lambda functions",
      },
      {
        link: "https://youtu.be/U-G-mSd4KAE?si=g3QYNT58sHhnZX7G",
        resource: "decorators",
      },
      {
        link: "https://youtu.be/Vh__2V2tXUM?si=X9NsJJGd_cTJ51rE",
        resource: "args and kwargs",
      },
      {
        link: "https://youtu.be/-MB7kfVxnGg?si=cXLPTVJ7EB4I8GpA",
        resource: "Understanding first-class functions",
      },
    ],
  },
  {
    week: "Week 5",
    weekGoal: "Object-Oriented Programming (OOP)",
    resources: [
      {
        link: "https://youtu.be/f0TrMH9s-VE?si=1GJgCgylYKpmF3KY",
        resource: "Classes and objects, methods, and attributes",
      },

      {
        link: "https://youtu.be/an59YHkdK9A?si=yYzYFbxwU1m9sBUP",
        resource: "Inheritance",
      },
      {
        link: "https://youtu.be/4Y83cUbDKZ8?si=tI0iEgcG629hjyIz",
        resource: "method overriding",
      },
      {
        link: "https://youtu.be/lJj2JcsJcFk?si=2kkXVC8AOjixo1wl",
        resource: "Polymorphism and magic methods",
      },
      {
        link: "https://youtu.be/kaZceE16m5A?si=eOJMsLRgeSFC0NnU",
        resource: "Abstract classes and interfaces",
      },
    ],
  },
  {
    week: "Week 6",
    weekGoal: "Advanced Python Topics",
    resources: [
      {
        link: "https://youtu.be/BZzb_Wpag_M?si=gYAH_0U0i4Rb_j_W",
        resource: "Profiling in Python",
      },
      {
        link: "https://youtu.be/b4Ms4wxJuPg?si=4Dw0sVchIQNc3XzN",
        resource: "Logging and the walrus operator",
      },
      {
        link: "https://youtu.be/2KzyvzeWFbQ?si=dTGBenj8QYCEMWHQ",
        resource: "walrus operator",
      },
      {
        link: "https://youtube.com/playlist?list=PLGKQkV4guDKEv1DoK4LYdo2ZPLo6cyLbm&si=Y_LbO4UR-0i4cMko",
        resource: "Threading and multiprocessing",
      },
      {
        link: "https://youtube.com/playlist?list=PLuAAVcHzybQfMuFtF1dUgLibyM5mjAYQL&si=xKhc9qS9siQj3_zQ",
        resource: "Context managers",
      },
    ],
  },
  {
    week: "Week 7",
    weekGoal: "Working with Libraries and Modules",
    resources: [
      {
        link: "https://youtu.be/khZKoe0_B0I?si=jIFbZg7-CVqs6ZsG",
        resource: "Using the Random module",
      },
      {
        link: "https://youtube.com/playlist?list=PLll2u-uqtmZOkjgSczFw1CwnxV3Dw6sEF&si=WmXVm4gc2FDWvcTN",
        resource: "Requests library for HTTP requests",
      },
      {
        link: "https://youtu.be/WlbjZNgL4Y8?si=bm9U8HBbnkX0HztC",
        resource: "JSON modules",
      },
      {
        link: "https://youtu.be/E2kUs9JCYPQ?si=fDKsW5xrib0G42vH",
        resource: "OS modules",
      },
      {
        link: "https://youtu.be/AEE9ecgLgdQ?si=d-49JoeVeMtF5kkd",
        resource: "Datetime and Regex functions",
      },
    ],
  },
  {
    week: "Week 8",
    weekGoal: "Database Interaction",
    resources: [
      {
        link: "https://youtu.be/c8yHTlrs9EA?si=X1Lc58o2hr1gJP_P",
        resource: "Introduction to SQLite with Python",
      },
      {
        link: "https://youtu.be/0RqfzBRDWtk?si=yMjF93AgVK-jIHFV",
        resource: "CRUD operations with SQLite and SQLAlchemy",
      },
      {
        link: "https://youtube.com/playlist?list=PLulvxiMryHNoqCRBEAe585OHA85n_ihI_&si=-6pDtChFBuzFYyPi",
        resource: "Flask + MySQL",
      },
    ],
  },
  {
    week: "Week 9",
    weekGoal: "Django",
    resources: [
      {
        link: "https://youtube.com/playlist?list=PL4cUxeGkcC9iqfAag3a_BKEX1N43uJutw&si=bwUDynskJ6qMVnCQ",
        resource: "Full Course on Django with Project",
      },
    ],
  },

  {
    week: "Week 10",
    weekGoal: "Authentication, Authorization, and Deployment",
    resources: [
      {
        link: "https://youtube.com/playlist?list=PLEt8Tae2spYmugodsDflw5U8zp1yzSPgU&si=HtpD8GASqdK30cyY",
        resource: "JWT Authentication in Flask",
      },
      {
        link: "https://youtu.be/w0nYSAN6Xjg?si=x5m84k35-W87O3Gc",
        resource: "JWT Authentication in Django",
      },

      {
        link: "https://youtu.be/Lwnk-pE_uYQ?si=o50Ri6rhs4xhs7JI",
        resource: "Role-Based Access Control (RBAC)",
      },
      {
        link: "https://youtu.be/lyR78-zr2jI?si=J8E0r-X6k2qgEpfA",
        resource:
          "Deploying Django applications to platforms like Railway for free",
      },
      {
        link: "https://youtu.be/0TFWtfFY87U?si=I-BvzUbOuuRufCcu",
        resource: "Containerize python apps with Docker",
      },
    ],
  },
  {
    week: "Week 11",
    weekGoal: "Final Project",
    resources: [
      {
        link: "https://youtube.com/playlist?list=PLzMcBGfZo4-nK0Pyubp7yIG0RdXp6zklu&si=rxw11ECw9m063RvU",
        resource: "Building a Flask Blog App (Project 1)",
      },
      {
        link: "https://youtu.be/5n8FKv19os0?si=kVJdXQ4vPM7V2Rt6",
        resource: "Creating a Django E-commerce App (Project 2)",
      },
    ],
  },
];

export const JavaBackendRoadmap = [
  {
    week: "Week 1",
    weekGoal: "Introduction to Java",
    resources: [
      {
        link: "https://youtu.be/mAtkPQO1FcA?si=bVQ5pEnBUF7Lx_B8",
        resource: "What is Java?",
      },
      {
        link: "https://youtu.be/WRISYpKhIrc?si=_uHAKaBfe8WHXQdR",
        resource: "Setting up Java ",
      },
      {
        link: "",
        resource: "Your First Java Program (Hello World)",
      },
    ],
  },
  {
    week: "Week 2",
    weekGoal: "Java Basics and Syntax",
    resources: [
      {
        link: "https://youtu.be/pwNGhSp03KI",
        resource: "Variables and Data Types",
      },
      {
        link: "https://youtu.be/n8oXyQKsqmw",
        resource: "Operators and Expressions in Java",
      },
      {
        link: "https://youtu.be/GQp1zzTwrIg",
        resource: "Control Flow: If-Else and Switch Statements",
      },
      {
        link: "https://youtu.be/M3Puhs5FUfw",
        resource: "Loops: For, While, and Do-While",
      },
    ],
  },
  {
    week: "Week 3",
    weekGoal: "Object-Oriented Programming (OOP)",
    resources: [
      {
        link: "https://youtu.be/vDJpGenyHaA",
        resource: "Classes and Objects",
      },
      {
        link: "https://youtu.be/h6YpCvhMfPw",
        resource: "Encapsulation, Inheritance, and Polymorphism",
      },
      {
        link: "https://youtu.be/fkJIyAJV_9A",
        resource: "Abstraction in Java",
      },
    ],
  },
  {
    week: "Week 4",
    weekGoal: "Collections Framework",
    resources: [
      {
        link: "https://youtu.be/EhEicepgi4A",
        resource: "Introduction to Collections in Java",
      },
      {
        link: "https://youtu.be/1U_GzKm2z5k",
        resource: "Lists: ArrayList and LinkedList",
      },
      {
        link: "https://youtu.be/39nDXFyj8MU",
        resource: "Sets and Maps",
      },
    ],
  },
  {
    week: "Week 5",
    weekGoal: "File Handling and Streams",
    resources: [
      {
        link: "https://youtu.be/Tl63E1tBXp8",
        resource: "Reading and Writing Files in Java",
      },
      {
        link: "https://youtu.be/UE8U_8XTuYk",
        resource: "Understanding Input and Output Streams",
      },
      {
        link: "https://youtu.be/r0VKk0Ik7js",
        resource: "Using BufferedReader and BufferedWriter",
      },
    ],
  },
  {
    week: "Week 6",
    weekGoal: "Error Handling and Debugging",
    resources: [
      {
        link: "https://youtu.be/oQjDhGi_QPw",
        resource: "Try-Catch and Finally Blocks",
      },
      {
        link: "https://youtu.be/Njyac8DCOc8",
        resource: "Throwing and Catching Exceptions",
      },
      {
        link: "https://youtu.be/vz6cpzUe1l4",
        resource: "Custom Exceptions in Java",
      },
    ],
  },
  {
    week: "Week 7",
    weekGoal: "Introduction to Backend Development",
    resources: [
      {
        link: "https://youtu.be/oGzU6j7LUw4",
        resource: "Understanding the Role of Java in Backend",
      },
      {
        link: "https://youtu.be/BnRGp0qffS8",
        resource: "Setting Up a Simple HTTP Server with Java",
      },
      {
        link: "https://youtu.be/ab1QkhJte0I",
        resource: "Introduction to Servlets",
      },
    ],
  },
  {
    week: "Week 8",
    weekGoal: "Working with Databases",
    resources: [
      {
        link: "https://youtu.be/o4C8EO3PwPs",
        resource: "Introduction to JDBC",
      },
      {
        link: "https://youtu.be/k55mwhfu8Bk",
        resource: "Connecting Java to a MySQL Database",
      },
      {
        link: "https://youtu.be/B6FHUzm2k3o",
        resource: "Performing CRUD Operations with JDBC",
      },
    ],
  },
  {
    week: "Week 9",
    weekGoal: "Building a REST API with Java",
    resources: [
      {
        link: "https://youtu.be/mXlRAwK2Rww",
        resource: "Introduction to REST APIs",
      },
      {
        link: "https://youtu.be/mG4UgpZ2XPA",
        resource: "Building REST APIs with Spring Boot",
      },
      {
        link: "https://youtu.be/KDJINeAGlTI",
        resource: "Understanding HTTP Methods (GET, POST, etc.)",
      },
    ],
  },
  {
    week: "Week 10",
    weekGoal: "Deploying Java Applications",
    resources: [
      {
        link: "https://youtu.be/7yDCtoisAZE",
        resource: "Introduction to Maven and Gradle",
      },
      {
        link: "https://youtu.be/lHVqzD1Avoc",
        resource: "Packaging and Deploying with Spring Boot",
      },
      {
        link: "https://youtu.be/wbZRSTfUEWk",
        resource: "Deploying Java Applications on AWS",
      },
    ],
  },
  {
    week: "Week 11",
    weekGoal: "Advanced Java Topics",
    resources: [
      {
        link: "https://youtu.be/FzziMJ6btH0",
        resource: "Multithreading and Concurrency",
      },
      {
        link: "https://youtu.be/KjZ98Kr0INA",
        resource: "Using Java Streams and Lambdas",
      },
      {
        link: "https://youtu.be/LU1JT89Gv_U",
        resource: "Introduction to Microservices",
      },
    ],
  },
  {
    week: "Week 12",
    weekGoal: "Final Project and Mastery",
    resources: [
      {
        link: "https://youtu.be/qsJ-_uGAOnQ",
        resource: "Building a Blog Platform with Java",
      },
      {
        link: "https://youtu.be/6g9vptkmErM",
        resource: "Creating an E-commerce Backend with Spring Boot",
      },
      {
        link: "https://youtu.be/oK-XTnYPJkU",
        resource: "Developing a RESTful API with User Authentication",
      },
    ],
  },
];
