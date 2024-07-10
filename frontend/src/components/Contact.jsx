import React, { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

const Contact = () => {
  
  const [name, setName]=useState("")
  const [email, setEmail]=useState("")
  const [message, setMessage]=useState("")
  const [subject, setSubject] = useState("")

  const handleSendMessage = async(e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/api/v1/message/send", {
      name,
      email,
      subject,
      message
    }, {
      withCredentials: true,
      headers: { "Content-Type": "application/json" }
    }).then(res => {
      toast.success(res.data.message)
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }).catch((error) => {
      toast.error(error.response.data.message)
    })
  }
  
  return (
    <>
      <div className="contact container">
        <div className="banner">
          <div className="item">
            <h4>Address</h4>
            <p>Any Where, Any City, 4521</p>
          </div>
          <div className="item">
            <h4>Call Us</h4>
            <p>CALL: +91-232-4563-331</p>
          </div>
          <div className="item">
            <h4>Mail Us</h4>
            <p>chaitanya@gmail.com</p>
          </div>
        </div>
        <div className="banner">
          <div className="item">
            {<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.7194831261954!2d74.20412367462471!3d17.280801105867948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1826995cf1c63%3A0x4d952f1c93a6421c!2sWakhan%20Rd%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1713181540714!5m2!1sen!2sin" width="600" height="450" style={{ border: 0, width: "100%", height: "450px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />}
          </div>
          <div className="item">
            <form onSubmit={handleSendMessage}>
              <h2>CONTACT</h2>
              <div>
                <input
                  type="text"
                  placeholder='Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)} />
                <input
                  type="email"
                  placeholder='E-mail'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
              </div>
              <input
                type="text"
                placeholder='Subject'
                value={subject}
                onChange={(e) => setSubject(e.target.value)} />
              <textarea
                rows={10}
                type="email"
                placeholder='Message'
                value={message}
                onChange={(e) => setMessage(e.target.value)} />
              <button type='submit'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
