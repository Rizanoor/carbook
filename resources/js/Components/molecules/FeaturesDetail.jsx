import React from "react";

export default function FeaturesDetail() {
    return (
        <>
            <div className="row">
                <div className="col-md-4">
                    <ul className="features">
                        <li className="check">
                            <span className="ion-ios-checkmark"></span>
                            Airconditions
                        </li>
                        <li className="check">
                            <span className="ion-ios-checkmark"></span>
                            Child Seat
                        </li>
                        <li className="check">
                            <span className="ion-ios-checkmark"></span>
                            GPS
                        </li>
                        <li className="check">
                            <span className="ion-ios-checkmark"></span>
                            Luggage
                        </li>
                        <li className="check">
                            <span className="ion-ios-checkmark"></span>
                            Music
                        </li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <ul className="features">
                        <li className="check">
                            <span className="ion-ios-checkmark"></span>
                            Seat Belt
                        </li>
                        <li className="remove">
                            <span className="ion-ios-close"></span>
                            Sleeping Bed
                        </li>
                        <li className="check">
                            <span className="ion-ios-checkmark"></span>
                            Water
                        </li>
                        <li className="check">
                            <span className="ion-ios-checkmark"></span>
                            Bluetooth
                        </li>
                        <li className="remove">
                            <span className="ion-ios-close"></span>
                            Onboard computer
                        </li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <ul className="features">
                        <li className="check">
                            <span className="ion-ios-checkmark"></span>
                            Audio input
                        </li>
                        <li className="check">
                            <span className="ion-ios-checkmark"></span>
                            Long Term Trips
                        </li>
                        <li className="check">
                            <span className="ion-ios-checkmark"></span>
                            Car Kit
                        </li>
                        <li className="check">
                            <span className="ion-ios-checkmark"></span>
                            Remote central locking
                        </li>
                        <li className="check">
                            <span className="ion-ios-checkmark"></span>
                            Climate control
                        </li>
                    </ul>
                </div>
            </div>{" "}
        </>
    );
}
