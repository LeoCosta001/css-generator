import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

export const FallbackErrorBoundary = (): JSX.Element => {
    return (
        <Dialog
            open
            onClose={() => window.location.reload()}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Infelizmente ocorreu um erro inesperado"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Por favor, recarregue a página e começar novamente!
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => window.location.reload()} color="primary">
                    Recarregar
                </Button>
            </DialogActions>
        </Dialog>
    );
};
