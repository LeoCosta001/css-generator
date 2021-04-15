import { Action } from 'redux';

const INITIAL_STATE = {
    selected: {},
    list: [
        { name: 'Cor', property: 'color', isActive: false },
        { name: 'Familia', property: 'font-family', isActive: false },
        { name: 'Tamanho', property: 'font-size', isActive: false },
        { name: 'Alongamento', property: 'font-stretch', isActive: false },
        { name: 'Estilo', property: 'font-style', isActive: false },
        { name: 'Variante', property: 'font-variant', isActive: false },
        { name: 'Espessura', property: 'font-weight', isActive: false },
        { name: 'Espaço entre letras', property: 'letter-spacing', isActive: false },
        { name: 'Sombra', property: 'text-shadow', isActive: false },
        { name: 'Espaço entre palavras', property: 'word-spacing', isActive: false }
    ]
};

export default function reducer(state: any = INITIAL_STATE, action: Action<any>) {
    switch (action.type) {
        case 'TOGGLE_APP_PROPERTY':
            const toggleAppProperty = state.list.map((item: any) => {
                // @ts-ignore
                if (item.property === action.data.propertyName) {
                    return {
                        ...item,
                        isActive: !item.isActive
                    };
                }

                return item;
            });

            return {
                ...state,
                list: toggleAppProperty
            };
        default:
            return state;
    }
}
