# Expense Tracker 

[![React](https://img.shields.io/badge/React-17.0.2-blue?logo=react)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://expense-tracker-iota-ashy.vercel.app/)

A modern, open-source Expense Tracker app built with **React** and **PWA** support. Track your income and expenses, manage categories, and install it as an app for offline use.

[🌐 Live Demo](https://expense-tracker-iota-ashy.vercel.app/)

---

## Features ✨

- **Category Management**: Add, edit, and delete income/expense categories  
- **Transaction Tracking**: Log income and expenses with category selection  
- **Edit & Save**: Update transactions or categories without losing data  
- **Responsive Design**: Works on mobile, tablet, and desktop  
- **Persistent Data**: All data stored in `localStorage`  
- **Theme Support**: Toggle between light and dark modes  
- **Progressive Web App (PWA) Support**:  
  - Installable on desktop and mobile devices  
  - Offline support with cached assets and data persistence  
  - Fast, app-like experience with smooth navigation  

---

## Progressive Web App (PWA) 🚀

This project is fully configured as a [Progressive Web App (PWA)](https://web.dev/progressive-web-apps/), giving you a native-like experience directly in your browser.

### 🔹 Key Benefits
- 📲 **Installable**: Add the app to your **home screen** (mobile) or **desktop** for quick access  
- 🌐 **Offline Support**: Works with limited or no internet by caching key assets  
- ⚡ **Fast & Reliable**: Optimized loading and app-like performance  

### 🔹 How to Install
1. Open the app in a supported browser (e.g., [Chrome](https://www.google.com/chrome/), [Edge](https://www.microsoft.com/edge), [Safari](https://www.apple.com/safari/)).  
2. On **desktop**:  
   - Click the **install icon** in the address bar, or  
   - Go to the browser menu → *Install App*  
3. On **mobile**:  
   - In the browser menu, select *Add to Home Screen*  
   - Launch it from your home screen like a native app  

### 🔹 Technical Details
- **`manifest.json`**: Defines app name, icons, theme colors, and start URL  
- **Service Worker**: Handles caching, offline functionality, and performance improvements  
- **App Icons**: Added for different screen sizes and splash screens  

---

## Screenshots 📸

<img width="1440" alt="Screenshot 1" src="https://github.com/user-attachments/assets/f2425ca9-5623-4f8c-8854-394d4d1e6659" />
<img width="1440" alt="Screenshot 2" src="https://github.com/user-attachments/assets/2996adb2-299a-4cda-a9ae-f15bd31db006" />
<img width="1440" alt="Screenshot 3" src="https://github.com/user-attachments/assets/2fb54e90-525b-43db-a131-17034f6a7367" />
<img width="1440" alt="Screenshot 4" src="https://github.com/user-attachments/assets/1cf9bbd7-1197-4704-9dad-194a06efd9ee" />
<img width="1440" alt="Screenshot 5" src="https://github.com/user-attachments/assets/61462f4b-78c6-4407-bb25-fcb772786bb4" />

---

## Tech Stack 🛠

- **Frontend**: [React](https://reactjs.org/)  
- **State Management**: React Context API  
- **Styling**: CSS  
- **Storage**: Browser `localStorage`  

---

## Installation ⚡

```bash
# Clone the repository
git clone https://github.com/vmanidev/expense-tracker.git

# Navigate to project folder
cd expense-tracker

# Install dependencies
npm install

# Start the development server
npm start
