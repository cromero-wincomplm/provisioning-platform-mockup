import '../css/base.css';
import SideBar from './SideBar'
import { GenericTable, TableWithProps } from '../table/GenericTable';
import { GenericCarousel, CarouselFromProps } from '../carousel/GenericCarousel';
import { ChartComponent } from '../charts/GenericCharts';


function ContentArea() {
    const { useState, useEffect } = React;
    const [wexCenterData, setWexCenterData] = useState({});
    const [showDashBoard, setShowDashBoard] = useState(false);
    const [showOrders, setShowOrders] = useState(false);
    const [showProducts, setShowProducts] = useState(false);

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

        /* Render displayName and imageSrc for each object */
        console.log()
        console.log(item.imageSrc)
        cardsArray.push({
            imgSrc: item.imageSrc,
            imgAlt: "...",
            cardTitle: item.displayName,
            cardText: "Description of wex",
            cardButtonHref: "https://windchill-extensions.ptc.com/",
            cardButtonText: "Go to WEX Center"
        })




    }) : wexCenterData.wexes

    const productsBoughtData = {
        labels: ["January", "February", "March", "April", "May"],
        data: [12, 19, 3, 5, 2],
        label: "Products Bought",
      };

  
    return (
        <div class="row flex-nowrap bg-wincom-gray" >
            <div id="sidebar" class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark collapse-horizontal rounded-top m-s-xxl">
                <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span class="fs-5 d-none d-sm-inline">Menu</span>
                    </a>
                    <div class="dropdown pb-4">
                        <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">


                            <img id="profileImg" src={"../../../features/reactCDN/img/profileImg.png"} alt="hugenerd" width="30" height="30" class="rounded-circle" />


                            <span class="d-none d-sm-inline mx-1">whoami</span>
                        </a>

                        <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                            <li><a class="dropdown-item" href="#">New Product Request</a></li>
                            <li><a class="dropdown-item" href="#">Report a Bug </a></li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>
                            <li><a class="dropdown-item" href="https://www.wex-cloud.net/">Sign out</a></li>
                        </ul>
                    </div>
                    <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li>
                            <a href="#" class="nav-link px-0 align-middle" onClick={() => {
                                setShowDashBoard(true)
                                setShowOrders(false)
                                setShowProducts(false)
                            }}>
                                <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Dashboard</span> </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link px-0 align-middle" onClick={() => {
                                setShowDashBoard(false)
                                setShowOrders(true)
                                setShowProducts(false)
                            }}>
                                <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Orders</span></a>
                        </li>
                        <li>
                            <a href="#" class="nav-link px-0 align-middle" onClick={() => {
                                setShowDashBoard(false)
                                setShowOrders(false)
                                setShowProducts(true)
                            }}>
                                <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Products</span></a>
                        </li>
                    </ul>

                </div>
            </div>
            <div class="col py-3 p-t-md">
                <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse"
                    class="border rounded-3 p-1 text-decoration-none"><i class="bi bi-list"></i></a>
                {showOrders ? <TableWithProps headers={["Order #", "WEX Name", "Version", "Status"]}
                    rows={[
                        { header: "0001", wexName: "<myCompany> Custom Coversheet", version: "1.28", status: "Release" },
                        { header: "002", wexName: "<myCompany> Watermark Templates", version: "1.6b1", status: "Beta" },
                        { header: "003", wexName: "<myCompany> WEX BOM Reports", version: "alpha-0.1.0", status: "In Development" }
                    ]} style={{ display: showOrders ? 'block' : 'none' }} /> : ''}
                {
                    showProducts ?
                        <CarouselFromProps cards={cardsArray} style={{ display: showProducts ? 'block' : 'none' }} />
                        : ''
                }



                {showDashBoard? <ChartComponent {...productsBoughtData}/> : ''}

                

            </div>
        </div>


    );

}
export default ContentArea;