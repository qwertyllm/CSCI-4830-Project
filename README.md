to push changes to github repository
change(cd) to folder of the local repository
git add .
git commit -m "Description of changes"
git push origin master

---

to run reactapp on the local network as an administrator,

first

cd to the src folder

start the server by using node server.js in terminal

then make a new terminal and

cd to the CSCI-4830-Project folder

find ipv4 address using ipconfig

change the host using
$env:HOST="192.168.56.1"; npm start
the server automatically listens in on port 3001

---

## for users to join "http://ip-address-of-host:3000"

for administrators, login to http://localhost:3000/admin/login with username = admin
password = password , you can change the credentials in AdminLogin.js

which takes you to http://localhost:3000/admin/backend

otherwise for users, just go to http://localhost:3000
because this is a testing version, admin username and password is stored in the code in

---
urlsfile content

Github
https://github.com/qwertyllm/CSCI-4830-Project/tree/master
https://github.com/qwertyllm/CSCI-4830-Project/tree/gh-pages

documentation: https://qwertyllm.github.io/CSCI-4830-Project/out/


how to use, if you want to open the college degree helper app for testing


download the repository
and put the folder called CSCI-4830-Project into a project folder

open the project, CSCI-4830-Project, in an editor like visual studio code

open the readme file, package.json (just to make sure)

then run 
npm install
to install the dependencies

then
npm start


if you want to open the college degree helper app in the local area network, don't do npm start

cd to the src folder then do node server.js

then do cd ..

then get your ip using ipconfig and do the below

$env:HOST="192.168.56.1"; npm start

the server automatically listens in on port 3001
the app runs on port 3000
------------------------

to login as an administrator in the search bar do http://192.168.56.1:3000/admin/login
which takes you to http://192.168.56.1:3000/admin/backend

username: admin

password: password



---
## Otherwise, for testing just use npm start, without starting a server

to kill a port
netstat -ano | findstr :3000
taskkill /PID num /F

---

Github
https://github.com/qwertyllm/CSCI-4830-Project/tree/master
https://github.com/qwertyllm/CSCI-4830-Project/tree/gh-pages

documentation: https://qwertyllm.github.io/CSCI-4830-Project/out/

Demo videos:

Milestone 1: https://unomaha.instructure.com/courses/69191/assignments/1014370/submissions/28723
Milestone 2:
https://www.youtube.com/watch?v=MFoj_3VaNQg
Milestone 3:
https://unomaha.instructure.com/courses/69191/discussion_topics/818730
Milestone 4:

Google Drive links:
old: https://drive.google.com/drive/u/0/folders/1Q3AKmT8wh7jzmZi08be6dKAX6dd_g560
new: https://drive.google.com/drive/u/0/folders/1tOVdTCjWVd0vuwoHzbasLoltdpSNjNbl



how to use, if you want to open the college degree helper app for testing

-----------------------------
download the repository
and put the folder called CSCI-4830-Project into a project folder

open the project, CSCI-4830-Project, in an editor like visual studio code

open the readme file, package.json (just to make sure)

then run 
npm install
to install the dependencies

then
npm start

-------------------------

if you want to open the college degree helper app in the local area network, don't do npm start

cd to the src folder then do node server.js

then do cd ..

then get your ip using ipconfig and do the below

$env:HOST="192.168.56.1"; npm start

the server automatically listens in on port 3001
the app runs on port 3000
------------------------

to login as an administrator in the search bar do http://192.168.56.1:3000/admin/login
which takes you to http://192.168.56.1:3000/admin/backend

username: admin

password: password


---
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
