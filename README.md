# yc-devTiner-web

-created a Vite + React application
-Install TailwindCSS


created login page with axios integration and form validation; configured CORS & credentials

- built login page in frontend using React Hook Form with Zod for validation
- implemented API requests with axios (enabled withCredentials: true)
- installed and configured CORS middleware in backend (set origin, credentials: true)

...........
Setup Redux store and fetch login user

- Installed @reduxjs/toolkit and react-redux
- Created Redux store
- Fetched login user data via Axios
- Displayed user data in UI

****************

create accountApi with RTK Query, refactor user data fetching, update Navbar menu

Using only RTK Query to manage login/logout state via cookies is tricky. 
Mixing RTK Query with a Redux slice is a safer approach.

......................
Explanation / Notes:
Login information (especially the token) retrieved via RTK Query must be manually dispatched to the Redux store to prevent data loss. Always ensure that credentials are stored in the store and accessed using useSelector.

In RTK Query, unlike a query, a mutation does not automatically update the Redux store. Therefore, you need to manually dispatch the result.

EditUserInfo can be implemented similarly to loginUser; the main difference is in the payload structure for each action.

feat: add UserCardPage and ProfileEditPage with user update via RTK Query and Redux Toolkit

==========
Where upon completion of login, the page is redirected to feedPage, the feed data does not accurately reflect the information. To resolve this matter, use pefetch the feed data while in the process of login.
