import { store } from '../store';
// Models
import { TextViewAction } from '../../shared/models/reducers/text-view.model';

export const actionTextView = {
    update: (textView: string) => {
        const textViewAction: TextViewAction = { type: 'TEXT_VIEW_UPDATE', textView };
        store.dispatch(textViewAction);
    }
};
