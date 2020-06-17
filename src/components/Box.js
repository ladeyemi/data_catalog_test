import { useState, useEffect } from 'react';

function Dataset({
    name,
    data,
}) {
    return <div color="primary" className="dataset">
        <span className="name">{name}</span> <br/>
        <span className="key">Title: </span><span className="title">{data['title']}</span> <br/>
        <span className="key">Pomi_Table_Version: </span><span className="pomi_table_version">{data['pomi_table_version']}</span> <br/>
        <span className="key">Description: </span><span className="desc">{data['description']}</span> <br/>
        <span className="key">Data owner: </span><span className="data_owner">{data['data_owner']}</span> <br/>
        <span className="key">Data_Authorisers: </span><span className="data_authorisers">{data['data_authorisers']}</span> <br/>
        <span className="key">Location: </span><span className="location">{data['location']}</span> <br/>
        <span className="key">Provenance: </span><span className="provenance">{data['provenance']}</span> <br/>
        <span className="key">Provenance_link: </span><span className="provenance_link">{data['provenance_link']}</span> <br/> 
        <span className="key">Update_Type: </span><span className="update_type">{data['update_type']}</span> <br/>
        <span className="key">Supported: </span><span className="supported">{data['supported']}</span> <br/>

    
    


        
        


    </div>    
}

function Folder({
    name,
    data,
}) {
    let childKeys = Object.keys(data['children']);
    const [collapsed, setCollapsed] = useState(true);

    return <div className="folder">
        <span className="name" onClick={() => setCollapsed(!collapsed)}>{name}</span> <br/>
        <div className={"folder-content" + (collapsed ? ' collapsed' : '')}>
            {childKeys.map(child => <Box key={child} name={child} data={data['children'][child]}/>)}
        </div>
    </div>
}


export default function Box({
    name,
    data
}) {
    return <div className={"box"}>
        {
            data['type'] === 'folder' ? 
            <Folder name={name} data={data}/> : 
            <Dataset name={name} data={data}/>
        }
    </div>
}