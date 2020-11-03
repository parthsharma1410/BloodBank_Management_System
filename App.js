import React,{ useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const[D_id,setD_id] = useState('');
  const[dName,setdName] = useState('');
  const[sex,setsex] = useState('');
  const[age,setage] = useState('');
  const[dreg_date,setdreg_date] = useState('');
  const[db_grp,setdb_grp] = useState('');
  const[regs_id,setregs_id] = useState('');
  const[distr_id,setdistr_id] = useState('');
  const[phone,setphone] = useState('');
  const[D_idd,setD_idd] = useState('');
  const[dis_id,setdis_id] = useState('');
  const[dis_name,setdis_name] = useState('');
  const[rs_id,setrs_id] = useState('');
  const[rs_name,setrs_name] = useState('');
  const[sex2,setsex2] = useState('');
  const[email,setemail] = useState('');
  const[password,setpassword] = useState('');
  const[Rs_idd,setRs_idd] = useState('');
  const[r_id,setr_id] = useState('');
  const[sex3,setsex3] = useState('');
  const[age2,setage2] = useState('');
  const[r_regdate,setr_regdate] = useState('');
  const[rName,setrName] = useState('');
  const[b_qnty,setb_qnty] = useState('');
  const[rb_grp,setrb_grp] = useState('');
  const[reg_id,setreg_id] = useState('');
  const[dist_id,setdist_id] = useState('');
  const[bpm_id,setbpm_id] = useState('');
  const[bs_id,setbs_id] = useState('');
  const[b_group,setb_group] = useState('');
  const[sample_no,setsample_no] = useState('');
  const[status,setstatus] = useState('');
  const[drecogn_id,setdrecogn_id] = useState('');
  const[bpma_id,setbpma_id] = useState('');
  const[drecog_id,setdrecog_id] = useState('');
  const[drecog_name,setdrecog_name] = useState('');
  const[sex4,setsex4] = useState('');
  const[bm_id,setbm_id] = useState('');
  const[bm_name,setbm_name] = useState('');
  const[sex5,setsex5] = useState('');
  const[hid,sethid] = useState('');
  const[hname,sethname] = useState('');
  const[distri_id,setdistri_id] = useState('');
  const[bbpma_id,setbbpma_id] = useState('');
  const[ho_id,setho_id] = useState('');
  const[hb_gp,sethb_gp] = useState('');
  const[hb_qty,sethb_qty] = useState('');
  const[districtList,setdistrictList] = useState([]);
  const[donorList,setdonorList] = useState([]);
  const[bpmList,setbpmList] = useState([]);
  const[brList,setbrList] = useState([]);
  const[bsList,setbsList] = useState([]);
  const[drList,setdrList] = useState([]);
  const[h1List,seth1List] = useState([]);
  const[h2List,seth2List] = useState([]);
  const[rsList,setrsList] = useState([]);
  const[newdName,setnewdName] = useState('');

   useEffect(()=>{
    Axios.get("http://localhost:3001/api/getDistrict").then((response)=>{
      setdistrictList(response.data);
    })
  }, [])
  useEffect(()=>{
    Axios.get("http://localhost:3001/api/getDonor").then((response)=>{
      setdonorList(response.data);
    })
  }, [])
  useEffect(()=>{
    Axios.get("http://localhost:3001/api/getbpm").then((response)=>{
      setbpmList(response.data);
    })
  }, [])
  useEffect(()=>{
    Axios.get("http://localhost:3001/api/getbr").then((response)=>{
      setbrList(response.data);
    })
  }, [])
  useEffect(()=>{
    Axios.get("http://localhost:3001/api/getbs").then((response)=>{
      setbsList(response.data);
    })
  }, [])
  useEffect(()=>{
    Axios.get("http://localhost:3001/api/getdr").then((response)=>{
      setdrList(response.data);
    })
  }, [])
  useEffect(()=>{
    Axios.get("http://localhost:3001/api/geth1").then((response)=>{
      seth1List(response.data);
    })
  }, [])
  useEffect(()=>{
    Axios.get("http://localhost:3001/api/geth2").then((response)=>{
      seth2List(response.data);
    })
  }, [])
  useEffect(()=>{
    Axios.get("http://localhost:3001/api/getrs").then((response)=>{
      setrsList(response.data);
    })
  }, [])
  const submitDonors = () => {
    Axios.post('http://localhost:3001/api/insertdonor', {
      D_id: D_id,
      dName: dName,
      sex: sex,
      age: age,
      dreg_date: dreg_date,
      db_grp: db_grp,
      regs_id: regs_id,
      distr_id: distr_id
    }).then(()=>{
      alert("Successfully inserted values");
    });
  };
  const submitDonor_Phone = () => {
    Axios.post('http://localhost:3001/api/insertdp', {
      phone: phone,
      D_idd: D_idd
    }).then(()=>{
      alert("Successfully inserted values");
    });
  };
  const submitDistrict = () => {
    Axios.post('http://localhost:3001/api/insertdis', {
      dis_id: dis_id,
      dis_name: dis_name
    }).then(()=>{
      alert("Successfully inserted values");
    });
  };
  const submitRegistration_Staff = () => {
    Axios.post('http://localhost:3001/api/insertrs', {
      rs_id: rs_id,
      rs_name: rs_name,
      sex2: sex2
    }).then(()=>{
      alert("Successfully inserted values");
    });
  };
  const submitRSEmail = () => {
    Axios.post('http://localhost:3001/api/insertrsemail', {
      email: email,
      password: password,
      rs_idd: Rs_idd
    }).then(()=>{
      alert("Successfully inserted values");
    });
  };
  const submitBlood_Recipient = () => {
    Axios.post('http://localhost:3001/api/insertbr', {
      r_id: r_id,
      sex3: sex3,
      age2: age2,
      r_regdate: r_regdate,
      rName: rName,
      b_qnty: b_qnty,
      rb_grp: rb_grp,
      reg_id: reg_id,
      dist_id: dist_id,
      bpm_id: bpm_id
    }).then(()=>{
      alert("Successfully inserted values");
    });
  };
  const submitBlood_Sample = () => {
    Axios.post('http://localhost:3001/api/insertbs', {
      bs_id: bs_id,
      b_group: b_group,
      sample_no: sample_no,
      status: status,
      drecogn_id: drecogn_id,
      bpma_id: bpma_id
    }).then(()=>{
      alert("Successfully inserted values");
    });
  };
  const submitDisease_Recognizer = () => {
    Axios.post('http://localhost:3001/api/insertdr', {
      drecog_id: drecog_id,
      drecog_name: drecog_name,
      sex4: sex4
    }).then(()=>{
      alert("Successfully inserted values");
    });
  };
  const submitBlood_Processing_Manager = () => {
    Axios.post('http://localhost:3001/api/insertbm', {
      bm_id: bm_id,
      bm_name: bm_name,
      sex5: sex5
    }).then(()=>{
      alert("Successfully inserted values");
    });
  };
  const submitHospital1 = () => {
    Axios.post('http://localhost:3001/api/inserth1', {
      hid: hid,
      hname: hname,
      distri_id: distri_id,
      bbpma_id: bbpma_id
    }).then(()=>{
      alert("Successfully inserted values");
    });
  };
  const submitHospital2 = () => {
    Axios.post('http://localhost:3001/api/inserth2', {
      ho_id: ho_id,
      hb_gp: hb_gp,
      hb_qty: hb_qty
    }).then(()=>{
      alert("Successfully inserted values");
    });
  };
  const deleteDonors = (D_id) => {
    Axios.delete(`http://localhost:3001/api/deleteDonors/${D_id}`)
    };
  const deleteDonor_Phone = (phone) => {
      Axios.delete(`http://localhost:3001/api/deleteDonor_Phone/${phone}`)
      };
  const deleteDistrict = (dis_id) => {
     Axios.delete(`http://localhost:3001/api/deleteDistrict/${dis_id}`)
      };
    const deleters = (rs_id) => {
      Axios.delete(`http://localhost:3001/api/deleters/${rs_id}`)
     };
     const deletebr = (r_id) => {
      Axios.delete(`http://localhost:3001/api/deletebr/${r_id}`)
      }; 
    const deletebs = (bs_id) => {
        Axios.delete(`http://localhost:3001/api/deletebs/${bs_id}`)
      };  
      const deletedr = (drecog_id) => {
        Axios.delete(`http://localhost:3001/api/deletedr/${drecog_id}`)
      }; 
      const deletebpm = (bm_id) => {
        Axios.delete(`http://localhost:3001/api/deletebpm/${bm_id}`)
      };
      const deleteh1 = (h_id) => {
        Axios.delete(`http://localhost:3001/api/deleteh1/${h_id}`)
      };
      const deleteh2 = (ho_id) => {
        Axios.delete(`http://localhost:3001/api/deleteh2/${ho_id}`)
      };
      const updatedName = (donor) => {
        Axios.put("http://localhost:3001/api/updatedName",{
          D_id: donor,
          dName: newdName
        });
        setnewdName("");
      };
  return (
    <div className="App">
      <div id="nav">
      
      <ul>
        <li><a href="#districtdisp">Districts</a></li>
        <li><a href="#donordisp">Donors</a></li>
        <li><a href="#bpmdisp">Blood Processing Managers</a></li>
        <li><a href="#brdisp">Recipients</a></li>
        <li><a href="#bsdisp">Blood Samples</a></li>
        <li><a href="#drdisp">DRs</a></li>
        <li><a href="#h1disp">Hospitals</a></li>
        <li><a href="#h2disp">Requirements</a></li>
        <li><a href="#rsdisp">Registration Staff</a></li>
      </ul>
      </div>
      <div id="container">
        <h2>BLOOD BANK MANAGEMENT SYSTEM</h2>
        <h4>INSERT VALUES IN DATABASE</h4>
      <div className = "form">
        <div id="left">
        <h4>Donors</h4>
        <input type = "text" name="D_id" placeholder="ID" onChange={(e)=>{
          setD_id(e.target.value)
        }}/><br />
        <input type = "text" name="dName" placeholder="Name" onChange={(e)=>{
          setdName(e.target.value)
        }} /><br />
        <input type = "text" name="sex" placeholder="Sex" onChange={(e)=>{
          setsex(e.target.value)
        }} /><br />
        <input type = "text" name="age" placeholder="Age" onChange={(e)=>{
          setage(e.target.value)
        }} /><br />
        <input type = "text" name="dreg_date" placeholder="Date of Reg" onChange={(e)=>{
          setdreg_date(e.target.value)
        }} /><br />
        <input type = "text" name="db_grp" placeholder="Blood Group" onChange={(e)=>{
          setdb_grp(e.target.value)
        }}/><br />
        <input type = "text" name="regs_id" placeholder="Reg Staff ID" onChange={(e)=>{
          setregs_id(e.target.value)
        }}/><br />
        <input type = "text" name="distr_id" placeholder="District ID" onChange={(e)=>{
          setdistr_id(e.target.value)
        }}/><br />
        <button onClick={submitDonors}>Submit</button><br />
        <h4>Donor Phone</h4>
        <input type = "text" name="phone" placeholder="Phone" onChange={(e)=>{
          setphone(e.target.value)
        }}/><br />
        <input type = "text" name="D_idd" placeholder="Donor ID" onChange={(e)=>{
          setD_idd(e.target.value)
        }}/><br />
        <button onClick={submitDonor_Phone}>Submit</button>
        <h4>District</h4>
        <input type = "text" name="dis_id" placeholder="ID" onChange={(e)=>{
          setdis_id(e.target.value)
        }}/><br />
        <input type = "text" name="dis_name" placeholder="Name" onChange={(e)=>{
          setdis_name(e.target.value)
        }}/><br />
        <button onClick={submitDistrict}>Submit</button>
        <h4>Registration Staff</h4>
        <input type = "text" name="rs_id" placeholder="ID" onChange={(e)=>{
          setrs_id(e.target.value)
        }}/><br />
        <input type = "text" name="rs_name" placeholder="Name" onChange={(e)=>{
          setrs_name(e.target.value)
        }}/><br />
        <input type = "text" name="sex2" placeholder="Sex" onChange={(e)=>{
          setsex2(e.target.value)
        }}/><br />
        <button onClick={submitRegistration_Staff}>Submit</button>
        <h4>Reg Staff Email</h4>
        <input type = "text" name="email" placeholder="Email" onChange={(e)=>{
          setemail(e.target.value)
        }}/><br />
        <input type = "text" name="password" placeholder="Password" onChange={(e)=>{
          setpassword(e.target.value)
        }}/><br />
        <input type = "text" name="Rs_idd" placeholder="Staff ID" onChange={(e)=>{
          setRs_idd(e.target.value)
        }}/><br />
        <button onClick={submitRSEmail}>Submit</button>
        <h4>Blood Recipients</h4>
        <input type = "text" name="r_id" placeholder="ID" onChange={(e)=>{
          setr_id(e.target.value)
        }}/><br />
         <input type = "text" name="rName" placeholder="Name" onChange={(e)=>{
          setrName(e.target.value)
        }}/><br />
        <input type = "text" name="sex3" placeholder="Sex" onChange={(e)=>{
          setsex3(e.target.value)
        }}/><br />
        <input type = "text" name="age2" placeholder="Age" onChange={(e)=>{
          setage2(e.target.value)
        }}/><br />
        <input type = "text" name="r_regdate" placeholder="Date of Reg" onChange={(e)=>{
          setr_regdate(e.target.value)
        }}/><br />
        <input type = "text" name="b_qnty" placeholder="Quantity" onChange={(e)=>{
          setb_qnty(e.target.value)
        }}/><br />
        <input type = "text" name="rb_grp" placeholder="Blood Group" onChange={(e)=>{
          setrb_grp(e.target.value)
        }}/><br />
        <input type = "text" name="reg_id" placeholder="Reg Staff ID" onChange={(e)=>{
          setreg_id(e.target.value)
        }}/><br />
        <input type = "text" name="dist_id" placeholder="District ID" onChange={(e)=>{
          setdist_id(e.target.value)
        }}/><br />
        <input type = "text" name="bpm_id" placeholder="BPM ID" onChange={(e)=>{
          setbpm_id(e.target.value)
        }}/><br />
        <button onClick={submitBlood_Recipient}>Submit</button><br />
        </div>
        <div id="right">
        <h4>Blood Samples</h4>
        <input type = "text" name="bs_id" placeholder="ID" onChange={(e)=>{
          setbs_id(e.target.value)
        }}/><br />
        <input type = "text" name="b_group" placeholder="Blood Group" onChange={(e)=>{
          setb_group(e.target.value)
        }}/><br />
        <input type = "text" name="sample_no" placeholder="Sample No" onChange={(e)=>{
          setsample_no(e.target.value)
        }}/><br />
        <input type = "text" name="status" placeholder="Status" onChange={(e)=>{
          setstatus(e.target.value)
        }}/><br />
        <input type = "text" name="drecogn_id" placeholder="DR ID" onChange={(e)=>{
          setdrecogn_id(e.target.value)
        }}/><br />
        <input type = "text" name="bpma_id" placeholder="BPM ID" onChange={(e)=>{
          setbpma_id(e.target.value)
        }}/><br />
        <button onClick={submitBlood_Sample}>Submit</button><br />
        <h4>Disease Recognizers</h4>
        <input type = "text" name="drecog_id" placeholder="ID" onChange={(e)=>{
          setdrecog_id(e.target.value)
        }}/><br />
        <input type = "text" name="drecog_name" placeholder="Name" onChange={(e)=>{
          setdrecog_name(e.target.value)
        }}/><br />
        <input type = "text" name="sex4" placeholder="Sex" onChange={(e)=>{
          setsex4(e.target.value)
        }}/><br />
        <button onClick={submitDisease_Recognizer}>Submit</button><br />
        <h4>Blood Processing Managers</h4>
        <input type = "text" name="bm_id" placeholder="ID" onChange={(e)=>{
          setbm_id(e.target.value)
        }}/><br />
        <input type = "text" name="bm_name" placeholder="Name"
        onChange={(e)=>{
          setbm_name(e.target.value)
        }}/><br />
        <input type = "text" name="sex5" placeholder="Sex" onChange={(e)=>{
          setsex5(e.target.value)
        }}/><br />
        <button onClick={submitBlood_Processing_Manager}>Submit</button><br />
        <h4>Hospitals</h4>
        <input type = "text" name="hid" placeholder="ID" onChange={(e)=>{
          sethid(e.target.value)
        }}/><br />
        <input type = "text" name="hname" placeholder="Name"
        onChange={(e)=>{
          sethname(e.target.value)
        }}/><br />
        <input type = "text" name="distri_id" placeholder="Dist ID" onChange={(e)=>{
          setdistri_id(e.target.value)
        }}/><br />
        <input type = "text" name="bbpma_id" placeholder="BPM ID" onChange={(e)=>{
          setbbpma_id(e.target.value)
        }}/><br />
        <button onClick={submitHospital1}>Submit</button>
        <h4>Requirements</h4>
        <input type = "text" name="ho_id" placeholder="Hosp ID" onChange={(e)=>{
          setho_id(e.target.value)
        }}/><br />
        <input type = "text" name="hb_gp" placeholder="Req Blood Group" onChange={(e)=>{
          sethb_gp(e.target.value)
        }}/><br />
        <input type = "text" name="hb_qty" placeholder="Quantity" onChange={(e)=>{
          sethb_qty(e.target.value)
        }}/><br />
        <button onClick={submitHospital2}>Submit</button><br />
        </div>
        </div>
        </div>
        <h2>VALUES IN DATABASE</h2>
        <section id="donordisp" class="card">
        <h4>DONORS</h4>
        {donorList.map((val)=>{
          return (
          <h5>{val.D_id} | Name: {val.dName} | Sex: {val.sex} | Age: {val.age} | Reg Date: {val.dreg_date} | Blood Gp: {val.db_grp}     <button class="del" onClick={()=>{deleteDonors(val.D_id)}}>Delete</button><br />------------------------------------------------------------------------------------------------------------------------------------</h5>
            )
          })}
        </section>
        <section id="bpmdisp" class="card">
        <h4>BLOOD PROCESSING MANAGERS</h4>
        {bpmList.map((val)=>{
          return <h5>{val.bm_id} | Name: {val.bm_name} | Sex: {val.sex}     <button class="del" onClick={()=>{deletebpm(val.bm_id)}}>Delete</button><br />------------------------------------------------------</h5>
        })}
        </section>
        <section id="brdisp" class="card">
        <h4>BLOOD RECIPIENTS</h4>
        {brList.map((val)=>{
            return <h5>{val.r_id} | Name: {val.rName} | Sex: {val.sex} | Age: {val.age} | RegDate: {val.r_regdate} | Blood Gp: {val.rb_grp}     <button class="del" onClick={()=>{deletebr(val.r_id)}}>Delete</button><br />----------------------------------------------------------------------------------------------------------------------------------</h5>
        })}
        </section>
        <section id="bsdisp" class="card">
        <h4>BLOOD SAMPLES</h4>
        {bsList.map((val)=>{
            return <h5>{val.bs_id} | Group: {val.b_group} | Sample No: {val.sample_no} | Status: {val.status} | DR: {val.drecogn_id} | BPM: {val.bpma_id}     <button class="del" onClick={()=>{deletebs(val.bs_id)}}>Delete</button><br />-----------------------------------------------------------------------------------------------------------</h5>
        })}
        </section>
        <section id="drdisp" class="card">
        <h4>DISEASE RECOGNIZER</h4>
        {drList.map((val)=>{
            return <h5>{val.drecog_id} | Name: {val.drecog_name} | Sex: {val.sex}     <button class="del" onClick={()=>{deletedr(val.drecog_id)}}>Delete</button><br />--------------------------------------------------------</h5>
        })}
        </section>
        <section id="rsdisp" class="card">
        <h4>REGISTRATION STAFF</h4>
        {rsList.map((val)=>{
            return <h5>{val.rs_id} | Name: {val.rs_name} | Sex: {val.sex}     <button class="del" onClick={()=>{deleters(val.rs_id)}}>Delete</button><br />------------------------------------------------------</h5>
        })}
        </section>
        <section id="districtdisp" class="card">
        <h4>DISTRICTS</h4>
        {districtList.map((val)=>{
          return <h5>{val.dis_id} | Name: {val.dis_name}     <button class="del" onClick={()=>{deleteDistrict(val.dis_id)}}>Delete</button><br />------------------------------------------------------</h5>
        })}
        </section>
        <section id="h1disp" class="card">
        <h4>HOSPITALS</h4>
        {h1List.map((val)=>{
            return <h5>{val.hid} | Name: {val.hname} | District: {val.distri_id} | BPM: {val.bbpma_id}     <button class="del" onClick={()=>{deleteh1(val.h_id)}}>Delete</button><br />--------------------------------------------------------------------------------</h5>
        })}
        </section>
        <section id="h2disp" class="card">
        <h4>REQUIREMENTS</h4>
        {h2List.map((val)=>{
            return <h5>Hospital:{val.ho_id} | Blood GP: {val.hb_gp} | Quantity: {val.hb_qty}     <button class="del" onClick={()=>{deleteh2(val.ho_id)}}>Delete</button><br />-----------------------------------------------------------------------</h5>
        })}
        </section>
    </div>
  );
}

export default App;
