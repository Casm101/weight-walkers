// Import styles
import './styles.scss';

// Define header props
interface HeaderProps {
    title: string
}

// Declare header component
export const Header = ({
    title
}: HeaderProps) => {

    return (
        <header className='header-styled'>
            <h1>{title}</h1>
        </header>
    );
};