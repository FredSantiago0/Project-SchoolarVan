# 🚌 School Transport Management System

### 📝 About the Project
This is a personal, **open-source** project developed for public use and continuous improvement. The main goal is to assist in the management and organization of students within the school transport sector, providing a practical tool for those who handle the daily logistics of school vans and buses.

The system focuses on centralizing information that was previously scattered across paper notes or complex spreadsheets, allowing for quick control over which students are on board, payment statuses, and school routes.

---

### 🚀 Key Features
* **Student Dashboard:** A clear and organized view of all registered students.
* **Daily Attendance Control:** A simple "Check-in" system to track if a student is attending on a specific day.
* **Payment Management:** Quick visual status (Paid/Pending) for easy financial tracking.
* **Simplified CRUD:** Add, edit, or remove student profiles with ease.
* **Data Import:** Built-in script to migrate student data from existing Excel/CSV spreadsheets directly to the database.

---

### 🛠️ Technologies & Tools
To balance ease of development with market standards, this project uses:

* **Language:** Python
* **Web Framework:** Flask, Botstrap5
* **Database:** MySQL
* **Frontend:** HTML5, CSS3, and JavaScript
* **Data Manipulation:** Pandas / Openpyxl

---

### 📂 Folder Structure
```text
school-van-manager/
├── app.py                # Main server logic (Backend)
├── database.sql          # MySQL Database schema and tables
├── requirements.txt      # Project dependencies
├── static/               # Styling (CSS), Images, and Frontend scripts (JS)
├── templates/            # Application pages (HTML)
└── scripts/              # Utility scripts for spreadsheet data migration
