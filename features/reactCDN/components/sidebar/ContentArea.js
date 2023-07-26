import '../css/base.css';
import SideBar from './components/sidebar/SideBar';

function ContentArea() {
    return (
        <div class="container-fluid">
            <div class="row flex-nowrap">
                <SideBar />
                <div class="col py-3">
                    Content area...
                    <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse"
                        class="border rounded-3 p-1 text-decoration-none"><i class="bi bi-list"></i></a>
                </div>
            </div>
        </div>
    );

}
export default ContentArea;