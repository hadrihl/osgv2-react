import React from "react";

function Contact() {

    const style = {
        
    }

    return (
        <div className="App-header">
            <form>
                <label>Email</label>
                <input type="email" placeholder="Enter your email address" />

                <label>Message</label>
                <input type="text-area" />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;

