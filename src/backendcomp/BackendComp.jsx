import React from "react";
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

//Create a new model | Make the change in existing model object
//{modelId:'', createdBy:'userId' modelName:'nameofthemodel', modelType:'invoiceProcess' createdOn:'', modifiedOn:'', modifiedBy:'userId'}
export async function createNewModel(modelCreator, modelName, modelType, modifiedBy, returnStatus) {
    await axios.get('http://localhost:5000/createmodel?modelcreator='+modelCreator+'&modelname='+modelName+'&modeltype='+modelType+'&modifiedby='+modifiedBy)
        .then(function (response) {
            returnStatus(response);
        })
        .catch(function (error) {
            returnStatus(error);
        })
}

//Create a new entity object | Add a new entity | Update a new entity | Remove/Delete an entity
//{entityId:'', model:'modelId', entity:''}
export async function createNewEntity(modelName, entityName, returnStatus) {
    await axios.get('http://localhost:5000/createentity?modelname='+modelName+'&entityname='+entityName)
        .then(function (response) {
            returnStatus(response);
        })
        .catch(function (error) {
            returnStatus(error);
        })
}

//Create a new collection | Update a given collection | Remove/Delete a collection
// {collId:'', modelName:'', collName:''}
export async function createNewCollection(modelName, collectionName, returnStatus) {
    await axios.get('http://localhost:5000/cratecollection?modelname='+modelName+'&collectionname='+collectionName)
        .then(function (response) {
            returnStatus(response);
        })
        .catch(function (error) {
            returnStatus(error);
        })
}

//Add a new document | Update a given name | Remove/Delete a document
// {docId:'', coll:'collId', docName:'', docSize:'', docContent:''}
export async function uploadNewDoc(collName,docName,docSize,docContent, returnStatus) {
    await axios.get('http://localhost:5000/uploaddocument?&collectionname='+collName+'&docname='+docName+'&docsize='+docSize+'&doccontent='+docContent)
        .then(function (response) {
            returnStatus(response);
        })
        .catch(function (error) {
            returnStatus(error);
        })
}