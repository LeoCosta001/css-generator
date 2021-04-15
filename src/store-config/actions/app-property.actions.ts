export const toggleAppProperty = (propertyName: string) => {
    return {
        type: 'TOGGLE_APP_PROPERTY',
        data: {
            propertyName
        }
    };
};
