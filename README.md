# E-commerce Website Development in Next.js, TypeScript, TailwindCSS, and Sanity

## Project Overview

This repository is the foundation of an e-commerce website being built with Next.js, TypeScript, TailwindCSS, and Sanity. The goal of this project is to create a high-performance, scalable, and user-friendly online shopping platform.

---

## Development Log

### Day 1: Brainstorming and Defining Goals

- **Activity:** Used paper and pencil to brainstorm ideas and define the goals for the e-commerce website.
- **Goals Defined:**
  - **User experience:** Easy-to-navigate UI with a clear, responsive design.
  - **Performance:** Ensure fast loading times and smooth user interactions.
  - **Scalability:** Build a solution that can easily scale as the product catalog grows.
  - **Flexibility:** The ability to add and update products, categories, and content easily.
  - **Integrations:** Provide secure payment gateway integration and API integrations.

### Day 2: Planned the Technical Foundation

- **Activity:** Planned the technical foundation of the project.
- **Decisions:**
  - **Next.js:** Chosen as the framework for building the website, offering benefits like server-side rendering and static site generation for improved performance.
  - **TypeScript:** Type safety is added for enhanced developer experience and to minimize runtime errors.
  - **TailwindCSS:** Utilized for quick styling and ensuring a responsive, mobile-first design.
  - **Sanity:** Used as a headless CMS to manage product data, content, and other dynamic elements.

- **Database Model:** Set up initial content models in Sanity, including Product, Category, and User models.
- **State Management:** Decided to use React Context API for state management across the app.

### Day 3: API Integration and Data Migration

- **Activity:** Focused on API integration and migrating product data.
- **Tasks Completed:**
  - **API Integration:**
    - Integrated Sanity CMS API to fetch product data, categories, and other relevant information.
    - Built server-side logic to retrieve data using Next.js’s `getServerSideProps` and `getStaticProps`.
  - **Data Migration:**
    - Migrated initial product data into the Sanity CMS to allow for easy management and updates.
    - Ensured product images, descriptions, and pricing data were correctly migrated and available on the website.

---

## Setup Instructions

To get started with the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ecommerce-nextjs.git
   cd ecommerce-nextjs
2. Install dependencies:
   ```bash
   npm install

3. Set up environment variables:   
  -Create a .env.local file in the root of the project and configure the necessary environment variables (e.g., Sanity API credentials, Stripe keys, etc.).
4. Run the development server:
   ```bash
   npm run dev

Your application should be accessible at http://localhost:3000.  

### Technologies Used
  - Next.js: React framework for building the website with SSR and static site generation.
  - TypeScript: Type safety to catch errors during development.
  - TailwindCSS: Utility-first CSS framework for fast and responsive design.
  - Sanity: Headless CMS to manage product data and content.