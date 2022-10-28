import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import React, { memo } from "react";
import { Fade } from "react-awesome-reveal";
import { Wrapper } from "./style";
import GeoMarker from "src/assets/img/GeoMarker.png";

interface Props {}

const Maps: React.FC<Props> = (props) => {
	const position = [41.53693, 60.646318];

	console.log(GeoMarker.src);

	return (
		<Wrapper>
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
					</Map>
				</YMaps>
			</Fade>
		</Wrapper>
	);
};

export default memo(Maps);
