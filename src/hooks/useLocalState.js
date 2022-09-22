import { useEffect, useMemo, useState } from "react";

function useLocalState(key, initialValue = null) {
	const [value, setValue] = useState(JSON.parse(localStorage.getItem(key)) || initialValue);

	useEffect(() => {
		const localValue = JSON.parse(localStorage.getItem(key));
		if (localValue) {
			setValue(localValue);
		}
	}, [key, setValue]);

	useMemo(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
}

export default useLocalState;
