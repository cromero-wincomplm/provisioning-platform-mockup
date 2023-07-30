import '../css/base.css';
import { TableWithProps } from '../table/GenericTable';
import { CarouselFromProps } from '../carousel/GenericCarousel';
import { ChartComponent } from '../charts/GenericCharts';








function ContentArea() {
    const { useState, useEffect } = React;
    const [wexCenterData, setWexCenterData] = useState({});
    const [showDashBoard, setShowDashBoard] = useState(false);
    const [showOrders, setShowOrders] = useState(false);
    const [showProducts, setShowProducts] = useState(false);

    const emailAddress = 'support@wincom-plm.com';
    const subjectBug = 'Hello! I would like to report a bug';
    const bugDescription = '- Affected WEX Package(s): \n- WEX Package(s) Version: \n- Windchill Version: \n- Bug Description: \n- Steps to Reproduce: \n- Your name, email and soonest availability: ';
    const subjectNewSoftware = 'Hello! I would like to request a new WEX software';
    const emailNewCustomWex = 'Hi! my name is: <yourName>, \nworking for: <yourCompany>, \nI would like to request an invoice for the development of a WEX of the following characteristics/usecase: \nPlease, contact me at: <you information>\nThanks!'
    const reportABug = `mailto:${emailAddress}?subject=${encodeURIComponent(subjectBug)}&body=${encodeURIComponent(bugDescription)}`;
    const requestWEXSoftwareInvoice = `mailto:${emailAddress}?subject=${encodeURIComponent(subjectNewSoftware)}&body=${encodeURIComponent(emailNewCustomWex)}`;
    useEffect(() => {
        const FAKE_DB_LOCATION = "../../../features/fake-db-data/db.json";
        fetch(FAKE_DB_LOCATION)
            .then((response) => response.json())
            .then((json) => {
                let data_a = json.data.wex_center_data;
                console.log(data_a);
                setWexCenterData(data_a)
            });


    }, []);
    let cardsInData = wexCenterData.wexes;
    console.log(cardsInData);
    let cardsArray = [];
    cardsInData = cardsInData ? cardsInData.map((item, index) => {
        cardsArray.push({
            imgSrc: item.imageSrc,
            imgAlt: "...",
            cardTitle: item.displayName,
            cardText: "Description of wex",
            cardButtonHref: "https://windchill-extensions.ptc.com/",
            cardButtonText: "Go to WEX Center"
        })
    }) : [];
    const productsBoughtData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        data: [6, 9, 3, 5, 2],
        label: "WEX Packages Aquired",
    };



    return (
        <div class="row flex-nowrap bg-wincom-gray" style={{ marginTop: '25px' }} >
            <div id="sidebar" class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark collapse-horizontal rounded-top m-s-xxl ">
                <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span class="fs-5 d-none d-sm-inline">Menu</span>
                    </a>
                    <div class="dropdown pb-4">
                        <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">


                            <img id="profileImg" src={"../../../features/reactCDN/img/profileImg.png"} alt="hugenerd" width="30" height="30" class="rounded-circle" />


                            <span class="d-none d-sm-inline mx-1">Who Ami</span>
                        </a>

                        <ul class="dropdown-menu dropdown-menu-dark text-small shadow">

                            <li><a class="dropdown-item"href={requestWEXSoftwareInvoice} onClick={() => {
                                    alert("You will be redirected to you email client, \nmake sure to include your contact information, \nand other relevant details...")
                                    setShowDashBoard(false)
                                    setShowOrders(false)
                                    setShowProducts(false)
                                }}>New Product Request</a></li>
                            <li>
                                <a class="dropdown-item" href={reportABug} onClick={() => {
                                    alert("You will be redirected to you email client, \nmake sure to include Log Files from your Windchill installation, \nand other relevant details...")
                                    setShowDashBoard(false)
                                    setShowOrders(false)
                                    setShowProducts(false)
                                }}>
                                    Report a Bug
                                </a>
                            </li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>
                            <li><a class="dropdown-item" href="https://www.wex-cloud.net/">Sign out</a></li>
                        </ul>
                    </div>
                    <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start " id="menu">
                        <li>
                            <a href="#" class="nav-link px-0 align-middle  text-info" onClick={() => {
                                setShowDashBoard(true)
                                setShowOrders(false)
                                setShowProducts(false)
                            }}>
                                <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline ">Dashboard</span> </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link px-0 align-middle  text-info" onClick={() => {
                                setShowDashBoard(false)
                                setShowOrders(true)
                                setShowProducts(false)
                            }}>
                                <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Custom Software</span></a>
                        </li>
                        <li>
                            <a href="#" class="nav-link px-0 align-middle  text-info" onClick={() => {
                                setShowDashBoard(false)
                                setShowOrders(false)
                                setShowProducts(true)
                            }}>
                                <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Available WEXs</span></a>
                        </li>
                    </ul>

                </div>
            </div>
            <div class="col py-3 p-t-md">
                <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse"
                    class="border rounded-3 p-1 text-decoration-none"><i class="bi bi-list"></i></a>
                {showOrders ? <TableWithProps headers={["Order #", "WEX Name", "Version", "Status", "Download"]}
                    rows={[
                        { header: "0001", wexName: "<myCompany> Custom IX Windchill", version: "1.28", status: "Release", download: "../../../features/reactCDN/img/download.png" },
                        { header: "0002", wexName: "<myCompany> Watermark Templates", version: "1.6b1", status: "Beta", download: "../../../features/reactCDN/img/download.png" },
                        { header: "0003", wexName: "<myCompany> WEX BOM Alert", version: "alpha-0.1.0", status: "In Development" }
                    ]} style={{ display: showOrders ? 'block' : 'none' }} /> : ''}

                {
                    showProducts ?
                        <CarouselFromProps cards={cardsArray} style={{ display: showProducts ? 'block' : 'none' }} />
                        : ''
                }



                {showDashBoard ? <ChartComponent {...productsBoughtData} /> : ''}

                {!showDashBoard && !showProducts && !showOrders ? <CarouselFromProps cards={cardsArray} style={{ display: showProducts ? 'block' : 'none' }} /> : ''}

            </div>
        </div>


    );

}
export default ContentArea;