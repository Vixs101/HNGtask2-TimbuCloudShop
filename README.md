# Stage 2 FRONTEND TASK: Timbu Cloud shop

## Task
In this stage, you'll step outside your individual coding zone and embrace collaboration! Here's the mission:
1. Find a Designer: Partner up with a designer. This is your chance to showcase your communication and teamwork skills.
2. Design Implementation: Collaborate with your designer to bring their Timbu Cloud shop page design to life. Translate the design into a functional webpage using React(.tsx/.jsx) / Nextjs(.tsx/.jsx). Make sure there’s a checkout page as well.

## Requirements
* Collaboration: Effective communication and teamwork with your assigned designer throughout the development process. (you are only allowed to collaborate with a designer, any collaboration with your fellow FE dev will result to instant disqualification).
* Technologies: Typescript or JavaScript.
* Responsiveness: The website must be responsive and function well on all devices (desktop, tablet,mobile).
1. The shop page should reflect the designer's vision.
2. Products should be displayed with clear descriptions and images.
4. A checkout page checkout process should be implemented.
5. There will be no functional checkout process at this stage.
6. All static pages must be implemented.

## Acceptance Criteria:
* Visual Design: Your implementation must be pixel-perfect and reflect what is on the Figma design. (layout, colors, branding).
* Products are displayed clearly with descriptions and images.
* Navigation allows users to browse through the shop page.
* The page is static (no working checkout process).
* The page should be fully responsive and adjust to different screen sizes.
* Code Quality: Well-structured, indented, and easy-to-read jsx/tsx code.

## Submission Mode:
Submit your task through the designated submission form. Ensure you've:
* Hosted the page on a platform of your choice (e.g., Vercel, Netlify).
* Double-checked all requirements and acceptance criteria.
* Provided the hosted page's URL in the submission form.
* Provided a link to the Figma file of the design.
* Thoroughly reviewed your work to ensure accuracy, functionality, and adherence to the specified guidelines before you submit it.

# FRONTEND STAGE THREE TASK

## Task Description
In this stage, you'll take your static Timbu Cloud shop page from Stage 2 and breathe life into it using Timbu APIs!
API Exploration: Familiarize yourself with the Timbu API documentation to understand the functionalities available.
Integration Strategy: Plan how you'll integrate the Timbu APIs to achieve a fully functional shop page. This might involve product catalog management, and potentially a simulated checkout flow.
API Implementation: Integrate the Timbu APIs into your existing work to achieve the desired functionalities.

## Requirements
1. Technologies: React, Next + any relevant technology.
2. Timbu APIs: Utilize relevant Timbu APIs to achieve functionalities like product management and a simulated checkout flow.
3. Create a Timbu account on timbu.cloud . Get your API key (it only views once).
4. Add at least 30 products to your timbu account under Retail Business.
5. Retrieve all product information using the api.
6. The display of at least 10 products with images from the timbu api on a page with proper pagination
7. Functionality: The shop page should maintain its visual design from Stage 2.
8. Users should be able to interact with the page (e.g., view products, and simulate checkout flow).
9. The following should work exceptionally
 * Add to Cart
 * Increase and decrease quantity but quantity should not be less than 1(else it should not be in the cart).
 * Increasing or decreasing quantity should also reflect on the price.
 * Remove from Cart
 * Clear Cart
10. Show relevant information about the products you have added on timbu in the list item.
11. Proper UI state management and handling errors properly.
12. Timbu APIs should be integrated to manage product data, and potentially simulate checkout processes.

## Acceptance Criteria:
1. API Integration: Successful integration of relevant Timbu APIs product management, and simulated checkout flow.
2. Functionality:The shop page is fully functional with user interaction capabilities.
3. Sleek UI Implementation of the designer's work.
4. Implementation of Timbu API .
5. Users can navigate through the shop page and view product details.
6. Each Product should be clickable and should navigate to a product page or product modal as per your design (Use the product_id from the API to achieve this)
7. Add Multiple images to the product in your timbu account to implement a product Gallery on the product page or product modal.
8. A simulated checkout process demonstrates the flow (without real payment processing).
9. Build React components to manage different functionalities of the shop page (products, cart, checkout).
10 Code Quality: Well-structured, documented, and maintainable code that effectively interacts with Timbu APIs.
