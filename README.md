# Reactive Google Search
#### Video Demo:  <https://www.youtube.com/watch?v=ysXNgHaBJSc>
#### Description: *due to too many files in node_modules folder, I will not be uplaoding it. If you need it to work you might want to start another boilerplate and the npm dependencies.

This project is made with two objective in mind; To learn React.js and how google search works at a fundamental level.
The app is made with React.js Node.js, Tailwind css and a few few small non-critical libaries.
As a twist, the searches will happen as the user is typing and will give partial searches along the way.
I also implimented image and video searches as well as dark mode if anyone wants to view it.

now onto what each component does:
Obviously index.html is what desplays everything, but the div with ID of root is where app.js is put on.
App.js is a simple layout for the 3 custum components navbar, switch and footer.
Navbar.jsx contails the top two buttons as well as the search bar and subsection search, image, videos.
Links.jsx contains the search, image and video buttons that direct you to different searches.
Switch.jsx directs you to different results depending on which path you are in.
Results.jsx parses the jason responses and parses differently based on which subsection you are in.
ResultProvider.js goes to the api and fetches the json.
Search.jsx is in Navbar.jsx and it takes the user input and gives it to the ResultProvider.js to get corrisponding data.
styles.css, postcss.config.js and tailwind.config.js a few line of code makes tailwind work

A few things i learned when I was making this app:
This app was made by piecing multiple tutorials, treads and learning sites together.
All of the tutorials all have some sort of dependencies that are either outdated or taken down.
Initially I designed the code to work with some third party API, however the API was taken down thus why I am using google's own API.
I must say google's api is slightly harder to use than a steamlined third party API.
Alot of tutorials are made using react-router-dom v5 instead of v6 and there are huge changes inbetween.
had to go to the offical react-router-dom v6 documentations to figure everytihng out.
Dispite the simplicity of the app, the styling took verylong to do because everything would either not lineup right,
or the search results would overlay on top of each other, generally took alot of fiddling around.

all in all this is a fun project, took a long time to finish what looks like not alot of content. But i suppose that's just how learning goes, it will get better.
