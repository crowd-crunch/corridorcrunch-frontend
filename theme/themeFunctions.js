export const breakpoints = {
	xsmall: "(max-width: 576px)",
	small: "(min-width: 576px)",
	medium: "(min-width: 768px)",
	large: "(min-width: 992px)",
	xlarge: "(min-width: 1200px)"
};

export const BASELINE_GRID_UNIT = 12;

export const baseline = number => {
	return `${BASELINE_GRID_UNIT * number}px`;
};
