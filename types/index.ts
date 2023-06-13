import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: String;
    btnType?: "button" | "submit";
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}