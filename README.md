# Character Counter App

A **React-based web application** to analyze text input, providing word, sentence, and character counts, letter frequency (density), and reading time. Includes **theme switching** and character limit options.

---

## Live Demo

Check out the app live: [🔗 Demo Link]([https://character-counter-silk.vercel.app/])

---

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Components](#components)

---

## Features

- **Character, word, and sentence count**
- **Letter frequency/density visualization** with progress bars
- **Reading time estimation** based on words per minute
- **Options**:
  - Exclude spaces from character count
  - Set a maximum character limit
- **Theme toggle** (light/dark)
- **Responsive UI**

---

## Screenshots

### Light Mode

<img width="700" height="506" alt="image" src="https://github.com/user-attachments/assets/0ec342b5-5b21-4871-b382-a7c279a369e7" />


### Dark Mode

<img width="700" height="506" alt="image" src="https://github.com/user-attachments/assets/2e6dca05-8a79-4031-b2ac-6c5c088b5522" />

### Density List Example

<img width="859" height="763" alt="image" src="https://github.com/user-attachments/assets/0e4794a1-a719-4e23-b769-f9efc5f0edf4" />


> Replace the image paths with your actual screenshot files.

---

## Technologies

- **React** (functional components, hooks)
- **CSS / Flexbox / Grid** for layout
- **Context API** for global text/labels
- **JavaScript** for text processing

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Sushmita-Ghosh/character-counter.git
cd character-counter-app
```

2. Install dependencies:

```bash
npm install
```

3. Run the app locally

```bash
npm start
```

4. Open in browser: http://localhost:5173/character-counter

## Usage

1. Type or paste text into the input area.
2. View real-time **character, word, and sentence counts**.
3. Toggle **"Exclude Spaces"** to count characters without spaces.
4. Enable **character limit** and set a maximum value to restrict input.
5. Check **letter frequency** and ratios in the density list.
6. Toggle between **light and dark themes** using the icon in the header.
7. Observe **estimated reading time** updating automatically.

## Folder Structure
```text
src/
├─ components/
│ ├─ Header/
│ ├─ Main/
│ ├─ Options/
│ ├─ TextInput/
│ ├─ BannerList/
│ ├─ DensityList/
├─ context/
│ ├─ TextContext.jsx
├─ utils/
│ ├─ formatText.js
│ ├─ readingTimeUtils.js
│ ├─ bannerUtils.js
├─ App.jsx
└─ index.js
```

## Components Overview

- **Header**: App logo + theme toggle
- **Main**: Main content wrapper
- **TextInput**: Controlled textarea for user input
- **Options**: Checkboxes & max character input
- **BannerList**: Displays total characters, word, and sentence counts
- **DensityList**: Shows letter frequency with progress bars
- **ReadingTime**: Calculates estimated reading time
