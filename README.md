# ⏱️ Timer Study

🚀 **New project released!**  
This is a personal productivity app built with **React + TypeScript**, focused on helping users manage their study sessions through a simple and elegant timer system.

## 🧩 Features

With this app, you can define a task and duration, start a countdown, and track your session. After finishing (or interrupting) a cycle, the session is saved in a **history list**, showing:
- ✅ Task name
- ⏳ Duration
- 🕒 Start time
- 📌 Status: `Completed ✅`, `Interrupted ❌`, or `In progress 🔄`

💡 **Interface highlights:**  
The UI is modern, dark-themed, and fully responsive. Built to maintain focus, with intuitive buttons, smooth animations, and a clean dashboard for tracking all your study sessions.

🔁 **Note:**  
After starting a timer, the current session must be **interrupted** before starting a new one. This ensures correct data logging and prevents session overlap.

✨ **Extra detail:**  
The **remaining time is displayed in the browser tab** (page title), so you can keep track even when switching tabs — great for avoiding distractions!

---

## 🧠 Tech Stack

- **React** + **TypeScript**
- **Styled Components** for component styling
- **React Router DOM** for page routing
- **React Context API** for global state management
- **Redux** + **Immer** for immutable list management
- **React Hook Form** for form handling
- **Zod** + **Hook Resolver** for data validation
- **localStorage** for persistent session data

---

## ▶️ How to Run the Project

1. **Clone the repository:**


```bash
git clone https://github.com/Math-Lira/timer-study.git
cd timer-study

npm install
# ou
yarn install
