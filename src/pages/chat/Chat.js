import Chatroom from './Chatroom';
import But from '../../components/common/Button';
import { Button, Container, useTheme, Box } from '@mui/material';

function Chat() {
  const theme = useTheme();
  return (
    <Container>
      <Box display="flex" justifyContent={'center'}>
        <But />
      </Box>
    </Container>
  );
}
export default Chat;
