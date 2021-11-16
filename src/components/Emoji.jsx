import React from 'react'

export default function Emoji ({symbol, label}) {
	return(
		<span
				className="emoji"
				role="img"
				aria-label={label ? label : ""}
				aria-hidden={label ? "false" : "true"}
		>
				{symbol}
		</span>
	)
}