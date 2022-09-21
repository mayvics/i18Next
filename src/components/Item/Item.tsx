import React, { FC, useState } from "react";

const Item: FC = () => {
	const initialItem = [{}];
	const [boxItem, setBoxItem] = useState(initialItem);
	return <div style={{ marginTop: "10%", textAlign: "center" }}>Item</div>;
};

export default Item;
