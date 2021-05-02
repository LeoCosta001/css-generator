// Models
import { TextViewAction } from "../../shared/models/reducers/text-view.model";

// Initial state
const INITIAL_STATE: string = 'Lorem ipsum';

// Reducer
export default function reducer(state: string = INITIAL_STATE, action: TextViewAction): string {
    switch (action.type) {
        case 'TEXT_VIEW_UPDATE':
            return action.textView;

        default:
            return state;
    }
}
