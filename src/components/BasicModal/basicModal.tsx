import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface BasicModalProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  title?: string;
  body?: JSX.Element;
  actions?: JSX.Element;
}

const BasicModal: React.FC<BasicModalProps> = ({
  title,
  body,
  setOpen,
  open,
  actions,
  children,
}) => {
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="filter-dialog-title"
        aria-describedby="filter-dialog-description">
        {title ? <DialogTitle id="filter-dialog-title">{title}</DialogTitle> : null}
        <DialogContent>
          {body ? (
            <DialogContentText id="filter-dialog-description">{body}</DialogContentText>
          ) : null}
          {children}
        </DialogContent>
        {actions ? <DialogActions>{actions}</DialogActions> : null}
      </Dialog>
    </div>
  );
};

export default BasicModal;
