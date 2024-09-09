# Reactive Robot Firebase Project

This repository contains the codebase for the Reactive Robot Firebase-hosted website. The site is a personal project by Matt Dailey, featuring blog posts, a public traffic dashboard, and other static content. The site is deployed using Firebase Hosting.

## Project Structure

- **public/**: Contains all the static files being served, including HTML, CSS, and images.
  - **index.html**: The main landing page.
  - **privacy.html**: Privacy policy page.
  - **writing/**: Directory containing blog posts by Matt Dailey.
    - **always-be-pitching.html**: Blog post about continuously pitching ideas.
    - **burnout.html**: Blog post about burnout.
    - **code-review.html**: Blog post about the importance of code reviews.
    - **communication.html**: Blog post on effective communication.
    - **hiring.html**: Blog post about the emotional aspect of hiring.
    - **leveling-up.html**: Blog post about personal growth in engineering.
    - **outcomes-matter.html**: Blog post on the importance of outcomes.
    - **reflection.html**: Blog post about the importance of reflection.
    - **rss.xml**: RSS feed of the blog posts.

- **firebase.json**: Firebase configuration file for specifying hosting settings, rewrites, and redirects.
- **.firebaserc**: Firebase project configuration file.
- **deploy.sh**: Deployment script to deploy the project using Firebase.
- **README.md**: This readme file.

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

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

**Matt Dailey**

- [GitHub](https://github.com/MatthewDailey)
- [LinkedIn](https://www.linkedin.com/in/matthewjdailey/)

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. You can also report any issues or suggest new features by opening an issue.

---

Public traffic dashboard: [Simple Analytics Dashboard](https://dashboard.simpleanalytics.com/reactiverobot.com)
