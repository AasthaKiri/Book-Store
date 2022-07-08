const express = require('express')
const path = require('path')
const app = express();
const port = 5000
const pool = require('./db')
const cors = require('cors')


// // app.use(express.static(path.join(__dirname, "static")))
// // app.use('/',require(path.join(__dirname, "routes/blog.js" )))


app.use(cors({ origin :['http://localhost:3000']}))
app.use(express.json())

app.listen(port, () =>{
    console.log(`Blog  app is listening to http://localhost:${port}`)
})



//FOR REGISTRATION

app.post('/api/public/register' , async(req,res) =>{
    const {firstname , lastname , email , password , roleid} = req.body
    const register = await pool.query("insert into users (firstname , lastname , email , password , roleid)  values  ($1,$2,$3,$4,$5) returning *", [firstname , lastname , email , password , roleid])
    res.json(register.rows)
})

//FOR LOGIN
app.post('/api/public/login' , async(req,res) =>{
    const {email,password} = req.body
    const login = await pool.query("select * from users where email = $1 and password = $2" ,[email,password])
    res.json(login.rows)
})

// FOR BOOK LIST

app.get('/api/book/list',async(req,res) =>{
    const abc = await pool.query('SELECT * FROM book INNER JOIN category ON book.categoryid = category.cid')
    res.json(abc.rows)
})

//FOR GETTING BOOK LIST THROUGH ID

app.get('/api/book/:id',async(req,res) =>{
    const {id} = req.params
    const list =  await pool.query('select * from book where id = $1' ,[id])
    res.json(list.rows)
})

//FOR ADDING THE DATA OF BOOKS

app.post('/api/book/add' , async(req,res) =>{
    const {name,price,description,base64image,categoryid,publisherid,quantity} = req.body
    const add = await pool.query("insert into book (name,price,description,base64image,categoryid,publisherid,quantity)  values  ($1,$2,$3,$4,$5,$6,$7) returning *", [name,price,description,base64image,categoryid,publisherid,quantity])
    res.json(add.rows)
})

//FOR UPDATING THE DATA OH BOOKS

app.put('/api/book/update/:id' , async(req,res) =>{
    const {id} = req.params
    const {name,price,description,base64image,categoryid,publisherid,quantity} = req.body
    const update = await pool.query("update book set name = $1 , price = $2 , description = $3 ,base64image = $4 , categoryid = $5 , publisherid = $6 ,quantity = $7 where id = $8" ,[name,price,description,base64image,categoryid,publisherid,quantity,id])
    res.json(update.rows)
})
 

//FOR BOOK DATA TO SORT

app.get('/api/book/sort' , async(req,res) =>{
    try {
        const bsort = await pool.query('select * from book order by "name"')
        res.json(bsort)
        console.log(bsort);
    } catch (err) {
        console.log(err.message);
    }
    
})

//FOR DELETING THE DATA 

app.delete('/api/book/delete/:id' , async(req,res) =>{
    const {id} = req.params
    const clear  =await pool.query("delete from book where id = $1" , [id])
    res.json(clear.rows)
})


//FOR USER LIST

app.get('/api/user/list' , async(req,res) =>{
    const data = await pool.query('select * from users')
    res.json(data.rows)
})

//FOR GETTING USER THROUGH ID

app.get('/api/user/:id' , async(req,res) =>{
    const { id } = req.params
    const user = await pool.query('select * from users where id = $1' , [id])
    res.json(user.rows)
})

//FOR ADDING THE USER DATA 

app.post('/api/user/add' , async(req,res) =>{
    const {fname , lname , email , password, roleid} = req.body
    const add = await pool.query("insert into users (firstname , lastname , email , password , roleid)  values  ($1,$2,$3,$4,$5) returning *", [fname , lname , email , password , roleid])
    res.json(add.rows)
})


//FOR UPDATING THE USER DATA

app.put('/api/user/update/:id' , async(req,res) =>{
    const {id} = req.params
    const {firstname,lastname,email,password,roleid} = req.body
    const update = await pool.query("update users set firstname=$1 , lastname=$2 , email=$3 , password=$4 , roleid=$5 where id=$6" ,[firstname , lastname , email , password , roleid,id])
    res.json(update.rows)
})


//FOR DELETING THE USER DATA

app.delete('/api/user/delete/:id', async(req,res) =>{
    const { id } = req.params
    const clr = await pool.query("delete from users where id = $1" , [id])
    res.json(clr.rows)
})





//FOR CATEGORY LIST

app.get('/api/category/list' , async(req,res) =>{
    const data = await pool.query('select * from category')
    res.json(data.rows)
})

//FOR GETTING category THROUGH ID

app.get('/api/category/:id' , async(req,res) =>{
    const { id } = req.params
    const category = await pool.query('select * from category where id = $1' , [id])
    res.json(category.rows)
})

//FOR ADDING THE category DATA 

app.post('/api/category/add' , async(req,res) =>{
    const {name} = req.body
    const add = await pool.query("insert into category (name)  values  ($1) returning *", [name])
    res.json(add.rows)
})


//FOR UPDATING THE CATEGORY DATA

app.put('/api/category/update/:id' , async(req,res) =>{
    const {id} = req.params
    const {name} = req.body
    const update = await pool.query("update category set name = $1 where id=$2" ,[name,id])
    res.json(update.rows)
})


//FOR DELETING THE CATEGORY DATA

app.delete('/api/category/delete/:id', async(req,res) =>{
    const { id } = req.params
    const clr = await pool.query("delete from category where id = $1" , [id])
    res.json(clr.rows)
})



//FOR CART  LIST

app.get('/api/cart/list' , async(req,res) =>{
    const data = await pool.query('select * from cart')
    res.json(data.rows)
})

//FOR GETTING CART THROUGH ID

app.get('/api/cart/:id' , async(req,res) =>{
    const { id } = req.params
    const cart = await pool.query('select * from cart where id = $1' , [id])
    res.json(cart.rows)
})

//FOR ADDING THE category DATA 
//only add the bookid and userid which is there in book table 
app.post('/api/cart/add' , async(req,res) =>{
    const {userid,bookid,quantity} = req.body
    const add = await pool.query("insert into cart (userid,bookid,quantity)  values  ($1,$2,$3) returning *", [userid,bookid,quantity])
    res.json(add.rows)
})



//FOR UPDATING THE CATEGORY DATA

app.put('/api/cart/update/:id' , async(req,res) =>{
    const {id} = req.params
    const {userid,bookid,quantity} = req.body
    const update = await pool.query("update cart set userid = $1 ,bookid = $2 ,quantity = $3 where id=$4" ,[userid,bookid,quantity,id])
    res.json(update.rows)
})


//FOR DELETING THE CATEGORY DATA

app.delete('/api/cart/delete/:id', async(req,res) =>{
    const { id } = req.params
    const clr = await pool.query("delete from cart where id = $1" , [id])
    res.json(clr.rows)
})







// // app.post('/booksData',async(req,res) => {

  //  // const {name , price , quantity} = req.body
// //     const data =  await pool.query('INSERT INTO book (name,price,quantity) VALUES ($1,$2,$3) RETURNING *', [name,price,quantity])
// //     res.json(data.rows)
// // })

// // GET ALL THE DATA

// app.get('/tp',async(req,res) =>{
//     const abc = await pool.query('SELECT * FROM tp')
//     res.json(abc.rows)
// })


// // TO INSERT THE VALUE 


// app.post('/tpData',async(req,res) => {

//     const {name , price , quantity} = req.body
//     const data =  await pool.query('INSERT INTO tp (name,price,quantity) VALUES ($1,$2,$3) RETURNING *', [name,price,quantity])
//     res.json(data.rows)
// })



// // TO GET A SPECIFIC  DATA 

// app.get('/tps/:name', async(req,res) =>{
//     const { name } = req.params;
//     const tps = await pool.query("select * from tp where name = $1",[name])
//     res.json(tps.rows)
// })


// // TO UPDATE THE DATA

// app.put("/tpu/:id" , async(req,res) => {
//     const { id } = req.params;
//     const {name} =  req.body
//     const update = await pool.query("update tp set name= $1 where id = $2",[name,id])
//     res.json(update.rows)
// })

// // TO DELETE THE DATA 

// app.delete("/tpd/:id" , async(req,res)=>{
//     const { id }= req.params
//     const clear = await pool.query("delete from tp where id = $1",[id])
//     res.json(clear.rows)
// })

