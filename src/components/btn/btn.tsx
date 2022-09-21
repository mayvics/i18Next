import { FC, useState } from "react";
import { Card, Col, Row, Button } from "antd";
import left from "../../images/left.png";
import right from "../../images/right.png";
import up from "../../images/up.png";
import down from "../../images/down.png";
import "./btn.css";

const BTN: FC = () => {
	const {} = useState();
	return (
		<Row justify="center" gutter={6}>
			<Col style={{ position: "relative" }}>
				<Button style={{ width: 300, height: 120 }}>
					<img src={left} alt="" />
				</Button>

				<div
					style={{
						bottom: -10,
						position: "absolute",
						backgroundColor: "#8bca84",
						left: "35%",
						borderRadius: 10,
						padding: 2,
					}}
				>
					Move Shape
				</div>
			</Col>

			<Col>
				<Button
					style={{
						width: 400,
						height: 120,
						display: "flex",
						justifyContent: "space-around",
						alignItems: "center",
					}}
				>
					<img src={down} alt="" />
					<img src={up} alt="" />
				</Button>
				<div
					style={{
						bottom: -10,
						position: "absolute",
						backgroundColor: "#8bca84",
						left: "40%",
						borderRadius: 10,
						padding: 2,
					}}
				>
					Move Shape
				</div>
			</Col>
			<Col>
				<Button style={{ width: 300, height: 120 }}>
					<img src={right} alt="" />
				</Button>
				<div
					style={{
						bottom: -10,
						position: "absolute",
						backgroundColor: "#8bca84",
						left: "35%",
						borderRadius: 10,
						padding: 2,
					}}
				>
					Move Shape
				</div>
			</Col>
		</Row>
	);
};

export default BTN;
