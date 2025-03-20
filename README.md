# Web Text to PDF Chrome Extension

A Chrome extension that allows users to convert selected or full webpage text into a **downloadable PDF** using a **Node.js backend**.

## 🚀 Features
- Right-click to convert selected text or full webpage text to a PDF
- Chrome Extension using **Manifest V3**
- Backend built with **Node.js, Express, PDFKit**
- Stores and lists all generated PDFs

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/SakshamChouhan/web-text-to-pdf.git
cd web-text-to-pdf
```

### 2️⃣ Setup the Backend
```sh
cd text-to-pdf-backend
npm install
node server.js
```
- Runs on **http://localhost:5000**
- Uses `pdfkit` to generate PDFs and store them in `/pdfs/`

### 3️⃣ Setup the Chrome Extension
```sh
cd ../chrome-extension
```
1. Open Chrome and go to `chrome://extensions/`
2. Enable **Developer Mode** (toggle on top right)
3. Click **Load Unpacked** and select the `chrome-extension` folder
4. The extension will be added to Chrome 🎉

---

## 📌 How to Use
1. Visit any webpage.
2. **Right-click** and select **"Convert page text to PDF"**.
3. The text will be sent to the backend, converted into a **PDF**, and automatically downloaded.
4. You can view all generated PDFs at: **http://localhost:5000/**

---

## 📂 Project Structure
```
web-text-to-pdf/
├─  # Chrome Extension Files
│   ├── manifest.json      # Chrome extension config
│   ├── background.js      # Handles right-click action
│   ├── popup.html         # Popup UI
├── text-to-pdf-backend/   # Node.js Backend
│   ├── server.js          # Express server
│   ├── pdfs/              # Stores generated PDFs
│   ├── views/             # HTML to list all PDFs
│   ├── package.json 
|   |── .gitignore   # Ignored files
├──            
├── README.md              # Project documentation
```

---

## 🔧 Technologies Used
- **Frontend:** HTML, JavaScript, Chrome Extensions API
- **Backend:** Node.js, Express.js, PDFKit
- **Storage:** Local file system for PDFs

---

## 📜 License
This project is licensed under the MIT License. Feel free to use and modify! 🎉

---

## 🏆 Contributing
Want to improve this project? Feel free to fork and submit a PR! 🚀


1. Create a new branch: `git checkout -b feature-name`
2. Make your changes and commit: `git commit -m "Added new feature"`
3. Push to GitHub: `git push origin feature-name`
4. Open a **Pull Request** 🎉

---

## CodeLikeARed❤️
