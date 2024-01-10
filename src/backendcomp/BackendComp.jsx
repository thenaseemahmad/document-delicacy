import axios from "axios";

//Register a new user with username and password
// {userId:'',userEmail:'',userFullname:'',password:''}
export async function registerUser(userEmail, userPassword, userFullname, returnRegistrationStatus) {
    await axios.post('http://localhost:5000/registeruser?useremail=' + userEmail + '&userpassword=' + userPassword + '&userfullname=' + userFullname)
        .then(function (response) {
            returnRegistrationStatus(response);
        })
        .catch(function (error) {
            returnRegistrationStatus(error);
        });
}

//Login into an existing user
export async function loginUser(userEmail, userPassword, returnLoginStatus) {
    await axios.get('http://localhost:5000/userlogin?useremail=' + userEmail + '&userpassword=' + userPassword)
        .then(function (response) {
            returnLoginStatus(response);
        })
        .catch(function (error) {
            returnLoginStatus(error);
        })
}

//Make someone owner of a model | add someone as a owner of a model| remove someone from owner list of a model
//{ownerId:'',modelName:'', userId:''}
export async function createAnOwner(modelName,ownerEmail,returnStatus) {
    await axios.post('http://localhost:5000/addanewowner?&modelname='+modelName+'&owneremail='+ownerEmail)
        .then(function (response) {
            returnStatus(response);
        })
        .catch(function (error) {
            returnStatus(error);
        })
}

//Create a new model | Make the change in existing model object
//{modelId:'', createdBy:'userId' modelName:'nameofthemodel', modelType:'invoiceProcess' createdOn:'', modifiedOn:'', modifiedBy:'userId'}
export async function createNewModel(modelCreator, modelName, modelType, modifiedBy, returnStatus) {
    await axios.post('http://localhost:5000/createmodel?modelcreator='+modelCreator+'&modelname='+modelName+'&modeltype='+modelType+'&modifiedby='+modifiedBy)
        .then(function (response) {
            returnStatus(response);
        })
        .catch(function (error) {
            returnStatus(error);
        })
}

//Rename a model
export async function renameModel(modelId,newName,returnStatus){
    await axios.post('http://localhost:5000/renamemodel?modelid='+modelId+'&modelname='+newName)
        .then(function (response) {
            returnStatus(response);
        })
        .catch(function (error) {
            returnStatus(error);
        })
}

//Create a new entity object | Add a new entity | Update a new entity | Remove/Delete an entity
//{entityId:'', model:'modelId', entity:''}
export async function createNewEntity(modelId, entityName, returnStatus) {
    await axios.post('http://localhost:5000/createentity?modelid='+modelId+'&entityname='+entityName)
        .then(function (response) {
            returnStatus(response);
        })
        .catch(function (error) {
            returnStatus(error);
        })
}

//get entities of a model
export async function getEntities(modelId, callbackResponse){
    await axios.get('http://localhost:5000/getentities?modelid='+modelId)
    .then(function(response){
        callbackResponse(response);
    })
    .catch(function(error){
        callbackResponse(error);
    })
}

//Create a new collection | Update a given collection | Remove/Delete a collection
// {collId:'', modelName:'', collName:''}
export async function createNewCollection(modelId, collectionName, returnStatus) {
    await axios.post('http://localhost:5000/cratecollection?modelid='+modelId+'&collectionname='+collectionName)
        .then(function (response) {
            returnStatus(response);
        })
        .catch(function (error) {
            returnStatus(error);
        })
}

export async function getCollections(modelId, callbackResponse){
    await axios.get('http://localhost:5000/getcollections?modelid='+modelId)
    .then(function(response){
        callbackResponse(response)
    })
    .catch(function(error){
        callbackResponse(error);
    })
}

//Add a new document | Update a given name | Remove/Delete a document
// {docId:'', coll:'collId', docName:'', docSize:'', docContent:''}
export async function uploadTrainingDocs(files,collectionId, returnStatus) {
    const formData = new FormData();
    files.forEach((file,index)=>{
        formData.append(`file${index}`, file);
    });
    const config = {
        headers: {
            "content-type": "multipart/form-data",
        },
    };
    await axios.post('http://localhost:5000/uploadtrainingfiles?collectionid='+collectionId+'&userid=eea1b2f292814777b94aa21d1a3dfaba',formData,config)
        .then(function (response) {
            returnStatus(response);
        })
        .catch(function (error) {
            returnStatus(error);
        })
}

export async function getTrainingDocs(collectionId,returnResponse){
    await axios.get('http://localhost:5000/gettrainingfiles?collectionid='+collectionId)
    .then(function(response){
        returnResponse(response)
    })
    .catch(function(error){
        returnResponse(error)
    })
}