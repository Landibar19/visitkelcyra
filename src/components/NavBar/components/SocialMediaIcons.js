import React from 'react';
import { Stack } from '@mui/material';
import { FacebookRounded } from '@mui/icons-material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TikTokIcon from './Tik-Tok';
import { Link } from 'react-router-dom';

export default function SocialMediaIcons() {
  return (
    <Stack direction="row" spacing={2} pt={3} >
    <Link to="https://www.facebook.com" style={{color:'white'}}>
      <FacebookRounded/>
    </Link>
    <Link to="https://www.instagram.com" style={{color:'white'}}>
      <InstagramIcon/>
      </Link>
      <Link to="https://www.youtube.com" style={{color:'white'}}>
      <YouTubeIcon/>
      </Link>
      <Link to="https://www.tiktok.com" style={{color:'white'}}>
      <TikTokIcon/>
      </Link>
    </Stack>
  );
}