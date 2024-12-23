import { useEffect } from 'react';
import '../css/App.css';
import Sidebar from './Sidebar';
import SmallScreenHeader from './small_screens/SmallScreenHeader';
import SmallScreenOverlay from './small_screens/SmallScreenOverlay';
import Main from './Main';

const title = 'platypus.house';

const closeSidebar = () => {
  document.getElementById("my-sidebar").style.display = "none";
  document.getElementById("my-overlay").style.display = "none";
}
const openSidebar = () => {
  document.getElementById("my-sidebar").style.display = "block";
  document.getElementById("my-overlay").style.display = "block";
}
const themeSet = (toggled) => {
  document.getElementById('style-light').disabled = !toggled;
  document.getElementById('style-dark').disabled = toggled;
  localStorage.setItem('theme-toggled', toggled ? '1' : '');
  document.getElementById('mode').innerHTML = toggled ? '阳' : '阴';
}
const themeToggle = () => {
  themeSet(document.getElementById('style-light').disabled);
}

const setSmoothScrolling = () => {
  // Define selector for selecting
  // anchor links with the hash
  let anchorSelector = 'a[href^="#"]:not(#save-canvas)';
  // Collect all such anchor links
  let anchorList = document.querySelectorAll(anchorSelector);
  // Iterate through each of the links
  anchorList.forEach(link => {
    link.onclick = function (e) {
        // Prevent scrolling if the
        // hash value is blank
        e.preventDefault();
        // Get the destination to scroll to
        // using the hash property
        let destination =
            document.querySelector(this.hash);
        // Scroll to the destination using
        // scrollIntoView method
        destination.scrollIntoView({
            behavior: 'smooth'
        });
    }
  });
}

const App = () => {  
  useEffect(() => {
    themeSet(localStorage.getItem('theme-toggled'));
    setSmoothScrolling();
  }, []);

  return (
    <div id="app">
      <Sidebar title={title} close={closeSidebar} themeToggle={themeToggle}/>
      <SmallScreenHeader title={title} openSidebar={openSidebar}/>
      <SmallScreenOverlay closeSidebar={closeSidebar}/>
      <Main />
    </div>
  );
}

export default App;
