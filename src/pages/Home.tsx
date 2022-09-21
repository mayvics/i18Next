import React, { FC } from "react";
import { useParams } from "react-router";
import { useTranslation } from "react-i18next";
import Header from "../components/Header/header";
import BoxCard from "../components/BoxCard/BoxCard";
import i18next from "i18next";

const Home: FC = () => {
	// let { lang } = useParams();
	// const { t, i18n } = useTranslation();
	// i18n.changeLanguage(lang);

	return (
		<div>
			<Header />
			<BoxCard />;
		</div>
	);
};
export default Home;
