import React from "react";

export default function EntityTable({listOfEntities}) {
    //const [entities, setEntities] = useState(listOfEntities);
    console.log(listOfEntities);

    return (        
        <table id="tableforfields" className="table">
            <thead>
                <tr>
                    <th scope="col">Sr</th>
                    <th scope="col">Entity Name</th>
                </tr>
            </thead>
            <tbody>
                {listOfEntities.map((entity, index) => {
                    return (<tr>                        
                        <th scope="row">{index+1}</th>
                        <td>{entity}</td>
                    </tr>);
                })}
            </tbody>
        </table>
        
    );
}