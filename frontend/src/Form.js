import React, { useState, useEffect } from "react";

const Form = (props) => {
    const [phone, setPhone] = useState("");
    const [nonce, setNonce] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("/api/message")
            .then(res => res.json())
            .then(data => console.log(data));
    }, [])

    const handdleSubmit = (e) => {
        e.preventDefault();
        var phoneNum = e.target.phone.value;
        var nonceNum = e.target.nonce.value;
        fetch("/api/message", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ phone: phoneNum, nonce: nonceNum })
        })
            .then(res => res.json())
            .then(data => {
                console.log(`data come back ${JSON.stringify(data)}`)
                if (data.authenticated != undefined) {
                    if (data.authenticated) setMessage("you are authenticated");
                    else setMessage("incorrect 6-digit code")
                }
                if (data.message != undefined) setMessage(data.message);
                
            })
            .catch(err => console.error(err));
    }

    return (
        <form onSubmit={(e) => handdleSubmit(e)}>
            <label htmlFor="phone">
                phone
            <input
                    id="phone"
                    value={phone}
                    placeholder="phone"
                    onChange={(e) => setPhone(e.target.value)}
                />
            </label>

            <label htmlFor="nonce">
                nonce
            <input
                    id="nonce"
                    value={nonce}
                    placeholder="nonce"
                    onChange={(e) => setNonce(e.target.value)}
                />

            </label>
            <p>{message}</p>
            <button>submit</button>
        </form>
    )
}


export default Form;