interface IButton {
    onClick: () => void;
    qaTarget: String;
    text: String;
    typeStr: "button" | "submit" | "reset";
}

export { IButton };
