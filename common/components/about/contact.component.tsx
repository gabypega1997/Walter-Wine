import Image from "next/image";

const Contact = () => {
    return (
        <div className="md:py-10 xl:py-20 md:text-xl xl:text-2xl">
            <h3 className="text-brown font-bold text-center">Contact us</h3>
            <div className="flex justify-center gap-12 pt-6 pb-12">
                <Image
                    width={35}
                    height={35}
                    alt="phone"
                    src="/images/about/phone.png"
                ></Image>
                <Image
                    width={35}
                    height={35}
                    alt="email"
                    src="/images/about/email.png"
                ></Image>
            </div>
        </div>
    );
};

export default Contact;
