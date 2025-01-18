# BlindLuck

## Architecture Overview

```
Client (React)
├── Components
│   ├── Game
│   │   ├── Canvas (invisible to drawer)
│   │   ├── ChatBox (for guesses)
│   │   └── PlayerList
│   ├── Lobby
│   └── Authentication
└── Socket Connection

Server (Node.js + Express)
├── Socket.IO Handler
├── Game Logic
│   ├── Room Management
│   ├── Turn Management
│   └── Score Tracking
└── API Routes

Database (MongoDB)
├── Users
├── Games
└── Words/Prompts
```