const sideBar = document.getElementById("mySidebar");
const contentArea = document.getElementById("main");
const openSideBarButton = document.getElementById("openBTN");
const closeSideBarButton = document.getElementById("closeBTN");

const showSideBar = () => {
    sideBar.style.width = "250px";
    contentArea.style.marginLeft = "250px";
    openSideBarButton.style.display = "none";
};

const hideSideBar = () => {
    sideBar.style.width = "0";
    contentArea.style.marginLeft = "0";
    openSideBarButton.style.display = "block";
};

