import '../css/base.css';


export function Header() {
    return (
        <header className="p-2 bg-wincom-gray d-flex justify-content-center">
            <h2 className="">WINCOM PLATFORM</h2>
        </header>
    );
}

function checkImage(imageSrc, goodSrcCallBackFunction, badSrcCallBackFunction) {
    var img = new Image();
    img.onload = goodSrcCallBackFunction; 
    img.onerror = badSrcCallBackFunction;
    img.src = imageSrc;
}
checkImage(
    "../../../features/reactCDN/img/wincom-logo-horizontal-dark.png", 
    function(){ console.log("good"); }, 
    function(){ console.log("bad"); } 
    )//USAGE


export function Footer() {
    return (
        <footer className="d-flex justify-content-center fixed-bottom ">
            <div>Powered by <img width='96' src={'../../../features/reactCDN/img/wincom-logo-horizontal-dark.png'} alt="no shown"/></div>
        </footer>

        );
}

