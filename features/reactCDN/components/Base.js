import '../css/base.css';

export function Header() {
    return (
        <header className="p-2 sticky-top bg-wincom-gray d-flex justify-content-center">
            <h2 className="">WINCOM PLATFORM</h2>
        </header>
    );
}

export function Footer() {
    return (
        <footer className="d-flex justify-content-center fixed-bottom">
            <div>Powered by <img width='96' src="../img/wincom-logo-horizontal-dark.png" alt=""/></div>
        </footer>);
}

