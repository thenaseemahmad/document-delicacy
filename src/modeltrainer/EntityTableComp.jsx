import React, { useEffect, useState } from "react";
import EntityTable from "./EntityTable";
import NewEntityAddComp from "./NewEntityAddComp";
import { createNewEntity, getEntities } from "../backendcomp/BackendComp";

export default function EntityTableComp({modelDetail,existingEntitiesListForThisModel}) {
    //existingEntitiesListForThisModel will be an empty array for new models
    //State for this component to refresh table
    const [entityList, setEntityList] = useState(existingEntitiesListForThisModel)    
    //this useEffect will make sure to fetch all the existing entities for this model everytime
    //user wants to load this comp
    useEffect(()=>{
        getEntities(modelDetail._id,function(apiRes){
            if(apiRes.status===200){
                console.log(apiRes.data.map((item)=>{return(item.entity_name)}))
                //setEntityList(entityList=>[...entityList,api])
                setEntityList([...entityList,...apiRes.data.map((item)=>{return(item.entity_name)})]);
            }
            else{
                alert('Request can not be filled at the moment, Please try again later!')
            }
        })
    },[])

    function callbackGatherNewEntityName(newEntityName) {
        //Dispatch this entity to database
        createNewEntity(modelDetail._id,newEntityName,function(apiReturnStatus){
            if(apiReturnStatus.status===200){
                setEntityList(entityList=>[...entityList,newEntityName]);
            }
            else{
                alert("Entity can not be added at this time. Please try later");
                //Raise exception email to prod support team
            }
        })
        
        //entityList.filter(function(){return true})
    }
    return (
        <>
            {/* // Add a new entityButton */}
            {/* <EntityAddDropdown returnNewEntityName={callbackGatherNewEntityName} /> */}
            <NewEntityAddComp returnNewEntity={callbackGatherNewEntityName} placeholderText="New entity name"/>
            {/* // Entity table to showcase all the entities created by user */}
            <EntityTable listOfEntities={entityList} />
        </>
    );
}