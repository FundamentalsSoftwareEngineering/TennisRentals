import React, { useState } from 'react';
import GalleryItemImage from '../_components/GalleryItemImage';
import Navigation from "../_components/Navigation";
import  ReactModal from 'react-modal';
import {connect} from "react-redux";
import { tennisCourtsActions } from "../_actions/tennisCourts.actions";

const TennisCourtsPage = (props) => {

    const [showModal, setShowModal] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [showError, setShowError] = useState(true);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [selectedCourt, setSelectedCourt] = useState([]);
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
        const { user, tennisCourts, reserve, reservations } = props;
        const handleClose = () => {
            setShowModal(false);
        };
        const handleShow = (item) => {
            setSelectedCourt(item);
            setShowModal(true);
        };
        const handleMonth = (e) => {
            setMonth(e.target.value);
        };
        const handleDay = (e) => {
            setDay(e.target.value);
        };
        const handleYear = (e) => {
            setYear(e.target.value);
        };
        const handleStartTime = (e) => {
            setStartTime(e.target.value);
        };
        const handleEndTime = (e) => {
            setEndTime(e.target.value);
        };

         const handleSuccessMessage = () => {
             console.log(showSuccessMessage);
             setShowSuccessMessage(true);
        };

        const checkAvailability= () => {
            reservations.map(item => {
                if (item.startTime === startTime && item.selectedCourt === selectedCourt.name &&
                 item.day === day && item.month === month && item.year === year
                    ){
                    setShowErrorMessage(true);
                } else {
                    setShowErrorMessage(false);}
            })
        };
        const checkMandatoryFields = () => {
            if( day === '' && month === ''
                && year === '' && startTime === '' && endTime === ''
            ){
                setShowError(true);
            } else setShowError(false);
        };
        console.log('Fields error:', showError);
        console.log('Rent error:', showErrorMessage);

        return (
        <div className="my-3 my-md-5">
            <Navigation user={user}/>
            <div className="container">
                <ReactModal isOpen={showModal}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12" >
                                <button onClick={handleClose} style={{float:'right'}} className="btn btn-secondary">Close</button>
                                <h2>{selectedCourt.name}</h2>
                                <p>{selectedCourt.location}, {selectedCourt.address}</p>
                                <p>{selectedCourt.price}</p>
                                <hr/>
                                {
                                    showErrorMessage &&
                                        <div>
                                    <h3> Not available for selected date-time! </h3>
                                    <img src="https://toppng.com/uploads/preview/red-x-in-circle-x-ico-11563249170jvl0jhe7df.png" alt='check'
                                    style={{width:50}}/>
                                        </div>
                                }
                                {
                                    showError &&
                                    <h3> Please fill in mandatory fields! </h3>
                                }
                                <img src={selectedCourt.imageUrl} style={{width:400}}/>
                                <div className="form-container" style={{width:600, float:'right'}}>
                                    <div className="row" style={{margin:10}}>
                                        <div className="col-sm-2">Day</div>
                                        <div className="col-sm-3">Month</div>
                                        <div className="col-sm-2">Year</div>
                                    </div>
                            <div className="row">
                            <input type="number"  style={{width:50, margin:20}} min="1" max="31" placeholder="day" value={day} onChange={handleDay}/>
                            <select value={month} onChange={handleMonth} style={{width:150, margin:20}}>
                                <option placeholder="month"/>
                                <option value="january">January</option>
                                <option value="february">February</option>
                                <option value="march">March</option>
                                <option value="april">April</option>
                                <option value="may">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="august">August</option>
                                <option value="september">September</option>
                                <option value="october">October</option>
                                <option value="november">November</option>
                                <option value="december">December</option>
                            </select>
                            <input type="number" style={{width:50, margin:20}} placeholder="year" min="2020" max="2025" onChange={handleYear} value={year}/>
                            </div>
                                    <div className="row" style={{margin:10}}>
                                        <div className="col-sm-2">Start Time</div>
                                        <div className="col-sm-3">End Time</div>
                                    </div>
                                    <div className="row" style={{margin:10}}>
                                        <div className="col-sm-2">
                                            <input type="number"  style={{width:50, margin:20}} min="8" max="20" value={startTime} onChange={handleStartTime}/>
                                        </div>
                                        <div className="col-sm-3">
                                            : <input type="number"  style={{width:50, margin:20}} min="8" max="20" value={endTime} onChange={handleEndTime}/>
                                        </div>
                                        <button className="btn btn-primary" style={{float:'right', width:150}} onClick={() => {
                                            checkAvailability();
                                            checkMandatoryFields();
                                        }}>Check availability</button>
                                    </div>

                                    {  showErrorMessage === false && showError === false &&
                                        <div>
                                        <button className="btn btn-primary" style={{float: 'right', width: 100}}
                                                onClick={() => {
                                                    checkMandatoryFields();
                                                    if (showErrorMessage === false && showError === false) {
                                                        props.reserve(user.id, selectedCourt.name, day, month, year, startTime, endTime);
                                                        handleClose();
                                                        handleSuccessMessage();
                                                    }

                                                }}>Rent</button>
                                            <img src="https://cdn4.iconfinder.com/data/icons/materia-flat-arrows-symbols-vol-8/24/018_386_ok_check_done_finished-512.png" alt='check'
                                                 style={{width:50, float: 'right'}}/>
                                        </div>
                                    }
                        </div>
                        </div>
                        </div>

                    </div>
                </ReactModal>
                <div className="page-header">
                    <h1 className="page-title"> Tennis Courts </h1>
                    {
                        showSuccessMessage &&
                            <p> You have successfully rented court { selectedCourt.name }</p>
                    }
                </div>
                <div className="row row-cards">

                    {
                        tennisCourts && tennisCourts.map((item, i) => {

                            return (
                                <div key={i} className="col-sm-6 col-lg-4" style={{marginBottom:20}}>
                                    <div className="card p-3">
                                        <GalleryItemImage imageUrl={item.imageUrl}/>
                                        <div className="px-2">
                                            <div className="col-sm-12">
                                                <div> {item.name} </div>
                                            </div>

                                            <div className="text-muted">

                                                <i className="col-sm-5">Location: </i> {item.address}

                                            </div>
                                            <div className="text-muted">

                                                <i className="col-sm-5">Available: </i> {item.price}
                                            </div>
                                            <button className='btn btn-primary' onClick={() => {
                                                handleShow(item);
                                            }
                                            }
                                            style={{marginLeft:120, marginTop:20}}> Rent
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            )
                        })


                    }

                </div>
            </div>
        </div>
        )
    };


function mapState(state) {
    const { authentication, tennisCourts, reservations } = state;
    const { user } = authentication;
    return { user, tennisCourts, reservations };
}
const mapDispatch = (dispatch) => ({
    reserve: (user, selectedCourt, day, month, year, startTime, endTime) => {dispatch(tennisCourtsActions.reserveAction(user, selectedCourt, day, month, year, startTime, endTime))}
});

const connectedTennisCourtPage = connect(mapState, mapDispatch)(TennisCourtsPage);
export { connectedTennisCourtPage as TennisCourtsPage };

