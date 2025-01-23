I used React Vite with TailwindCSS to build this project with clean and efficient code.

The project overview is as follows: When the app is rendered, it displays an authentication page to allow users to log in.

Once users enter their credentials, they can access the app. The credentials are stored in local storage for future access.

After logging in, users can add tasks, select their priority levels, and view their tasks. Users can also modify tasks as needed.

By default, when the app is rendered, it displays 5 tasks fetched from an API. Additionally, random dummy data is fetched whenever a user adds a task (this feature is highlighted in the UI).

I used Axios, a third-party library, to handle API requests. Redux is used to manage the entire application state globally, allowing data to be accessed by any component.

When the logout button is clicked, the user's credentials are removed from local storage, and they are redirected to the authentication page.

Live demo link : https://todo-task-quadb.netlify.app/
Screenshot : https://github.com/user-attachments/assets/65b77fa4-ddfc-4665-b3f6-c383288cad3a
