# Matt Dailey Personal Site

This repository contains the codebase for the Reactive Robot Firebase-hosted website. The site is a personal project by Matt Dailey, featuring blog posts, a public traffic dashboard, and other static content. The site is deployed using Firebase Hosting.

## Project Structure

- **public/**: Contains all the static files being served, including HTML, CSS, and images.
- **firebase.json**: Firebase configuration file for specifying hosting settings, rewrites, and redirects.
- **.firebaserc**: Firebase project configuration file.
- **deploy.sh**: Deployment script to deploy the project using Firebase.

## Getting Started

To get started with this project, follow the steps below:

1. Clone the repository:
   ```bash
   git clone https://github.com/mattdailey/reactive-robot-firebase.git
   cd reactive-robot-firebase
   ```
2. Install Firebase CLI if you haven't already:
   ```bash
   npm install -g firebase-tools
   ```
3. Login to Firebase:
   ```bash
   firebase login
   ```
4. Initialize Firebase project:
   ```bash
   firebase init
   ```
5. Deploy the project:
   ```bash
   ./deploy.sh
   ```

## Author

**Matt Dailey**

- [GitHub](https://github.com/MatthewDailey)
- [LinkedIn](https://www.linkedin.com/in/matthewjdailey/)

---

Public traffic dashboard: [Simple Analytics Dashboard](https://dashboard.simpleanalytics.com/reactiverobot.com)
