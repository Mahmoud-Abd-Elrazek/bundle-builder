# Smart Security Bundle Builder

A dynamic, highly interactive product builder interface for a security system. This project demonstrates advanced frontend engineering practices, focusing on Clean Architecture, scalable state management, and optimal User Experience (UX).

##  Live Demo
> **https://bundle-builder-seven.vercel.app/**

---

## Architectural Highlights

This project was built with a strong emphasis on Software Engineering principles rather than just drawing UI components. 

### 1. Layered Architecture & Data Segregation
The application strictly separates the UI from the data source to ensure scalability:
* **Infrastructure Layer (`mockDb.ts`):** Simulates a raw backend response (flat array).
* **Domain Layer (`catalogSelectors.ts`):** Acts as a middleware that normalizes data upfront. It groups items by category and creates a Dictionary (Hash Map) for instant lookups.
* **Presentation Layer:** Dumb, pure UI components that simply consume pre-processed data without performing heavy or blocking calculations.

### 2. Predictable State Management & Client Persistence
* **Zustand** is used to manage the global cart state outside the React component tree, preventing unnecessary prop-drilling.
* **Variant Handling:** The state logic intelligently handles product variants. By utilizing a composite matching pattern (Product ID + Color), the cart correctly tracks items like "White Camera" and "Black Camera" as completely independent entities, fulfilling the core business requirement.
* **Persistence:** Leveraged Zustand's `persist` middleware to sync the cart state with `localStorage`. This ensures the user's configured bundle is fully preserved across page reloads (Save for later functionality).

### 3. Clean Asset Management (Barrel Pattern)
To maintain clean, readable, and maintainable import statements across the application, the **Barrel Pattern** was implemented for static assets (images).
* Instead of cluttering components with multiple relative image paths, each asset directory (e.g., `sensors`, `cameras`) contains an `index.ts` file that acts as a single source of truth for exporting those assets.
* This encapsulates the folder structure and significantly improves the Developer Experience (DX):

```typescript
// Traditional Approach (Messy)
import motionSensor from '../../assets/images/sensors/sensor-motion.png';
import hubSensor from '../../assets/images/sensors/sensor-hub.png';

// Barrel Pattern Approach (Clean)
import { motionSensor, hubSensor } from '@/assets/images/sensors';
```
## Fulfilling Core Requirements

This prototype was built to strictly adhere to the provided design and functionality specifications:

### 1. Variant State Management
Handling different variants (colors) of the same product independently was a core requirement. 
* **The Solution:** The Zustand store manages variants seamlessly. By combining the `id` and `selectedColor` as unique identifiers in the cart state, adding "2 White Cameras" and "1 Black Camera" creates distinct entities. The `QuantityController` on the product card dynamically binds to the active color variant.

### 2. Client-Side Persistence (localStorage)
To implement the "Save my system for later" feature, the application utilizes client-side persistence.
* **The Solution:** Integrated Zustand's `persist` middleware. The entire `cartStore` is continuously synced with the browser's `localStorage`. Upon page reload or return visits, the shopper's exact configuration (including variants and quantities) is instantly restored without layout shifts.

### 3. Data-Driven & Initial Seeding
* The entire UI is rendered from a normalized JSON structure (`mockDb.ts`), ensuring no hardcoded markup per product.
* The application is seeded with an initial cart state to perfectly match the Figma design upon the first load (pre-populated with specific sensors, an accessory, and the monitoring plan).

### 4. Responsiveness & Fidelity
* The layout is meticulously crafted using Tailwind CSS to match the desktop Figma design precisely (colors, typography, radii, states).
* Utilized a Mobile-First approach within the `BaseItemCard` and layout components to ensure the UI gracefully degrades into a highly usable mobile experience.

# Card Component Architecture
To ensure a highly maintainable, scalable, and "Pixel-Perfect" UI, the product cards in this project are built using an advanced **Component Composition** pattern. Instead of duplicating UI code across different product types, we layered our components into three distinct levels:

##  Architecture Layers

### 1.  The Wrapper: `<CardShell />`
The lowest-level component. It acts as the universal container for all cards in the application.

* **Responsibilities:** Handles borders, background colors, border-radius, hover transitions, and the `isSelected` visual state.
* **Flexibility:** It does not dictate layout (Flex/Grid). It accepts a `className` prop, allowing higher-level components to define their own internal structure.

### 2. The Layout Engine: `<BaseItemCard />`
The core structural component for all standard physical products (Cameras, Sensors, Accessories).

* **Responsibilities:** Defines the exact layout (Flexbox), gaps, typography, text colors, and responsive behavior (Mobile-First stack to Desktop row).
* **Slot Pattern:** Uses React component slots (`QuantityControlSlot`, `ColorsSlot`, `PricingSuffixSlot`) to remain flexible enough to accommodate different product needs without cluttering the core logic.
* **Single Source of Truth:** Any changes to padding, font sizes, or alignments are made here and instantly reflect across all product cards.

### 3.  The Data Layers: Specific Cards
The highest-level components (`<CameraCard />`, `<SensorCard />`, `<AccessoryCard />`).

* **Responsibilities:** These components handle Data and State (e.g., local quantity state, `selectedColor`).
* **Clean Implementation:** They contain almost zero UI/HTML code. They simply map the specific TypeScript interfaces (`CameraItem`, `SensorItem`) to the `<BaseItemCard />` props.

---

> ** Exception Handling (`<PlanCard />`):**
> Because Subscription Plans have a fundamentally different layout (smaller icons, no quantity controls, billing cycle suffixes), the `<PlanCard />` bypasses `<BaseItemCard />` and directly utilizes the `<CardShell />`. This demonstrates the flexibility of the architecture—enforcing consistency where needed, but allowing divergence when the design requires it.

##  Tech Stack

* **Framework:** React 18
* **Language:** TypeScript
* **State Management:** Zustand (v4)
* **Styling:** Tailwind CSS
* **Icons:** Lucide React


## Directory Structure

```text
src/
├── types/                           # Centralized TypeScript definitions & enums
├── data/                            # Data access & normalization layer
│   ├── catalogSelectors.ts          # O(1) Hash Map selectors & category grouping
│   ├── mockDb.ts                    # Raw simulated backend data
│   └── initialBundle.ts             # Configuration for default application state
├── store/                           # Global state management
│   └── useCartStore.ts              # Zustand store (Cart array state + totals & persist logic)
├── assets/
│   ├── fonts/
│   └── images/                      # Static assets utilizing Barrel Pattern
│       ├── cameras/
│       │   └── index.ts             # Single source of truth for camera asset exports
│       └── sensors/
│           └── index.ts             # Single source of truth for sensor asset exports
├── components/
│   ├── ui/                          # Atomic, reusable UI elements (Badges, Controllers)
│   ├── cards/                       # Decoupled entity card system
│   │   ├── CardShell.tsx            # UI Wrapper (Interactive borders & states)
│   │   ├── BaseItemCard.tsx         # Standard Layout Engine (Flexbox & Typography)
│   │   ├── CameraCard.tsx           # Consumes BaseItemCard + ColorSelector
│   │   ├── SensorCard.tsx           # Consumes BaseItemCard
│   │   ├── AccessoryCard.tsx        # Consumes BaseItemCard
│   │   └── PlanCard.tsx             # Consumes CardShell directly (Custom SaaS Layout)
│   ├── review/                      # Review panel summary entities
│   │   ├── ReviewItemLine.tsx       # Individual normalized cart item display
│   │   └── ReviewPanel.tsx          # Main sticky checkout summary panel
│   ├── AccordionStep.tsx            # Presentational accordion step wrapper
│   └── BuilderAccordion.tsx         # Smart container managing step expansion states
└── App.tsx                          # Root application layout
```