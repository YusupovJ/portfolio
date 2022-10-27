import { Map, YMaps } from "@pbe/react-yandex-maps";
import React, { memo } from "react";
import { Wrapper } from "./style";

interface Props {}

const Maps: React.FC<Props> = (props) => {
	return (
		<Wrapper>
			<YMaps>
				<Map width="100%" height="100%" defaultState={{ center: [55.75, 37.57], zoom: 9 }}></Map>
			</YMaps>
		</Wrapper>
	);
};

export default memo(Maps);
