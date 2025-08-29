'use client';
import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    EmailShareButton,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
    EmailIcon,
    FacebookMessengerShareButton
} from 'react-share'

const ShareButtons = ({ property }) => {
    const propertyId = property?._id;
    const typeTag = property?.type ? property.type.replace(/\s/g, '') : 'Property';
    const name = property?.name ?? 'Property Listing';
    const baseUrl = process.env.NEXT_PUBLIC_DOMAIN || '';
    const shareUrl = propertyId ? `${baseUrl}/properties/${propertyId}` : baseUrl;

    if (!propertyId) return null;

    return (
        <>
            <h3 className="text-xl font-bold text-center pt-2">
                Share This Property
                <div className='flex gap-3 justify-center pb-5'>
                    <FacebookShareButton
                        url={shareUrl}
                        quote={name}
                        hashtag={`#${typeTag}ForRent`}
                    >
                        <FacebookIcon size={40} round={true} />
                    </FacebookShareButton>

                    <TwitterShareButton
                        url={shareUrl}
                        title={name}
                        hashtags={[`${typeTag}ForRent`]}
                    >
                        <TwitterIcon size={40} round={true} />
                    </TwitterShareButton>

                    <WhatsappShareButton
                        url={shareUrl}
                        title={name}
                        separator=':: '
                    > 
                        <WhatsappIcon size={40} round={true} />
                    </WhatsappShareButton>

                    <EmailShareButton
                        url={shareUrl}
                        subject={name}
                        body={`Check out this property listing: ${shareUrl}`}
                    >
                        <EmailIcon size={40} round={true} />
                    </EmailShareButton>
                </div>
            </h3>
        </>
    );
}


export default ShareButtons;