// Import styles
import './styles.scss';

// Define input props
interface InputProps {
    label?: string,
    placeholder?: string,
    type?: 'text' | 'number'
}

// Declare input component
export const Input = ({
    label,
    placeholder,
    type = 'text'
}: InputProps) => {

    return (
        <div className="input-styled">
            {label && <label htmlFor={label}>{label}</label>}
            <input className='input-styled'
                placeholder={placeholder}
                name={label}
                type={type}
            />
        </div>
    );
};