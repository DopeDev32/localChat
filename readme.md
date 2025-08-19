# 💬 Local Chat  

[![Node.js](https://img.shields.io/badge/Node.js-14%2B-green?logo=node.js)](https://nodejs.org/)  
[![Express](https://img.shields.io/badge/Express.js-Backend-blue?logo=express)](https://expressjs.com/)  
[![Socket.IO](https://img.shields.io/badge/Socket.IO-Realtime-lightgrey?logo=socket.io)](https://socket.io/)  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)  
<!--[![GitHub stars](https://img.shields.io/github/stars/DopeDev32/localChat?style=social)](https://github.com/DopeDev32/localChat/stargazers)  --->

**Local Chat** is a lightweight, real-time chat application built with **Node.js**, **Express**, and **Socket.IO**.  
It allows users on the same **local network (LAN / Wi-Fi)** to chat with each other instantly from their browsers — no internet required.  

---

## 🚀 Features
- 🖧 **LAN-based communication** – chat with anyone on the same Wi-Fi / LAN.  
- 👤 **Nicknames** – users can set a display name when they join.  
- 💬 **Real-time messaging** – powered by WebSockets (Socket.IO).  
- 📱 **Responsive UI** – works seamlessly on both desktop and mobile.  
- 🔔 **Join/Leave notifications** – see when someone enters or exits the chat.  
- 🎨 Clean, minimal interface.  

---

## 📦 Tech Stack
- **Node.js** (runtime)  
- **Express.js** (backend framework)  
- **Socket.IO** (real-time communication)  
- **HTML, CSS, JavaScript** (frontend)  

---

## 🛠 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/DopeDev32/localChat.git
cd localChat
```
### 2. Install Dependencies
Make sure Node.js (v14+) is installed. Then run:
```
npm install
```

### 3. Start the Server
```
node server.js

```
You should see output like:
```
✅ Chat server running at:
   Local:   http://localhost:3000
   Network: http://192.168.x.x:3000
```

## 🌐 Usage

- On your PC: open http://localhost:3000
- On other devices in the same Wi-Fi/LAN:
  - Find your IPv4 Address:
    ```
    ipconfig   # (Windows)
    ifconfig   # (Mac/Linux)
    ```
  - Example: 192.168.1.1
  - Open: http://192.168.1.5:3000 in a browser
- 👉 Now all connected devices can chat together 🎉





# 👨‍💻 Author
Developed with ❤️ by Debashis
