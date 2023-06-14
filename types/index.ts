import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: String;
    btnType?: "button" | "submit";
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufacturerProps {
    manufacturer: string,
    // Function that Takes manufacturer as string and returns nothing
    setManufacturer: (manufacturer: string) => void;
}