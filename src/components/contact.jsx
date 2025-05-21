import { MdEmail } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';
import './ContactBar.css';

function Contact() {
  return (
    <div className="contact-bar">
      <div className="contact-info">
        <div className="contact-item">
          <MdEmail className="icon" />
          <a href="mailto:snappy@yahoo.com" className="contact-link">
            snappy@yahoo.com
          </a>
        </div>
        <div className="separator">|</div>
        <div className="contact-item">
          <FiPhoneCall className="icon" />
          <span>9987656543</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
