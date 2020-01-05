import React, { useState } from 'react';
import { tennisCourts } from '../_data/tennisCourts';
import GalleryItemImage from '../_components/GalleryItemImage';
import Navigation from "../_components/Navigation";
import  ReactModal from 'react-modal';
import {connect} from "react-redux";


class TennisCourtsPage extends React.Component {

    render() {
        const showModal = false;
        const { user, users } = this.props;
        const handleClose = () => {
            return showModal === false;
        };
        const handleShow = () => {
            return showModal === true;
        };
        console.log('showModal:', showModal);
        // const [show, setShow] = useState(false);
        // const [selectedCourt, setSelectedCourt] = useState(null);
        // console.log('props:', props);
        // const handleSelectedCourt = (name) => setSelectedCourt(name);
        // const handleClose = () => setShow(false);
        // const handleShow = () => setShow(true);
        return (
        <div className="my-3 my-md-5">
            <Navigation user={user}/>
            <div className="container">
                <ReactModal isOpen={showModal} ariaHideApp={false}>
                    <div className="container">
                        <div className="row">
                            you want
                        </div>
                        <button onClick={handleClose}>Close Modal</button>
                    </div>
                </ReactModal>
                <div className="page-header">
                    <h1 className="page-title"> Tennis Courts </h1>
                </div>
                <div className="row row-cards">

                    {
                        tennisCourts.map((item, i) => {

                            return (
                                <div key={i} className="col-sm-6 col-lg-4">
                                    <div className="card p-3">
                                        <GalleryItemImage imageUrl={item.imageUrl}/>
                                        <div className="px-2">
                                            <div className="col-sm-5">
                                                <div> {item.name} </div>
                                            </div>

                                            <div className="text-muted">

                                                <i className="col-sm-3">Location: </i> {item.address}

                                            </div>
                                            <div className="text-muted">

                                                <i className="col-sm-3">Available: </i> {item.available}
                                            </div>
                                            <button onClick={() => {
                                                // handleSelectedCourt(item.name);
                                                handleShow();
                                            }}> Rent
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
    }
}


function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}


const connectedTennisCourtPage = connect(mapState)(TennisCourtsPage);
export { connectedTennisCourtPage as TennisCourtsPage };

