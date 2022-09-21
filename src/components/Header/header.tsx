import { FC } from "react";
import { Col, Row } from "antd";

const Header: FC = () => {
	return (
		<Row>
			<Col offset={22} style={{ marginTop: 20 }}>
				<select>
					<option value="TH">TH</option>
					<option value="EN">EN</option>
				</select>
			</Col>
		</Row>
	);
};

export default Header;
