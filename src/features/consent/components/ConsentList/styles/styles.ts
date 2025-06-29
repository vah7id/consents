import { ConsentListStyles } from '../types';

const styles: ConsentListStyles = {
    paper: {
        p: 3,
        borderRadius: 2,
        boxShadow: (theme) => theme.shadows[2],
    },
    title: {
        mb: 3,
        fontWeight: 600,
        color: 'text.primary',
    },
    container: {
        maxWidth: 920,
        mx: 'auto',
        py: 2,
    },
};

export default styles;
