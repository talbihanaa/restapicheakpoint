const userSchema = require('../Models/userModel')


const createUser = async(req , res)=>{

    let {name , email ,password}=req.body;
     await userSchema.insertMany(req.body)
      .then((doc)=>{
        res.status(200).json({msg:'user created' , doc})
      }
    )
    .catch((err)=>{
      res.status(500).json({msg:'user no created' , err})
    })

}

                     //GET :  RETURN ALL USERS 

const getData = async(req,res)=>{
    
      await userSchema.find({})
      .then((doc)=>{
       res.status(200).json({msg: 'person, done', doc})
      })
       .catch((err)=>{
      res.status(500).json({msg:'server error', err})
  })
}

                       //POST :  ADD A NEW USER TO THE DATABASE 

const addUser = async(req,res)=>{

await userSchema.insertOne()
.then((doc)=>{
  res.status(200).json({msg:'user created' , doc})
}
)
.catch((err)=>{
res.status(500).json({msg:'user no created' , err})
})
}


                 //     PUT : EDIT A USER BY ID 
  const updateUser =async(req,res)=>{
    
    await userSchema.findOneAndUpdate({"66277628e395bf4606b66495" : {"name":"daloul"}  , new: true})
    .then((doc)=>{
        res.status(200).json({msg: 'name update with succes', doc})
    })
.catch((err)=>{
    res.status(500).json({msg:'Internal server error', err})
})
}

                     // DELETE : REMOVE A USER BY ID

    const deleteUser =async(req,res)=>{
    
    await userSchema.findByIdAndDelete("66258aa272df5185ae2e24e6")
    .then((doc)=>{
        res.status(200).json({msg: 'person removed with succes', doc})
    })
.catch((err)=>{
    res.status(500).json({msg:'Internal server error', err})
})
}

module.exports ={createUser , getData,addUser,updateUser,deleteUser}