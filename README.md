
# Job Listing Application

## Overview
This Job Listing Application built with React allows users to browse, search, and filter job postings. It includes features like a dynamic search bar, job listing cards, and a spinner for loading states. The application can be used as a home page with limited job postings or a full page that shows all available jobs.

## Features
**Dynamic Job Listings:** Displays job listings fetched from a local jobs.json file.

**Search Functionality:** Users can search for jobs by title using a search bar.

**Responsive Design:** The application is designed to be fully responsive across various screen sizes.

**Loading Indicator:** A spinner is shown while data is being fetched.

## Technologies Used
**React:** A JavaScript library for building user interfaces.

**React Router:** For navigation between pages.

**React Icons:** Used for adding icons in the UI.

**CSS (Tailwind CSS):** For styling the application.


## Installation
To run this project locally, follow these steps:

### Clone the repository:
**git clone** https://github.com/ankitgope/Job-portal

### Install dependencies:
npm install

### Start the development server:
npm start

### Start the backend server:
npm run server

The React application will open in your default browser at http://localhost:3000.

The backend server will be running separately, typically at http://localhost:5000.

## Project Structure

**components:** Contains reusable UI components like JobListingCard, SearchBar, and Spinner.

**pages:** Contains main page components like JobListing.

**data:** Contains the jobs.json file with job listings data.

**App.js:** Main application component.

**index.js:** Entry point of the application.

**server.js:** Backend server logic.

## Usage
## Job Listing Page
**Home Page Mode:** When the isHome prop is set to true, the component fetches and displays a limited number of jobs.
**Full Page Mode:** When the isHome prop is false, it fetches all available jobs.

## Search Functionality
Users can type in the search bar to filter jobs by their title. The filtered jobs will automatically display based on the user's input.

## Known Issues
**Case Sensitivity:** The search bar functionality is currently case-insensitive.

**Data Source:** The job listings are fetched from a local jobs.json file.

## Contributing
If you want to contribute, please fork the repository and use a feature branch. Just to let you know, pull requests are welcome.

## Fork the repository.
**Create your feature branch:** git checkout -b my-new-feature

**Commit your changes:** git commit -am 'Add some feature'

**Push to the branch:** git push origin my-new-feature

Submit a pull request.

# License
This project is licensed under the MIT License. See the LICENSE file for more details.

# Contact
For any questions or suggestions, please contact your-email@example.com.

