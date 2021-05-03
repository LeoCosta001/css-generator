import { useSelector } from 'react-redux';
// Models
import { AllAppProperty } from '../../../shared/models/app/all-app-property.model';
import { AllReducerState } from '../../../shared/models/reducers/all-reducer-state.model';
import { TextView } from '../../../shared/models/reducers/text-view.model';
// Utils
import { cssStringToObject } from '../../../shared/utils/css-string-to-object';
// Style
import { useStyles } from "./text-app.style";

export const TextApp = (): JSX.Element => {
    const classes = useStyles();

    // Redux selectors
    const textView: string = useSelector((state: TextView) => state.textView);
    const appPropertyConfig: AllAppProperty[] = useSelector((state: AllReducerState) => [...state.textAppProperty.list]);

    // Methods
    const reactLineStyle = (): Record<string, string> => {
        let style: Record<string, string> = {};

        appPropertyConfig.forEach((appProperty: AllAppProperty) => {
            if (appProperty.isActive) {
                Object.entries(appProperty.propertySettings).forEach((propertySettings: any) => {
                    style = { ...style, ...cssStringToObject(propertySettings[1].syntax) }
                })
            }
        });

        return style;
    }

    return (
        <div className={classes.textApp} style={reactLineStyle()}>
            {textView}
        </div>
    );
};
