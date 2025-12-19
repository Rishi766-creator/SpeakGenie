# Speak Genie UI

This repository contains the UI design for a learning application built using **React** and **Tailwind CSS**.  
The project focuses only on layout, styling, and responsiveness.  
No backend or business logic is implemented.

---

## Project Scope

- UI design only
- Responsive across mobile, tablet, and laptop
- No backend or API integration
- No state management or application logic

This project is intended for UI/UX demonstration, assignments, and portfolio presentation.

---

## Routes (UI Only)

| Route   | Screen            |
|--------|-------------------|
| `/`    | Home              |
| `/story` | Listening Story |
| `/quiz` | Quiz             |

All routes represent static UI layouts only.

---

## Components

### Common
- BottomNav  
- ProgressBar  

### Home
- Header  
- ActionGrid  
- AIPracticeCarousel  
- HumanPracticeCarousel  
- StoryCarousel  
- XPCard  

### Quiz
- Block  
- Topic  
- Challenge  
- Get  

---

## Folder Structure

```text
src/
│
├── components/
│   ├── common/
│   │   ├── BottomNav.jsx
│   │   └── ProgressBar.jsx
│   │
│   ├── home/
│   │   ├── ActionGrid.jsx
│   │   ├── AIPracticeCarousel.jsx
│   │   ├── Header.jsx
│   │   ├── HumanPracticeCarousel.jsx
│   │   ├── StoryCarousel.jsx
│   │   └── XPCard.jsx
│   │
│   └── quiz/
│       ├── Block.jsx
│       ├── Topic.jsx
│       ├── Challenge.jsx
│       └── Get.jsx
│
├── pages/
│   ├── AudioController.jsx
│   ├── Home.jsx
│   └── Quiz.jsx
│
├── App.jsx
└── main.jsx
```

---

## Technology Stack

- React  
- Tailwind CSS  
- Lucide React (icons used only in UI components)

---

## Running the Project

```bash
npm install
npm run dev
```

---

