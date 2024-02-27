import express from 'express'
const router =express.Router()

const data=[
    {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        "images": [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",
        "https://cdn.dummyjson.com/product-images/1/2.jpg",
        "https://cdn.dummyjson.com/product-images/1/3.jpg",
        "https://cdn.dummyjson.com/product-images/1/4.jpg",
        "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
        ]
        },
]
router.get( "/",(req,res)=>{
    res.send(data)
})
router.get( "/:id",(req,res)=>{
    res.send(req.params.id)
    console.log(req.params.id)
    
})

//add a new product to the database


router.post('/add', (req, res) => {
    console.log("red",req.body)
    res.send({message:"product addd sucessfully",status:'success'});
} )

router.put('/update', (req,res)=>{
    console.log("update",req.body)
    res.send({message:"product update sucessfully",status:'success'});
}
)

export default router