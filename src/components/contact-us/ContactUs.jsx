import React from "react";
import {CustomButton} from "../custom-button/CustomButton";
import {useForm} from "@formcarry/react";
import {Link} from "react-router-dom";
import './ContactUs.scss'

export const ContactUs = () => {
    const {state, submit} = useForm({id: "BuPDq4fVANxl"});

    if (state.submitted) {
        return (
            <div className='contact-us'>
                <h2 className='title'>Contact us</h2>
                <div className="text-success">
                    Thank you! We received your message.
                </div>
                <Link to='/'>
                    Go to Homepage
                </Link>
            </div>
        );
    }

    return (
        <div className='contact-us'>
            <h2 className='title'>Contact us</h2>
            <span>Leave us your details and we will contact you as soon as possible.</span>
            <form onSubmit={submit}>
                <div className='group'>
                    <input className='form-input'
                           type="email"
                           name="email"
                           required
                    />
                    <label className='form-input-label'>Email address</label>
                </div>
                <div className='group'>
                    <input className='form-input'
                           type="text"
                           name="text"
                           required
                    />
                    <label className='form-input-label'>Subject</label>
                </div>
                <div className='group'>
                        <textarea className='form-input'
                                  rows="3"
                                  name="message"
                                  required
                        />
                    <label className='form-input-label'>Message</label>
                </div>
                <CustomButton type="submit">Submit</CustomButton>
            </form>
        </div>
    )
}