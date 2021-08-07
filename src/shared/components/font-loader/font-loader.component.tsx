// Components
import GoogleFontLoader from 'react-google-font-loader';

export const FontLoader = (): JSX.Element => {
    return (
        <GoogleFontLoader
            fonts={[
                {
                    font: 'Roboto',
                    weights: [200, 300, 400, 600, 700]
                },
                {
                    font: 'Great Vibes',
                    weights: [200, 300, 400, 600, 700]
                },
                {
                    font: 'Merienda',
                    weights: [200, 300, 400, 600, 700]
                },
                {
                    font: 'Architects Daughter',
                    weights: [200, 300, 400, 600, 700]
                },
                {
                    font: 'Sacramento',
                    weights: [200, 300, 400, 600, 700]
                },
                {
                    font: 'Parisienne',
                    weights: [200, 300, 400, 600, 700]
                }
            ]}
            subsets={['cyrillic-ext', 'greek']}
        />
    );
};
