# **ChessCodex: Tactical Execution Plan**

STATUS: URGENT  
DEADLINE: August 15, 2025  
This is a code-level, zero-compromise execution plan. We will work through this list sequentially. No task is "done" until it is flawless.

### **Phase 1: Go-Live Sprint (Execute by August 15th)**

**Goal:** Fulfill all public-facing requirements for the Behala branch launch and rebranding. This is a detailed, step-by-step guide.

#### **Task BR-01: Rebrand Site for Aspire/Kolkata Split**

* **Objective:** Make "Aspire Chess Academy" (offline) the default landing experience and provide a clear path to "Kolkata Chess Academy" (online).  
* **Step 1: Create the new Aspire Home Page**  
  * **Action:** Create a new file: src/pages/AspireHome.js.  
  * **Content:** This will be a new landing page. For now, you can duplicate the content from src/pages/SiteHome.js as a starting point.  
    // src/pages/AspireHome.js  
    import React from 'react';  
    // Import any necessary components like Navbar, Footer, etc.

    const AspireHome \= () \=\> {  
      return (  
        \<div\>  
          {/\* This will be the new landing page for Aspire Chess Academy (Offline) \*/}  
          \<h1\>Welcome to Aspire Chess Academy\</h1\>  
          {/\* Add content specific to the offline academy here \*/}  
        \</div\>  
      );  
    };

    export default AspireHome;

* **Step 2: Update Application Routing**  
  * **File:** src/App.js  
  * **Action 1:** Import the new AspireHome component: import AspireHome from './pages/AspireHome';  
  * **Action 2:** Find the \<Routes\> section.  
  * **Action 3:** Change the default route (/) to render AspireHome.  
  * **Action 4:** Change the path for SiteHome to a new, specific route like /online-coaching.  
    // In src/App.js  
    \<Routes\>  
      \<Route path="/" element={\<AspireHome /\>} /\>  
      \<Route path="/online-coaching" element={\<SiteHome /\>} /\>  
      {/\* ... keep all other routes \*/}  
    \</Routes\>

* **Step 3: Update the Navigation Bar**  
  * **File:** src/components/Navbar.js  
  * **Action:** Add a prominent link or button that directs users to the online academy. Style it differently to make it a Call to Action (CTA).  
    // In the return statement of Navbar.js, likely near the other nav links  
    \<Link to="/online-coaching" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"\>  
      Explore Online Courses  
    \</Link\>

#### **Task BR-02: Update Contact Info & Location**

* **Objective:** Add the new Behala branch details across the site.  
* **Step 1: Update the Contact Page**  
  * **File:** src/pages/Contact.js  
  * **Action 1:** Locate the JSX section that displays the address and map. It's likely a flex or grid container.  
  * **Action 2:** Duplicate the entire container for the existing (Dumdum) branch.  
  * **Action 3:** In the new container, update the heading to "Behala Branch".  
  * **Action 4:** Change the address text to: Parnasree Nababani Sangha, Airport More, Behala, Kolkata \- 700060\.  
  * **Action 5:** Replace the src attribute of the \<iframe\> with the new Google Maps URL: https://maps.app.goo.gl/dBzYZ2vBUtzfKmUt5?g\_st=aw.  
* **Step 2: Update the Footer**  
  * **File:** src/components/Footer.js  
  * **Action:** Find the address section. Add the Behala address, clearly labeling both locations (e.g., "Dumdum Branch:" and "Behala Branch:").

#### **Task BR-03: Add Tournament Pop-Up**

* **Objective:** Create a modal that appears on site load to promote the new tournament.  
* **Step 1: Create the Modal Component**  
  * **Action:** Create a new file: src/components/TournamentModal.js.  
  * **Content:**  
    // src/components/TournamentModal.js  
    import React from 'react';

    const TournamentModal \= ({ show, onClose }) \=\> {  
      if (\!show) {  
        return null;  
      }

      return (  
        \<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"\>  
          \<div className="bg-white p-8 rounded-lg shadow-xl text-center"\>  
            \<h2 className="text-2xl font-bold mb-4"\>Invitational Inter-Club Tournament\!\</h2\>  
            \<p className="mb-6"\>Join us for the biggest tournament of the year.\</p\>  
            {/\* Optionally, add the tournament poster image here \*/}  
            \<a href="/events" className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 mr-4"\>  
              Join Tournament  
            \</a\>  
            \<button onClick={onClose} className="bg-gray-300 px-6 py-2 rounded-md hover:bg-gray-400"\>  
              Close  
            \</button\>  
          \</div\>  
        \</div\>  
      );  
    };

    export default TournamentModal;

* **Step 2: Implement the Modal in the Main App**  
  * **File:** src/App.js  
  * **Action 1:** Import useState and useEffect from React, and import the new modal: import TournamentModal from './components/TournamentModal';.  
  * **Action 2:** Inside the App component function, set up state and effect.  
    // Inside the App component in src/App.js  
    const \[showModal, setShowModal\] \= useState(false);

    useEffect(() \=\> {  
      const timer \= setTimeout(() \=\> {  
        setShowModal(true);  
      }, 3000); // Show modal after 3 seconds  
      return () \=\> clearTimeout(timer);  
    }, \[\]);

  * **Action 3:** Add the component to your main return statement.  
    // In the return statement of App.js  
    \<TournamentModal show={showModal} onClose={() \=\> setShowModal(false)} /\>

#### **Task BR-04: Update Beginner Course Pricing**

* **Objective:** Display the correct pricing for the beginner course.  
* **File:** src/pages/AdmissionCourses.js or src/components/CoursesList.js (wherever the course details are hardcoded).  
* **Action:** Find the section for the "Beginner Course". Add or edit the text to clearly display:  
  * Price: ₹1200/monthly  
  * One-time Admission Fee: ₹1500 (Includes full Chess Kit)

#### **Task BR-05: Update "About Us" & Bios**

* **Objective:** Align text content with the new branding.  
* **Step 1: Update Tagline**  
  * **File:** src/pages/About.js  
  * **Action:** Find the main tagline h1 or h2. Change the text from "Situated in Dumdum..." to "Based out of Kolkata...".  
* **Step 2: Update Team Roles**  
  * **File:** src/components/Team.js  
  * **Action:** Locate the array or object that holds the team member data. For "Somak Palit", "Joydeep Dutta", and "Arpan Das", change their role or title property from "Coach" to "Mentor".

#### **Task BF-01: Fix Broken Links**

* **Objective:** Ensure all navigation and external links work correctly.  
* **Step 1: Fix YouTube Link**  
  * **File:** src/pages/Gallery.js  
  * **Action:** Find the \<a\> tag that links to YouTube. Replace the href attribute with the correct, working URL.  
* **Step 2: Audit All Navbar Links**  
  * **File:** src/components/Navbar.js  
  * **Action:** Manually click every single link in the navigation bar on the running site. For any link that leads to a "Not Found" page, find the corresponding \<Link to="..."\> in the code and correct the to path to match a valid route defined in src/App.js.

#### **Task CT-01: Add New Gallery Content**

* **Objective:** Add new achievement and facility images to the gallery.  
* **Step 1: Add Image Files**  
  * **Action:** Place the new image files (Anshuman Dey Achievement.png, 20250531\_202722.jpg) into the public/galleryPics/ directory. You may need to create subdirectories if they don't exist.  
* **Step 2: Update Gallery Data Source**  
  * **File:** src/pages/Gallery.js  
  * **Action:** Find the array or object that defines the gallery structure.  
    * In the "Achievements" album/category, add an entry for the Anshuman Dey image.  
    * In the "Our Facility" album/category, add an entry for the new facility image.

#### **Task UI-01 & UI-02: Revamp Navbar**

* **Objective:** Improve the navbar's visual design and structure.  
* **File:** src/components/Navbar.js  
* **Action 1 (Revamp Logo/Name \- UI-01):**  
  * Wrap the logo \<img\> and the site name \<span\> or \<h1\> in a parent div with className="flex items-center".  
  * Adjust the font size, weight, and spacing (e.g., ml-3, text-xl, font-bold) on the text element to achieve a clean, professional look.  
* **Action 2 (Merge Nav Links \- UI-02):**  
  * **First, create the new page:** Create a file src/pages/CollaborationAndExclusives.js. Populate it with the combined content from the old pages.  
  * **Then, update routing:** In src/App.js, add a route for this new page: \<Route path="/collaboration" element={\<CollaborationAndExclusives /\>} /\>.  
  * **Finally, update the navbar:** In src/components/Navbar.js, find the array of navigation links. Remove the separate "Exclusives" and "Collaboration" entries and add a single new entry: { name: 'Collaboration & Exclusives', href: '/collaboration' }.