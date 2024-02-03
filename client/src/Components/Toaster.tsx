import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export type severity = 'success' | 'error';

interface IProps {
    message: string;
    severity: severity;
    onClose?: () => void;
    open: boolean;
    setOpen: (open: boolean) => void
}

const Toaster = ({ message, onClose, setOpen, open, severity }: IProps) => {


    const handleClose = () => {
        setOpen(false);
        if (onClose) {
            onClose();
        }
    };

    return (
        <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
            <SnackbarContent
                style={{ backgroundColor: severity === 'success' ? '#43A047' : '#D32F2F' }}
                message={message}
                action={
                    <IconButton size="small" color="inherit" onClick={handleClose}>
                        <CloseIcon fontSize={"small"} />
                    </IconButton>
                }
            />
        </Snackbar>
    );
};

export default Toaster;
