import '../css/base.css';


export function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{ padding:'10px', width:'100%',boxShadow: '3px 2px rgb(0,0,0,0.20)'}}>
             <a class="navbar-brand" href="#"><img src={"../../../features/reactCDN/img/wincomlogo.png"} style={{height:'45px', width:'45px'}}/></a>
            <h5 className="">WINCOM Software Provisioning </h5>
        </nav>
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
    function () { console.log("good"); },
    function () { console.log("bad"); }
)//USAGE


export function Footer() {
    return (
        <footer className="d-flex justify-content-center " style={{marginTop:'50px'}}>
            <div>Powered by <img width='96' src={'../../../features/reactCDN/img/wincom-logo-horizontal-dark.png'} alt="no shown" /></div>
        </footer>

    );
}

