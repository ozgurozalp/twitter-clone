export default function Ellipsis({ className = '', ...props }) {
	return (
		<svg viewBox='0 0 24 24' className={`fill-current text-twitter-white ${className}`} {...props}>
			<g>
				<circle cx='5' cy='12' r='2' />
				<circle cx='12' cy='12' r='2' />
				<circle cx='19' cy='12' r='2' />
			</g>
		</svg>
	);
}
