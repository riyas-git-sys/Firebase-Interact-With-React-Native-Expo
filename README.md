# 🔐 React Native Firebase Auth App

A simple React Native app built with Expo SDK 52 and Firebase Authentication using **TypeScript**. It allows users to **register** using their email and password.

## [For Demo]() <-- Click Here

## 🚀 Features

- 📱 React Native with Expo SDK 52
- 🔥 Firebase Authentication (`auth/email-password`)
- ✅ TypeScript support
- 🔒 Secure async persistence using `@react-native-async-storage/async-storage`

---

## 📦 Tech Stack

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Firebase v9 Modular SDK](https://firebase.google.com/docs/web/modular-upgrade)
- [TypeScript](https://www.typescriptlang.org/)
- [AsyncStorage](https://github.com/react-native-async-storage/async-storage)

---

## 📁 Project Structure

.
├── App.tsx
├── screens
│ └── RegisterScreen.tsx
├── services
│ └── firebaseAuth.tsx
└── assets/

yaml
Copy
Edit

---

## 🧑‍💻 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2. Install dependencies
bash
Copy
Edit
npm install
3. Set up Firebase
Create a Firebase project at Firebase Console and enable Email/Password sign-in method under Authentication.

Then, copy your Firebase config into firebaseAuth.tsx:

ts
Copy
Edit
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "...",
};
4. Run the project
bash
Copy
Edit
npx expo start
