import React from 'react';
import { IconButton, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  borderRadius: '50%',
  backgroundColor: "none",
  color: "#959595",
  border: "1px solid #959595",
  padding: 8,
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  transition: 'background-color 0.3s, transform 0.2s',

  // '&:hover': {
  //   backgroundColor: theme.palette.primary.main,
  //   color: theme.palette.common.white,
  //   transform: 'scale(1.1)',
  // },
}));

export default function SocialButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <SocialIconButton
        component="a"
        href="https://github.com/calvarezberrios"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <GitHubIcon />
      </SocialIconButton>

      <SocialIconButton
        component="a"
        href="https://linkedin.com/in/calvarezberrios"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <LinkedInIcon />
      </SocialIconButton>
    </Stack>
  );
}
