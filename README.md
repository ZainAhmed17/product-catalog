## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/ZainAhmed17/product-catalog.git
cd product-catalog
```

2. Install dependencies:
```bash
yarn
# or
npm install
```

3. Run the development server:
```bash
yarn dev
# or
npm run dev
```

4. Open [http://localhost:3000/catalog](http://localhost:3000/catalog) in your browser

## 🏗️ Project Structure
src/
├── app/ # Next.js app directory
| ├── catalog/ #Main Catalog Page
│ ├── product/ # Product Details Page
│ └── cart/ # Shopping cart functionality
├── components/ # Reusable React components
├── context/ # React context providers
├── core/ # Core utilities
├── data/ # Data management
└── hooks/ # Custom React hooks

##  Design Choices and Approach

1. **SASS**
   - Utility-first approach for rapid development
   - Custom styling capabilities with SASS

2. **Component Architecture**
   - Modular and reusable components
   - Clear separation of concerns
   - Easy to maintain and scale

3. **State Management**
   - React Context for global state
   - Custom hooks for reusable logic
   - Clean and predictable state updates
   - Created usePersistedState which manages persistance of data without any hydration error
