const express=require('express');
const router=express.Router();


router.route("/").get((req,res)=>{
    res.status(200).json({message:"get all the contacts"});
});

router.route('/').post((req,res)=>{
    res.status(200).json({message:'create contact'});
})

router.route("/:id").get((req,res)=>{
    res.status(200).json({message:`get the contact for ${req.params.id}`});
})

router.route("/:id").put((req,res)=>{
    res.status(200).json({message:`update the contact for ${req.params.id}`});
})



router.route("/:id").delete((req,res)=>{
    res.status(200).json({message:`delete the contact for ${req.params.id}`});
})

//create a new contact
module.exports=router;