// Material-ui
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button
} from '@material-ui/core';

// Interfaces
interface GenericDialogProps {
    isOpen: boolean;
    title: string;
    text: string;
    onConfirm: () => void
    onClose: () => void
}

export const GenericDialog = (props: GenericDialogProps): JSX.Element => {
    // Methods
    const onConfirm = () => {
        props.onConfirm();
        props.onClose();
    };

    return (
        <Dialog
            open={props.isOpen}
            onClose={props.onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">{props.text}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose} color="primary">
                    Cancelar
                </Button>
                <Button onClick={onConfirm} color="primary" autoFocus>
                    Confirmar
                </Button>
            </DialogActions>
        </Dialog>
    );
};
