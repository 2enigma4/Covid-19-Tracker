import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar,Form} from 'react-bootstrap';
import {FormControl, MenuItem, Select, makeStyles, Typography} from "@material-ui/core";
import { useEffect, useState } from 'react';
import {getStateNameByCode, sortData, getDateTime, formatNumbers} from './util.js';
import InfoBox from './InfoBox/InfoBox.js';
import Table from './Table/Table.js';
import axios from 'axios';
import LineGraph from './LineGraph/LineGraph.js';


function App() {
    // all API Data
  const[allStateData, setAllStateData]=useState({});
  //All states with code and name
  const[states, setState]= useState([]);
  //current state code
  const[currentState, setCurrentState] = useState("TT");
  //each state total info
  const[stateCasesInfo, setCasesInfo]= useState([]);
  //each state meta info
  const[stateMetaInfo, setMetaInfo]= useState([]);
  //data displayed by table
  const[tableData, setTableData] = useState([]);
  //Each state districts with keys = district_name 
  const[districts,setDistricts]= useState([]);
  //each state all districts info
  const[districtInfo, setDistrictInfo]= useState([]);

  // Array of all states with name and code//
  const getStatesList = function(data){
    const stateCodes = Object.keys(data);
    const statesName = stateCodes.map((state) => (
      {
        name : getStateNameByCode(state),
        value : state
      }))
      const india = statesName.splice(33,1);
      return statesName;
  }

  const activeCases = function(data,value){
    if(!data[value].total.other)
      return 0;
    else
      return data[value].total.other;
  };

  const getTableData = function(data){
    const tableInfo = states.map((state)=>(
      {
         name : state.name,
         confirm : data[state.value].total.confirmed,
         active: data[state.value].total.confirmed-
                 data[state.value].total.recovered-
                 data[state.value].total.deceased-
                 activeCases(allStateData,state.value),
         recover: data[state.value].total.recovered,
         death: data[state.value].total.deceased,
         tested: data[state.value].total.tested,
         vaccine1: data[state.value].total.vaccinated1,
         vaccine2: data[state.value].total.vaccinated2
      }
     ));
     const sortedTableData = sortData(tableInfo);
     setTableData(sortedTableData);
  }

  const getDistrictData = function(data){
    const tableInfo = districts.map((district)=>(
      {
         name : district,
         confirm : data[district].total.confirmed,
         active: data[district].total.confirmed-
                 data[district].total.recovered-
                 data[district].total.deceased-
                 activeCases(districtInfo,district),
         recover: data[district].total.recovered,
         death: data[district].total.deceased,
         tested: data[district].total.tested,
         vaccine1: data[district].total.vaccinated1,
         vaccine2: data[district].total.vaccinated2,
      }
     ));
     const sortedTableData = sortData(tableInfo);
     setTableData(sortedTableData);
  }

  const getActiveCases = ()=>{
    if(stateCasesInfo.other){
      return stateCasesInfo.confirmed-stateCasesInfo.deceased-stateCasesInfo.recovered-stateCasesInfo.other;
    }
    else{
      return stateCasesInfo.confirmed-stateCasesInfo.deceased-stateCasesInfo.recovered;
    }
  }

useEffect(()=>{
    axios.get(`https://api.covid19india.org/v4/min/data.min.json`)
    .then(response => {
      const data = response.data;
      setAllStateData(data);
      setCasesInfo(data[currentState].total);
      setMetaInfo(data[currentState].meta);
      const statesName = getStatesList(data);
      setState(statesName);
    })
    .catch(err => alert("OOps! Something went wrong."))
  },[])


useEffect(()=>{
  axios.get(`https://api.covid19india.org/v4/min/data.min.json`)
    .then(response => {
        const data = response.data;
        getTableData(data);
    })
    .catch(err => alert("OOps! Something went wrong."))
},[states])

useEffect(()=>{
  setDistricts(Object.keys(districtInfo));
},[districtInfo])


useEffect(()=>{
  getDistrictData(districtInfo);
},[districts])

const onStateChange = async (event) => {
    const stateCode = event.target.value;
    setCurrentState(stateCode);
    setCasesInfo(allStateData[stateCode].total);
    setMetaInfo(allStateData[stateCode].meta);
    if(stateCode!="TT")
      setDistrictInfo(allStateData[stateCode].districts);
    else
      getTableData(allStateData);

  };

  return (
    <div className="App">
      {/* navbar */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Covid-19</Navbar.Brand>
        </Container>
      </Navbar>

      {/* header */}
      <div className="app__header">
        <h1 className="app__headertext">COVID19 INDIA</h1>
      </div>

      <div className="app__container">
        <div className="container__left">
          <div className="left_search">
            <div className="left_header">
              <div>
                <h3 className="app__headertext">{getStateNameByCode(currentState)}</h3>
              </div>
              <div className="app__popheader">
                <h3 className="app__poptext" >Population</h3>
                <h5 className="app__popvalue">{formatNumbers(stateMetaInfo.population)}</h5>
              </div>
            </div>
            <div className="search__text">
                <Typography>search your state</Typography>
            </div>
            <div>
                <FormControl className="app__form">
                <Select onChange={onStateChange} value={currentState} >
                  <MenuItem value="TT">India</MenuItem>
                    {
                      states.map((state)=>(
                      <MenuItem value={state.value}>{state.name}</MenuItem>
                      ))
                    }
                </Select>
                </FormControl>
            </div>
          </div>
          <div className="app__stats">
            <InfoBox title="Confirmed" cases={stateCasesInfo.confirmed}></InfoBox>
            <InfoBox title="Active" cases={getActiveCases()}></InfoBox>
            <InfoBox title="Recovered" cases={stateCasesInfo.recovered}></InfoBox>
            <InfoBox title="Deceased" cases={stateCasesInfo.deceased}></InfoBox>
          </div>
          <div className="app__update">
            <Typography>Last Updated on {getDateTime(stateMetaInfo.last_updated)}</Typography>
            {/* <h6 >Last Updated on {getDateTime(stateMetaInfo.last_updated)}</h6> */}
          </div>
          <div className="app__table">
             <Table casesTable={tableData}></Table>
          </div>
        </div>
        <div className="container__right">
          <div className="app__update">
            <Typography>CASES VISUALIZATIONS</Typography>
          </div>
            <div className="app__charts">
              <LineGraph casetype="confirm"></LineGraph>
              <LineGraph casetype="recover"></LineGraph>
              <LineGraph casetype="death"></LineGraph>
              {/* <LineGraph></LineGraph> */}
            </div>
        </div>
      </div>
    </div>
  );
  
}

export default App;
