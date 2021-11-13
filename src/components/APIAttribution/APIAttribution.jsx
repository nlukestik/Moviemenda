import React from "react"
import { isMobile } from "../../utils"
import { ReactComponent as TMDBLogoDesk } from "../../statics/tmdblogo.svg"
import { ReactComponent as TMDBLogoMobile } from "../../statics/tmdblogoalt.svg"
import "./APIAttribution.scss"

export default function APIAttribution() {
	return(
		<div className="root">
			<div className="attribution">
				<div className="attribution__logo">
					{isMobile(769) ? 
						<TMDBLogoMobile />
						:
						<TMDBLogoDesk />
					}
				</div>
				<p className="attribution__notice">
					This product uses the TMDB API but is not endorsed or certified by TMDB.
				</p>
			</div>
		</div>
	)
};
