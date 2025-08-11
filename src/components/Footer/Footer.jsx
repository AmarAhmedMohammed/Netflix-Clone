import React from 'react'
import "../../bootstrap.css"
import "./footer.css";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';



function Footer() {
  return (
    <div className='container'>
        <section className='banner-sec-container '>
            <div>
                <ul>
                    <li>Audio Description</li>
                    <li>Investor Relation</li>
                    <li>Legal Notice</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Help Center</li>
                    <li>Jobs</li>
                    <li>Cookie Preference</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Gift Cards</li>
                    <li>Terms Of Use</li>
                    <li>Corporate Information</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Media Center</li>
                    <li>Privacy</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </section>
        <section>
            <ul className='social-media'>
                <li className='facebook'><FacebookOutlinedIcon /></li>
                <li className='instagram'><InstagramIcon /></li>
                <li className='youtube'><YouTubeIcon /></li>
            </ul>
        </section>
    </div>
  )
}

export default Footer