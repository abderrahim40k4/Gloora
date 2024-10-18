interface titleProps {
    content: string;
    text?: boolean;
    desc?: string;
}

const Titles = ({ content, text, desc }: titleProps) => {
    return (
        <div className="w-full text-center inline-flex flex-col justify-center h-10 my-6 ">
            <h1 className="font-Neue text-2xl text-baseColor">
                {content}
            </h1>
            {
                text ? <p className="md:text-2xl text-lg font-Averia font-medium my-6">{desc}</p> : ""
            }
        </div>
    )
}

export default Titles