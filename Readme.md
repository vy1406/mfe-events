# MicroFrontend Event Handling

This repository provides a lightweight, framework-agnostic template for event handling in microfrontends. It works seamlessly across React, Angular, and Vue remotes, with a React-based container, and includes a custom `EventBus` package for managing shared events.

---

## Features

- **Framework Agnosticism:** Works across React, Angular, and Vue.
- **Custom EventBus:** Manages events without third-party libraries.
- **Monorepo Setup:** Simplifies managing multiple apps with shared dependencies.
- **Parallel Execution:** Uses `concurrently` to run multiple processes simultaneously.

---

## Folder Structure

- **apps/**: Contains the container and remotes.
  - `container`: React application acting as the main host.
  - `reactApp`: React remote.
  - `angularApp`: Angular remote.
  - `vueApp`: Vue remote.
- **event-bus/**: A custom package for event handling.

---

## Prerequisites

Ensure you have the following installed:
- **Node.js**
- **npm**

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/vy1406/mfe-events.git
cd mfe-events
```

### 2. Build the EventBus
The `EventBus` is a custom package shared across all applications. Build it first:
```bash
npm run build:event-bus
```

### 3. Install Dependencies
Install dependencies for the container, remotes, and `EventBus` package:
```bash
npm run install:all
```

### 4. Start Applications
Run all applications simultaneously using `concurrently`:
```bash
npm run start:all
```

This will start:
- The React container.
- The React, Angular, and Vue remotes.

To start individual apps, use the following scripts:
- **Container:** `npm run start:container`
- **React Remote:** `npm run start:react`
- **Angular Remote:** `npm run start:angular`
- **Vue Remote:** `npm run start:vue`

---

## Scripts Overview

- **Build EventBus:**
  ```bash
  npm run build:event-bus
  ```
- **Install All Dependencies:**
  ```bash
  npm run install:all
  ```
- **Start All Applications:**
  ```bash
  npm run start:all
  ```

---

Happy coding! 🎉

