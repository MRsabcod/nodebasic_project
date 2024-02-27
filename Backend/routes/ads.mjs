import express from 'express'
import Ads from '../models/Ads.mjs'
// import Postad from '../screens/Postad.mjs'


const router =express.Router()
router.get('/',async(req,res)=>{
    // <Postad/>
    const ads = await Ads.find()

    res.send({message: "Welcome to the ads page",data: ads })
})
 router.post('/post',async (req,res)=>{
    console.log('api is working')
     try {
        const ad=new Ads(req.body)
        await ad.save()
        
        res.send({message:"Ads Posted Successfully"})
     } catch (error) {
        res.send({message:error.message})
     }
 })
 router.put("/edit/:id", async (req,res)=> {
   let id= req.params.id
   let data={...req.body}
 
   try{
       let updatedData=await Ads.findByIdAndUpdate(id,data, { new: true })
       if(!updatedData){
         return res.status(404).send("No user found")
       }
       res.send(updatedData)
   }catch(e){
       res.status(400).send(e);
   }
   })
   router.delete('/delete/:id',async (req,res)=> {
      let id = req.params.id
      let result = await Ads.findByIdAndDelete(id)
      if (!result) {
         return res.status(404). send("No User Found")
      }
      res.send(result)
   })


export default router