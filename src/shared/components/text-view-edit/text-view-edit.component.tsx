import { useSelector } from 'react-redux';
import { loremIpsum } from 'react-lorem-ipsum';
// Actions
import { actionTextView } from '../../../store-config/actions/text-view.actions';
// Material-ui
import {
    Box,
    Button,
    TextField,
} from '@material-ui/core';

export const TextViewEdit = (): JSX.Element => {

    // Redux selectors
    const textView: string = useSelector((state: any) => {
        return state.textView
    });

    // Methods
    const updateTextView = (newText: string) => {
        actionTextView.update(newText)
    }

    return (
        <>
            <TextField
                fullWidth
                value={textView}
                variant="outlined"
                onChange={(event) => updateTextView(event.target.value)}
            />
            <Box mt={2} display="flex" justifyContent="flex-end">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => updateTextView(loremIpsum({
                        p: 1,
                        random: true,
                        startWithLoremIpsum: false,
                        avgWordsPerSentence: 8,
                        avgSentencesPerParagraph: 2
                    })[0])}
                >
                    Gerar texto aleatório
                </Button>
            </Box>
        </>
    );
};
