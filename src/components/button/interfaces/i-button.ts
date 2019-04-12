interface IButton {
    onClick: () => void;
    qaTarget: string;
    text: string;
    typeStr: "button" | "submit" | "reset";
}

export { IButton };
