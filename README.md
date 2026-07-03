# Automated CI/CD Portfolio Pipeline 

A professional, containerized portfolio application demonstrating a fully automated Continuous Integration and Continuous Deployment (CI/CD) workflow. This project bridges the gap between development and operations by ensuring that every code change is automatically built, tested, and deployed to a live cloud server.

##  Architecture & Tech Stack

This project is built using modern cloud and DevOps practices:

*   **Frontend -** React.js styled with Tailwind CSS for a clean, responsive layout.
*   **Containerization -** Docker (Multi-stage builds using Node.js and Nginx to ensure a lightweight footprint).
*   **Automation -** GitHub Actions for orchestrated CI/CD workflows.
*   **Cloud Hosting -** AWS EC2 (Ubuntu Virtual Machine).

##  How the Pipeline Works

Whenever a developer pushes code to the `main` branch, the GitHub Actions workflow (`.github/workflows/deploy.yml`) triggers the following sequence:

1.  **Checkout -** Retrieves the latest source code.
2.  **Build -** Compiles the React/Tailwind application and packages it into a Docker image.
3.  **Registry Push -** Authenticates and pushes the new Docker image to Docker Hub.
4.  **Server Deployment -** Establishes a secure SSH connection to the AWS EC2 instance, pulls the latest image, stops the old container, and spins up the new version on port 80.

---

##  How to Trigger and Verify the Pipeline

To see the automation in action, follow these steps to push an update:

### 1. Make a Local Change
Open the project in your local code editor and navigate to the main frontend component:
`src/App.js`

Modify a visible piece of text. For example, change the main header title to test a new version:
```javascript
<h1 className="text-5xl font-bold mb-4">
  Vision & Perspective v3.0
</h1>

