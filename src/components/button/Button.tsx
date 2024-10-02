import { ReactNode, ButtonHTMLAttributes } from "react";

interface CustomButtonProps {
    text?: string;          
    w?: string;             
    h?: string;             
    b?: string;             
    br?: string;            
    bgColor?: string;       
    color?: string;         
    margin?: string;        
    padding?: string;       
    fontSize?: string;      
    children?: ReactNode;   
}

type ButtonComponentProps = CustomButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonComponent: React.FC<ButtonComponentProps> = ( props, {children} ) => {
    const styledButton = {
        width: props.w,
        height: props.h,
        border: props.b,
        borderRadius: props.br,
        margin: props.margin,
        padding: props.padding,
        backgroundColor: props.bgColor,
        color: props.color,
        fontSize: props.fontSize,
        cursor: 'pointer',   
        display: 'flex',     
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <button style={styledButton} >
            {children || props.text}  
        </button>
    );
};
