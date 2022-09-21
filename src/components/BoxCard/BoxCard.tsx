import { FC } from "react";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import "./BoxCard.css";
import { useTranslation } from "react-i18next";
import Item from "../Item/Item";

const BoxCard: FC = () => {
	const { t, i18n } = useTranslation();

	return (
		<div>
			<div className="site-card-wrapper">
				<Row gutter={16} justify="center">
					<Col span={8}>
						<Link to="/test-1">
							<Card title={t("Test1")} bordered={false}>
								{t("Layout & Style")}
							</Card>
						</Link>
					</Col>
					<Col span={8}>
						<Card title={t("Test2")} bordered={false}>
							{t("Connect API")}
						</Card>
					</Col>
					<Col span={8}>
						<Card title={t("Test3")} bordered={false}>
							{t("Form & Table")}
						</Card>
					</Col>
				</Row>
			</div>

			<Item />
		</div>
	);
};

export default BoxCard;
