import React from "react";

export default function EntityTable({ listOfEntities }) {
    //const [entities, setEntities] = useState(listOfEntities);
    console.log(listOfEntities);

    return (
        <div style={{ maxHeight: "350px", overflowY:"scroll"}}>
            <table id="tableforfields" className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Sr</th>
                        <th scope="col">Entity Name</th>
                    </tr>
                </thead>

                <tbody>
                    {listOfEntities.map((entity, index) => {
                        return (<tr>
                            <th scope="row">{index + 1}</th>
                            <td>{entity}</td>
                        </tr>);
                    })}
                </tbody>

            </table>
        </div>
    );
}