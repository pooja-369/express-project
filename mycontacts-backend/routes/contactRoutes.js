const express=require('express');
const router=express.Router();
const {getContact,updateContact,createContact,getContacts,deleteContact} =require("../controllers/contactController");


router.route("/").get(getContacts);

router.route('/').post(createContact);

router.route("/:id").get(getContact);

router.route("/:id").put(updateContact);



router.route("/:id").delete(deleteContact);

//create a new contact
module.exports=router;