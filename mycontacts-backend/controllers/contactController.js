const asyncHandler=require("express-async-handler");

//@description get all the contacts 
//@route get /api/contacts
//@access public 
const getContacts= asyncHandler(async(req,res)=>{
    res.status(200).json({message:"get all the contacts"});
});


//@description create contacts 
//@route post /api/contacts
//@access public 

const createContact= asyncHandler(async(req,res)=>{

    console.log('the request body is :' , req.body);
    const {name,email,phone}=req.body;
    if(!name||!email||!phone){
        res.status(400);
        throw new Error ("all the fields are mandatory ");
    }
    res.status(201).json({message:"create the contacts"});

});


//@description update the contacts 
//@route put/api/contacts/:id
//@access public 


const updateContact= asyncHandler(async(req,res)=>{
    res.status(200).json({message:"update contacts"});
});

//@description get the contacts 
//@route get /api/contacts/:id
//@access public 

const getContact= asyncHandler(async(req,res)=>{
    res.status(200).json({message:`get the contact for ${req.params.id}`});
});


//@description get the contacts 
//@route delete/api/contacts/:id
//@access public 
const deleteContact= asyncHandler(async(req,res)=>{
    res.status(200).json({message:'delete the contact '})
});


module.exports={getContact,updateContact,createContact,getContacts,deleteContact};



