// @mui
import Box from '@mui/material/Box';
import { Divider, IconButton, Stack } from '@mui/material';
// auth
import { useAuthContext } from '../../auth/useAuthContext';
// components
import Iconify from '../../components/iconify';
import { ReactComponent as GoogleIcon } from '../../assets/icons/google-icon.svg';

// ----------------------------------------------------------------------

export default function AuthWithSocial() {
  const { loginWithGoogle, loginWithGithub, loginWithTwitter } = useAuthContext();

  const handleGoogleLogin = async () => {
    try {
      if (loginWithGoogle) {
        loginWithGoogle();
      }
      console.log('GOOGLE LOGIN');
    } catch (error) {
      console.error(error);
    }
  };

  const handleGithubLogin = async () => {
    try {
      if (loginWithGithub) {
        loginWithGithub();
      }
      console.log('GITHUB LOGIN');
    } catch (error) {
      console.error(error);
    }
  };

  const handleTwitterLogin = async () => {
    try {
      if (loginWithTwitter) {
        loginWithTwitter();
      }
      console.log('TWITTER LOGIN');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Divider
        sx={{
          my: 2.5,
          typography: 'overline',
          color: 'text.disabled',
          '&::before, ::after': {
            borderTopStyle: 'dashed',
          },
        }}
      >
        OR
      </Divider>

      <Stack direction="row" justifyContent="center" spacing={2}>
        <IconButton onClick={handleGoogleLogin}>
        <GoogleIcon/>
        </IconButton>

        {/* <IconButton color="inherit" onClick={handleGithubLogin}>
          <Iconify icon="eva:github-fill" />
        </IconButton> */}

        {/* <IconButton onClick={handleTwitterLogin}>
          <Iconify icon="eva:twitter-fill" color="#1C9CEA" />
        </IconButton> */}
      </Stack>
    </div>
  );
}
