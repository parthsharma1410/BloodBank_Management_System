const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const mysql = require('mysql');
var session = require('express-session');
var path = require('path');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Parth@ps14',
    database: 'bloodbank_management_system',
    insecureAuth : true
});

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get("/api/getDistrict", (req,res)=>{
    const sqlSelectdistrict = "SELECT * FROM district";
    db.query(sqlSelectdistrict, (err,result)=>{
        res.send(result);
    })
})
app.get("/api/getbpm", (req,res)=>{
    const sqlSelectbpm = "SELECT * FROM blood_processing_manager";
    db.query(sqlSelectbpm, (err,result)=>{
        res.send(result);
    })
})
app.get("/api/getbr", (req,res)=>{
    const sqlSelectbr = "SELECT * FROM blood_recipient";
    db.query(sqlSelectbr, (err,result)=>{
        res.send(result);
    })
})
app.get("/api/getbs", (req,res)=>{
    const sqlSelectbs = "SELECT * FROM blood_sample";
    db.query(sqlSelectbs, (err,result)=>{
        res.send(result);
    })
})
app.get("/api/getdr", (req,res)=>{
    const sqlSelectdr = "SELECT * FROM disease_recognizer";
    db.query(sqlSelectdr, (err,result)=>{
        res.send(result);
    })
})
app.get("/api/geth1", (req,res)=>{
    const sqlSelecth1 = "SELECT * FROM hospital1";
    db.query(sqlSelecth1, (err,result)=>{
        res.send(result);
    })
})
app.get("/api/geth2", (req,res)=>{
    const sqlSelecth2 = "SELECT * FROM hospital2";
    db.query(sqlSelecth2, (err,result)=>{
        res.send(result);
    })
})
app.get("/api/getrs", (req,res)=>{
    const sqlSelectrs = "SELECT * FROM registration_staff";
    db.query(sqlSelectrs, (err,result)=>{
        res.send(result);
    })
})
app.get("/api/getDonor", (req,res)=>{
    const sqlSelectdonor = "SELECT * FROM donor";
    db.query(sqlSelectdonor, (err,result)=>{
        res.send(result);
    })
})

app.delete("/api/deleteDonors/:D_id", (req,res)=>{
    const id = req.params.D_id; 
    const sqlDeleteDonor = "DELETE FROM donor WHERE D_id = ?";
    db.query(sqlDeleteDonor, id, (err,result)=>{
        console.log(err);
    })
})
app.delete("/api/deleteDistrict/:dis_id", (req,res)=>{
    const id = req.params.dis_id; 
    const sqlDeleteDistrict = "DELETE FROM district WHERE dis_id = ?";
    db.query(sqlDeleteDistrict, id, (err,result)=>{
        console.log(err);
    })
})
app.delete("/api/deleters/:rs_id", (req,res)=>{
    const id = req.params.rs_id; 
    const sqlDeleters = "DELETE FROM registration_staff WHERE rs_id = ?";
    db.query(sqlDeleters, id, (err,result)=>{
        console.log(err);
    })
})
app.delete("/api/deletebr/:r_id", (req,res)=>{
    const id = req.params.r_id; 
    const sqlDeletebr = "DELETE FROM blood_recipient WHERE r_id = ?";
    db.query(sqlDeletebr, id, (err,result)=>{
        console.log(err);
    })
})
app.delete("/api/deletebs/:bs_id", (req,res)=>{
    const id = req.params.bs_id; 
    const sqlDeletebs = "DELETE FROM blood_sample WHERE bs_id = ?";
    db.query(sqlDeletebs, id, (err,result)=>{
        console.log(err);
    })
})
app.delete("/api/deletedr/:drecog_id", (req,res)=>{
    const id = req.params.drecog_id; 
    const sqlDeletedr = "DELETE FROM disease_recognizer WHERE drecog_id = ?";
    db.query(sqlDeletedr, id, (err,result)=>{
        console.log(err);
    })
})
app.delete("/api/deletebpm/:bpm_id", (req,res)=>{
    const id = req.params.bpm_id; 
    const sqlDeletebpm = "DELETE FROM blood_processing_manager WHERE bm_id = ?";
    db.query(sqlDeletebpm, id, (err,result)=>{
        console.log(err);
    })
})
app.delete("/api/deleteh1/:h_id", (req,res)=>{
    const id = req.params.h_id; 
    const sqlDeleteh1 = "DELETE FROM hospital1 WHERE h_id = ?";
    db.query(sqlDeleteh1, id, (err,result)=>{
        console.log(err);
    })
})
app.delete("/api/deleteh2/:ho_id", (req,res)=>{
    const id = req.params.ho_id; 
    const sqlDeleteh2 = "DELETE FROM hospital2 WHERE ho_id = ?";
    db.query(sqlDeleteh2, id, (err,result)=>{
        console.log(err);
    })
})



app.post("/api/insertdis", (req,res)=>{
    const dis_id = req.body.dis_id;
    const dis_name = req.body.dis_name;
    const sqlInsertdistrict = "INSERT INTO district (dis_id,dis_name) VALUES (?,?)"
    db.query(sqlInsertdistrict, [dis_id,dis_name], (err,result) => {
        console.log(result);
    })
})
app.post("/api/insertbm", (req,res)=>{
    const bm_id = req.body.bm_id;
    const bm_name = req.body.bm_name;
    const sex5 = req.body.sex5;
    const sqlInsertbpm = "INSERT INTO blood_processing_manager (bm_id,bm_name,sex) VALUES (?,?,?)"
    db.query(sqlInsertbpm, [bm_id,bm_name,sex5], (err,result) => {
        console.log(result);
    })
})
app.post("/api/insertbr", (req,res)=>{
    const r_id = req.body.r_id;
    const sex3 = req.body.sex3;
    const age2 = req.body.age2;
    const r_regdate = req.body.r_regdate;
    const rName = req.body.rName;
    const b_qnty = req.body.b_qnty;
    const rb_grp = req.body.rb_grp;
    const reg_id = req.body.reg_id;
    const dist_id = req.body.dist_id;
    const bpm_id = req.body.bpm_id;

    const sqlInsertbr = "INSERT INTO blood_recipient (r_id,sex,age,r_regdate,rName,b_qnty,rb_grp,reg_id,dist_id,bpm_id) VALUES (?,?,?,?,?,?,?,?,?,?)"
    db.query(sqlInsertbr, [r_id,sex3,age2,r_regdate,rName,b_qnty,rb_grp,reg_id,dist_id,bpm_id], (err,result) => {

    })
})
app.post("/api/insertbs", (req,res)=>{
    const bs_id = req.body.bs_id;
    const b_group = req.body.b_group;
    const sample_no = req.body.sample_no;
    const status = req.body.status;
    const drecogn_id = req.body.drecogn_id;
    const bpma_id = req.body.bpma_id;

    const sqlInsertbs = "INSERT INTO blood_sample (bs_id,b_group,sample_no,status,drecogn_id,bpma_id) VALUES (?,?,?,?,?,?)";
    db.query(sqlInsertbs, [bs_id,b_group,sample_no,status,drecogn_id,bpma_id], (err,result) => {
        console.log(err)
    })
})
app.post("/api/insertdr", (req,res)=>{
    const drecog_id = req.body.drecog_id;
    const drecog_name = req.body.drecog_name;
    const sex4 = req.body.sex4;
    const sqlInsertdr = "INSERT INTO disease_recognizer (drecog_id,drecog_name,sex) VALUES (?,?,?)"
    db.query(sqlInsertdr, [drecog_id,drecog_name,sex4], (err,result) => {

    })
})
    app.post("/api/insertdonor", (req,res)=>{
    const D_id = req.body.D_id;
    const dName = req.body.dName;
    const sex = req.body.sex;
    const age = req.body.age;
    const dreg_date = req.body.dreg_date;
    const db_grp = req.body.db_grp;
    const regs_id = req.body.regs_id;
    const distr_id = req.body.distr_id;
    const sqlInsertdonor = "INSERT INTO donor (D_id,dName,sex,age,dreg_date,db_grp,regs_id,distr_id) VALUES (?,?,?,?,?,?,?,?)"
    db.query(sqlInsertdonor, [D_id,dName,sex,age,dreg_date,db_grp,regs_id,distr_id], (err,result) => {
        console.log(err);
    })
})
app.post("/api/insertdp", (req,res)=>{
    const phone = req.body.phone;
    const D_idd = req.body.D_idd;
    const sqlInsertdonor_phone = "INSERT INTO donor_phone (phone,D_idd) VALUES (?,?)"
    db.query(sqlInsertdonor_phone, [phone,D_idd], (err,result) => {

    })
})
app.post("/api/inserth1", (req,res)=>{
    const hid = req.body.hid;
    const hname = req.body.hname;
    const distri_id = req.body.distri_id;
    const bbpma_id = req.body.bbpma_id;
    const sqlInserth1 = "INSERT INTO hospital1 (hid,hname,distri_id,bbpma_id) VALUES (?,?,?,?)"
    db.query(sqlInserth1, [hid,hname,distri_id,bbpma_id], (err,result) => {

    })
})
app.post("/api/inserth2", (req,res)=>{
    const ho_id = req.body.ho_id;
    const hb_gp = req.body.hb_gp;
    const hb_qty = req.body.hb_qty;
    const sqlInserth2 = "INSERT INTO hospital2 (ho_id,hb_gp,hb_qty) VALUES (?,?,?)"
    db.query(sqlInserth2, [ho_id,hb_gp,hb_qty], (err,result) => {

    })
})
app.post("/api/insertrs", (req,res)=>{
    const rs_id = req.body.rs_id;
    const rs_name = req.body.rs_name;
    const sex2 = req.body.sex2;
    const sqlInsertrs = "INSERT INTO registration_staff (rs_id,rs_name,sex) VALUES (?,?,?)"
    db.query(sqlInsertrs, [rs_id,rs_name,sex2], (err,result) => {

    })
})
app.post("/api/insertrsemail", (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const rs_idd = req.body.rs_idd;
    const sqlInsertrsemail = "INSERT INTO rsemail (email,password,rs_idd) VALUES (?,?,?)"
    db.query(sqlInsertrsemail, [email,password,rs_idd], (err,result) => {

    })
})

app.listen(3001, ()=>{
    console.log("Server Started");
})