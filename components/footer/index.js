import CopyrightIcon from '@material-ui/icons/Copyright';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import React from 'react';

export default function Footer() {
  return (
    <div style={{ width: '100%', backgroundColor: '#100007', height: 60, display:'flex', alignItems:'center', justifyContent:'center', position:'relative'}}>
      <div >
        <GitHubIcon style={{ color: '#C9C6C6' }} />
        <TwitterIcon style={{ color: '#C9C6C6' }}/>
        <FacebookIcon style={{ color: '#C9C6C6' }}/>
        <LinkedInIcon style={{ color: '#C9C6C6' }}/>
        <InstagramIcon style={{ color: '#C9C6C6' }}/>
       
      </div>
      <div style={{position: 'absolute', bottom: 0, right: 8 }}>
        
          <h2 style={{color: '#C9C6C6', opacity: '50%', fontSize:15}}><CopyrightIcon style={{color: '#C9C6C6', opacity: '50%', fontSize:15}}/> Vinnie Lopez.</h2>
          </div>
      
    </div>
  );
}
