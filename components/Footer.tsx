import React from 'react';

const Footer = () => {
    return (
        <footer>
            <nav>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/policies">Policies</a></li>
                </ul>
            </nav>
            <div>
                <h4>Contact Us:</h4>
                <p>Email: support@medicaltourism.com</p>
                <p>Phone: +1 234 567 890</p>
                <p>Address: 123 Medical Blvd, Health City, HC 12345</p>
            </div>
            <div>
                <p>&copy; {new Date().getFullYear()} Medical Tourism. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;