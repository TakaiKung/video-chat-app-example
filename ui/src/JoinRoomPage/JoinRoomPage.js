import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setIsRoomHost } from "../store/actions";
import JoinRoomContent from "./JoinRoomContent";

import './JoinRoomPage.css';
import JoinRoomTitle from "./JoinRoomTitle";

const JoinRoomPage = (props) => {

    const { setIsRoomHostAction, isRoomHost } = props;

    const search = useLocation().search;

    useEffect(() => {
        const isRoomHost = new URLSearchParams(search).get('host'); 
        console.log(search);
        if (isRoomHost) {
            setIsRoomHostAction(true);
        }
    }, []);

    return (
        <div className="join_room_page_container">
            <div className="join_room_page_panel">
                <JoinRoomTitle isRoomHost={ isRoomHost }/>
                <JoinRoomContent />
            </div>
        </div>
    );
};

const mapStoreStateToProps = (state) => {
    return {...state}
}; 

const mapActionsToProps = (dispatch) => {
    return {
        setIsRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost)) 
    };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(JoinRoomPage);