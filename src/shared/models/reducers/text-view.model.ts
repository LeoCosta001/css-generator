import { Action } from 'redux';

export interface TextViewAction extends Action {
    type: 'TEXT_VIEW_UPDATE';
    textView: string;
}
