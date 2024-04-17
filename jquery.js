
$("document").ready(function(){
    //form id create
     $("#forms").validate({
       rules:{
        address:{
          required:true,
          minlength:3,
         },
         
         number:{
          required:true,
          minlength:10,
         },
         flatno:{
          required:true,
          minlength:8,
         },
         area:{
          required:true
         },
         landmark:{
            required:true
         },
         name:{
            required:true,

         },
         email:{
            required:true,
         },
       },
       messages:{
      address:{
          required:"please enter Your Address",
        },
        flatno:{
          required:"please enter Your flatno",
        },
        number:{
          required:"please enter Your Number",
        },
        area:{
          required:"please enter area name",
        },
        landmark:{
          required:"please enter landmark",
        },
        name:{
            required:"please enter your name",
        },
        email:"enter your current email id",
       },
     })
  })


  