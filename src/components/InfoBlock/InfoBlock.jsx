import ReactSlick from "components/ReactSlick/ReactSlick"
import { CustomInfoBlock, InfoSubTitle, TextTinfo } from "./InfoBlock.styles"


const InfoBlock = () => {
    return (
        <CustomInfoBlock>
            <InfoSubTitle>CHOOSE LOOKS</InfoSubTitle>
            <ReactSlick />
            <InfoSubTitle>MORE ABOUT US</InfoSubTitle>
            <TextTinfo>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nam sed enim sed libero commodo efficitur. Suspendisse et lorem ac neque dictum pellentesque nec sit amet nisl.
                Fusce rutrum quis purus ut pretium. Vivamus ornare mauris non ligula egestas, accumsan faucibus quam sollicitudin.
                Duis efficitur lorem tellus. Aliquam non rhoncus felis, porttitor consequat quam. Morbi gravida semper mattis.
                Nunc ultrices justo in pulvinar convallis. Curabitur dapibus ut tellus eu condimentum. Morbi vitae convallis purus, ac finibus ipsum.
            </TextTinfo>
            <TextTinfo> Suspendisse nec pharetra turpis.
                Aenean id nunc id orci aliquam pulvinar eget vitae nisl. In ligula neque, vestibulum vel arcu eu, eleifend vestibulum tortor.
                Duis facilisis, est et aliquam dapibus, urna mauris sagittis mi, et mattis metus magna vel tellus.
                Phasellus sit amet volutpat ante, ut condimentum lorem. Quisque auctor sollicitudin dui, vitae egestas nunc suscipit et. Nullam eu quam sem.
                Donec a nibh molestie, aliquam libero maximus, feugiat velit. Curabitur ac accumsan velit. In hac habitasse platea dictumst.
            </TextTinfo>
        </CustomInfoBlock>
    )
}

export default InfoBlock