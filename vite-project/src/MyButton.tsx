
type Props = {
    alertMsg: () => void;
    title: string;
};

function MyButton({alertMsg, title}: Props) {
  return <button
    onClick={alertMsg}>
    {title}
    </button>;
    
}

export default MyButton;