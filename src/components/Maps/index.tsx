import React, { memo } from "react";
import { Fade } from "react-awesome-reveal";
import { Wrapper } from "./style";
import GeoMarker from "src/assets/img/GeoMarker.png";
import Address from "./Address";
import { FullscreenControl, Map, Placemark, TypeSelector, YMaps } from "@pbe/react-yandex-maps";

interface Props {}

const Maps: React.FC<Props> = (props) => {
	const position = [41.53693, 60.646318];

	return (
		<Wrapper>
			<Address />
			<Fade direction="right">
				<YMaps>
					<Map width="100%" height="100%" defaultState={{ center: position, zoom: 12 }}>
						<Placemark
							geometry={position}
							options={{
								iconLayout: "default#image",
								iconImageHref: GeoMarker.src,
								iconImageSize: [50, 62],
							}}
						/>
						<FullscreenControl />
						<TypeSelector />
					</Map>
				</YMaps>
			</Fade>
		</Wrapper>
	);
};

export default memo(Maps);
