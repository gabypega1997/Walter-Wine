const ConfirmationCircle = ({ ...otherProps }) => {
    return (
        <div {...otherProps}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="green"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="rounded-full w-80 h-80"
            >
                <path d="M20 6L9 17l-5-5"></path>
            </svg>
        </div>
    );
};
// style={{
//     clipPath:
//     "polygon(25% 50%, 40% 65%, 75% 30%, 70% 25%, 40% 55%, 30% 45%)",
// }}
export default ConfirmationCircle;
