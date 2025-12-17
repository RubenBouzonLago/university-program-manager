# University Program Manager

## 📋 Description

This is my **first complete web development project**, created as part of the **User Interfaces** course in the 3rd year of Computer Engineering.

It is an academic management system that allows administering:
- 📚 **Academic Programs**: Create, modify, delete and view study programs
- 📰 **Publications**: Manage academic and research publications

## 🚀 Features

- **Responsive web interface** developed with HTML5, CSS3 and vanilla JavaScript
- **Modular architecture** with clear separation of concerns
- **Validation system** to ensure data integrity
- **Dynamic form management** (full CRUD)
- **Internationalization support** (Spanish texts)
- **Testing suite** included for functionality validation
- **Clean design** with custom CSS

## 🏗️ Project Architecture

```
ET2_RubenBouzonLago/
├── Codigo/
│   ├── index.html              # Main page
│   ├── menu.html               # Navigation menu
│   ├── Gestion_programa.html   # Program management
│   ├── Gestion_publicacion.html # Publication management
│   ├── css/
│   │   └── menu.css            # Main styles
│   ├── js_core/
│   │   └── DOM_class.js        # DOM utilities
│   ├── js_base/
│   │   ├── Gestion_Entidad.js  # Base management class
│   │   └── Validaciones_Atomicas.js # Validations
│   ├── js_app/
│   │   ├── Gestion_programa.js    # Program logic
│   │   └── Gestion_publicacion.js # Publication logic
│   ├── js_test/
│   │   └── [testing files]     # Test suite
│   └── locales/
│       ├── idiomas.js          # Language system
│       └── Textos_ES.js        # Spanish texts
└── README.md
```

## 🎯 Functionalities

### Program Management
- ✅ Create new academic programs
- ✅ Modify existing programs
- ✅ Delete programs
- ✅ View program listings
- ✅ Real-time data validation

### Publication Management
- ✅ Create new publications
- ✅ Edit existing publications
- ✅ Delete publications
- ✅ List and search publications
- ✅ Form validation

## 🚀 How to run the project

### Option 1: Direct browser
1. Download or clone this repository
2. Navigate to the `Codigo/` folder
3. Open [index.html](Codigo/index.html) in your web browser
4. Click "Entrar" to access the system

### Option 2: Local server (Recommended)
```bash
# With Python 3
cd Codigo/
python -m http.server 8000

# With Node.js (if you have http-server installed)
cd Codigo/
http-server -p 8000

# Then visit: http://localhost:8000
```

## 🧪 Testing

The project includes a complete test suite:

- **ET2_RubenBouzonLago_tests.js**: Test case definitions
- **ET2_RubenBouzonLago_pruebas.js**: Test implementation
- **test.js**: Custom testing framework

To run the tests, simply open the HTML pages in the browser and the tests will run automatically.

## 💻 Technologies used

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Libraries**: jQuery 3.7.1 (for AJAX calls)
- **Architecture**: MVC (Model-View-Controller)
- **Testing**: Custom testing framework

## 📚 Applied concepts

This project demonstrates the use of:
- ✅ **Object-Oriented Programming** in JavaScript
- ✅ **Class inheritance** (GestionEntidad as base class)
- ✅ **DOM manipulation**
- ✅ **Events and form validation**
- ✅ **Modular architecture**
- ✅ **Separation of concerns**
- ✅ **Unit testing**
- ✅ **Responsive design**

## 🎓 Academic context

**Subject**: User Interfaces (UI)  
**Year**: 3rd year of Computer Engineering  
**Academic Year**: 2024/2025  
**Author**: Rubén Bouzón Lago

This project represents my first approach to complete frontend web development, applying concepts of:
- User interface design
- Client-side web programming
- Testing and validation
- Software architecture

## 🤝 Contributions

Being a personal academic project, external contributions are not accepted. However, any feedback or suggestions are welcome!

## 📄 License

This project is for academic and educational use.

---

⭐ **If you liked this project or found it useful, don't hesitate to give it a star!**

💬 **Do you have any questions or suggestions?** Open an issue and I'll be happy to help.

🚀 **This is just the beginning of my journey in web development. Follow me for more projects!**
