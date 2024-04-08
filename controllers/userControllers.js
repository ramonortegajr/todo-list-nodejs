const con = require('../database/db_connection');

exports.addTask = (req, res) => {
   const {task} = req.body;
   if (task == null || task === ''){ 
    res.status(400).send('Please provide a valid input!');
    return;
   }
   const sql = 'INSERT INTO task_list (task_description) VALUES (?)';
   con.query(sql, [task], (err, result)=>{
    if (err) {
        console.error('Error inserting data to MySQL');
        res.send('There was an error with saving.');
        return;
    }
    console.log('Task created successfully!', result);
    res.redirect('/index');
   });
}