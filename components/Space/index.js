export default function Space({ height = 0.75, ...props }) {
	return <div style={{ height: `${height}rem` }} {...props} />;
}
