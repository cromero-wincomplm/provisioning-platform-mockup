

export function GenericTable() {

    return (<table class="table charts-css bar">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
            </tr>
        </tbody>
    </table>);
}

function createSingleThElement(strHeader) {
    return <th scope="col">{strHeader}</th>
}
function createTHs(headers) {
    let ths = [];
    for (var i = 0; i < headers.length; i++) {
        ths.push(createSingleThElement(headers[i]));
    }
    return ths;
}
function createSingleTDElement(strTD) {
    return <td>{strTD}</td>
}
function createTR(objTR) {
    return (
        <tr>
            {createSingleThElement(objTR.header)}
            {createSingleTDElement(objTR.wexName)}
            {createSingleTDElement(objTR.version)}
            {createSingleTDElement(objTR.status)}
        </tr>
    );

}
export function TableWithProps(props) {

    return (
        <table class="table">
            <thead>
                <tr>
                    {createTHs(props.headers)}

                </tr>
            </thead>
            <tbody>
                {createTR(props.rows[0])}
                {createTR(props.rows[1])}
                {createTR(props.rows[2])}

            </tbody>
        </table>
    );

}


