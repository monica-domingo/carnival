# 🎪 carnival

**carnival** is a frontend monorepo playground for building an **accessible design system** using **[React Aria Components](https://react-spectrum.adobe.com/react-aria/)**. Managed with **Turborepo** and **Bun**, it provides a structured setup for designing, testing, and documenting accessible UI components.

---

## 🍭 cotton – the design system

`cotton` is the core design system package within this repo. It focuses on:

- ♿ **Accessibility-first** UI primitives with `react-aria-components`
- 🔩 **Composable**, unstyled building blocks
- 🧪 A foundation for iterating on API design and component structure

---

## 🍫 cocoa – the consumer app

`cocoa` is a Qwik app that consumes components from `cotton`. It acts as a sandbox to:

- Test components in real-world usage
- Test Qwik
- Catch integration friction early
- Explore layout, routing, and app-level concerns

---

## 📚 Storybook

Interactive component documentation is handled through **Storybook**, located at:

```

docs/storybook

````

To start Storybook:

```bash
bun turbo run dev --filter=storybook
````

To build:

```bash
bun turbo run build --filter=storybook
```

> Storybook renders components directly from the `cotton` package.

---

## 📦 Monorepo Structure

```
carnival/
├── apps/
│   └── cocoa/              # Consumer app using the design system
├── docs/
│   └── storybook/          # Storybook for interactive component docs
├── packages/
│   └── cotton/             # Design system (React + react-aria-components)
├── turbo.json
├── bun.lockb
└── README.md
```

---

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/monica-domingo/carnival.git
cd carnival
```

2. Install dependencies:

```bash
bun install
```

3. Run the consumer app:

```bash
bun turbo run dev --filter=cocoa
```

4. Or run Storybook:

```bash
bun turbo run dev --filter=storybook
```

> Requires **Bun v1.2.3+** and **Node v18+**

---

## 🎯 Goals

* Build a reusable, accessible design system
* Document UI primitives via Storybook
* Explore design system workflows in a monorepo setup
* Validate DX with a real consuming app

---

## 🛠 Stack

* ⚛️ **React**
* ⚡️ **Qwik**
* ♿ **React Aria Components**
* 📖 **Storybook**
* 🌀 **Turborepo**
* ⚡ **Bun**

---

## 🤹 About the name

> **carnival** is a space for creative UI experimentation.
> **cotton** (like cotton candy 🍭) represents soft, accessible, lightweight components with a delightful DX.
