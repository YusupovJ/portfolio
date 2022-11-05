import React, { memo } from "react";
import { Fade } from "react-awesome-reveal";
import { Content, Wrapper } from "./style";

interface PropTypes {}

const Address: React.FC<PropTypes> = (props) => {
	return (
		<Wrapper>
			<Fade direction="up" delay={1000}>
				<Content>
					Yusupov Jamshid, Uzbekistan, Khorezm, house 13, Khonka street <br /> <br />
					<span>@</span>: jamshudanamana@gmail.com
				</Content>
			</Fade>
		</Wrapper>
	);
};

export default memo(Address);
