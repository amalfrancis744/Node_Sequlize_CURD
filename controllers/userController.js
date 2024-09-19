import User from "../models/user.js";

export const addUser = async (req, res) => {
  try {
   
    const jane = User.build({ firstName: 'Jane', lastName: 'Doe' });
    
    
    console.log(jane instanceof User); // true
    console.log(jane.firstName); // "Jane"

   
    await jane.save();
    console.log('Jane was saved to the database!');

 
    res.status(200).json(jane.toJSON());
  } catch (error) {
    console.error('Error while saving Jane:', error);
    res.status(500).json({ error: 'An error occurred while saving the user' });
  }
};

export const getUsers= async (req,res)=>{

    try{

        const user = await User.findAll({})
        
        res.status(200).json({data:user})
    }
    catch(error)
    {
        console.log(error)
        res.status(500).json(error)
    }
}

export const getUser= async (req,res)=>{

    try{

        const user = await User.findOne({

            where:{
                id:req.params.id
            }
        })
        
        res.status(200).json({data:user})
    }
    catch(error)
    {
        console.log(error)
        res.status(500).json(error)
    }
}


export const postUser = async (req, res) => {
    try {
     
      const user = User.build(req.body);
  
    
      await user.save();
  
      res.status(201).json({ message: "User added successfully" });
    } catch (error) {
      console.error('Error while adding user:', error);
      res.status(500).json({ error: 'An error occurred while adding the user' });
    }
  };


 export const deleteUser = async (req, res) => {
  try {
 
    const user = await User.findByPk(req.params.id);

    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

   
    await user.destroy();

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error while deleting user:', error);
    res.status(500).json({ error: 'An error occurred while deleting the user' });
  }
};

export const updateUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id)

        if(!user){
            res.status(404).json({error: 'User not found'});
            return
        }

        await user.update(req.body)
        
      
      res.status(200).json({ message: 'User Update successfully' });
    } catch (error) {
        console.log("user updation successfully")
     
    }
  };
      
    
       

