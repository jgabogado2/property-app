import Infobox from "./Infobox";

const InfoBoxes = () => {
    return (
        <section>
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                    <Infobox heading= "For Renters" buttonInfo={{
                        text: 'Browse Properties',
                        link: '/properties',
                        backgroundColor: 'bg-black'
                    }}>
                        This is for Renters
                    </Infobox>
                    <Infobox heading= "For Property Owners" backgroundColor ="bg-blue-100" buttonInfo={{
                        text: 'Add Property',
                        link: '/properties/add',
                        backgroundColor: 'bg-blue-500'
                    }}>
                        This is for Property Owners
                    </Infobox>
                </div>
            </div>
        </section>
    );
};

export default InfoBoxes;
