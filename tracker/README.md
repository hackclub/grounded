# Grounded Tracker

This is a web application built with Flask that allows users to track projects and logs. It integrates with Airtable for data storage and uses HTML templates for the user interface.

## Features

- Project management
- Log tracking for projects
- User authentication (login)
- Media display for logs

## Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/The-UnknownHacker/grounded-tracker
    cd Grounded-Tracker
    ```

2.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt 
    ```

3.  **Environment Variables:**
    Create a `.env` file in the root directory with your Airtable API key and base ID, and any other necessary configurations.
    ```
    SLACK_CLIENT_ID = "YOUR_SLACK_CLIENT_ID"
    SLACK_CLIENT_SECRET = "YOUR_SLACK_CLIENT_SECRET"
    SLACK_REDIRECT_URI = "https://127.0.0.1:5000/auth/callback" # Add this to slack config
    HACKCLUB_CDN_TOKEN = "check cdn repo"  
    AIRTABLE_BASE_ID = "YOUR_AIRTABLE_BASE_ID"
    AIRTABLE_TABLE_NAME="YOUR_AIRTABLE_TABLE_NAME"
    AIRTABLE_PROJECTS_TABLE="YOUR_AIRTABLE_PROJECTS_TABLE"
    AIRTABLE_API_KEY = "YOUR_AIRTABLE_PAT_TOKEN"
    ```

4.  **Run the application:**
    ```bash
    python main.py
    ```

## Usage

Access the application in your web browser at `https://127.0.0.1:5000/` (or the address shown in your terminal).

-   **Login:** Use your credentials to log in.
-   **Dashboard:** View your projects.
-   **Create Project:** Add new projects.
-   **Project Details:** View details of a project and add logs.
-   **Create Log:** Add new logs to a project.

Made with ❤️ by Aarav J (Message me on slack for any questions - Username : Aarav J)