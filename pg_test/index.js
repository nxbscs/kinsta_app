const {Client}=require('pg')

const client=new Client({
    host: 'localhost',
    user:'postgres',
    port: 5432,
    password: '1234',
    database: 'postgres'
})

client.connect()

client.query('SELECT * FROM todos',(err,res)=>{
    if(!err){
        console.log(res.rows);
    }
    else{
        console.log(error.message)
    }
    client.end;
})